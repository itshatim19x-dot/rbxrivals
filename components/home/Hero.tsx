import { blogPosts } from '@/lib/data';
import HeroSlider from '@/components/ui/HeroSlider';

export default function Hero() {
  const latestPosts = blogPosts.slice(0, 4);

  return (
    <section className="relative w-full pt-20">
      <HeroSlider posts={latestPosts} />
    </section>
  );
}
