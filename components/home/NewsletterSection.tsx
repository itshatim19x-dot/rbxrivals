import { Mail } from 'lucide-react';

export default function NewsletterSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-surface border-y border-white/5">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/newsletterbg/1920/1080')] opacity-[0.03] bg-cover bg-center mix-blend-screen" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lightning-blue/10 blur-[120px] rounded-full pointer-events-none translate-x-1/4 -translate-y-1/4" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lightning-blue/10 border border-lightning-blue/20 mb-6">
          <Mail className="w-8 h-8 text-lightning-blue" />
        </div>
        <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
          Stay Ahead of the Game
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
          Subscribe to our newsletter to receive the latest promo codes, exclusive skins dropped, and meta strategies directly to your inbox.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-grow px-6 py-4 bg-canvas border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-lightning-blue transition-colors"
            required
          />
          <button 
            type="submit"
            className="px-8 py-4 bg-lightning-blue text-black font-bold uppercase tracking-wider hover:bg-[#00D0DD] transition-colors shadow-[0_0_15px_rgba(0,240,255,0.4)]"
          >
            Subscribe Now
          </button>
        </form>
        <p className="text-xs text-slate-500 mt-4">
          We will never share your email with third parties. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
