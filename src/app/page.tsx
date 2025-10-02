import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, ShieldCheck, Users } from "lucide-react";
// use the image from public folder name hero.png for hero section
import heroImage from "../../public/hero.png";
// import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-20 px-6">
        <div className="container md:flex md:items-center md:justify-between">
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-gray-900 mb-4">
              Simple, smart health insurance — built for peace of mind
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Choosing a health plan can be confusing. We make it easy with
              transparent pricing, flexible options, and fast online
              applications that keep you covered.
            </p>
            <Button asChild size="lg">
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>

          <div className="mt-10 md:mt-0 md:ml-10">
            <Image
              src={heroImage.src}
              alt={"Hero Image"}
              data-ai-hint={"hero image showing happy family"}
              width={600}
              height={500}
              className="w-full max-w-md mx-auto md:mx-0 rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
              Why Choose InsureFast?
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
              We focus on what matters most: your peace of mind. Here's how we
              make insurance better.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="text-center transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">
                  Quick & Easy Application
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Apply online in under 5 minutes with our intuitive form. No
                  paperwork, no hassle.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">
                  Tailored Plans
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer a range of plans designed to fit your unique life and
                  budget needs.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">
                  24/7 Human Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our dedicated support team is always available to answer your
                  questions and help you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">
            Ready to Get Started?
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Protect what matters most. Get your free, no-obligation quote today
            and join the InsureFast family.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
