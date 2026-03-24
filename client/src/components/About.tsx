import { Award } from 'lucide-react';

const awards = [
  {
    icon: '🏆',
    title: 'Awwwards',
    subtitle: 'Honorable Mention',
  },
  {
    icon: '[fwa]',
    title: 'FWA',
    subtitle: 'Site of the Day',
  },
  {
    icon: '★',
    title: 'Icon',
    subtitle: 'Website of the Day',
  },
];

export default function About() {
  return (
    <section id="about" className="section-spacing">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We are focused on creating simple, impactful digital experiences. By combining strategy, design, and development, we craft top-tier websites that help businesses grow.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                Award-winning work for visionary clients
              </h3>
              <div className="grid grid-cols-3 gap-6">
                {awards.map((award, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div className="text-3xl">{award.icon}</div>
                    <p className="font-semibold text-sm">{award.title}</p>
                    <p className="text-xs text-foreground/50">{award.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Visual Element */}
          <div className="relative h-96 rounded-xl overflow-hidden border border-border bg-gradient-to-br from-accent/10 to-purple-500/10 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-purple-500/20" />
            <div className="relative z-10 text-center space-y-4">
              <div className="text-6xl font-bold gradient-text">
                10+
              </div>
              <p className="text-foreground/60">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
