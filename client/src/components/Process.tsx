const steps = [
  {
    number: '1',
    title: 'Discovery',
    description: 'Understanding your goals and needs through an in-depth kickoff meeting.',
  },
  {
    number: '2',
    title: 'Strategy',
    description: 'Defining the site\'s structure and content before moving into design.',
  },
  {
    number: '3',
    title: 'Design',
    description: 'Creating high-fidelity mockups and iterating based on your feedback.',
  },
  {
    number: '4',
    title: 'Development',
    description: 'Building and optimizing your site for performance, accessibility, and conversion.',
  },
];

export default function Process() {
  return (
    <section className="section-spacing">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Process</h2>
          <p className="text-foreground/60 text-lg">
            Our approach for designing and delivering great websites.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent" />
              )}

              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent text-background flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
