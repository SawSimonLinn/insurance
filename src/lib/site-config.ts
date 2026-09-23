export const siteConfig = {
  name: "Ventures Quality Insurance Agency, LLC",
  shortName: "Ventures Quality Insurance",
  legalName: "Ventures Quality Insurance Agency, LLC",
  url: "https://www.venturesqualityinsurance.com",
  description:
    "Ventures Quality Insurance Agency is a family-owned, independent insurance agency in Indianapolis, IN offering Auto, Home, Commercial, Life, and Health insurance tailored to your needs.",
  logo: "/company-logo.png",
  ogImage: "/insurance-hub.png",
  phone: "+13173001906",
  phoneDisplay: "(317) 300-1906",
  fax: "+13173001938",
  faxDisplay: "(317) 300-1938",
  email: "contact@venturesqualityinsurance.com",
  address: {
    streetAddress: "7774 Madison Avenue, Suite B",
    addressLocality: "Indianapolis",
    addressRegion: "IN",
    postalCode: "46227",
    addressCountry: "US",
  },
  addressDisplay: "7774 Madison Avenue, Suite B, Indianapolis, IN 46227",
  openingHours: [
    {
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/people/Ventures-Quality-Insurance-Agency-LLC/61583249963787/?checkpoint_src=any",
    "https://www.instagram.com/vquality_insurance/",
  ],
  areaServed: [
    { "@type": "City", name: "Indianapolis" },
    { "@type": "AdministrativeArea", name: "Marion County" },
    { "@type": "State", name: "Indiana" },
  ],
} as const;
