import { Mail, Instagram, Linkedin, Twitter } from 'lucide-react';

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

const navLinks = [
  { label: 'Services', id: 'services' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

const serviceLinks = [
  { label: 'Strategy', id: 'services' },
  { label: 'Design', id: 'services' },
  { label: 'Development', id: 'services' },
];

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { icon: Twitter, label: 'Twitter / X', href: 'https://x.com/' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1 space-y-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl font-bold gradient-text"
            >
              Scuart
            </button>
            <p className="text-sm text-foreground/55 leading-relaxed">
              Premium web design and development agency. We build websites that grow your business.
            </p>
            <a
              href="mailto:aptitud10@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
            >
              <Mail size={14} />
              aptitud10@gmail.com
            </a>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm tracking-wider uppercase text-foreground/50">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-foreground/60 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm tracking-wider uppercase text-foreground/50">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-foreground/60 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm tracking-wider uppercase text-foreground/50">Follow us</h4>
            <ul className="space-y-2.5">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={14} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/40">
            © 2026 Scuart. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="mailto:aptitud10@gmail.com" className="text-xs text-foreground/40 hover:text-accent transition-colors">Privacy Policy</a>
            <a href="mailto:aptitud10@gmail.com" className="text-xs text-foreground/40 hover:text-accent transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
