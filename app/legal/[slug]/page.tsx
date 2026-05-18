import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { legalPages } from '@/lib/legal-data';
import { Calendar, Clock } from 'lucide-react';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const page = legalPages.find(p => p.slug === resolvedParams.slug);
  
  if (!page) return { title: 'Not Found' };
  
  return {
    title: `${page.title} | Roblox Rivals`,
    description: `${page.title} for Roblox Rivals Hub. Last updated: ${page.lastUpdated}`,
  };
}

export default async function LegalPage({ params }: Props) {
  const resolvedParams = await params;
  const page = legalPages.find(p => p.slug === resolvedParams.slug);
  
  if (!page) {
    notFound();
  }
  
  const readTime = Math.ceil(page.content.length / 1000);
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": page.title,
            "datePublished": page.date,
            "dateModified": page.lastUpdated,
          })
        }}
      />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        <div className="absolute inset-0 pattern-squares opacity-5 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-lightning-blue/20 text-lightning-blue text-xs font-bold uppercase tracking-wider rounded">
              {page.category}
            </span>
            <span className="flex items-center gap-1.5 text-slate-400 text-sm" suppressHydrationWarning>
              <Calendar className="w-3.5 h-3.5" />
              Last updated: {new Date(page.lastUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span className="flex items-center gap-1.5 text-slate-400 text-sm">
              <Clock className="w-3.5 h-3.5" />
              {readTime} min read
            </span>
          </div>
          
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            {page.title}
          </h1>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-30 pb-24">
        <div className="bg-surface/80 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
          <div className="p-6 sm:p-8 md:p-10">
            <div 
              className="legal-content"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          </div>
        </div>
      </div>
    </>
  );
}