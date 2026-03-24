import { Compass, Palette, Code } from 'lucide-react';

const services = [
  {
    icon: Compass,
    title: 'Strategy',
    description: 'Clear positioning and structure before any visual decisions.',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Modern websites that are beautiful, usable, and built to convert.',
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Fast, responsive, and scalable custom web development.',
  },
];

export default function Services() {
  return (
    <section className="section-spacing bg-card/50">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Services</h2>
          <p className="text-foreground/60 text-lg">
            Our comprehensive approach to building exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-xl border border-border bg-background/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="mb-6 inline-block p-3 rounded-lg bg-accent/10">
                  <Icon className="text-accent" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-foreground/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
