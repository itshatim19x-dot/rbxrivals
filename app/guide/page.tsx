'use client';

import { 
  Gamepad2, Sparkles, Trophy, Target, 
  Shield, Sword, Flame, Zap, Award,
  ChevronRight, Star, Clock, Users, Gift, Diamond,
  ArrowRight, Medal, Crosshair, Navigation, Eye, Volume2
} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GuidePage() {
  const [hoveredWeapon, setHoveredWeapon] = useState<string | null>(null);

  const weaponTiers = [
    { tier: "S-TIER", name: "Heavy Sniper", desc: "One-shot headshots, dominant lane control", color: "red", icon: <Target className="w-4 h-4" />, stats: "2.5x Headshot" },
    { tier: "S-TIER", name: "Gunblade", desc: "Hybrid melee/ranged with dash strike", color: "red", icon: <Sword className="w-4 h-4" />, stats: "Zero Delay" },
    { tier: "S-TIER", name: "Permafrost", desc: "2-round burst with heavy slow effect", color: "red", icon: <Flame className="w-4 h-4" />, stats: "Contraband" },
    { tier: "A-TIER", name: "Assault Rifle", desc: "Versatile all-rounder, best for beginners", color: "purple", icon: <Crosshair className="w-4 h-4" />, stats: "Beginner Friendly" },
    { tier: "A-TIER", name: "Flamethrower", desc: "Afterburn denies health regen", color: "purple", icon: <Flame className="w-4 h-4" />, stats: "5s Afterburn" },
  ];

  const ranks = [
    { name: "Bronze", requirement: "0 ELO", color: "from-amber-600 to-amber-800" },
    { name: "Silver", requirement: "500 ELO", color: "from-gray-400 to-gray-600" },
    { name: "Gold", requirement: "1200 ELO", color: "from-yellow-500 to-yellow-700" },
    { name: "Platinum", requirement: "2000 ELO", color: "from-cyan-500 to-cyan-700" },
    { name: "Diamond", requirement: "3000 ELO", color: "from-blue-500 to-blue-700" },
    { name: "Elite", requirement: "4200 ELO", color: "from-purple-500 to-purple-700" },
    { name: "Nemesis", requirement: "5500+ ELO", color: "from-red-600 to-red-800" },
  ];

  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Background pattern - same as main page */}
      <div className="absolute inset-0 pattern-squares opacity-10 pointer-events-none" />
      
      {/* Hero Section */}
      <AnimatedSection className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-lightning-blue/10 border border-lightning-blue/30 rounded-full mb-6">
          <Trophy className="w-4 h-4 text-golden" />
          <span className="text-golden text-sm font-mono">2026 ULTIMATE GUIDE</span>
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-[0_0_15px_rgba(255,0,127,0.4)]">
          Master <span className="text-dark-pink">Roblox Rivals</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Everything you need to dominate the arena: advanced movement, ranked strategies, 
          weapon tier lists, and free skin farming methods.
        </p>
        
        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="glass-card px-6 py-3">
            <div className="text-lightning-blue font-bold text-2xl">322+</div>
            <div className="text-xs text-slate-400">Total Skins</div>
          </div>
          <div className="glass-card px-6 py-3">
            <div className="text-dark-pink font-bold text-2xl">7</div>
            <div className="text-xs text-slate-400">Rank Tiers</div>
          </div>
          <div className="glass-card px-6 py-3">
            <div className="text-golden font-bold text-2xl">30+</div>
            <div className="text-xs text-slate-400">Weapons</div>
          </div>
        </div>
      </AnimatedSection>

      {/* ========== HOW TO PLAY SECTION ========== */}
      <AnimatedSection className="mb-20 relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-lightning-blue/10 border border-lightning-blue/30">
            <Gamepad2 className="w-6 h-6 text-lightning-blue glow-blue" />
          </div>
          <h2 className="text-2xl font-display font-bold text-white">How to Play Rivals</h2>
        </div>
        
        <div className="glass-card p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-4">Quick Start Guide</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-lightning-blue/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-lightning-blue text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Practice in Shooting Range</h4>
                    <p className="text-slate-400 text-sm">Get comfortable with weapon handling before queueing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-lightning-blue/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-lightning-blue text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Optimize Settings</h4>
                    <p className="text-slate-400 text-sm">Enable Auto Sprint, Easy Slide. Set FOV to 90-110.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-lightning-blue/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-lightning-blue text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Matchmaking Pads</h4>
                    <p className="text-slate-400 text-sm">Green = 1v1, Blue = 2v2, Red = 5v5.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-xl mb-4">Core Movement Techniques</h3>
              <div className="space-y-3">
                <div className="bg-white/5 p-3 rounded border-l-2 border-l-lightning-blue">
                  <h4 className="text-lightning-blue font-bold text-sm">Slide Canceling</h4>
                  <p className="text-slate-400 text-xs">Tap crouch while running, then jump immediately to maintain momentum.</p>
                </div>
                <div className="bg-white/5 p-3 rounded border-l-2 border-l-dark-pink">
                  <h4 className="text-dark-pink font-bold text-sm">Constant Motion</h4>
                  <p className="text-slate-400 text-xs">Never stand still while shooting - use WASD to strafe continuously.</p>
                </div>
                <div className="bg-white/5 p-3 rounded border-l-2 border-l-golden">
                  <h4 className="text-golden font-bold text-sm">Explosive Jumping</h4>
                  <p className="text-slate-400 text-xs">Shoot grenades at your feet to launch to high ground (no self-damage!).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ========== RANKED SYSTEM SECTION ========== */}
      <AnimatedSection className="mb-20 relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-golden/10 border border-golden/30">
            <Trophy className="w-6 h-6 text-golden" />
          </div>
          <h2 className="text-2xl font-display font-bold text-white">Ranked System</h2>
        </div>
        
        <div className="glass-card p-6">
          <p className="text-slate-300 mb-6">
            Complete <strong className="text-golden">10 placement matches</strong> to unlock ranked. 
            Your performance determines your starting rank.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white font-bold mb-3">Rank Progression</h3>
              <div className="space-y-2">
                {ranks.map((rank) => (
                  <div key={rank.name} className={`flex justify-between items-center p-2 rounded bg-gradient-to-r ${rank.color}/20 border border-white/10`}>
                    <span className="text-white text-sm font-bold">{rank.name}</span>
                    <span className="text-slate-400 text-xs">{rank.requirement}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="bg-lightning-blue/10 p-4 rounded border border-lightning-blue/30 mb-4">
                <h3 className="text-lightning-blue font-bold mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  ELO Shield Strategy
                </h3>
                <p className="text-slate-300 text-sm">The ELO Shield prevents point loss after a defeat. Play when shield is active to only gain points!</p>
              </div>
              
              <h3 className="text-white font-bold mb-2">Ranked Tips:</h3>
              <ul className="space-y-1">
                <li className="flex items-center gap-2 text-slate-400 text-sm">
                  <ChevronRight className="w-3 h-3 text-golden" /> Play in short sessions
                </li>
                <li className="flex items-center gap-2 text-slate-400 text-sm">
                  <ChevronRight className="w-3 h-3 text-golden" /> Always jump-slide while aiming
                </li>
                <li className="flex items-center gap-2 text-slate-400 text-sm">
                  <ChevronRight className="w-3 h-3 text-golden" /> Use audio cues for enemy positions
                </li>
                <li className="flex items-center gap-2 text-slate-400 text-sm">
                  <ChevronRight className="w-3 h-3 text-golden" /> Hold high ground for better angles
                </li>
              </ul>
              
              <div className="mt-4 pt-3 border-t border-white/10">
                <p className="text-xs text-slate-400">🏆 200 wins = Exclusive Skin Reward</p>
                <p className="text-xs text-golden">⭐ Archnemesis Rank = Additional Skin</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ========== WEAPON TIER LIST ========== */}
      <AnimatedSection className="mb-20 relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-dark-pink/10 border border-dark-pink/30">
            <Sword className="w-6 h-6 text-dark-pink" />
          </div>
          <h2 className="text-2xl font-display font-bold text-white">Weapon Tier List</h2>
        </div>
        
        <div className="grid gap-6">
          <div>
            <h3 className="text-red-500 font-bold mb-3 flex items-center gap-2">
              <Flame className="w-4 h-4" /> S-TIER (Meta Picks)
            </h3>
            <div className="grid gap-4">
              {weaponTiers.filter(w => w.tier === "S-TIER").map((weapon) => (
                <div key={weapon.name} className="glass-card p-4 border-l-4 border-l-red-500">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {weapon.icon}
                      <h4 className="text-white font-bold">{weapon.name}</h4>
                    </div>
                    <span className="text-xs text-slate-500">{weapon.stats}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{weapon.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-purple-500 font-bold mb-3 flex items-center gap-2">
              <Star className="w-4 h-4" /> A-TIER (Excellent)
            </h3>
            <div className="grid gap-4">
              {weaponTiers.filter(w => w.tier === "A-TIER").map((weapon) => (
                <div key={weapon.name} className="glass-card p-4 border-l-4 border-l-purple-500">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {weapon.icon}
                      <h4 className="text-white font-bold">{weapon.name}</h4>
                    </div>
                    <span className="text-xs text-slate-500">{weapon.stats}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{weapon.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ========== FREE SKINS GUIDE ========== */}
      <AnimatedSection className="mb-20 relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-emerald-500/10 border border-emerald-500/30">
            <Sparkles className="w-6 h-6 text-emerald-400" />
          </div>
          <h2 className="text-2xl font-display font-bold text-white">How to Get FREE Skins</h2>
        </div>
        
        <div className="glass-card p-6">
          <p className="text-slate-300 mb-6">
            With <strong className="text-emerald-400">322+ total skins</strong>, here are the best ways to get skins for free:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/5 p-4 rounded">
              <div className="flex items-center gap-2 mb-2">
                <Diamond className="w-4 h-4 text-golden" />
                <h3 className="text-white font-bold">Free Season Pass</h3>
              </div>
              <p className="text-slate-400 text-sm">10 Skin Tickets per season = 1 free skin case</p>
            </div>
            
            <div className="bg-white/5 p-4 rounded">
              <div className="flex items-center gap-2 mb-2">
                <Gift className="w-4 h-4 text-lightning-blue" />
                <h3 className="text-white font-bold">Active Codes</h3>
              </div>
              <p className="text-slate-400 text-sm">Use codes like FREE172, COMMUNITY23 for free Keys</p>
              <Link href="/codes" className="text-xs text-lightning-blue hover:text-white mt-1 inline-block">View all codes →</Link>
            </div>
            
            <div className="bg-white/5 p-4 rounded">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-4 h-4 text-dark-pink" />
                <h3 className="text-white font-bold">Ranked Rewards</h3>
              </div>
              <p className="text-slate-400 text-sm">200 victories = exclusive skin</p>
            </div>
            
            <div className="bg-white/5 p-4 rounded">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-golden" />
                <h3 className="text-white font-bold">Discord Giveaways</h3>
              </div>
              <p className="text-slate-400 text-sm">Join official Discord for case and key giveaways</p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-golden/5 border border-golden/20 text-center rounded">
            <p className="text-sm text-golden">🎯 10 Keys = 1 Skin Case</p>
            <p className="text-xs text-slate-400 mt-1">Keys come from: Codes + Wins + Daily Quests + Season Pass</p>
          </div>
        </div>
      </AnimatedSection>

      {/* ========== PRO TIPS ========== */}
      <AnimatedSection className="mb-20 relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-golden/10 border border-golden/30">
            <Zap className="w-6 h-6 text-golden" />
          </div>
          <h2 className="text-2xl font-display font-bold text-white">Pro Strategies</h2>
        </div>
        
        <div className="glass-card p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-3 bg-white/5 rounded">
              <Zap className="w-5 h-5 text-lightning-blue shrink-0 mt-0.5" />
              <div>
                <h3 className="text-white font-bold text-sm">Pre-firing</h3>
                <p className="text-slate-400 text-xs">Shoot where enemies WILL be before they appear</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white/5 rounded">
              <Shield className="w-5 h-5 text-dark-pink shrink-0 mt-0.5" />
              <div>
                <h3 className="text-white font-bold text-sm">Positioning & Cover</h3>
                <p className="text-slate-400 text-xs">Fight from cover, secure high ground</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white/5 rounded">
              <Sword className="w-5 h-5 text-golden shrink-0 mt-0.5" />
              <div>
                <h3 className="text-white font-bold text-sm">Knife Sneak Kills</h3>
                <p className="text-slate-400 text-xs">Sneak behind opponents for instant kills</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white/5 rounded">
              <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-white font-bold text-sm">Never Reload in Open</h3>
                <p className="text-slate-400 text-xs">Always find cover before reloading</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-dark-pink/10 border border-dark-pink/30 text-center rounded">
            <p className="text-slate-300 text-sm">
              <strong className="text-golden">🎯 The #1 Secret:</strong> Top players are <strong className="text-lightning-blue">ALWAYS jump-sliding</strong> - even while aiming!
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* ========== CTA SECTION ========== */}
      <AnimatedSection className="relative z-10">
        <div className="p-8 bg-surface border-2 border-lightning-blue/30 relative z-10 shadow-[0_0_30px_rgba(0,240,255,0.1)]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-lightning-blue/20 blur-[50px] pointer-events-none" />
          <h3 className="text-2xl font-display font-bold text-white mb-2 text-center">Ready to Dominate Roblox Rivals?</h3>
          <p className="text-sm text-slate-300 mb-6 max-w-xl mx-auto text-center">Use these strategies, claim active codes, and start climbing the ranks today!</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/codes" className="inline-flex items-center justify-center px-8 py-4 bg-lightning-blue text-black font-bold uppercase tracking-wider hover:bg-white transition-colors shadow-[0_0_15px_rgba(0,240,255,0.3)] gap-2">
              <Gift className="w-5 h-5" />
              Claim Active Codes
            </Link>
            <Link href="/generator" className="inline-flex items-center justify-center px-8 py-4 bg-dark-pink text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors shadow-[0_0_15px_rgba(255,0,127,0.3)] gap-2">
              <Zap className="w-5 h-5" />
              Generate Fresh Code
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}