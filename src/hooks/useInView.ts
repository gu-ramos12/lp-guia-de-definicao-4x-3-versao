import { useEffect, useRef, type RefObject } from 'react';

/**
 * Fires `onEnter` the first time the referenced element becomes visible
 * in the viewport. Uses IntersectionObserver. Fires only once.
 *
 * @param onEnter Callback to invoke when element first enters view.
 * @param threshold Percent of element that must be visible (0..1). Default 0.3.
 */
export function useInView<T extends HTMLElement = HTMLElement>(
  onEnter: () => void,
  threshold = 0.3,
): RefObject<T | null> {
  const ref = useRef<T>(null);
  const fired = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || fired.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          onEnter();
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [onEnter, threshold]);

  return ref;
}
