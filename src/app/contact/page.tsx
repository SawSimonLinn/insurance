import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Mail, Phone, Printer, Clock, FileText, BadgeInfo } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/sections/contact-form";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-8">
                Contact Us
              </h1>
              <p className="text-lg text-foreground/80 mb-12 max-w-4xl mx-auto">
                We're here to help. Reach out to us with any questions or to
                discuss your insurance needs.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
                <div className="flex items-start gap-4">
                  <Phone className="w-8 h-8 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-xl text-primary">
                      Office Phone
                    </h3>
                    <a
                      href="tel:317-300-1906"
                      className="text-lg text-foreground/80 hover:text-primary"
                    >
                      (317) 300-1906
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-8 h-8 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-xl text-primary">Email</h3>
                    <a
                      href="mailto:contact@venturesqualityinsurance.com"
                      className="text-lg text-foreground/80 hover:text-primary"
                    >
                      contact@venturesqualityinsurance.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Printer className="w-8 h-8 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-xl text-primary">Fax</h3>
                    <p className="text-lg text-foreground/80">(317) 300-1938</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start border-t pt-16">
              <div className="text-left">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-8 text-center lg:text-left">
                  Customer Service & Claims
                </h2>
                <div className="grid md:grid-cols-1 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 font-headline text-2xl text-primary">
                        <Phone />
                        Customer Service
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-foreground/80">
                      <p>
                        If you need to speak to a Call Center Agent regarding
                        your insurance policy, or to make a payment, please call{" "}
                        <a
                          href="tel:317-300-1906"
                          className="text-primary font-semibold hover:underline"
                        >
                          (317) 300-1906
                        </a>
                        .
                      </p>
                      <p className="flex items-center gap-2 text-sm">
                        <Clock size={16} />
                        Our office hours are Monday – Friday, 8:00 a.m. – 5:00
                        p.m. PST.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 font-headline text-2xl text-primary">
                        <FileText />
                        Report a New Claim
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-foreground/80">
                      <p>
                        To report an auto claim please contact our claims
                        department at{" "}
                        <a
                          href="tel:317-300-1906"
                          className="text-primary font-semibold hover:underline"
                        >
                          (317) 300-1906
                        </a>
                        , and follow the menu to Report New Claim. One of our
                        representatives will assist you to file a claim.
                      </p>
                      <p>
                        If possible, please have the policy number available to
                        reference.
                      </p>
                      <p className="flex items-center gap-2 text-sm">
                        <Clock size={16} />
                        Our office hours are Monday – Friday, 8:00 a.m. – 5:00
                        p.m. PST.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 font-headline text-2xl text-primary">
                        <BadgeInfo />
                        Claim Status
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-foreground/80">
                      <p>
                        To check the status of an existing claim please contact
                        our claims department at{" "}
                        <a
                          href="tel:317-300-1906"
                          className="text-primary font-semibold hover:underline"
                        >
                          (317) 300-1906
                        </a>
                        , and follow the menu for an Existing Claim.
                      </p>
                      <p>
                        If possible, please have the claim number available to
                        reference.
                      </p>
                      <p>
                        If you know your claim examiner's extension you may
                        contact them at{" "}
                        <a
                          href="tel:317-300-1906"
                          className="text-primary font-semibold hover:underline"
                        >
                          (317) 300-1906
                        </a>{" "}
                        and enter the extension to reach them directly.
                      </p>
                      <p className="flex items-center gap-2 text-sm">
                        <Clock size={16} />
                        Our office hours are Monday – Friday, 8:00 a.m. – 5:00
                        p.m. PST.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
