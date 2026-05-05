import { useEffect, useRef } from 'react';
import { trackCustomEvent } from '../lib/metaPixel';

/**
 * Tracks Panda Video player engagement via postMessage events.
 *
 * Fires the following custom events (each only ONCE per session):
 * - VSL_Play       → user started playback
 * - VSL_Pause      → user paused (signal of hesitation/distraction)
 * - VSL_25         → reached 25% of video (initial curiosity passed intro)
 * - VSL_50         → reached 50% (engagement — absorbing message)
 * - VSL_75         → reached 75% (warm lead — saw most of pitch)
 * - VSL_Complete   → reached 95%+ (hot lead — saw full offer)
 *
 * --- Panda Video message structure (verified from production console) ---
 *
 * panda_play:
 *   { message: 'panda_play', video: '...' }
 *
 * panda_pause:
 *   { message: 'panda_pause', video: '...' }
 *
 * panda_timeupdate (fires frequently, no duration):
 *   { message: 'panda_timeupdate', video: '...', currentTime: 88.359 }
 *
 * panda_allData (fires alongside timeupdate, includes full state):
 *   { message: 'panda_allData', video: '...', playerData: {
 *       currentTime: 88.106, duration: 757.533, paused: false, ...
 *     } }
 */
export function useVSLPlay(): void {
  // Track which events have already fired (1x per session each)
  const firedEvents = useRef<Set<string>>(new Set());

  // Cache video duration once known (it doesn't change during playback)
  const durationRef = useRef<number | null>(null);

  useEffect(() => {
    /**
     * Fires a tracking event only the first time it occurs in this session.
     */
    function fireOnce(eventName: string, params?: Record<string, unknown>) {
      if (firedEvents.current.has(eventName)) return;
      firedEvents.current.add(eventName);
      trackCustomEvent(eventName, { source: 'panda_video', ...params });
    }

    /**
     * Given current and total seconds, fires the appropriate milestone event
     * if the percentage threshold has just been crossed.
     */
    function checkProgressMilestones(currentTime: number, duration: number) {
      if (!duration || duration <= 0) return;
      const percent = (currentTime / duration) * 100;

      // Order matters: check higher milestones first so a user who scrubs
      // ahead still triggers the relevant tier (e.g., scrubbed to 80% fires VSL_75).
      if (percent >= 95) fireOnce('VSL_Complete', { percent: 95 });
      if (percent >= 75) fireOnce('VSL_75', { percent: 75 });
      if (percent >= 50) fireOnce('VSL_50', { percent: 50 });
      if (percent >= 25) fireOnce('VSL_25', { percent: 25 });
    }

    function handleMessage(event: MessageEvent) {
      // Only listen to messages from Panda Video player domain
      const origin = event.origin || '';
      if (!origin.includes('pandavideo.com.br')) return;

      const data = event.data;
      if (!data || typeof data !== 'object') return;

      const message = (data as { message?: string }).message;
      if (!message) return;

      // --- PLAY event ---
      if (message === 'panda_play') {
        fireOnce('VSL_Play');
        return;
      }

      // --- PAUSE event ---
      if (message === 'panda_pause') {
        fireOnce('VSL_Pause');
        return;
      }

      // --- ENDED event (Complete fallback) ---
      if (message === 'panda_ended' || message === 'panda_video_ended') {
        fireOnce('VSL_Complete', { percent: 100 });
        return;
      }

      // --- panda_allData: source of duration + currentTime ---
      // Structure: { message: 'panda_allData', playerData: { currentTime, duration, ... } }
      if (message === 'panda_allData') {
        const playerData = (data as { playerData?: Record<string, unknown> })
          .playerData;
        if (!playerData) return;

        const duration = playerData.duration as number | undefined;
        const currentTime = playerData.currentTime as number | undefined;

        // Cache duration the first time we see a valid value
        if (
          typeof duration === 'number' &&
          duration > 0 &&
          durationRef.current === null
        ) {
          durationRef.current = duration;
        }

        if (
          typeof currentTime === 'number' &&
          durationRef.current &&
          durationRef.current > 0
        ) {
          checkProgressMilestones(currentTime, durationRef.current);
        }
        return;
      }

      // --- panda_timeupdate: lightweight progress, uses cached duration ---
      // Structure: { message: 'panda_timeupdate', currentTime: 88.359 }
      if (message === 'panda_timeupdate') {
        const currentTime = (data as { currentTime?: number }).currentTime;
        if (
          typeof currentTime === 'number' &&
          durationRef.current &&
          durationRef.current > 0
        ) {
          checkProgressMilestones(currentTime, durationRef.current);
        }
        return;
      }
    }

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);
}
