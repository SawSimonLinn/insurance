import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";

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

export default function SocialConnect() {
  return (
    <section className="py-12 text-center">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-2xl font-bold text-primary mb-6">
          Connect With Us
        </h2>
        <p className="text-lg text-foreground/80 mb-6">
          Stay connected for updates, resources, and insurance tips:
        </p>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              aria-label={link.name}
              className="flex items-center gap-2 text-lg text-primary hover:text-accent transition-colors"
              target="_blank"
            >
              <link.icon size={24} />
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
