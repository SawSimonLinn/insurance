import Link from 'next/link';
import { Shield, Twitter, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center space-x-2 mb-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline text-lg">InsureFast</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Fast, Simple, and Reliable Insurance.
            </p>
          </div>
          <div className="grid grid-cols-2 md:col-span-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-headline font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
                <li><Link href="/plans" className="text-sm text-muted-foreground hover:text-primary">Plans</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link href="/#faq" className="text-sm text-muted-foreground hover:text-primary">FAQ</Link></li>
                <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} InsureFast. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></Link>
            <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary"><Facebook size={20} /></Link>
            <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary"><Instagram size={20} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
