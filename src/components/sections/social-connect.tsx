import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";

const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' }
];

export default function SocialConnect() {
  return (
    <section className="py-12 text-center">
        <div className="container mx-auto px-4">
            <h2 className="font-headline text-2xl font-bold text-primary mb-6">Connect With Us</h2>
            <p className="text-lg text-foreground/80 mb-6">Stay connected for updates, resources, and insurance tips:</p>
            <div className="flex justify-center space-x-6">
                {socialLinks.map(link => (
                    <a key={link.name} href={link.url} aria-label={link.name} className="flex items-center gap-2 text-lg text-primary hover:text-accent transition-colors">
                        <link.icon size={24} />
                        <span>{link.name}</span>
                    </a>
                ))}
            </div>
        </div>
    </section>
  );
}
