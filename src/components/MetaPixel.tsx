import { useEffect } from 'react';
import { initMetaPixel, META_PIXEL_ID } from '../lib/metaPixel';

/**
 * Mounts the Meta Pixel on app load and fires the initial PageView.
 * Must be rendered once at the root of the app (LandingPage).
 *
 * Includes a <noscript> fallback image pixel for users with JS disabled.
 */
export function MetaPixel() {
  useEffect(() => {
    initMetaPixel();
  }, []);

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
}
