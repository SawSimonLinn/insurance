"use client";

import { Phone, Menu, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Header() {
  const logo = PlaceHolderImages.find((img) => img.id === "logo");

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/about#services", label: "Services" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-4">
        <Link href="/" className="mr-4 flex items-center">
          <ShieldCheck className="h-8 w-8 mr-2 text-primary" />
          <span className="font-headline text-xl font-bold text-primary">
            Ventures Quality Insurance
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            About Us
          </Link>
          <Link
            href="/about#services"
            className="hover:text-primary transition-colors"
          >
            Services
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="tel:317-300-1906"
            className="hidden sm:flex items-center space-x-2 text-sm font-medium hover:text-primary whitespace-nowrap"
          >
            <Phone className="h-4 w-4 text-primary" />
            <span>(317) 300-1906</span>
          </a>
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link href="/quote">Get a Quote</Link>
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex flex-col p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="p-4 border-b">
                  <Link href="/" className="mr-4 flex items-center">
                    <ShieldCheck className="h-8 w-8 mr-2 text-primary" />
                    <span className="font-headline text-xl font-bold text-primary">
                      Ventures Quality Insurance
                    </span>
                  </Link>
                </div>
                <nav className="flex flex-col space-y-4 text-lg p-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto p-4 space-y-4 border-t">
                  <Button asChild className="w-full">
                    <Link href="/quote">Get a Quote</Link>
                  </Button>
                  <a
                    href="tel:317-300-1906"
                    className="flex items-center justify-center space-x-2 text-sm font-medium hover:text-primary whitespace-nowrap pt-2"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    <span>(317) 300-1906</span>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
