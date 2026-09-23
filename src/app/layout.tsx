import type { Metadata, Viewport } from "next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import JsonLd from "@/components/layout/json-ld";
import { siteConfig } from "@/lib/site-config";
import {
  getLocalBusinessJsonLd,
  getOrganizationJsonLd,
  getWebSiteJsonLd,
} from "@/lib/structured-data";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2c3b78",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Ventures Quality Insurance Agency | Auto, Home & Business Insurance in Indianapolis, IN",
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "insurance agency Indianapolis",
    "Indianapolis insurance agent",
    "auto insurance Indianapolis IN",
    "home insurance Indianapolis",
    "commercial insurance Indiana",
    "life and health insurance Indianapolis",
    "independent insurance agency Indiana",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    title: `${siteConfig.shortName} | Indianapolis, IN`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1920,
        height: 1080,
        alt: `${siteConfig.name} office in Indianapolis, Indiana`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.shortName} | Indianapolis, IN`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  other: {
    "geo.region": "US-IN",
    "geo.placename": "Indianapolis",
  },
};

const localBusinessJsonLd = getLocalBusinessJsonLd();
const organizationJsonLd = getOrganizationJsonLd();
const webSiteJsonLd = getWebSiteJsonLd();

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
        <JsonLd data={[localBusinessJsonLd, organizationJsonLd, webSiteJsonLd]} />
      </head>
      <body className="font-body antialiased">
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
