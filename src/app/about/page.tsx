import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Story from '@/components/sections/story';
import Services from '@/components/sections/services';
import WhyChooseUs from '@/components/sections/why-choose-us';
import CTA from '@/components/sections/cta';
import SocialConnect from '@/components/sections/social-connect';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 md:py-24">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary text-center mb-12">
                Ventures Quality Insurance Agency — Our Story &amp; Services
            </h1>
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
