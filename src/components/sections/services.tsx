import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import { services } from "@/lib/services";

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Our Insurance Services</h2>
            <p className="mt-4 text-lg text-foreground/80">
                We offer a full range of insurance products tailored to individuals, families, and businesses across Indiana and beyond. Our offerings include Auto Insurance, Home Insurance, Commercial Insurance, Business Insurance, Life Insurance, and Health Insurance. Each plan is backed by top-rated carriers and designed to fit your specific needs and budget.
            </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col text-center hover:shadow-xl transition-shadow">
              <CardHeader className="items-center">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-6">
                <CardTitle className="font-headline text-2xl mb-4 text-primary">{service.title}</CardTitle>
                <p className="text-foreground/80 flex-grow">{service.description}</p>
                <div className="mt-6">
                    <Button asChild variant="link" className="mt-2">
                        <Link href={`/services/${service.slug}`}>Learn More →</Link>
                    </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
