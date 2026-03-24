import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-background via-background to-card/30">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Tagline */}
          <div className="inline-block px-4 py-2 rounded-full border border-accent/30 bg-accent/5">
            <p className="text-sm text-accent font-medium">Strategic Web Design</p>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            We design{' '}
            <span className="gradient-text">modern websites</span>
            {' '}that turn visitors into customers
          </h1>

          {/* Subheading */}
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Strategic web design built to convert.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="btn-primary flex items-center justify-center gap-2">
              Book a Call
              <ArrowRight size={18} />
            </button>
            <button className="btn-secondary">
              View Case Study
            </button>
          </div>

          {/* Subtitle */}
          <div className="pt-12 border-t border-border/50">
            <p className="text-foreground/50 text-sm">
              We design digital experiences focused on clarity, conversion, and long-term value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
