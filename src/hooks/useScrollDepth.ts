import { useEffect, useRef } from 'react';
import { trackCustomEvent } from '../lib/metaPixel';

/**
 * Fires a 'Scroll_50' custom event the first time the user scrolls
 * past 50% of the page. Fires only once per page load.
 */
export function useScrollDepth(): void {
  const fired = useRef(false);

  useEffect(() => {
    function handleScroll() {
      if (fired.current) return;

      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight <= 0) return;

      const percent = (scrollTop / docHeight) * 100;

      if (percent >= 50) {
        fired.current = true;
        trackCustomEvent('Scroll_50', { percent: 50 });
        window.removeEventListener('scroll', handleScroll);
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}
