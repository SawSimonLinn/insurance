import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-8">
              Privacy Policy
            </h1>
            <div className="prose lg:prose-xl text-foreground/80 space-y-6">
                <p>
                    Your privacy is important to us. It is Ventures Quality Insurance Agency, LLC's policy to respect your privacy regarding any information we may collect from you across our website, <a href="https://www.venturesqualityinsurance.com">https://www.venturesqualityinsurance.com</a>, and other sites we own and operate.
                </p>

                <h2 className="font-headline text-2xl font-bold text-primary pt-4">1. Information we collect</h2>
                <p>
                    We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
                </p>
                <p>
                    The personal information we collect may include your name, email address, phone number, address, date of birth, and details about your insurance needs. This information is collected through our quote request form and other interactions with our site.
                </p>

                <h2 className="font-headline text-2xl font-bold text-primary pt-4">2. How we use your information</h2>
                <p>
                    We use the information we collect to provide, maintain, and improve our services, including to:
                </p>
                <ul>
                    <li>Process your requests for insurance quotes.</li>
                    <li>Communicate with you about your policies and our services.</li>
                    <li>Personalize your experience on our website.</li>
                    <li>Comply with legal obligations.</li>
                </ul>

                <h2 className="font-headline text-2xl font-bold text-primary pt-4">3. Security of your information</h2>
                <p>
                    We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
                </p>

                <h2 className="font-headline text-2xl font-bold text-primary pt-4">4. Links to other sites</h2>
                <p>
                    Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
                </p>

                <h2 className="font-headline text-2xl font-bold text-primary pt-4">5. Your rights</h2>
                 <p>
                    You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
                </p>

                <h2 className="font-headline text-2xl font-bold text-primary pt-4">Contact Us</h2>
                <p>
                    If you have any questions about how we handle user data and personal information, feel free to contact us.
                </p>
                
                <p>This policy is effective as of {new Date().toLocaleDateString()}.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
