import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Services', id: 'services' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    scrollTo(id);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border/80 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo — scrolls to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-2xl font-bold gradient-text tracking-tight"
        >
          Scuart
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="text-sm text-foreground/70 hover:text-accent transition-colors duration-300 font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="btn-primary text-sm"
          >
            Start a Project
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground/70 hover:text-accent transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-border bg-background/95 backdrop-blur-md">
          <div className="container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-foreground/70 hover:text-accent transition-colors py-3 border-b border-border/30 last:border-0 font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="btn-primary text-center mt-4"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
