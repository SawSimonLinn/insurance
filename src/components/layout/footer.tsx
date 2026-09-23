import {
  Phone,
  Mail,
  Printer,
  MapPin,
  Facebook,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: siteConfig.sameAs[0],
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: siteConfig.sameAs[1],
    },
  ];

  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container mx-auto py-12 px-4">
        <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="md:col-span-1">
            <h3 className="font-headline text-xl font-bold text-white">
              {siteConfig.name}
            </h3>
            <address className="not-italic mt-2 text-sm flex items-start justify-center md:justify-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>{siteConfig.addressDisplay}</span>
            </address>
            <a
              href={siteConfig.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-white transition-colors"
            >
              www.venturesqualityinsurance.com
            </a>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors"
                >
                  <Phone size={16} /> Office: {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Printer size={16} /> Fax: {siteConfig.faxDisplay}
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors"
                >
                  <Mail size={16} /> Email: {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about#services" className="hover:text-white transition-colors">
                  Insurance Services
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-white transition-colors">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  aria-label={`Ventures Quality Insurance Agency on ${link.name}`}
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-700 text-center text-sm text-slate-400">
          <div className="flex justify-center flex-wrap gap-x-4 gap-y-2 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-white transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="hover:text-white transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/user-agreement"
              className="hover:text-white transition-colors"
            >
              User Agreement
            </Link>
            <Link
              href="/accessibility"
              className="hover:text-white transition-colors"
            >
              Accessibility
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All Rights
            Reserved. Serving Indianapolis, IN and Central Indiana.
          </p>
        </div>
      </div>
    </footer>
  );
}
