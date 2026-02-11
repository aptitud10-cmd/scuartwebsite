/* Navigation Component - Editorial Premium Dark Theme
 * Minimal floating header with strategic accents
 * Design: Confident, clean, premium positioning
 */

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

interface NavigationProps {
  onContactClick?: () => void;
}

export default function Navigation({ onContactClick }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#systems", label: "Systems", isHash: true, isContact: false },
    { href: "/#case-studies", label: "Case Studies", isHash: true, isContact: false },
    { href: "/blog", label: "Insights", isHash: false, isContact: false },
    { href: "#", label: "Contact", isHash: false, isContact: true },
  ];

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-6 bg-gradient-to-b from-black/80 to-black/0 pb-6">
      <div className="container">
        <div className="bg-black/60 backdrop-blur-lg border border-gray-700/50 px-6 py-4 flex items-center justify-between rounded-lg shadow-lg hover:bg-black/70 transition-colors duration-300">
          {/* Logo */}
          <Link href="/">
            <span className="text-xl font-display font-semibold text-white cursor-pointer hover:text-cyan-400 transition-colors">
              SCUART
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => {
              if (link.isContact) {
                return (
                  <button
                    key={link.label}
                    onClick={handleContactClick}
                    className="text-sm font-light text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group cursor-pointer"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300" />
                  </button>
                );
              }

              if (link.isHash) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-light text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300" />
                  </a>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-light text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300" />
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={handleContactClick}
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-6 py-2 cursor-pointer"
            >
              Start a Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-black/70 backdrop-blur-lg border border-gray-700/50 px-6 py-6 rounded-lg animate-in fade-in slide-in-from-top-5 duration-300 shadow-lg">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                if (link.isContact) {
                  return (
                    <button
                      key={link.label}
                      onClick={handleContactClick}
                      className="text-base font-light text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 text-left cursor-pointer"
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
                      className="text-base font-light text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
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
                    className="text-base font-light text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button
                onClick={handleContactClick}
                className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold mt-2 w-full cursor-pointer"
              >
                Start a Project
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
