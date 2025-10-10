import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');
  return (
    <section className="relative h-[70vh] md:h-[500px] w-full flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
          Protecting What Matters Most — With Care and Confidence
        </h1>
        <p className="mt-6 text-base md:text-xl max-w-3xl mx-auto text-primary-foreground/90">
          Our top priority is to meet your individual needs for insurance coverage, while providing excellent customer service and quality products. We are ready to help you protect your family, homes, autos, business, and healthcare every step of the way.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
            <Link href="/quote">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
