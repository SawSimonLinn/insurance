import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | InsureFast',
  description: 'Understand how InsureFast collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-3xl mx-auto prose">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-headline font-semibold">1. Introduction</h2>
          <p>
            InsureFast ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-headline font-semibold">2. Information We Collect</h2>
          <p>
            We may collect personal information from you in a variety of ways, including, but not limited to, when you visit our site, apply for a plan, subscribe to a newsletter, and in connection with other activities, services, features, or resources we make available. You may be asked for, as appropriate, name, email address, mailing address, phone number, and financial information.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-headline font-semibold">3. How We Use Your Information</h2>
          <p>
            We use the information we collect to personalize your experience, to improve our website, to process transactions, to send periodic emails, and to provide customer service. We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-headline font-semibold">4. Sharing Your Information</h2>
          <p>
            We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-headline font-semibold">5. Your Consent</h2>
          <p>
            By using our site, you consent to our website's privacy policy.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-headline font-semibold">6. Contact Us</h2>
          <p>
            If you have any questions regarding this privacy policy, you may contact us using the information on our contact page.
          </p>
        </section>
      </div>
    </div>
  );
}
