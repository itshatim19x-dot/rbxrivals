'use client';

import { useState, useEffect } from 'react';
import { Copy, Lock } from 'lucide-react';
import clsx from 'clsx';
import ContentLockerPopup from './ContentLockerPopup';

export default function ContentLockerCodeButton({ rawCode }: { rawCode: string }) {
  const [showPopup, setShowPopup] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Check if user has unlocked in the last 24h
    if (typeof document !== 'undefined') {
      const isUnlocked = document.cookie.includes('content_unlocked=true');
      if (isUnlocked) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setUnlocked(true);
      }
    }
  }, []);

  const handleCopyClick = () => {
    if (unlocked) {
      navigator.clipboard.writeText(rawCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      setShowPopup(true);
    }
  };

  const visibleCharsCount = Math.min(rawCode.length <= 5 ? 2 : 4, rawCode.length);
  const maskedCode = unlocked ? rawCode : rawCode.substring(0, visibleCharsCount) + rawCode.substring(visibleCharsCount).replace(/./g, 'x');

  const handleCompleteOffer = () => {
    setUnlocked(true);
    setShowPopup(false);
    
    // Set cookie for 24 hours
    if (typeof document !== 'undefined') {
      const expires = new Date();
      expires.setTime(expires.getTime() + (24 * 60 * 60 * 1000));
      document.cookie = `content_unlocked=true;expires=${expires.toUTCString()};path=/`;
    }

    navigator.clipboard.writeText(rawCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="relative group w-full flex flex-col sm:flex-row gap-3">
        <div className="flex-1 bg-canvas border border-white/10 px-4 py-3 font-mono text-lg text-white tracking-[0.2em] flex items-center justify-center font-bold relative overflow-hidden backdrop-blur-md">
          <div className="absolute inset-0 pattern-squares opacity-30 mix-blend-screen" />
          <span className="relative z-10">{maskedCode}</span>
          {!unlocked && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-50">
              <Lock className="w-4 h-4 text-golden" />
            </div>
          )}
        </div>
        
        <button 
          onClick={handleCopyClick}
          className={clsx(
            "sm:w-auto px-6 py-3 font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all text-sm",
            unlocked 
              ? copied 
                ? "bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.5)]" 
                : "bg-lightning-blue text-black hover:bg-white shadow-[0_0_15px_rgba(0,240,255,0.4)]"
              : "bg-dark-pink text-white hover:bg-white hover:text-black shadow-[0_0_15px_rgba(255,0,127,0.4)]"
          )}
        >
          {unlocked ? (
            copied ? (
              <span>Copied!</span>
            ) : (
              <>
                <Copy className="w-4 h-4" /> Copy Code
              </>
            )
          ) : (
            <>
              <Lock className="w-4 h-4" /> Unlock Code
            </>
          )}
        </button>
      </div>

      <ContentLockerPopup 
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        onComplete={handleCompleteOffer}
      />
    </>
  );
}
