'use client';

import { useState, useEffect } from 'react';
import { codes } from '@/lib/data';
import { Ticket, Lock, Unlock, Copy, Check } from 'lucide-react';
import Link from 'next/link';
import ContentLockerPopup from '@/components/ui/ContentLockerPopup';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function CodesPreview() {
  const activeCodes = codes.filter(c => c.status === 'active').slice(0, 3);
  
  const [unlockedCodes, setUnlockedCodes] = useState<Record<string, boolean>>({});
  const [selectedCode, setSelectedCode] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Check cookies on load
  useEffect(() => {
    if (typeof document !== 'undefined') {
      activeCodes.forEach(code => {
        const isUnlocked = document.cookie.includes(`code_unlocked_${code.code}=true`);
        if (isUnlocked) {
          setUnlockedCodes(prev => ({ ...prev, [code.code]: true }));
        }
      });
    }
  }, [activeCodes]);

  // Mask code: show only first character, rest as X
  const maskCode = (fullCode: string) => {
    if (!fullCode) return 'XXXXXXX';
    const firstChar = fullCode[0];
    const maskedLength = fullCode.length - 1;
    return firstChar + 'X'.repeat(maskedLength);
  };

  // Handle copy/unlock click
  const handleCodeAction = (code: string) => {
    const isUnlocked = unlockedCodes[code];
    
    if (isUnlocked) {
      // Copy full code
      navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    } else {
      // Show content locker
      setSelectedCode(code);
      setShowPopup(true);
    }
  };

  // Handle offer completion
  const handleCompleteOffer = () => {
    if (selectedCode) {
      // Unlock this code
      setUnlockedCodes(prev => ({ ...prev, [selectedCode]: true }));
      
      // Save to cookie for 24 hours
      if (typeof document !== 'undefined') {
        const expires = new Date();
        expires.setTime(expires.getTime() + (24 * 60 * 60 * 1000));
        document.cookie = `code_unlocked_${selectedCode}=true;expires=${expires.toUTCString()};path=/`;
      }
      
      setShowPopup(false);
      setSelectedCode(null);
    }
  };

  return (
    <>
      <section className="py-24 bg-surface z-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/robloxcodes/1920/1080')] opacity-[0.04] bg-cover bg-center mix-blend-screen" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Ticket className="w-5 h-5 text-golden" />
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">Latest Promo Codes</h2>
              </div>
              <p className="text-slate-400 max-w-2xl">Use these limited-time codes to claim free keys, gems, and exclusive cosmetics in Roblox Rivals.</p>
            </div>
            <Link href="/codes" className="shrink-0 inline-flex items-center justify-center px-6 py-3 bg-white/5 hover:bg-white/10 text-white text-sm font-medium rounded-none border border-white/10 transition-colors">
              View All Codes
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeCodes.map((codeItem, i) => {
              const isUnlocked = unlockedCodes[codeItem.code];
              const displayCode = isUnlocked ? codeItem.code : maskCode(codeItem.code);
              const codeLength = codeItem.code.length;
              
              return (
                <AnimatedSection key={codeItem.code} delay={i * 0.1}>
                  <div className="glass-card p-6 flex flex-col shadow-lg border-t-2 border-t-dark-pink h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-dark-pink mb-1">Reward</div>
                        <div className="text-xl font-bold text-white">{codeItem.reward}</div>
                      </div>
                      <div className="px-3 py-1 bg-dark-pink/10 border border-dark-pink/30 text-dark-pink text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                        Active
                      </div>
                    </div>
                    
                    <div className="mt-auto pt-6 border-t border-white/5">
                      <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-3 font-bold">Promo Code</div>
                      
                      {/* Code Display */}
                      <div className="flex items-center justify-between gap-2 bg-black/40 border border-white/10 p-3 mb-3">
                        <span className="font-mono text-sm sm:text-base font-bold tracking-wider text-white">
                          {displayCode}
                        </span>
                        {!isUnlocked && <Lock className="w-3 h-3 text-yellow-500 shrink-0" />}
                        {isUnlocked && <Unlock className="w-3 h-3 text-green-500 shrink-0" />}
                      </div>
                      
                      {/* Action Button */}
                      <button
                        onClick={() => handleCodeAction(codeItem.code)}
                        className={`w-full px-4 py-3 font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 text-sm ${
                          isUnlocked 
                            ? 'bg-emerald-500 text-black hover:bg-emerald-400' 
                            : 'bg-dark-pink text-white hover:bg-white hover:text-black'
                        }`}
                      >
                        {isUnlocked ? (
                          <>
                            {copiedCode === codeItem.code ? (
                              <Check className="w-4 h-4" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                            {copiedCode === codeItem.code ? 'COPIED!' : 'COPY FULL CODE'}
                          </>
                        ) : (
                          <>
                            <Lock className="w-4 h-4" />
                            UNLOCK & COPY
                          </>
                        )}
                      </button>
                      
                      {/* Info Text */}
                      {!isUnlocked && (
                        <p className="text-[9px] text-slate-500 text-center mt-2">
                          Complete 1 offer to reveal & copy {codeLength}-character code
                        </p>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content Locker Popup */}
      <ContentLockerPopup 
        isOpen={showPopup}
        onClose={() => {
          setShowPopup(false);
          setSelectedCode(null);
        }}
        onComplete={handleCompleteOffer}
      />
    </>
  );
}