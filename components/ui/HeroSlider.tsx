'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function HeroSlider({ posts }: { posts: BlogPost[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      skipSnaps: false,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="group relative h-[90vh] min-h-[90vh] max-h-[90vh] w-full overflow-hidden bg-canvas">
      <div ref={emblaRef} className="h-full overflow-hidden">
        <div className="flex h-full">
          {posts.map((post, i) => (
            <article
              key={post.slug}
              className="relative h-[90vh] min-w-0 flex-[0_0_100%] overflow-hidden"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority={i === 0}
                sizes="100vw"
                referrerPolicy="no-referrer"
                className="object-cover opacity-70 mix-blend-lighten"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/85 to-canvas/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-canvas/55" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,240,255,0.16),transparent_35%),radial-gradient(circle_at_80%_60%,rgba(255,0,128,0.14),transparent_35%)]" />

              <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-4 pb-20 pt-20 sm:px-6 sm:pb-24 sm:pt-24 lg:px-8">
                <AnimatedSection className="w-full max-w-3xl">
                  <div className="mb-4 inline-flex bg-lightning-blue px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#050505] shadow-[0_0_15px_rgba(0,240,255,0.5)] sm:mb-5 sm:text-xs">
                    {post.category}
                  </div>

                  <h2 className="max-w-[820px] break-words font-display text-[clamp(2rem,8vw,2.9rem)] font-bold leading-[1.05] tracking-tight text-white drop-shadow-2xl sm:text-[clamp(2.4rem,6vw,3.6rem)] lg:text-[clamp(3rem,4.6vw,4.35rem)]">
                    {post.title}
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 line-clamp-3 sm:mt-5 sm:text-lg sm:leading-8 md:text-xl">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 flex w-full flex-col gap-3 sm:mt-7 sm:w-auto sm:flex-row">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex min-h-[50px] w-full cursor-pointer items-center justify-center gap-2 border-2 border-golden bg-transparent px-5 py-3 text-center text-sm font-bold uppercase tracking-wider text-golden no-underline shadow-[0_0_20px_rgba(255,215,0,0.2)] transition-all hover:bg-golden hover:text-black hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] sm:w-auto sm:px-8 sm:py-4 sm:text-base"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="h-5 w-5 shrink-0" />
                    </Link>

                    <Link
                      href="/codes"
                      className="inline-flex min-h-[50px] w-full cursor-pointer items-center justify-center gap-2 bg-lightning-blue px-5 py-3 text-center text-sm font-bold uppercase tracking-wider text-black no-underline shadow-[0_0_15px_rgba(0,240,255,0.35)] transition-colors hover:bg-white hover:text-black sm:w-auto sm:px-8 sm:py-4 sm:text-base"
                    >
                      <span>View Codes</span>
                      <ArrowRight className="h-5 w-5 shrink-0" />
                    </Link>
                  </div>
                </AnimatedSection>
              </div>
            </article>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center border border-white/20 bg-black/50 text-white opacity-0 backdrop-blur-md transition-all hover:border-lightning-blue hover:bg-lightning-blue hover:text-black group-hover:opacity-100 md:flex lg:left-8"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        type="button"
        onClick={scrollNext}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center border border-white/20 bg-black/50 text-white opacity-0 backdrop-blur-md transition-all hover:border-lightning-blue hover:bg-lightning-blue hover:text-black group-hover:opacity-100 md:flex lg:right-8"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 sm:bottom-8">
        {posts.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`cursor-pointer transition-all duration-300 ${
              index === selectedIndex
                ? 'h-2 w-10 bg-lightning-blue shadow-[0_0_10px_rgba(0,240,255,0.5)]'
                : 'h-2 w-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}