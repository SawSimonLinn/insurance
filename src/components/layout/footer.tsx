import {
  Phone,
  Mail,
  Printer,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/people/Ventures-Quality-Insurance-Agency-LLC/61583249963787/?checkpoint_src=any",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/vquality_insurance/",
    },
  ];

  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container mx-auto py-12 px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="md:col-span-1">
            <h3 className="font-headline text-xl font-bold text-white">
              Ventures Quality Insurance Agency, LLC
            </h3>
            <p className="mt-2 text-sm">📍 Indiana, USA</p>
            <a
              href="https://www.venturesqualityinsurance.com"
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
                  href="tel:317-300-1906"
                  className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors"
                >
                  <Phone size={16} /> Office: (317) 300-1906
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Printer size={16} /> Fax: (317) 300-1938
              </li>
              <li>
                <a
                  href="mailto:venturesqualityagency@gmail.com"
                  className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors"
                >
                  <Mail size={16} /> Email: venturesqualityagency@gmail.com
                </a>
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
                  aria-label={link.name}
                  className="hover:text-white transition-colors"
                  target="_blank"
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-700 text-center text-sm text-slate-400">
          <div className="flex justify-center flex-wrap gap-x-4 gap-y-2 mb-4">
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
              href="/contact"
              className="hover:text-white transition-colors"
            >
              Contact Us
            </Link>
            <Link href="/faq" className="hover:text-white transition-colors">
              FAQ
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
          <p>
            &copy; {new Date().getFullYear()} Ventures Quality Insurance Agency,
            LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
