/**
 * SCUART - Premium Digital Studio & Product Lab
 * Design: Editorial Futuristic Dark Theme
 * Philosophy: Design + Technology + Systems Thinking
 * Sections: Hero, Trusted By, Systems, Philosophy, How We Work, Case Studies, Metrics, Testimonials, CTA, Insights, Footer
 */

import FloatingParticles from "@/components/FloatingParticles";
import Navigation from "@/components/Navigation";
import ContactFormModal from "@/components/ContactFormModal";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Search,
  Palette,
  Code2,
  Rocket,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { caseStudies } from "@/data/caseStudies";

// Animated counter component for metrics
function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// Data
const systems = [
  {
    title: "AI Integration",
    description:
      "Intelligent systems that learn, adapt, and scale with your business.",
    icon: "⚡",
  },
  {
    title: "Automation",
    description:
      "Eliminate friction. Build workflows that work while you sleep.",
    icon: "🔄",
  },
  {
    title: "SaaS Products",
    description: "Scalable platforms designed for growth and user delight.",
    icon: "📊",
  },
  {
    title: "High-Performance Web",
    description:
      "Digital experiences that convert. Speed, design, and strategy aligned.",
    icon: "🚀",
  },
];

const clientLogos = [
  { name: "Eva Beauty Unisex" },
  { name: "Etnia Braids" },
  { name: "Arriba Gold" },
  { name: "Healthy Choice NY" },
];

const metrics = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const testimonials = [
  {
    quote:
      "SCUART transformed our online presence completely. Bookings increased by 150% in the first month after launch.",
    name: "Maria R.",
    role: "Owner",
    company: "Eva Beauty Unisex",
  },
  {
    quote:
      "Professional, creative, and incredibly responsive. They understood our brand vision from day one and delivered beyond expectations.",
    name: "Carlos M.",
    role: "Founder",
    company: "Arriba Gold",
  },
  {
    quote:
      "The booking system they built has streamlined our entire operation. Our clients love the seamless experience.",
    name: "Diana L.",
    role: "Manager",
    company: "Etnia Braids",
  },
];

