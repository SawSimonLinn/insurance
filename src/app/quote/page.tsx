import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import QuoteForm from '@/components/sections/quote-form';

export default function QuotePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}
