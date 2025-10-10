import { Award, Gem, HeartHandshake, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const values = [
  {
    name: "Honesty",
    icon: ShieldCheck,
  },
  {
    name: "Integrity",
    icon: Gem,
  },
  {
    name: "Excellence",
    icon: Award,
  },
  {
    name: "Compassion",
    icon: HeartHandshake,
  },
];

export default function AboutUs() {
  const clientImage = PlaceHolderImages.find(img => img.id === 'client-photo');

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-last md:order-first">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
              Who We Are
            </h2>
            <div className="mt-6 space-y-4 text-lg text-foreground/80">
              <p>
                Venture Quality Insurance Agency is a proud family-owned, independent insurance agency based in Indiana. Our mission is to deliver exceptional service and personalized coverage that truly fits each client’s unique needs.
              </p>
              <p>
                As a family that moved from another country and grew up in the United States, we deeply understand the diverse needs of people from all cultures and backgrounds. That experience has shaped our commitment to helping every Hoosier—no matter their story—find protection and peace of mind through the right insurance solutions.
              </p>
               <p>
                At Venture Quality Insurance Agency, our values of honesty, integrity, excellence, and compassion guide everything we do. These principles are at the heart of every policy we write, every client we serve, and every relationship we build.
               </p>
            </div>
            <p className="mt-8 font-headline text-xl italic text-primary">
              We’re not just your insurance agency — we’re your trusted partner in protecting what matters most.
            </p>
          </div>
          <div className="md:col-span-1 flex justify-center">
            {clientImage && (
                <div className="relative w-full max-w-sm aspect-[3/4] rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
                    <Image
                        src={clientImage.imageUrl}
                        alt={clientImage.description}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        data-ai-hint={clientImage.imageHint}
                    />
                </div>
            )}
          </div>
        </div>
        <div className="mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {values.map((value) => (
                <Card key={value.name} className="text-center bg-card shadow-md transition-transform hover:scale-105">
                    <CardContent className="p-6">
                    <div className="mx-auto bg-accent/10 rounded-full p-4 w-fit mb-4">
                        <value.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">{value.name}</h3>
                    </CardContent>
                </Card>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
