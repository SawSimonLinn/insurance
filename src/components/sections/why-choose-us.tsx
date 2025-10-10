import { CheckCircle } from 'lucide-react';

const reasons = [
    "Personalized coverage, not cookie-cutter plans",
    "Family-owned and community-driven",
    "Trusted partnerships with leading carriers",
    "Bilingual agents who understand diverse needs",
    "Fast quotes, clear explanations, and ongoing support"
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl font-bold text-primary text-center mb-8">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {reasons.map((reason, index) => (
                    <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                        <p className="text-lg text-foreground/80">{reason}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
