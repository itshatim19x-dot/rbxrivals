'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function ClientAdComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="mt-10 space-y-4">
        <div className="w-full bg-white/5 border border-white/10 rounded-lg flex flex-col items-center justify-center text-slate-500 text-sm p-8">
          <div className="text-center text-xs text-slate-500">Loading advertisement...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10 space-y-4">
      <div className="w-full bg-white/5 border border-white/10 rounded-lg flex flex-col items-center justify-center text-slate-500 text-sm p-8">
        <Script 
          id="adsterra-options"
          strategy="afterInteractive"
        >
          {`
            window.atOptions = {
              'key' : '80851bf3cbcb333b69434b59b60041bb',
              'format' : 'iframe',
              'height' : 250,
              'width' : 300,
              'params' : {}
            };
          `}
        </Script>
        <Script 
          src="https://dessertaskingfund.com/80851bf3cbcb333b69434b59b60041bb/invoke.js"
          strategy="afterInteractive"
        />
        <div className="text-center text-xs text-slate-500">Advertisement</div>
      </div>
    </div>
  );
}