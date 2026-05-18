import Link from 'next/link';
import { Gamepad2, Twitter, Github, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5 pt-16 pb-8 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-lightning-blue to-dark-pink rounded-none flex items-center justify-center">
                <Gamepad2 className="text-white w-5 h-5 md:w-6 md:h-6" />
              </div>
              <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-white">Rivals<span className="text-lightning-blue">Hub</span></span>
            </Link>
            <p className="text-sm text-slate-400 mb-6 max-w-sm">
              Your ultimate destination for Roblox Rivals codes, skins, guides, and news. We are an unofficial community site.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-medium text-white mb-4">Pages</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/" className="text-sm text-slate-400 hover:text-lightning-blue transition-colors">Home</Link></li>
              <li><Link href="/codes" className="text-sm text-slate-400 hover:text-lightning-blue transition-colors">Codes</Link></li>
              <li><Link href="/skins" className="text-sm text-slate-400 hover:text-lightning-blue transition-colors">Skins</Link></li>
              <li><Link href="/blog" className="text-sm text-slate-400 hover:text-lightning-blue transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display font-medium text-white mb-4">Legal</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/legal/privacy-policy" className="text-sm text-slate-400 hover:text-lightning-blue transition-colors">Privacy Policy</Link></li>
              <li><Link href="/legal/terms-of-service" className="text-sm text-slate-400 hover:text-lightning-blue transition-colors">Terms of Service</Link></li>
              <li><Link href="/legal/cookie-policy" className="text-sm text-slate-400 hover:text-lightning-blue transition-colors">Cookie Policy</Link></li>
              <li><Link href="/legal/dmca" className="text-sm text-slate-400 hover:text-lightning-blue transition-colors">DMCA Notice</Link></li>
              <li><Link href="/contact" className="text-sm text-slate-400 hover:text-lightning-blue transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h3 className="font-display font-medium text-white mb-4">Disclaimer</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Rivals Hub is not affiliated with, maintained, authorized, endorsed, or sponsored by Roblox Corporation or the creators of Roblox Rivals. All product and company names are the registered trademarks of their original owners.
            </p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Rivals Hub. All rights reserved.
          </p>
          <div className="text-sm text-slate-500">
            Designed for gamers.
          </div>
        </div>
      </div>
    </footer>
  );
}