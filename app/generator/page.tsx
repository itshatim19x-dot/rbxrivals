'use client';

import { useState, useEffect, useRef } from 'react';
import { RefreshCw, Lock, Sparkles, ChevronRight, ShieldCheck, Ticket } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ContentLockerPopup from '@/components/ui/ContentLockerPopup';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function GeneratorPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationComplete, setGenerationComplete] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');
  const [displayCode, setDisplayCode] = useState('XXXXXXXXXX');
  const [showPopup, setShowPopup] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  // Initialize speech synthesis
  useEffect(() => {
    if (typeof window !== 'undefined') {
      synthRef.current = window.speechSynthesis;
    }
    
    if (typeof document !== 'undefined') {
      const isCookieUnlocked = document.cookie.includes('content_unlocked=true');
      if (isCookieUnlocked) {
        setIsUnlocked(true);
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  // Voice effect function
  const speak = (text: string) => {
    if (isMuted || !synthRef.current) return;
    
    synthRef.current.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    utterance.volume = 1;
    
    // Try to get a nice female voice
    const voices = synthRef.current.getVoices();
    const preferredVoice = voices.find(voice => 
      voice.lang === 'en-US' && (voice.name.includes('Google') || voice.name.includes('Samantha') || voice.name.includes('Female'))
    );
    if (preferredVoice) utterance.voice = preferredVoice;
    
    synthRef.current.speak(utterance);
  };

  // Voice messages during generation
  const generateVoiceMessages = () => {
  const messages = [
    "Initializing.",
    "Code generated!",
    "Success code found"
  ];
    
    messages.forEach((msg, index) => {
      setTimeout(() => speak(msg), index * 1500);
    });
  };

  const handleGenerate = () => {
    if (isGenerating) return;
    
    // Start voice
    speak("Starting code generator");
    generateVoiceMessages();
    
    setIsGenerating(true);
    setGenerationComplete(false);
    setIsUnlocked(false);
    
    // Final code to be generated
    const finalCode = Array.from({length: 10}, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    setGeneratedCode(finalCode);
    
    let iterations = 0;
    const maxIterations = 50; // About 7 seconds at 100ms
    
    const interval = setInterval(() => {
      setDisplayCode(Array.from({length: 10}, () => chars[Math.floor(Math.random() * chars.length)]).join(''));
      iterations++;
      
      if (iterations >= maxIterations) {
        clearInterval(interval);
        
        let isCookieUnlocked = isUnlocked;
        if (typeof document !== 'undefined') {
          isCookieUnlocked = document.cookie.includes('content_unlocked=true');
        }

        if (isCookieUnlocked) {
           setDisplayCode(finalCode);
           setIsUnlocked(true);
           speak("Code unlocked successfully");
        } else {
           // Show only first character, rest are 'x'
           const masked = finalCode[0] + 'x'.repeat(finalCode.length - 1);
           setDisplayCode(masked);
           speak("Code generated. Complete verification to unlock");
        }
        
        setIsGenerating(false);
        setGenerationComplete(true);
      }
    }, 100);
    
    intervalRef.current = interval;
  };

  const handleUnlockCode = () => {
    speak("Opening verification panel");
    setShowPopup(true);
  };

  const handleCompleteOffer = () => {
    setIsUnlocked(true);
    setShowPopup(false);
    setDisplayCode(generatedCode);
    speak("Verification complete. Your code is now unlocked");
    
    // Set cookie for 24 hours
    if (typeof document !== 'undefined') {
      const expires = new Date();
      expires.setTime(expires.getTime() + (24 * 60 * 60 * 1000));
      document.cookie = `content_unlocked=true;expires=${expires.toUTCString()};path=/`;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    speak("Code copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (!isMuted && synthRef.current) {
      synthRef.current.cancel();
    }
    speak(isMuted ? "Sound unmuted" : "Sound muted");
  };

  return (
    <>
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center">
        
        {/* Mute Button */}
        <button
          onClick={toggleMute}
          className="fixed top-24 right-4 z-50 p-2 bg-surface border border-white/10 rounded-lg hover:bg-white/10 transition-all"
        >
          {isMuted ? '🔇' : '🔊'}
        </button>

        <AnimatedSection className="text-center mb-12 w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-lightning-blue/10 border border-lightning-blue/30 text-lightning-blue font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-5 h-5" />
            <span>Premium Generator</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]">
            Exclusive <span className="text-lightning-blue">Code</span> Generator
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Generate unused promo codes for Roblox Rivals directly from our secure servers.
          </p>
        </AnimatedSection>

        <AnimatedSection className="w-full max-w-2xl">
          <div className="glass-card p-1">
            <div className="bg-surface border border-white/5 p-8 relative overflow-hidden flex flex-col items-center">
              <div className="absolute inset-0 pattern-squares opacity-10 pointer-events-none" />
              
              <div className="relative z-10 w-full flex flex-col items-center">
                
                {/* Voice Indicator during generation */}
                {isGenerating && !isMuted && (
                  <div className="absolute top-2 right-2 flex items-center gap-1 text-xs text-lightning-blue animate-pulse">
                    <span>🔊</span>
                    <span>Voice active</span>
                  </div>
                )}

                {/* Code Display Area */}
                <div className="w-full h-32 bg-black border border-white/10 flex items-center justify-center mb-8 relative shadow-inner">
                  {isGenerating && (
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-lightning-blue to-transparent overflow-hidden">
                      <motion.div 
                        className="w-full h-full bg-lightning-blue"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                      />
                    </div>
                  )}
                  
                  <span className="font-mono text-4xl sm:text-5xl font-bold tracking-[0.3em] text-white break-all text-center selection:bg-transparent">
                    {displayCode}
                  </span>
                </div>

                {/* Generator Status / Controls */}
                <div className="w-full h-24 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    {!isGenerating && !generationComplete && (
                      <motion.div
                        key="start"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <button 
                          onClick={handleGenerate}
                          className="px-10 py-5 bg-lightning-blue text-black font-bold uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)] flex items-center gap-3 text-lg"
                        >
                          <RefreshCw className="w-6 h-6" />
                          Generate Now
                        </button>
                      </motion.div>
                    )}

                    {isGenerating && (
                      <motion.div
                        key="generating"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex flex-col items-center gap-3"
                      >
                        <RefreshCw className="w-8 h-8 text-lightning-blue animate-spin" />
                        <span className="text-lightning-blue font-bold tracking-widest uppercase">Connecting to servers...</span>
                      </motion.div>
                    )}

                    {generationComplete && !isUnlocked && (
                      <motion.div
                        key="locked"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="w-full flex flex-col sm:flex-row items-center gap-4"
                      >
                        <div className="flex-1 flex items-center gap-3 justify-center sm:justify-start px-4 text-center sm:text-left">
                          <Lock className="w-6 h-6 text-dark-pink" />
                          <span className="text-slate-300">Code generated successfully. Verification required.</span>
                        </div>
                        <button 
                          onClick={handleUnlockCode}
                          className="px-8 py-4 bg-dark-pink text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(255,0,127,0.4)] flex items-center gap-2 shrink-0"
                        >
                          <ShieldCheck className="w-5 h-5" />
                          Verify & Unlock
                        </button>
                      </motion.div>
                    )}

                    {generationComplete && isUnlocked && (
                      <motion.div
                        key="unlocked"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="w-full flex items-center justify-center flex-col sm:flex-row gap-4"
                      >
                         <button 
                          onClick={handleCopy}
                          className="px-10 py-5 bg-emerald-500 text-black font-bold uppercase tracking-widest hover:bg-emerald-400 transition-all shadow-[0_0_25px_rgba(16,185,129,0.4)] flex items-center gap-3 text-lg"
                        >
                          <Ticket className="w-6 h-6" />
                          {copied ? 'Copied to Clipboard!' : 'Copy Full Code'}
                        </button>
                         <button 
                          onClick={() => {
                            setGenerationComplete(false);
                            setDisplayCode('XXXXXXXXXX');
                            speak("Ready to generate new code");
                          }}
                          className="px-6 py-5 bg-transparent border border-white/20 text-white font-bold uppercase tracking-wider hover:bg-white/10 transition-colors"
                        >
                          Generate Another
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Status Steps */}
        <AnimatedSection className="w-full max-w-2xl mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className={`p-4 border-l-2 transition-colors ${isGenerating || generationComplete ? 'border-lightning-blue bg-lightning-blue/5' : 'border-white/10 bg-surface'}`}>
             <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Step 1</div>
             <div className={`font-bold ${isGenerating || generationComplete ? 'text-white' : 'text-slate-500'}`}>Connect & Generate</div>
           </div>
           <div className={`p-4 border-l-2 transition-colors ${generationComplete && !isUnlocked ? 'border-dark-pink bg-dark-pink/5' : generationComplete && isUnlocked ? 'border-lightning-blue bg-lightning-blue/5' : 'border-white/10 bg-surface'}`}>
             <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Step 2</div>
             <div className={`font-bold ${generationComplete ? 'text-white' : 'text-slate-500'}`}>Human Verification</div>
           </div>
           <div className={`p-4 border-l-2 transition-colors ${isUnlocked ? 'border-emerald-500 bg-emerald-500/5' : 'border-white/10 bg-surface'}`}>
             <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Step 3</div>
             <div className={`font-bold ${isUnlocked ? 'text-white' : 'text-slate-500'}`}>Copy Full Code</div>
           </div>
        </AnimatedSection>

      </div>

      <ContentLockerPopup 
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        onComplete={handleCompleteOffer}
      />
    </>
  );
}