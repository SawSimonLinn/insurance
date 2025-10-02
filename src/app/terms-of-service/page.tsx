import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | InsureFast',
  description: 'Read the terms and conditions for using the InsureFast website and services.',
};

export default function TermsOfServicePage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-3xl mx-auto prose">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-headline font-semibold">1. Agreement to Terms</h2>
          <p>
            By accessing or using our website and services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-headline font-semibold">2. Use of Service</h2>
          <p>
            You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-headline font-semibold">3. Intellectual Property</h2>
          <p>
            The service and its original content, features, and functionality are and will remain the exclusive property of InsureFast and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of InsureFast.
          </p>
        </section>
        
        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-headline font-semibold">4. Limitation of Liability</h2>
          <p>
            In no event shall InsureFast, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
          </p>
        </section>
        
        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-headline font-semibold">5. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of our jurisdiction, without regard to its conflict of law provisions.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-headline font-semibold">6. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide at least 30 days' notice prior to any new terms taking effect.
          </p>
        </section>
      </div>
    </div>
  );
}
