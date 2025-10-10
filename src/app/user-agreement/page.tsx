import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function UserAgreementPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-8">
              User Agreement
            </h1>
            <div className="prose lg:prose-xl text-foreground/80 space-y-6">
                <p>
                    Welcome to Ventures Quality Insurance Agency, LLC. By accessing our website, you agree to be bound by these terms and conditions. Please read them carefully.
                </p>

                <h2 className="font-headline text-2xl font-bold text-primary pt-4">1. Use of Website</h2>
                <p>
                    This website is for informational purposes and to request insurance quotes. You agree to use this site for lawful purposes only.
                </p>

                <h2 className="font-headline text-2xl font-bold text-primary pt-4">2. Intellectual Property</h2>
                <p>
                    All content on this site, including text, graphics, logos, and images, is the property of Ventures Quality Insurance Agency, LLC and is protected by intellectual property laws.
                </p>

                <h2 className="font-headline text-2xl font-bold text-primary pt-4">3. Limitation of Liability</h2>
                <p>
                    We are not liable for any damages arising from the use of this website. The information provided is on an "as is" basis without any warranties.
                </p>

                <p>This agreement is effective as of {new Date().toLocaleDateString()}.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
