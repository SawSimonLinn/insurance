import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, ShieldCheck, Users } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import heroImage from "../../public/hero.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I apply for a plan?",
    answer:
      "You can apply online through our simple 'Apply Now' form. The process takes just a few minutes. Once submitted, one of our agents will contact you to finalize the details.",
  },
  {
    question: "What documents do I need to apply?",
    answer:
      "For most plans, you only need a valid government-issued ID and your basic personal information. We'll let you know if anything else is required for specific types of coverage.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or change your plan during the annual open enrollment period or if you experience a qualifying life event, such as getting married, having a child, or changing jobs.",
  },
  {
    question: "How do I file a claim?",
    answer:
      "Filing a claim is easy. You can start the process through your online customer portal or by calling our 24/7 support line. Our team will guide you through every step.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Absolutely. We use bank-level encryption and state-of-the-art security protocols to protect your data at all times. Your privacy and security are our top priorities.",
  },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero-illustration");
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-40 px-6">
        <div className="container md:flex md:items-center md:justify-between">
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-gray-900 mb-4">
              Simple, smart health insurance — built for peace of mind
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Choosing a health plan can be confusing. We make it easy with
              transparent pricing, flexible options, and fast online
              applications that keep you covered.
            </p>
            <Button asChild size="lg">
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>

          <div className="mt-10 md:mt-0 md:ml-10">
            <Image
              src={heroImage?.src ?? "/hero.png"}
              alt={"Hero Image"}
              data-ai-hint={"hero image showing happy family"}
              width={600}
              height={500}
              className="w-full max-w-md mx-auto md:mx-0 rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
              Why Choose InsureFast?
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
              We focus on what matters most: your peace of mind. Here's how we
              make insurance better.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="text-center transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">
                  Quick & Easy Application
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Apply online in under 5 minutes with our intuitive form. No
                  paperwork, no hassle.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">
                  Tailored Plans
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer a range of plans designed to fit your unique life and
                  budget needs.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">
                  24/7 Human Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our dedicated support team is always available to answer your
                  questions and help you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">
            Ready to Get Started?
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Protect what matters most. Get your free, no-obligation quote today
            and join the InsureFast family.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24" id="faq">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have questions? We've got answers. If you can't find what you're
              looking for, feel free to contact us.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg text-left font-headline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
