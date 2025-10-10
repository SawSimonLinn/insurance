import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function AccessibilityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-8">
              Accessibility Statement
            </h1>
            <div className="prose lg:prose-xl text-foreground/80 space-y-6">
                <p>
                    Ventures Quality Insurance Agency, LLC is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
                </p>

                <h2 className="font-headline text-2xl font-bold text-primary pt-4">Conformance Status</h2>
                <p>
                    We are working towards conforming to the Web Content Accessibility Guidelines (WCAG) 2.1 level AA. These guidelines explain how to make web content more accessible for people with a wide array of disabilities.
                </p>

                <h2 className="font-headline text-2xl font-bold text-primary pt-4">Feedback</h2>
                <p>
                    We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers:
                </p>
                 <ul>
                    <li>Phone: (555) 555-5555</li>
                    <li>E-mail: contact@venturesquality.com</li>
                </ul>

                <p>We try to respond to feedback within 5 business days.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
