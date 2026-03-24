export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">Scuart</h3>
            <p className="text-sm text-foreground/60">
              Premium web design and development agency.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#portfolio" className="text-sm text-foreground/60 hover:text-accent transition-colors">Portfolio</a></li>
              <li><a href="#about" className="text-sm text-foreground/60 hover:text-accent transition-colors">About</a></li>
              <li><a href="#contact" className="text-sm text-foreground/60 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-foreground/60 hover:text-accent transition-colors">Strategy</a></li>
              <li><a href="#" className="text-sm text-foreground/60 hover:text-accent transition-colors">Design</a></li>
              <li><a href="#" className="text-sm text-foreground/60 hover:text-accent transition-colors">Development</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-foreground/60 hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-foreground/60 hover:text-accent transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-foreground/50">
            © 2026 Scuart. All rights reserved.
          </p>
          <p className="text-sm text-foreground/50 mt-4 md:mt-0">
            Crafted with precision
          </p>
        </div>
      </div>
    </footer>
  );
}
