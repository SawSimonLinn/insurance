import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Story() {
  const storyImage = PlaceHolderImages.find(img => img.id === 'client-photo');

  return (
    <section id="story" className="py-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-headline text-3xl font-bold text-primary mb-6">Our Story</h2>
          <div className="space-y-4 text-lg text-foreground/80">
              <p>
                  At Ventures Quality Insurance Agency, LLC, every policy begins with a story — yours and ours. We’re a family-owned, independent insurance agency founded in Indiana with one goal: to make quality insurance personal, transparent, and accessible for every individual and business we serve.
              </p>
              <p>
                  As a family that moved from another country and built a life here in the United States, we understand the challenges of starting fresh. That experience inspired our mission — to help every Hoosier, every neighbor, and every entrepreneur find peace of mind through protection that fits their unique journey.
              </p>
              <p>
                  Driven by honesty, integrity, and compassion, we’ve built long-term relationships with our clients — not just by offering coverage, but by being there when it matters most.
              </p>
          </div>
        </div>
        <div className="flex justify-center">
            {storyImage && (
                <div className="relative w-full max-w-sm aspect-[3/4] rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
                    <Image
                        src={storyImage.imageUrl}
                        alt={storyImage.description}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        data-ai-hint={storyImage.imageHint}
                    />
                </div>
            )}
        </div>
      </div>
    </section>
  );
}
