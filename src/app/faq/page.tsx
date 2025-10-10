import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "What types of insurance do you offer?",
        answer: "We offer a comprehensive range of insurance products including Auto, Home, Commercial (Business), Life, and Health insurance. We tailor each policy to meet your specific needs."
    },
    {
        question: "How do I get a quote?",
        answer: "You can get a free, no-obligation quote by filling out the form on our 'Get a Quote' page. You can also call our office during business hours to speak directly with an agent."
    },
    {
        question: "Why should I choose an independent agency?",
        answer: "As an independent agency, we partner with multiple top-rated insurance carriers. This allows us to shop around on your behalf to find the best coverage at the most competitive price, rather than being tied to a single provider."
    },
    {
        question: "What information do I need to provide for a quote?",
        answer: "For an accurate quote, you will typically need to provide basic personal information (name, address, date of birth), details about the item you want to insure (e.g., vehicle information for auto, property details for home), and your coverage preferences."
    }
]

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Frequently Asked Questions
            </h1>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-base text-foreground/80">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
