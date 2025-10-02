import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GOOGLE_FORM_LINK } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apply Now | InsureFast',
  description: 'Start your secure application for an InsureFast insurance plan. The process is quick, easy, and confidential.',
};


export default function ApplyPage() {
  return (
    <div className="py-24 md:py-32">
      <div className="container text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Start Your Application</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          You're one step closer to getting the coverage you deserve. Click the button below to fill out our secure application form. It only takes a few minutes!
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href={GOOGLE_FORM_LINK} target="_blank" rel="noopener noreferrer">
            Proceed to Application Form
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <p className="text-xs text-muted-foreground mt-4">
          You will be redirected to a secure Google Form.
        </p>
      </div>
    </div>
  );
}
