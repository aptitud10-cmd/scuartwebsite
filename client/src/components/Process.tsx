const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'An in-depth kickoff to understand your goals, audience, and competitive landscape. We leave no question unanswered.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Defining site structure, messaging hierarchy, and content before a single pixel is designed.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'High-fidelity mockups crafted with precision. We iterate based on your feedback until every detail is right.',
  },
  {
    number: '04',
    title: 'Development',
    description: 'Pixel-perfect build, optimized for speed, SEO, and conversion. Launched and ready to grow.',
  },
];

export default function Process() {
  return (
    <section id="process" className="section-spacing bg-card/30">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-16">
          <p className="section-label">How we work</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Process</h2>
          <p className="text-foreground/60 text-lg leading-relaxed">
            A structured, transparent approach — so you always know what's happening and why.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
            >
              {/* Connector — desktop only */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%-1rem)] w-8 h-px bg-gradient-to-r from-accent/40 to-transparent z-10" />
              )}

              <div className="p-6 rounded-2xl border border-border bg-background/50 hover:border-accent/40 hover:bg-card/60 transition-all duration-300 h-full">
                {/* Step number */}
                <div className="mb-5">
                  <span className="text-4xl font-bold gradient-text">{step.number}</span>
                </div>

                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-foreground/55 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
