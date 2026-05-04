'use client';

import Link from 'next/link';
import { BookOpen, Crosshair, Users, Zap, X, Play } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { createPortal } from 'react-dom';

export default function BeginnerGuide() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <section className="py-24 bg-surface relative z-10 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/img/roblox_rivals_Guide.webp')] opacity-[0.03] bg-cover bg-center mix-blend-screen" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-5 h-5 text-dark-pink" />
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">New to Rivals? Start Here</h2>
            </div>
            <p className="text-slate-400 mb-8 max-w-lg leading-relaxed">
              Roblox Rivals is a fast-paced arena shooter where movement, aim, and teamwork are the keys to victory. Here is what you need to know to climb out of bronze.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-none bg-lightning-blue/10 flex items-center justify-center shrink-0 border border-lightning-blue/20">
                  <Zap className="w-5 h-5 text-lightning-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Master the Movement</h3>
                  <p className="text-sm text-slate-400">Slide canceling and bunny hopping are essential. Keep moving to make yourself a harder target.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-none bg-dark-pink/10 flex items-center justify-center shrink-0 border border-dark-pink/20">
                  <Crosshair className="w-5 h-5 text-dark-pink" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Find Your Weapon</h3>
                  <p className="text-sm text-slate-400">Don&apos;t switch guns every round. Pick the AR or Sniper and master its recoil pattern perfectly.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-none bg-golden/10 flex items-center justify-center shrink-0 border border-golden/20">
                  <Users className="w-5 h-5 text-golden" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Play objective</h3>
                  <p className="text-sm text-slate-400">Kills aren&apos;t everything. Securing zones and protecting VIPs wins you the match and earns more keys.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/5 flex gap-4">
              <Link href="/blog" className="text-sm font-medium text-lightning-blue hover:text-lightning-blue/80 transition-colors">
                Read full beginner&apos;s guide &rarr;
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-dark-pink/20 to-lightning-blue/20 rounded-sm blur-3xl glass-card" />
            <div className="aspect-[4/5] sm:aspect-square relative rounded-sm overflow-hidden glass-card p-2 border-white/10 group cursor-pointer" onClick={() => setIsVideoOpen(true)}>
              <div className="w-full h-full bg-[#050505] rounded-none overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/img/roblox_rivals_Guide.webp')] opacity-50 bg-cover bg-center mix-blend-screen  group-hover:scale-105 group-hover:opacity-60 transition-all duration-700" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-black/80 to-transparent z-10">
                  <div className="text-lightning-blue font-mono text-xs uppercase tracking-widest mb-2">Featured Video</div>
                  <h3 className="text-2xl font-bold text-white mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">Top 10 Tips for Beginners</h3>
                  <button className="self-start px-6 py-3 bg-white text-black font-semibold rounded-none flex items-center gap-2 group-hover:bg-lightning-blue transition-colors relative overflow-hidden">
                    <span className="relative z-10">Watch Guide</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {mounted && createPortal(
        <AnimatePresence>
          {isVideoOpen && (
            <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                onClick={() => setIsVideoOpen(false)}
              />
              <motion.div 
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="relative w-full max-w-5xl aspect-video bg-black rounded-sm border border-white/10 shadow-2xl z-10"
              >
                <button 
                  onClick={() => setIsVideoOpen(false)}
                  className="absolute -top-12 right-0 text-white hover:text-lightning-blue transition-colors flex items-center gap-2"
                >
                  <span className="text-sm font-bold uppercase tracking-wider">Close</span>
                  <X className="w-8 h-8" />
                </button>
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/watch?v=1qAjSzySzAs" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
