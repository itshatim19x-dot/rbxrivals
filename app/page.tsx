import { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import CodesPreview from '@/components/home/CodesPreview';
import BeginnerGuide from '@/components/home/BeginnerGuide';
import StrategySection from '@/components/home/StrategySection';
import FAQSection from '@/components/home/FAQSection';
import LatestArticles from '@/components/home/LatestArticles';
import StatsSection from '@/components/home/StatsSection';
import NewsletterSection from '@/components/home/NewsletterSection';
import AnimatedSection from '@/components/ui/AnimatedSection';


export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Rivals Hub",
            "url": "https://rivals-hub.example.com",
            "description": "Your ultimate destination for Roblox Rivals codes, skins, guides, and news.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://rivals-hub.example.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      
      {/* Top Main Sections */}
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      
      <StatsSection />

      <AnimatedSection>
        <CodesPreview />
      </AnimatedSection>
      
      <AnimatedSection>
        <BeginnerGuide />
      </AnimatedSection>
      
      <AnimatedSection>
        <StrategySection />
      </AnimatedSection>

      <AnimatedSection>
        <NewsletterSection />
      </AnimatedSection>
      
      <div className="bg-surface/30 border-t border-white/5 pt-12 pb-24">
        <AnimatedSection>
          <FAQSection />
        </AnimatedSection>
        
        <AnimatedSection>
          <LatestArticles />
        </AnimatedSection>
      </div>
    </>
  );
}
