'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Gift, Timer, ExternalLink, ClipboardList, Smartphone, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContentLockerPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

function fetchOffersJSONP(): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const callbackName = 'jsonp_callback_offers_' + Math.round(100000 * Math.random());
    
    (window as any)[callbackName] = function(data: any) {
      delete (window as any)[callbackName];
      if (script.parentNode) {
        document.body.removeChild(script);
      }
      resolve(data);
    };

    const script = document.createElement('script');
    script.src = `https://de6jvomfbm0af.cloudfront.net/public/offers/feed.php?user_id=431718&api_key=debf7e507c020456e1966116d44d1967&s1=&s2=&callback=${callbackName}`;
    script.onerror = function() {
      delete (window as any)[callbackName];
      if (script.parentNode) {
        document.body.removeChild(script);
      }
      reject(new Error('JSONP callback failed'));
    };
    document.body.appendChild(script);
  });
}

function checkLeadsJSONP(): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const callbackName = 'jsonp_callback_leads_' + Math.round(100000 * Math.random());
    
    (window as any)[callbackName] = function(data: any) {
      delete (window as any)[callbackName];
      if (script.parentNode) {
        document.body.removeChild(script);
      }
      resolve(data);
    };

    const script = document.createElement('script');
    script.src = `https://de6jvomfbm0af.cloudfront.net/public/external/check2.php?testing=0&callback=${callbackName}`;
    script.onerror = function() {
      delete (window as any)[callbackName];
      if (script.parentNode) {
        document.body.removeChild(script);
      }
      reject(new Error('JSONP callback failed'));
    };
    document.body.appendChild(script);
  });
}

