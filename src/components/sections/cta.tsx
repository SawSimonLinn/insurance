import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-16 text-center bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl font-bold mb-4">Get a Personalized Quote</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">Ready to protect what matters most? Fill out our short form and receive a free, no-obligation quote in minutes.</p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/quote">Get My Quote →</Link>
            </Button>
        </div>
    </section>
  );
}
