import Approach from '@/components/Approach';
import FeaturedCourses from '@/components/FeaturedProject';
import Footer from '@/components/Fotter';
import HeroSection from '@/components/HeroSection';
import Skills from '@/components/Skills';
import WhyChooseMe from '@/components/WhyChooseMe';

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseMe />
      <Skills />
      <Approach />
      <Footer />
    </main>
  );
}
