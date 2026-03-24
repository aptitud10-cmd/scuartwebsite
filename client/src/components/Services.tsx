import { Compass, Palette, Code } from 'lucide-react';

const services = [
  {
    number: '01',
    icon: Compass,
    title: 'Strategy',
    description: 'We start with the why. Clear positioning, audience research, and site architecture before any visual decisions. A well-defined strategy is the foundation of every high-performing website.',
    tags: ['Brand positioning', 'Site architecture', 'Competitor research'],
  },
  {
    number: '02',
    icon: Palette,
    title: 'Design',
    description: 'Beautiful isn\'t enough — it has to convert. We craft interfaces that balance aesthetics with usability, guiding visitors through a clear journey toward action.',
    tags: ['UI/UX design', 'Responsive layouts', 'Design systems'],
  },
  {
    number: '03',
    icon: Code,
    title: 'Development',
    description: 'Pixel-perfect implementation on a fast, scalable foundation. We build with modern technologies, optimized for performance, accessibility, and long-term maintainability.',
    tags: ['React & Next.js', 'Performance optimization', 'SEO ready'],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-spacing">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-16">
          <p className="section-label">What we do</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Services</h2>
          <p className="text-foreground/60 text-lg leading-relaxed">
            Our end-to-end approach to building websites that look great and perform even better.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                className="group relative p-8 rounded-2xl border border-border bg-card/30 hover:border-accent/40 hover:bg-card/60 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5"
              >
                {/* Large background number */}
                <div className="absolute top-6 right-6 text-7xl font-bold text-foreground/5 font-serif leading-none select-none">
                  {service.number}
                </div>

                <div className="relative z-10 space-y-5">
                  <div className="inline-flex p-3 rounded-xl bg-accent/10 border border-accent/20 group-hover:bg-accent/15 transition-colors">
                    <Icon className="text-accent" size={26} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-foreground/60 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-accent/8 text-accent/80 border border-accent/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
