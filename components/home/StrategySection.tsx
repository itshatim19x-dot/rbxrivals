import Link from 'next/link';

export default function StrategySection() {
  return (
    <section className="py-24 bg-canvas relative z-10 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/robloxstrategy/1920/1080')] opacity-[0.03] bg-cover bg-center mix-blend-screen" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl text-white mb-4">Advanced Strategy & Meta</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Get ahead of the curve with our in-depth analysis of the current Rivals meta.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-8 border-t-2 border-t-golden/50 hover:bg-surface transition-colors cursor-pointer group">
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-golden transition-colors">Weapons Tier List</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Find out which weapons have the fastest Time-To-Kill (TTK) this season. We analyze damage drop-offs, recoil patterns, and optimal engagement ranges.
            </p>
            <Link href="/blog/best-weapons-tier-list" className="text-golden font-medium text-sm flex items-center gap-1">
              Read Analysis <span>&rarr;</span>
            </Link>
          </div>

          <div className="glass-card p-8 border-t-2 border-t-lightning-blue/50 hover:bg-surface transition-colors cursor-pointer group">
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-lightning-blue transition-colors">Aim Configurations</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Copy the sensitivity and FOV settings used by the top 500 ranked players. Learn the difference between tracking and flicking styles.
            </p>
            <Link href="/blog/how-to-improve-aim" className="text-lightning-blue font-medium text-sm flex items-center gap-1">
              View Settings <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
