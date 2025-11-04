import { useEffect } from "react";

// Configure your Meta Pixel ID here
const META_PIXEL_ID = "YOUR_PIXEL_ID_HERE";

const MetaPixel = () => {
  useEffect(() => {
    // Only load if Pixel ID is configured
    if (META_PIXEL_ID === "YOUR_PIXEL_ID_HERE") {
      console.warn("Meta Pixel ID not configured. Please update META_PIXEL_ID in src/components/MetaPixel.tsx");
      return;
    }

    // Load Meta Pixel script
    (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function() {
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

    // Initialize Pixel
    (window as any).fbq('init', META_PIXEL_ID);
    
    // Track PageView
    (window as any).fbq('track', 'PageView');
    
    // Track Lead event
    (window as any).fbq('track', 'Lead');
  }, []);

  return null;
};

export default MetaPixel;
