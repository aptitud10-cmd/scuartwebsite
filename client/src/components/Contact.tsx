import { useState } from 'react';
import { Send, Mail, MessageSquare, Clock } from 'lucide-react';
import { toast } from 'sonner';

const budgetRanges = [
  'Under $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  'Over $50,000',
];

const contactInfo = [
  {
    icon: Mail,
    label: 'Email us',
    value: 'aptitud10@gmail.com',
    href: 'mailto:aptitud10@gmail.com',
  },
  {
    icon: MessageSquare,
    label: 'Prefer to chat?',
    value: 'Send us an email to schedule a call',
    href: 'mailto:aptitud10@gmail.com',
  },
  {
    icon: Clock,
    label: 'Response time',
    value: 'Within 24 hours',
    href: null,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    budget: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent!', {
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', message: '', budget: '' });
  };

  const inputClass = 'w-full px-4 py-3 rounded-lg border border-border bg-background/60 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all';

  return (
    <section id="contact" className="section-spacing bg-card/20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start max-w-5xl mx-auto">

          {/* Left — pitch + contact info */}
          <div className="space-y-10">
            <div>
              <p className="section-label">Get in touch</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to start a project?
              </h2>
              <p className="text-lg text-foreground/60 leading-relaxed">
                Tell us about your business and what you're trying to achieve.
                We'll come back to you quickly with ideas and next steps.
              </p>
            </div>

            {/* Contact info cards */}
            <div className="space-y-3">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4 p-4 rounded-xl border border-border/60 bg-card/30 hover:border-accent/30 transition-colors group">
                    <div className="p-2 rounded-lg bg-accent/10 shrink-0 mt-0.5">
                      <Icon size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/50 mb-0.5">{item.label}</p>
                      <p className="text-sm font-medium text-foreground/90 group-hover:text-accent transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a key={item.label} href={item.href}>
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-card/40 border border-border rounded-2xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/80">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground/80">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium mb-2 text-foreground/80">
                  Estimated budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={inputClass}
                  required
                >
                  <option value="">Select a range</option>
                  {budgetRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/80">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What are you building? What problem does it solve?"
                  rows={5}
                  className={`${inputClass} resize-none`}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2 py-4 text-base"
              >
                Send Message
                <Send size={17} />
              </button>

              <p className="text-center text-xs text-foreground/40">
                No spam. We respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
