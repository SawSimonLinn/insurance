import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Ventures Insurance Hub",
  description: "Protecting What Matters Most: With Care and Confidence",
  other: {
    "geo.region": "US-IN",
    "geo.placename": "Indianapolis",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "Ventures Quality Insurance Agency, LLC",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7774 Madison Avenue, Suite B",
    addressLocality: "Indianapolis",
    addressRegion: "IN",
    postalCode: "46227",
    addressCountry: "US",
  },
  telephone: "+1-317-300-1906",
  faxNumber: "+1-317-300-1938",
  email: "contact@venturesqualityinsurance.com",
  url: "https://www.venturesqualityinsurance.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
