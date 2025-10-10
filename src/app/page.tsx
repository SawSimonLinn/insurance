import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import AboutUs from '@/components/sections/about-us';
import Mission from '@/components/sections/mission';
import Services from '@/components/sections/services';
import CTA from '@/components/sections/cta';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutUs />
        <Mission />
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