const processSteps = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Discovery & Strategy",
    description:
      "We dive deep into your business goals, audience, and competitive landscape to define a clear digital strategy.",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Design & Prototyping",
    description:
      "Interactive wireframes and high-fidelity designs that bring your vision to life before a single line of code.",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Development & Integration",
    description:
      "Clean, scalable code built with modern frameworks. Every integration tested for performance and reliability.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Launch & Optimization",
    description:
      "Strategic launch with analytics, performance monitoring, and ongoing optimization for continuous growth.",
  },
];

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navigation onContactClick={() => setIsContactModalOpen(true)} />
      <FloatingParticles />

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('/images/hero-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.7,
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black z-1" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Tagline */}
            <div className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5">
              <p className="text-sm font-light tracking-widest text-cyan-300">
                DIGITAL STUDIO & PRODUCT LAB
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-tight tracking-tight">
              Design + Technology
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent font-normal">
                Systems Thinking
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              We build intelligent digital experiences for ambitious brands.
              AI-powered automation, scalable SaaS products, and
              high-performance web platforms that drive real business impact.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a href="#case-studies">
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-6 text-base">
                  Explore Our Work
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="px-8 py-6 border border-gray-600 rounded-lg text-white hover:bg-gray-900 transition-colors font-light"
              >
                Start a Conversation
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border border-cyan-500/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-cyan-500 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* ==================== TRUSTED BY SECTION ==================== */}
      <section className="relative py-16 px-4 bg-black border-b border-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-sm text-gray-500 uppercase tracking-widest mb-8"
          >
            Trusted by ambitious brands
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
          >
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="text-gray-500 hover:text-gray-300 transition-colors duration-300"
              >
                <span className="text-lg font-light tracking-wide">
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== SYSTEMS SECTION ==================== */}
      <section id="systems" className="relative py-32 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              Our Systems
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Four core pillars that define how we approach every project.
            </p>
          </motion.div>

          {/* Systems Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {systems.map((system, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-lg border border-gray-800 hover:border-cyan-500/50 bg-gradient-to-br from-gray-900/50 to-black hover:from-gray-900/80 transition-all duration-300"
              >
                {/* Icon */}
                <div className="text-5xl mb-6">{system.icon}</div>

                {/* Content */}
                <h3 className="text-2xl font-light mb-3">{system.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {system.description}
                </p>

                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-cyan-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PHILOSOPHY SECTION ==================== */}
      <section className="relative py-32 px-4 bg-black overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-lg overflow-hidden"
            >
              <img
                src="/images/philosophy-vision.webp"
                alt="Design + Technology Philosophy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-5xl md:text-6xl font-light mb-6">
                  Our Philosophy
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-4">
                  We believe the best digital products emerge at the
                  intersection of elegant design and intelligent technology.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Every decision is grounded in systems thinking—understanding
                  how components interact, scale, and create lasting value for
                  your users and business.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Intentional Design</h4>
                    <p className="text-gray-400 text-sm">
                      Every pixel serves a purpose
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-violet-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Scalable Architecture
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Built to grow with your ambitions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Measurable Impact</h4>
                    <p className="text-gray-400 text-sm">
                      Strategy aligned with metrics
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== HOW WE WORK SECTION ==================== */}
      <section id="process" className="relative py-32 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              How We Work
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A proven process that turns ideas into high-performing digital
              products.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connecting Line - desktop */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

            {/* Vertical Line - mobile */}
            <div className="md:hidden absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-cyan-500/30 via-cyan-500/30 to-transparent" />

            <div className="grid md:grid-cols-4 gap-8 md:gap-6 relative">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative pl-16 md:pl-0 md:text-center"
                >
                  {/* Step Number Circle */}
                  <div className="absolute left-0 md:relative md:left-auto md:mx-auto w-12 h-12 rounded-full border border-cyan-500/50 bg-black flex items-center justify-center mb-6 z-10">
                    <span className="text-cyan-400 font-semibold text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="text-cyan-400 mb-4 md:flex md:justify-center">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-light mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CASE STUDIES SECTION ==================== */}
      <section id="case-studies" className="relative py-32 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              Case Studies
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Real projects. Real results. Brands we've helped transform.
            </p>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Link key={study.id} to={`/case-study/${study.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-lg h-96 cursor-pointer"
                >
                  {/* Background Image */}
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Semi-transparent black overlay */}
                  <div className="absolute inset-0 bg-black/50" />

                  {/* Content - Full card layout */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    {/* Category Badge */}
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
                      {study.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>

                    {/* Result */}
                    <p className="text-gray-200 text-sm mb-4">
                      {study.result}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow - positioned in top right */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-cyan-400" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== METRICS SECTION ==================== */}
      <section className="relative py-24 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-light text-white mb-2">
                  <AnimatedCounter
                    value={metric.value}
                    suffix={metric.suffix}
                  />
                </div>
                <p className="text-gray-400 text-sm">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS SECTION ==================== */}
      <section className="relative py-32 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="p-8 rounded-lg border border-gray-800 hover:border-cyan-500/50 bg-gradient-to-br from-gray-900/50 to-black transition-all duration-300"
              >
                {/* Quote icon */}
                <div className="text-cyan-400 text-4xl mb-4 font-serif">
                  "
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 font-light italic">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-black font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="relative py-32 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl font-light">
              Ready to Build Something
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                Extraordinary?
              </span>
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Let's discuss your vision. Whether it's an AI-powered platform,
              automation system, or high-performance SaaS product, we're ready
              to collaborate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-6 text-base rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/13478489720?text=Hi%20SCUART%2C%20I%27m%20interested%20in%20discussing%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-gray-600 hover:bg-gray-900 px-8 py-6 text-base"
                >
                  WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== BLOG/INSIGHTS SECTION ==================== */}
      <section id="insights" className="relative py-32 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              Latest Insights
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Thoughts on design, technology, and building products that matter.
            </p>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Systems Thinking in Product Design",
                excerpt:
                  "How interconnected systems create better user experiences and scalable products.",
                date: "Feb 10, 2026",
                readTime: "5 min read",
                category: "Design",
              },
              {
                title: "AI Integration: Beyond the Hype",
                excerpt:
                  "Practical approaches to implementing AI that actually solve real business problems.",
                date: "Feb 5, 2026",
                readTime: "7 min read",
                category: "Technology",
              },
              {
                title: "Building SaaS Products That Scale",
                excerpt:
                  "Lessons learned from scaling products from 0 to 10k users and beyond.",
                date: "Jan 28, 2026",
                readTime: "6 min read",
                category: "Business",
              },
            ].map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-lg border border-gray-800 hover:border-cyan-500/50 transition-colors cursor-pointer"
              >
                <div className="mb-4">
                  <Link
                    to={`/blog?category=${article.category.toLowerCase()}`}
                  >
                    <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-light tracking-widest hover:bg-cyan-500/20 transition-colors cursor-pointer">
                      {article.category}
                    </span>
                  </Link>
                </div>
                <h3 className="text-xl font-light mb-3 group-hover:text-cyan-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/blog">
              <Button
                variant="outline"
                className="border-gray-600 hover:bg-gray-900 px-8 py-6"
              >
                View All Articles
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      {/* Footer */}
      <Footer onContactClick={() => setIsContactModalOpen(true)} />
    </div>
  );
}
