const awards = [
  {
    icon: '🏆',
    title: 'Awwwards',
    subtitle: 'Honorable Mention',
  },
  {
    icon: '⚡',
    title: 'FWA',
    subtitle: 'Site of the Day',
  },
  {
    icon: '★',
    title: 'CSS Design',
    subtitle: 'Website of the Day',
  },
];

const stats = [
  { value: '50+', label: 'Projects completed' },
  { value: '30+', label: 'Happy clients' },
  { value: '8', label: 'Countries served' },
  { value: '10+', label: 'Years of craft' },
];

export default function About() {
  return (
    <section id="about" className="section-spacing">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — text content */}
          <div className="space-y-10">
            <div>
              <p className="section-label">Who we are</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We are a boutique web agency focused on creating simple, impactful digital
                experiences. By combining strategy, design, and development into one seamless
                process, we craft top-tier websites that help businesses grow and stand out.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed mt-4">
                Every project starts with a question: what does success look like for you?
                We work closely with each client to make sure the answer is reflected in every
                pixel and every line of code.
              </p>
            </div>

            {/* Awards */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-foreground/50">
                Recognition
              </h3>
              <div className="flex flex-wrap gap-4">
                {awards.map((award) => (
                  <div
                    key={award.title}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-card/40 hover:border-accent/30 transition-colors"
                  >
                    <span className="text-xl">{award.icon}</span>
                    <div>
                      <p className="font-semibold text-sm leading-tight">{award.title}</p>
                      <p className="text-xs text-foreground/50">{award.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 md:p-8 rounded-2xl border border-border bg-card/50 hover:border-accent/30 hover:bg-card/80 transition-all duration-300 text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-foreground/55 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
