/* Navigation Component — Editorial Cálido
 * Header flotante sobre crema translúcido, acento terracota.
 * Español (default del brief). El bilingüe ES/EN se suma en entrega posterior.
 */

import MagneticButton from "@/components/MagneticButton";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

interface NavigationProps {
  onContactClick?: () => void;
}

export default function Navigation({ onContactClick }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/services", label: "Servicios", isHash: false, isContact: false },
    { href: "/#case-studies", label: "Trabajo", isHash: true, isContact: false },
    { href: "/blog", label: "Notas", isHash: false, isContact: false },
    { href: "#", label: "Contacto", isHash: false, isContact: true },
  ];

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
      setMobileMenuOpen(false);
    }
  };

  const linkClass =
    "text-sm font-body text-tinta-suave hover:text-tinta transition-colors duration-300 relative group";
  const underline =
    "absolute -bottom-1 left-0 w-0 h-px bg-terracota group-hover:w-full transition-all duration-300";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-6 pb-6">
      <div className="container">
        <div className="bg-crema/80 backdrop-blur-md border border-borde px-6 py-4 flex items-center justify-between rounded-md shadow-sm">
          {/* Logo */}
          <Link href="/">
            <span className="text-xl font-display font-medium text-tinta cursor-pointer tracking-tight">
              SCUART
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              if (link.isContact) {
                return (
                  <button
                    key={link.label}
                    onClick={handleContactClick}
                    className={`${linkClass} cursor-pointer`}
                  >
                    {link.label}
                    <span className={underline} />
                  </button>
                );
              }

              if (link.isHash) {
                return (
                  <a key={link.href} href={link.href} className={linkClass}>
                    {link.label}
                    <span className={underline} />
                  </a>
                );
              }

              return (
                <Link key={link.href} href={link.href} className={linkClass}>
                  {link.label}
                  <span className={underline} />
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <MagneticButton strength={0.25}>
              <button
                type="button"
                onClick={handleContactClick}
                className="btn-primary text-sm px-5 py-2.5"
              >
                Empezá tu proyecto
              </button>
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-tinta hover:text-terracota transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 bg-crema/95 backdrop-blur-md border border-borde px-6 py-6 rounded-md animate-in fade-in slide-in-from-top-5 duration-300 shadow-sm">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                if (link.isContact) {
                  return (
                    <button
                      key={link.label}
                      onClick={handleContactClick}
                      className="text-base font-body text-tinta-suave hover:text-tinta transition-colors duration-300 py-2 text-left cursor-pointer"
                    >
                      {link.label}
                    </button>
                  );
                }

                if (link.isHash) {
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-base font-body text-tinta-suave hover:text-tinta transition-colors duration-300 py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-body text-tinta-suave hover:text-tinta transition-colors duration-300 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <button
                type="button"
                onClick={handleContactClick}
                className="btn-primary mt-2 w-full justify-center"
              >
                Empezá tu proyecto
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
