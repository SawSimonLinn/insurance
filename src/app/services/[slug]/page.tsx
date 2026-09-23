import type { Metadata } from "next";
import { services, Service } from "@/lib/services";
import { notFound } from "next/navigation";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Breadcrumbs from "@/components/layout/breadcrumbs";
import JsonLd from "@/components/layout/json-ld";
import { getServiceJsonLd } from "@/lib/structured-data";
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {};
  }

  const title = `${service.title} in Indianapolis, IN`;
  const description = `${service.description} Serving Indianapolis, IN and Central Indiana. Plans start at $${service.price}/month.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${title} | Ventures Quality Insurance Agency`,
      description,
      url: `/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceImage = PlaceHolderImages.find(
    (img) => img.id === service.imageId
  );

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <JsonLd data={getServiceJsonLd(service)} />
      <Header />
      <Breadcrumbs
        items={[
          { name: "Services", path: "/about#services" },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
      />
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
                <div className="relative w-full h-64 md:h-96  ">
                  <Image
                    src={serviceImage.imageUrl}
                    alt={serviceImage.description}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 896px"
                    data-ai-hint={serviceImage.imageHint}
                  />
                </div>
              )}
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4 -mt-16  relative z-10 border-4 border-background">
                  <service.icon className="w-12 h-12 text-primary" />
                </div>
                <CardTitle as="h1" className="font-headline text-3xl md:text-4xl font-bold text-primary">
                  {service.title} in Indianapolis, IN
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg text-foreground/80 space-y-8 text-left px-6 md:px-8 pb-8">
                <div className="prose lg:prose-xl max-w-none text-foreground/80">
                  {service.details.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <div>
                  <h2 className="font-headline text-2xl font-bold text-primary mb-4">
                    What's Covered
                  </h2>
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
