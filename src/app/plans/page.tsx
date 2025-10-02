import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Home, User, Briefcase } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance Plans | InsureFast',
  description: 'Explore our range of insurance plans. Find the perfect coverage for your individual, family, or professional needs.',
};

const plans = [
  {
    icon: User,
    title: 'Starter Plan',
    price: '$99',
    description: 'Essential coverage for individuals just starting out.',
    features: [
      'Basic Health Coverage',
      'Accident Protection',
      'Virtual Consultations',
      'Annual Check-ups'
    ],
    cta: 'Select Plan',
  },
  {
    icon: Home,
    title: 'Family Plan',
    price: '$249',
    description: 'Comprehensive protection for you and your loved ones.',
    features: [
      'Full Family Health Coverage',
      'Life Insurance Included',
      'Dental & Vision Options',
      'Child Wellness Program'
    ],
    cta: 'Select Plan',
    popular: true,
  },
  {
    icon: Briefcase,
    title: 'Pro Plan',
    price: '$399',
    description: 'Premium benefits for professionals and their families.',
    features: [
      'Comprehensive Health & Life',
      'Disability Coverage',
      'Critical Illness Cover',
      'Global Travel Insurance'
    ],
    cta: 'Select Plan',
  }
];

export default function PlansPage() {
  return (
    <div className="py-16 md:py-24 bg-secondary/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Find Your Perfect Plan</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Simple, transparent pricing. No hidden fees, ever. Choose the plan that's right for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto items-start">
          {plans.map((plan) => (
            <Card key={plan.title} className={plan.popular ? 'border-primary border-2 relative shadow-2xl' : 'hover:shadow-lg transition-shadow'}>
              {plan.popular && <div className="absolute -top-3 right-4 bg-accent text-accent-foreground px-3 py-1 text-sm font-bold rounded-full">POPULAR</div>}
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-2">
                  <plan.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">{plan.title}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div>
                  <span className="text-4xl font-bold font-headline">{plan.price}</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                  <Link href="/apply">{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
