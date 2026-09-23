import type { Metadata } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import AboutUs from '@/components/sections/about-us';
import Mission from '@/components/sections/mission';
import Services from '@/components/sections/services';
import CTA from '@/components/sections/cta';

export const metadata: Metadata = {
  title: 'Auto, Home & Business Insurance Agency in Indianapolis, IN | Ventures Quality Insurance',
  description:
    'Family-owned independent insurance agency in Indianapolis, IN offering Auto, Home, Commercial, Life, and Health insurance. Get a free, personalized quote today.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ventures Quality Insurance Agency | Indianapolis, IN',
    description:
      'Family-owned independent insurance agency in Indianapolis, IN offering Auto, Home, Commercial, Life, and Health insurance.',
    url: '/',
  },
};

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
