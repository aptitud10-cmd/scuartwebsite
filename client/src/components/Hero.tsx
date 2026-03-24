import { ArrowRight, ChevronDown } from 'lucide-react';

const stats = [
  { value: '50+', label: 'Projects delivered' },
  { value: '30+', label: 'Clients worldwide' },
  { value: '10+', label: 'Years of experience' },
  { value: '100%', label: 'Client satisfaction' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 hero-grid opacity-40 pointer-events-none" />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">

          {/* Tagline pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse shrink-0" />
            <p className="text-sm text-accent font-medium tracking-wide">Strategic Web Design & Development</p>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            We build websites that{' '}
            <span className="gradient-text">turn visitors</span>
            <br className="hidden sm:block" />
            {' '}into customers
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Strategy, design, and development — delivered as one seamless process.
            We craft digital experiences that grow your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a
              href="#contact"
              className="btn-primary flex items-center justify-center gap-2 text-base px-8 py-4"
            >
              Start a Project
              <ArrowRight size={18} />
            </a>
            <a
              href="#portfolio"
              className="btn-secondary flex items-center justify-center gap-2 text-base px-8 py-4"
            >
              View Our Work
            </a>
          </div>

          {/* Stats row */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-border/40">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center space-y-1">
                <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-foreground/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-foreground/30 hover:text-accent transition-colors duration-300"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
