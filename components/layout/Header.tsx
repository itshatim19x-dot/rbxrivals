'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Compass } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Codes', href: '/codes' },
  { name: 'Blog', href: '/blog' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed left-0 right-0 top-0 z-[100] pointer-events-none transition-all duration-300',
        isScrolled
          ? 'border-b border-white/5 bg-surface/95 py-3 shadow-xl backdrop-blur-md'
          : 'bg-transparent py-5'
      )}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pointer-events-auto">
        <div className="relative z-[101] flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-[101] flex items-center cursor-pointer pointer-events-auto"
            aria-label="RbxRivals Home"
            onClick={(e) => {
              if (pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                e.preventDefault();
              }
            }}
          >
            <Image
              src="/img/logo_header.png"
              alt="RbxRivals logo"
              width={180}
              height={54}
              priority
              className="h-10 w-auto object-contain sm:h-11 md:h-12"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="absolute left-1/2 z-[101] hidden -translate-x-1/2 items-center gap-8 pointer-events-auto md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  'relative py-2 text-sm font-bold uppercase tracking-wider transition-colors',
                  pathname === item.href
                    ? 'text-lightning-blue'
                    : 'text-slate-300 hover:text-lightning-blue'
                )}
              >
                {item.name}

                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-lightning-blue shadow-[0_0_10px_rgba(0,240,255,0.8)]"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Guide Button */}
          <div className="z-[101] hidden items-center justify-end pointer-events-auto md:flex">
            <Link
              href="/guide"
              className="flex cursor-pointer items-center gap-2 border border-golden bg-transparent px-5 py-2 font-bold uppercase tracking-wider text-golden shadow-[0_0_10px_rgba(255,215,0,0.2)] transition-all hover:bg-golden hover:text-black hover:shadow-[0_0_15px_rgba(255,215,0,0.6)]"
            >
              <Compass className="h-4 w-4" />
              Guide
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="relative z-[101] -mr-2 cursor-pointer p-2 text-lightning-blue hover:text-white pointer-events-auto md:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="h-8 w-8 pointer-events-none" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mounted &&
        typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-[9999] flex flex-col overflow-y-auto bg-canvas px-6 pb-12 pt-6 pointer-events-auto md:hidden"
              >
                <div className="absolute inset-0 pattern-squares opacity-20 pointer-events-none" />

                <div className="relative z-[10000] mb-12 flex items-center justify-between">
                  <Link
                    href="/"
                    className="flex items-center"
                    aria-label="RbxRivals Home"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Image
                      src="/img/logo_header.png"
                      alt="RbxRivals logo"
                      width={180}
                      height={54}
                      priority
                      className="h-11 w-auto object-contain"
                    />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="relative z-[10001] cursor-pointer p-2 text-slate-400 hover:text-white"
                    aria-label="Close Menu"
                  >
                    <X className="h-8 w-8 pointer-events-none" />
                  </button>
                </div>

                <div className="relative z-[10000] flex flex-grow flex-col justify-center gap-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={clsx(
                        'cursor-pointer text-center font-display text-2xl font-bold uppercase tracking-widest',
                        pathname === item.href
                          ? 'text-lightning-blue drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]'
                          : 'text-white hover:text-lightning-blue'
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}

                  <div className="mt-8 flex justify-center">
                    <Link
                      href="/guide"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex cursor-pointer items-center gap-2 border-2 border-golden bg-transparent px-8 py-4 text-xl font-bold uppercase tracking-wider text-golden shadow-[0_0_15px_rgba(255,215,0,0.3)]"
                    >
                      <Compass className="h-6 w-6" />
                      Guide
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
}