import { ExternalLink } from 'lucide-react';

const projects = [
  {
    category: 'Featured',
    type: 'Fintech App',
    title: 'Aurea Finance',
    description: 'Premium mobile banking application with elegant dark mode design, real-time transaction tracking, investment portfolio management, and secure payment processing.',
    status: 'Coming Soon',
    link: null,
  },
  {
    category: 'Featured',
    type: 'E-Learning',
    title: 'EduLearn Platform',
    description: 'Modern online education platform featuring video courses, interactive lessons, progress tracking, certificates, and a comprehensive learning management system.',
    status: 'Coming Soon',
    link: null,
  },
  {
    category: 'Beauty & Lifestyle',
    type: 'Salon',
    title: 'Etnia Braids',
    description: 'Vibrant website for African braiding salon featuring online booking, gallery showcase, and cultural-inspired design with colorful ethnic patterns.',
    status: 'Visit Website',
    link: '#',
  },
  {
    category: 'Beauty Salon',
    type: 'Luxury Spa',
    title: 'Eva Beauty Unisex',
    description: 'Elegant dark-themed website for luxury unisex salon with appointment booking, service gallery, and premium spa aesthetics.',
    status: 'Visit Website',
    link: '#',
  },
  {
    category: 'E-Commerce',
    type: 'Food & Beverage',
    title: 'Arriba Gold',
    description: 'Artisanal chocolate brand website showcasing premium Ecuadorian cacao products with elegant product photography and brand storytelling.',
    status: 'Visit Website',
    link: '#',
  },
  {
    category: 'Restaurant',
    type: 'Food Service',
    title: 'Healthy Choice NY',
    description: 'Fresh and vibrant website for healthy food restaurant with online ordering, catering services, and location finder across New York.',
    status: 'Visit Website',
    link: '#',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-spacing bg-card/50">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h2>
          <p className="text-foreground/60 text-lg">
            Real projects we've built for our clients. Click to visit each live website.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl border border-border bg-background/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-accent font-semibold mb-1">
                    {project.category}
                  </p>
                  <p className="text-xs text-foreground/50">{project.type}</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-foreground/60 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <span className="text-sm text-accent font-medium">
                  {project.status}
                </span>
                {project.link && (
                  <ExternalLink
                    size={18}
                    className="text-foreground/40 group-hover:text-accent transition-colors"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-12 rounded-xl border border-border bg-card/50 text-center">
          <h3 className="text-2xl font-bold mb-4">Want to see your project here?</h3>
          <p className="text-foreground/60 mb-6">
            Let's build something amazing together
          </p>
          <button className="btn-primary">
            Start Project
          </button>
        </div>
      </div>
    </section>
  );
}
