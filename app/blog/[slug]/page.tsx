import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/data';
import { ArrowLeft, Calendar, Tag, User, Clock, ChevronRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find(p => p.slug === resolvedParams.slug);
  if (!post) return { title: 'Not Found' };

  return {
    title: {
      absolute: `${post.title} | Rivals Hub`
    },
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      tags: [post.category],
      images: [{ url: post.image, width: 800, height: 400, alt: post.title }],
      siteName: 'Rivals Hub'
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find(p => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Get related articles (same category or random)
  const relatedArticles = blogPosts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);
    
  // If not enough related by category, add recent articles
  if (relatedArticles.length < 3) {
    const otherArticles = blogPosts
      .filter(p => p.slug !== post.slug && !relatedArticles.includes(p))
      .slice(0, 3 - relatedArticles.length);
    relatedArticles.push(...otherArticles);
  }

  const readTime = Math.ceil(post.content.length / 1000);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "image": [post.image],
            "datePublished": post.date,
            "description": post.excerpt,
            "author": { "@type": "Person", "name": "Rivals Expert" }
          })
        }}
      />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        </div>
        <div className="absolute inset-0 pattern-squares opacity-5 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <AnimatedSection>
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm border border-white/10 text-sm font-medium text-slate-300 hover:text-lightning-blue hover:border-lightning-blue/30 transition-all mb-8 rounded-lg group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Articles
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-lightning-blue/20 text-lightning-blue text-xs font-bold uppercase tracking-wider rounded">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-slate-400 text-sm">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span className="flex items-center gap-1.5 text-slate-400 text-sm">
                <Clock className="w-3.5 h-3.5" />
                {readTime} min read
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-3 pt-3 border-t border-white/10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lightning-blue to-dark-pink flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">Rivals Expert</p>
                <p className="text-slate-500 text-xs">Competitive Player & Content Creator</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-30 pb-24">
        
        <div className="bg-surface/80 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
          
          {/* Article Body */}
          <div className="p-6 sm:p-8 md:p-10">
            
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Code Generator CTA */}
            <div className="my-10 p-6 bg-gradient-to-r from-lightning-blue/10 to-dark-pink/10 border border-lightning-blue/30 rounded-xl text-center">
              <h3 className="text-white font-bold text-xl mb-3">Get Free Working Codes</h3>
              <p className="text-slate-300 text-sm mb-5">
                Use our exclusive generator to get fresh Roblox Rivals codes for free keys and rewards!
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/codes" className="inline-flex items-center gap-2 px-5 py-2.5 bg-lightning-blue text-black font-bold uppercase tracking-wider hover:bg-white transition-all rounded-lg text-sm">
                  View Active Codes
                </Link>
                <Link href="/generator" className="inline-flex items-center gap-2 px-5 py-2.5 bg-dark-pink text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all rounded-lg text-sm">
                  Generate New Code
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-8 p-5 bg-surface/50 border border-white/10 rounded-xl flex flex-col sm:flex-row gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lightning-blue to-dark-pink flex items-center justify-center shrink-0">
            <User className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold text-base mb-1">Written by Rivals Expert</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Top 500 competitive player with 2000+ hours in Roblox Rivals. Specializing in weapon mechanics 
              and ranked strategies. Helping players improve since 2024.
            </p>
          </div>
        </div>

        {/* Related Articles Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-display font-bold text-white">Related Articles</h2>
            <Link href="/blog" className="text-sm text-lightning-blue hover:text-white transition-colors flex items-center gap-1">
              View All
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedArticles.map((relatedPost) => (
              <Link 
                key={relatedPost.slug} 
                href={`/blog/${relatedPost.slug}`}
                className="group bg-surface/50 border border-white/5 hover:border-lightning-blue/40 rounded-xl overflow-hidden transition-all hover:transform hover:-translate-y-1 duration-300"
              >
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-2 left-3 text-[10px] font-bold uppercase tracking-wider text-lightning-blue bg-black/50 px-2 py-0.5 rounded">
                    {relatedPost.category}
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <Calendar className="w-3 h-3" />
                    {new Date(relatedPost.date).toLocaleDateString()}
                  </div>
                  <h3 className="text-white font-bold text-base group-hover:text-lightning-blue transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-slate-400 text-sm mt-2 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  <div className="mt-3 flex items-center text-lightning-blue text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Read More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Ads - Only at bottom */}
        <div className="mt-10 space-y-4">
          <div className="w-full bg-white/5 border border-white/10 rounded-lg flex flex-col items-center justify-center text-slate-500 text-sm p-8">
            <span className="opacity-50">Advertisement</span>
          </div>
        </div>

      </div>
    </>
  );
}