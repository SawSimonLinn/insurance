"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Shield } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline inline-block">
            InsureFast
          </span>
        </Link>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-primary",
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild className="hidden md:inline-flex">
            <Link href="/apply">Apply Now</Link>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle>
                <VisuallyHidden>Mobile Menu</VisuallyHidden>
              </SheetTitle>
              <Link
                href="/"
                onClick={() => setSheetOpen(false)}
                className="mr-6 flex items-center space-x-2 mb-6"
              >
                <Shield className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline inline-block">
                  InsureFast
                </span>
              </Link>
              <nav className="flex flex-col space-y-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setSheetOpen(false)}
                    className={cn(
                      "text-lg transition-colors hover:text-primary",
                      pathname === link.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/apply"
                  onClick={() => setSheetOpen(false)}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "mt-4 text-center"
                  )}
                >
                  Apply Now
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
