// Meta Pixel - utilities for Facebook Pixel tracking
// Pixel ID: Guia-definição-4x

export const META_PIXEL_ID = '2709975456040876';

// TypeScript declarations for the global fbq function injected by the Pixel
declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    _fbq: unknown;
  }
}

/**
 * Initializes the Meta Pixel by injecting the official script.
 * Should be called once on app mount. Automatically fires PageView.
 */
export function initMetaPixel(): void {
  if (typeof window === 'undefined') return;
  if (window.fbq) return; // Already initialized

  // Standard Meta Pixel base code (from Meta's official docs)
  /* eslint-disable */
  // @ts-ignore
  (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */

  window.fbq('init', META_PIXEL_ID);
  window.fbq('track', 'PageView');
}

/**
 * Track a standard Meta event (e.g., InitiateCheckout, ViewContent, Purchase).
 * Reference: https://developers.facebook.com/docs/meta-pixel/reference
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>,
): void {
  if (typeof window === 'undefined' || !window.fbq) return;
  if (params) {
    window.fbq('track', eventName, params);
  } else {
    window.fbq('track', eventName);
  }
}

/**
 * Track a custom (non-standard) Meta event.
 * Use for events like Scroll_50, FAQ_Open, VSL_Play.
 */
export function trackCustomEvent(
  eventName: string,
  params?: Record<string, unknown>,
): void {
  if (typeof window === 'undefined' || !window.fbq) return;
  if (params) {
    window.fbq('trackCustom', eventName, params);
  } else {
    window.fbq('trackCustom', eventName);
  }
}
