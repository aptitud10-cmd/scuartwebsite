import { ExternalLink, Clock } from 'lucide-react';

const projects = [
  {
    category: 'Featured',
    type: 'Fintech App',
    title: 'Aurea Finance',
    description: 'Premium mobile banking application with elegant dark mode design, real-time transaction tracking, investment portfolio management, and secure payment processing.',
    status: 'coming-soon' as const,
    link: null,
    accentColor: 'from-amber-500/20 to-yellow-600/10',
    dotColor: 'bg-amber-400',
  },
  {
    category: 'Featured',
    type: 'E-Learning',
    title: 'EduLearn Platform',
    description: 'Modern online education platform featuring video courses, interactive lessons, progress tracking, certificates, and a comprehensive learning management system.',
    status: 'coming-soon' as const,
    link: null,
    accentColor: 'from-blue-500/20 to-indigo-600/10',
    dotColor: 'bg-blue-400',
  },
  {
    category: 'Beauty & Lifestyle',
    type: 'Salon',
    title: 'Etnia Braids',
    description: 'Vibrant website for an African braiding salon featuring online booking, gallery showcase, and a cultural-inspired design with colorful ethnic patterns.',
    status: 'live' as const,
    link: '#',
    accentColor: 'from-orange-500/20 to-red-600/10',
    dotColor: 'bg-orange-400',
  },
  {
    category: 'Beauty Salon',
    type: 'Luxury Spa',
    title: 'Eva Beauty Unisex',
    description: 'Elegant dark-themed website for a luxury unisex salon with appointment booking, service gallery, and premium spa aesthetics.',
    status: 'live' as const,
    link: '#',
    accentColor: 'from-rose-500/20 to-pink-600/10',
    dotColor: 'bg-rose-400',
  },
  {
    category: 'E-Commerce',
    type: 'Food & Beverage',
    title: 'Arriba Gold',
    description: 'Artisanal chocolate brand website showcasing premium Ecuadorian cacao products with elegant product photography and brand storytelling.',
    status: 'live' as const,
    link: '#',
    accentColor: 'from-yellow-700/20 to-amber-800/10',
    dotColor: 'bg-yellow-600',
  },
  {
    category: 'Restaurant',
    type: 'Food Service',
    title: 'Healthy Choice NY',
    description: 'Fresh and vibrant website for a healthy food restaurant with online ordering, catering services, and a location finder across New York.',
    status: 'live' as const,
    link: '#',
    accentColor: 'from-green-500/20 to-emerald-600/10',
    dotColor: 'bg-green-400',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-spacing bg-card/20">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-16">
          <p className="section-label">Selected work</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h2>
          <p className="text-foreground/60 text-lg leading-relaxed">
            Real projects built for real clients. Each one crafted with strategy, care, and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const isLive = project.status === 'live';
            const CardWrapper = isLive && project.link
              ? ({ children }: { children: React.ReactNode }) => (
                  <a
                    href={project.link!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-2xl border border-border bg-background/50 hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 overflow-hidden"
                  >
                    {children}
                  </a>
                )
              : ({ children }: { children: React.ReactNode }) => (
                  <div className="group rounded-2xl border border-border bg-background/50 overflow-hidden transition-all duration-300">
                    {children}
                  </div>
                );

            return (
              <CardWrapper key={project.title}>
                {/* Color accent bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${project.accentColor} opacity-80`} />

                <div className="p-7">
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${project.dotColor} shrink-0`} />
                      <div>
                        <p className="text-sm text-foreground/70 font-medium">{project.category}</p>
                        <p className="text-xs text-foreground/40">{project.type}</p>
                      </div>
                    </div>

                    {isLive ? (
                      <span className="flex items-center gap-1.5 text-xs text-accent font-medium">
                        <ExternalLink size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        Visit site
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-xs text-foreground/40 font-medium">
                        <Clock size={13} />
                        Coming soon
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>
              </CardWrapper>
            );
          })}
        </div>

        {/* CTA block */}
        <div className="mt-12 p-10 md:p-14 rounded-2xl border border-border bg-gradient-to-br from-accent/5 to-purple-600/5 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Want to see your project here?</h3>
          <p className="text-foreground/60 mb-8 max-w-md mx-auto">
            Let's build something that you're proud to show the world.
          </p>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}
