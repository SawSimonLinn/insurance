import type { Metadata } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import Story from '@/components/sections/story';
import Services from '@/components/sections/services';
import WhyChooseUs from '@/components/sections/why-choose-us';
import CTA from '@/components/sections/cta';
import SocialConnect from '@/components/sections/social-connect';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'About Us | Family-Owned Insurance Agency in Indianapolis, IN',
  description:
    'Learn about Ventures Quality Insurance Agency, a family-owned, independent insurance agency based in Indianapolis, IN, and explore our full range of insurance services.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Ventures Quality Insurance Agency | Indianapolis, IN',
    description:
      'A family-owned, independent insurance agency based in Indianapolis, IN, serving individuals, families, and businesses across Indiana.',
    url: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <Breadcrumbs items={[{ name: 'About Us', path: '/about' }]} />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 md:py-24">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary text-center mb-4">
                Ventures Quality Insurance Agency: Our Story &amp; Services
            </h1>
            <p className="text-center text-foreground/70 mb-12">
                {siteConfig.addressDisplay}
            </p>
            <Story />
            <Services />
            <WhyChooseUs />
            <CTA />
            <SocialConnect />
        </div>
      </main>
      <Footer />
    </div>
  );
}
