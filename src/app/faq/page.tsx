import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | InsureFast',
  description: 'Find answers to common questions about our insurance plans, application process, and claims.',
};

const faqs = [
  {
    question: "How do I apply for a plan?",
    answer: "You can apply online through our simple 'Apply Now' form. The process takes just a few minutes. Once submitted, one of our agents will contact you to finalize the details."
  },
  {
    question: "What documents do I need to apply?",
    answer: "For most plans, you only need a valid government-issued ID and your basic personal information. We'll let you know if anything else is required for specific types of coverage."
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or change your plan during the annual open enrollment period or if you experience a qualifying life event, such as getting married, having a child, or changing jobs."
  },
  {
    question: "How do I file a claim?",
    answer: "Filing a claim is easy. You can start the process through your online customer portal or by calling our 24/7 support line. Our team will guide you through every step."
  },
  {
    question: "Is my personal information secure?",
    answer: "Absolutely. We use bank-level encryption and state-of-the-art security protocols to protect your data at all times. Your privacy and security are our top priorities."
  }
];

export default function FAQPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg text-left font-headline">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
