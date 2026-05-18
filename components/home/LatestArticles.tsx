import Image from 'next/image';
import { blogPosts } from '@/lib/data';

export default function LatestArticles() {
  const articles = blogPosts.slice(0, 3);

  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="font-display font-bold text-3xl text-white mb-2">Latest News & Guides</h2>
          <p className="text-slate-400">Stay updated with the latest patches, tier lists, and strategies.</p>
        </div>
        {/* Changed Link to a tag for full page reload */}
        <a href="/blog" className="text-sm font-medium text-lightning-blue hover:text-white transition-colors">
          View All Articles &rarr;
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {articles.map((post) => (
          <div key={post.slug}>
            <a 
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-surface border border-white/5 rounded-sm [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)] overflow-hidden hover:bg-surface-hover hover:border-white/10 transition-all cursor-pointer"
            >
              <div className="aspect-[16/9] w-full relative overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-widest text-lightning-blue font-bold rounded-md border border-white/10">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs text-slate-500 font-mono mb-3">{post.date}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lightning-blue transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-sm text-slate-400 line-clamp-2 mt-auto">{post.excerpt}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}