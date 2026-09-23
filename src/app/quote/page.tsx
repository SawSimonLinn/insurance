import type { Metadata } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import QuoteForm from '@/components/sections/quote-form';

export const metadata: Metadata = {
  title: 'Get a Free Insurance Quote in Indianapolis, IN',
  description:
    'Request a free, no-obligation insurance quote from Ventures Quality Insurance Agency in Indianapolis, IN. Auto, home, commercial, life, and health coverage.',
  alternates: {
    canonical: '/quote',
  },
  openGraph: {
    title: 'Get a Free Insurance Quote | Ventures Quality Insurance Agency',
    description:
      'Request a free, no-obligation insurance quote from our Indianapolis, IN agency.',
    url: '/quote',
  },
};

export default function QuotePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <Breadcrumbs items={[{ name: 'Get a Quote', path: '/quote' }]} />
      <main className="flex-1">
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}
