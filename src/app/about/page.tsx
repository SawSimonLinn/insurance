import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { BadgeCheck, HeartHandshake, Lightbulb, Smile } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | InsureFast',
  description: 'Learn about InsureFast\'s mission, story, and the values that drive us to provide better insurance for everyone.',
};

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us');

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Making Insurance Human</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            At InsureFast, we're redesigning insurance from the ground up to be fair, transparent, and simple.
            We're here to protect you and your loved ones, not to complicate your life.
          </p>
        </div>

        {/* Mission and Story */}
        <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-headline font-semibold">Our Mission</h2>
              <p className="mt-2 text-muted-foreground">
                To make high-quality insurance accessible, understandable, and affordable for everyone. We believe in transparency and empowering our customers to make informed decisions about their future.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-headline font-semibold">Our Story</h2>
              <p className="mt-2 text-muted-foreground">
                Founded in 2021, InsureFast started with a simple idea: insurance shouldn't be complicated. Frustrated by the confusing jargon and lengthy processes of traditional insurers, our founders set out to build a modern, customer-centric insurance company. Today, we've helped thousands of families and individuals secure peace of mind with our straightforward plans and dedicated support.
              </p>
            </div>
          </div>
          <div>
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                width={800}
                height={600}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            )}
          </div>
        </div>

        {/* Our Values */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Core Values</h2>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
              The principles that guide every decision we make.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                 <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                  <HeartHandshake className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Customer First</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                 <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Innovation</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                 <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                  <BadgeCheck className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Integrity</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                 <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                  <Smile className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Simplicity</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
