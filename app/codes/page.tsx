'use client';

import { useState, useEffect } from 'react';
import { codes } from '@/lib/data';
import { Ticket, Copy, Lock, Unlock, Check, ChevronDown, ChevronUp, Flame, Star, Zap, Clock } from 'lucide-react';
import ContentLockerPopup from '@/components/ui/ContentLockerPopup';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function CodesPage() {
  const allActiveCodes = codes.filter(c => c.status === 'active');
  const expiredCodes = codes.filter(c => c.status === 'expired');
  const [showAllCodes, setShowAllCodes] = useState(false);
  const displayedCodes = showAllCodes ? allActiveCodes : allActiveCodes.slice(0, 5);
  
  const [unlockedCodes, setUnlockedCodes] = useState<Record<string, boolean>>({});
  const [selectedCode, setSelectedCode] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slider images
  const sliderImages = [
    {
      url: "/img/codes/image_5.jpg",
      title: "Exclusive Skins"
    },
    {
      url: "/img/codes/image_4.jpg",
      title: "Valentine Rewards"
    },
    {
      url: "/img/codes/image_3.jpg",
      title: "Free Keys"
    },
    {
      url: "/img/codes/image_2.jpg",
      title: "Success Redeem Code"
    },
    {
      url: "/img/codes/image_1.jpg",
      title: "Golden Rewards"
    },
  ];

  // Auto slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  // Check cookies on load
  useEffect(() => {
    if (typeof document !== 'undefined') {
      allActiveCodes.forEach(code => {
        const isUnlocked = document.cookie.includes(`code_unlocked_${code.code}=true`);
        if (isUnlocked) {
          setUnlockedCodes(prev => ({ ...prev, [code.code]: true }));
        }
      });
    }
  }, [allActiveCodes]);

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
      navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    } else {
      setSelectedCode(code);
      setShowPopup(true);
    }
  };

  // Handle offer completion
  const handleCompleteOffer = () => {
    if (selectedCode) {
      setUnlockedCodes(prev => ({ ...prev, [selectedCode]: true }));
      
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
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 pattern-squares opacity-10 pointer-events-none" />
        
        {/* Hero Section */}
        <AnimatedSection className="text-center mb-16 relative z-10">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-[0_0_15px_rgba(255,0,127,0.4)]">
            Roblox Rivals <span className="text-dark-pink">Codes</span>
          </h1>
          <p className="text-lg text-slate-400">Claim these active promo codes for free keys and exclusive rewards.</p>
        </AnimatedSection>

        {/* Active Codes Section */}
        <div className="mb-16 relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-lightning-blue/10 border border-lightning-blue/30">
               <Ticket className="w-6 h-6 text-lightning-blue glow-blue" />
            </div>
            <h2 className="text-2xl font-display font-bold text-white">Active Codes</h2>
          </div>
          
          <div className="grid gap-8">
            {displayedCodes.map((codeItem, i) => {
              const isUnlocked = unlockedCodes[codeItem.code];
              const displayCode = isUnlocked ? codeItem.code : maskCode(codeItem.code);
              const codeLength = codeItem.code.length;
              const isHotCode = i === 0 || i === 1;
              
              return (
                <AnimatedSection key={codeItem.code} delay={i * 0.1}>
                  <div className="relative">
                    {/* HOT / POPULAR Badge - Above the card */}
                    {isHotCode && (
                      <div className="absolute -top-3 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-red-600 to-dark-pink text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-lg rounded-md">
                        {i === 0 ? (
                          <>
                            <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                            <span>HOTTEST CODE</span>
                          </>
                        ) : (
                          <>
                            <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                            <span>POPULAR CODE</span>
                          </>
                        )}
                      </div>
                    )}
                    
                    {/* Card Content */}
                    <div className={`glass-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-l-4 ${
                      isHotCode ? 'border-l-red-500' : 'border-l-lightning-blue'
                    } ${isHotCode ? 'pt-8' : ''}`}>
                      <div className="flex-1">
                        <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Reward</div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{codeItem.reward}</h3>
                        <p className="text-sm text-lightning-blue font-medium uppercase tracking-wider">Verified Working</p>
                        <div className="mt-2 text-xs text-slate-500 font-mono">
                          {codeLength} characters
                        </div>
                      </div>
                      
                      <div className="shrink-0 max-w-md w-full sm:w-auto flex-1">
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center justify-between gap-3 bg-black/40 border border-white/10 p-3 rounded">
                            <span className="font-mono text-base sm:text-xl font-bold tracking-wider text-white truncate">
                              {displayCode}
                            </span>
                            {!isUnlocked && <Lock className="w-4 h-4 text-yellow-500 shrink-0" />}
                            {isUnlocked && <Unlock className="w-4 h-4 text-green-500 shrink-0" />}
                          </div>
                          
                          <button
                            onClick={() => handleCodeAction(codeItem.code)}
                            className={`px-3 sm:px-4 py-2 sm:py-3 font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 rounded text-sm sm:text-base ${
                              isUnlocked 
                                ? 'bg-emerald-500 text-black hover:bg-emerald-400' 
                                : isHotCode
                                ? 'bg-gradient-to-r from-red-600 to-dark-pink text-white hover:from-red-500 hover:to-dark-pink'
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
                          
                          {!isUnlocked && (
                            <p className="text-[10px] text-slate-500 text-center">
                              Complete 1 offer to reveal & copy full {codeLength}-character code
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
          
          {/* Show More / Show Less Button */}
          {allActiveCodes.length > 5 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAllCodes(!showAllCodes)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium uppercase tracking-wider transition-colors text-sm"
              >
                {showAllCodes ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    Show Less Codes
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    Show More Codes ({allActiveCodes.length - 5} more)
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Generator Promotion Section */}
        <AnimatedSection className="mb-16 relative z-10">
          <div className="p-6 sm:p-8 bg-gradient-to-r from-lightning-blue/10 to-dark-pink/10 border-2 border-lightning-blue/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-lightning-blue/20 blur-[50px] pointer-events-none" />
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">Need a fresh working code?</h3>
                <p className="text-sm text-slate-300 max-w-xl">Try our exclusive code generator to get a brand new, unused promo code for Roblox Rivals.</p>
              </div>
              <a href="/generator" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-lightning-blue text-black font-bold uppercase tracking-wider hover:bg-white transition-colors shadow-[0_0_15px_rgba(0,240,255,0.3)] gap-2 shrink-0 text-sm sm:text-base">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                Generate Working Code
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Auto Slider Section */}
        <AnimatedSection className="mb-16 relative z-10">
          <div className="relative overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {sliderImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-48 sm:h-64 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-6">
                    <span className="text-white font-bold text-xl sm:text-2xl">{image.title}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index ? 'w-4 bg-lightning-blue' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* How to Use Codes Section */}
        <AnimatedSection className="mb-16 relative z-10">
          <div className="glass-card p-6 sm:p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">How to Use Roblox Rivals Codes</h2>
              <p className="text-slate-400 text-sm">Follow these simple steps to claim your rewards</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-lightning-blue/20 rounded-full flex items-center justify-center mb-3 border border-lightning-blue/30">
                  <span className="text-lightning-blue font-bold text-lg">1</span>
                </div>
                <h3 className="text-white font-bold text-sm mb-1">Copy Code</h3>
                <p className="text-xs text-slate-400">Click UNLOCK & COPY to get your code</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-lightning-blue/20 rounded-full flex items-center justify-center mb-3 border border-lightning-blue/30">
                  <span className="text-lightning-blue font-bold text-lg">2</span>
                </div>
                <h3 className="text-white font-bold text-sm mb-1">Open Roblox Rivals</h3>
                <p className="text-xs text-slate-400">Launch the game on any device</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-lightning-blue/20 rounded-full flex items-center justify-center mb-3 border border-lightning-blue/30">
                  <span className="text-lightning-blue font-bold text-lg">3</span>
                </div>
                <h3 className="text-white font-bold text-sm mb-1">Find Code Redemption</h3>
                <p className="text-xs text-slate-400">Go to shop or settings menu</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-lightning-blue/20 rounded-full flex items-center justify-center mb-3 border border-lightning-blue/30">
                  <span className="text-lightning-blue font-bold text-lg">4</span>
                </div>
                <h3 className="text-white font-bold text-sm mb-1">Paste & Claim</h3>
                <p className="text-xs text-slate-400">Enter code and get rewards instantly</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Expired Codes Section */}
        <AnimatedSection className="mb-16 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Clock className="w-5 h-5 text-slate-500" />
            <h2 className="text-xl font-display font-bold text-slate-500">Expired Codes</h2>
          </div>
          
          <div className="grid gap-4">
            {expiredCodes.map(codeItem => (
              <div key={codeItem.code} className="bg-surface/30 rounded-none p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-white/5 opacity-60 grayscale">
                <div>
                  <h3 className="text-xl font-bold text-slate-400 mb-1">{codeItem.reward}</h3>
                  <p className="text-sm text-slate-600 uppercase tracking-wider font-bold">Expired</p>
                </div>
                <div className="px-6 py-3 bg-black/40 border border-white/10 text-slate-500 font-mono tracking-widest text-center line-through">
                  {codeItem.code}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* SEO Content Section */}
        <AnimatedSection className="relative z-10">
          <div className="glass-card p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4 text-center">
              Best <span className="text-lightning-blue">Roblox Rivals Codes</span> for Free Rewards
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Looking for the latest and most reliable <strong className="text-lightning-blue">Roblox Rivals codes</strong>? You've come to the right place! 
              We provide daily updates of working <strong className="text-lightning-blue">Roblox Rivals promo codes</strong> that give you free keys, exclusive skins, 
              and premium rewards. Our team tests each <strong className="text-lightning-blue">Roblox Rivals code</strong> before publishing to ensure 100% success rate.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              The <strong className="text-lightning-blue">Roblox Rivals codes</strong> listed above are verified working today. Don't miss out on these limited-time 
              offers! New <strong className="text-lightning-blue">Roblox Rivals gift codes</strong> are added regularly, so bookmark this page and check back daily 
              for the freshest <strong className="text-lightning-blue">Roblox Rivals redeem codes</strong>.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
              <div className="bg-white/5 p-3 text-center">
                <div className="text-lightning-blue font-bold text-sm">Daily Updates</div>
              </div>
              <div className="bg-white/5 p-3 text-center">
                <div className="text-lightning-blue font-bold text-sm">100% Working</div>
              </div>
              <div className="bg-white/5 p-3 text-center">
                <div className="text-lightning-blue font-bold text-sm">Instant Rewards</div>
              </div>
              <div className="bg-white/5 p-3 text-center">
                <div className="text-lightning-blue font-bold text-sm">Free to Use</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

      </div>

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