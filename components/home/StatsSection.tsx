'use client';

import { useEffect, useRef, useState } from 'react';
import AnimatedSection from '../ui/AnimatedSection';

function Counter({
  value,
  duration = 1600,
}: {
  value: number;
  duration?: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const startCounter = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.round(easedProgress * value);

        setDisplayValue(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(value);
        }
      };

      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounter();
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(element);

    const fallback = window.setTimeout(() => {
      startCounter();
    }, 800);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [value, duration]);

  return <span ref={ref}>{displayValue}</span>;
}

export default function StatsSection() {
  const stats = [
    { label: 'Working Codes Provided', value: 345, suffix: '+' },
    { label: 'Customer Success', value: 98, suffix: '%' },
    { label: 'Get Code Success', value: 99, suffix: '%' },
    { label: 'Active Players', value: 24, suffix: 'K' },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-canvas border-y border-white/5">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/rivalsstatsbd/1920/1080')] opacity-5 bg-cover bg-center mix-blend-screen" />
      <div className="absolute inset-0 bg-gradient-to-b from-canvas via-transparent to-canvas" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-dark-pink/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div className="flex flex-col items-center p-6 rounded-lg glass-card group hover:border-lightning-blue/50 transition-all">
                <div className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-lightning-blue to-golden mb-2 drop-shadow-lg">
                  <Counter value={stat.value} />
                  {stat.suffix}
                </div>

                <div className="text-sm md:text-base font-semibold text-slate-400 uppercase tracking-wider group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}