export default function ContentLockerPopup({ isOpen, onClose, onComplete }: ContentLockerPopupProps) {
  const [timeLeft, setTimeLeft] = useState(10 * 60);
  const [mounted, setMounted] = useState(false);
  const [offers, setOffers] = useState<any[]>([]);
  const [isLoadingOffers, setIsLoadingOffers] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isOpen && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (!isOpen && timeLeft !== 10 * 60) {
      // Reset timer when closed so it's fresh next time
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTimeLeft(10 * 60);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isOpen, timeLeft]);

  useEffect(() => {
    let checkInterval: NodeJS.Timeout;

    if (isOpen && mounted) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsLoadingOffers(true);
      fetchOffersJSONP()
        .then(data => {
          if (Array.isArray(data)) {
            setOffers(data.slice(0, 2));
          }
          setIsLoadingOffers(false);
        })
        .catch(err => {
          console.error('Failed to fetch offers:', err);
          setIsLoadingOffers(false);
        });

      checkInterval = setInterval(() => {
        checkLeadsJSONP()
          .then(leads => {
            if (leads && leads.length > 0) {
              onComplete();
            }
          })
          .catch(err => console.error('Failed to check leads:', err));
      }, 15000);
    }

    return () => {
      if (checkInterval) {
        clearInterval(checkInterval);
      }
    };
  }, [isOpen, mounted, onComplete]);

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec.toString().padStart(2, '0')}`;
  };

  const getOfferIcon = (index: number) => {
    return index % 2 === 0 ? <Smartphone className="w-6 h-6 text-lightning-blue" /> : <ClipboardList className="w-6 h-6 text-dark-pink" />;
  };

  const fallbackOffers = [
    {
      id: 1,
      name: "Complete a quick survey",
      icon: <ClipboardList className="w-6 h-6 text-lightning-blue" />,
      tag: "Fast",
      url: "#"
    },
    {
      id: 2,
      name: "Download and run app",
      icon: <Smartphone className="w-6 h-6 text-dark-pink" />,
      tag: "Best Value",
      url: "#"
    }
  ];

  if (!mounted) return null;

  const popupContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0A0A0F]/80 backdrop-blur-sm pointer-events-auto"
            onClick={onClose}
          />
          
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-[95vw] sm:w-full max-w-lg bg-surface border-2 border-dark-pink p-4 sm:p-8 flex flex-col items-center shadow-[0_0_50px_rgba(255,0,127,0.3)] max-h-[90vh] overflow-y-auto pointer-events-auto"
          >
            <div className="absolute inset-0 pattern-squares opacity-10 pointer-events-none" />
            
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-dark-pink to-lightning-blue rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-[0_0_20px_rgba(255,0,127,0.5)] animate-pulse relative z-10 shrink-0">
              <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>

            <h3 className="text-xl sm:text-3xl font-display font-bold text-white mb-2 text-center relative z-10">
              Unlock Your Reward
            </h3>
            <p className="text-sm sm:text-base text-slate-400 text-center mb-6 sm:mb-8 relative z-10">
              Complete one of the free offers below to verify you are human and unlock your promo code instantly.
            </p>

            <div className="w-full bg-black/50 border border-white/5 p-3 sm:p-4 flex items-center justify-between mb-6 sm:mb-8 relative z-10">
              <div className="flex items-center gap-2 sm:gap-3">
                <Timer className="w-4 h-4 sm:w-5 sm:h-5 text-dark-pink" />
                <span className="text-sm sm:text-base text-slate-300 font-bold">Time Remaining</span>
              </div>
              <span className="font-mono text-lg sm:text-xl font-bold text-white">
                {formatTime(timeLeft)}
              </span>
            </div>

            <div className="w-full space-y-3 mb-4 sm:mb-6 relative z-10">
              {isLoadingOffers ? (
                <div className="flex justify-center p-8">
                  <Loader2 className="w-8 h-8 text-dark-pink animate-spin" />
                </div>
              ) : offers.length > 0 ? (
                offers.slice(0, 2).map((offer, index) => (
                  <button
                    key={offer.offer_id || index}
                    onClick={() => {
                        window.open(offer.url, '_blank');
                    }}
                    className="w-full flex items-center justify-between p-3 sm:p-4 border border-white/10 hover:border-lightning-blue bg-canvas hover:bg-lightning-blue/5 transition-all group text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 pointer-events-none min-w-0 pr-2">
                      <div className="shrink-0">
                        {getOfferIcon(index)}
                      </div>
                      <span className="font-bold text-slate-200 group-hover:text-white line-clamp-2 sm:line-clamp-1 text-sm sm:text-base break-words">{offer.anchor}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0 pointer-events-none">
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white px-1.5 sm:px-2 py-1 max-w-[60px] sm:max-w-[80px] truncate" title={offer.conversion}>
                        {offer.conversion || 'Free'}
                      </span>
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-slate-500 group-hover:text-lightning-blue hidden sm:block" />
                    </div>
                  </button>
                ))
              ) : (
                fallbackOffers.slice(0, 2).map(offer => (
                   <button
                    key={offer.id}
                    onClick={() => {
                        window.open(offer.url, '_blank');
                    }}
                    className="w-full flex items-center justify-between p-3 sm:p-4 border border-white/10 hover:border-lightning-blue bg-canvas hover:bg-lightning-blue/5 transition-all group text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 pointer-events-none min-w-0 pr-2">
                      <div className="shrink-0">
                        {offer.icon}
                      </div>
                      <span className="font-bold text-slate-200 group-hover:text-white line-clamp-2 sm:line-clamp-1 text-sm sm:text-base break-words">{offer.name}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0 pointer-events-none">
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white px-1.5 sm:px-2 py-1 max-w-[60px] sm:max-w-[80px] truncate">
                        {offer.tag}
                      </span>
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-slate-500 group-hover:text-lightning-blue hidden sm:block" />
                    </div>
                  </button>
                ))
              )}
            </div>
            
            <div className="w-full text-center relative z-10">
              <p className="text-xs text-slate-500 mb-4">
                By completing an offer, the content will be automatically unlocked. Please wait up to a few minutes after completion.
              </p>
              <button 
                onClick={onClose}
                className="mt-2 text-sm text-slate-400 hover:text-white underline decoration-white/30 hover:decoration-white transition-colors relative z-50 cursor-pointer p-2"
                type="button"
              >
                Cancel and close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return typeof document !== 'undefined' ? createPortal(popupContent, document.body) : null;
}
