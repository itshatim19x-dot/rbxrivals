import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Blog & Guides',
  description: 'Latest tips, tricks, and updates for Roblox Rivals.',
};

export default function BlogIndexPage() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Strategy Guides & News</h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">Dominate your matches with our comprehensive strategy breakdown and latest update news.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col bg-surface border border-white/5 rounded-sm [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)] overflow-hidden hover:bg-surface-hover hover:border-white/10 transition-all">
            <div className="aspect-[16/9] w-full relative overflow-hidden bg-black">
              <Image 
                src={post.image} 
                alt={post.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-widest text-lightning-blue font-bold rounded-md border border-white/10">
                {post.category}
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="text-xs text-slate-500 font-mono mb-3">{post.date}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lightning-blue transition-colors">{post.title}</h3>
              <p className="text-sm text-slate-400 line-clamp-3 mt-auto">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
