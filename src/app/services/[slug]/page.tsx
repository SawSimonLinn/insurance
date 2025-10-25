import { services, Service } from "@/lib/services";
import { notFound } from "next/navigation";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle, ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const serviceImage = PlaceHolderImages.find(
    (img) => img.id === service.imageId
  );

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="outline" className="mb-8">
              <Link href="/about#services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Link>
            </Button>
            <Card className="shadow-lg overflow-hidden">
              {serviceImage && serviceImage.imageUrl && (
                //  i also want the image a little more height on desktop too.
                <div className="relative w-full h-64 md:h-96  ">
                  <Image
                    src={serviceImage.imageUrl}
                    alt={serviceImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={serviceImage.imageHint}
                  />
                </div>
              )}
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4 -mt-16  relative z-10 border-4 border-background">
                  <service.icon className="w-12 h-12 text-primary" />
                </div>
                <CardTitle className="font-headline text-3xl md:text-4xl font-bold text-primary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg text-foreground/80 space-y-8 text-left px-6 md:px-8 pb-8">
                <div className="prose lg:prose-xl max-w-none text-foreground/80">
                  {service.details.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <div>
                  <h3 className="font-headline text-2xl font-bold text-primary mb-4">
                    What's Covered
                  </h3>
                  <ul className="space-y-2">
                    {service.whatIsCovered.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center border-t pt-8 mt-8">
                  <p className="text-2xl font-bold text-primary mb-4">
                    Plans starting at just ${service.price}/month
                  </p>
                  <Button asChild size="lg">
                    <Link href="/quote">
                      Get a Personalized Quote for {service.title}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
