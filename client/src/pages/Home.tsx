/**
 * SCUART - Premium Digital Studio & Product Lab
 * Design: Editorial Futuristic Dark Theme
 * Philosophy: Design + Technology + Systems Thinking
 * Sections: Hero, Systems, Philosophy, Case Studies, CTA, Footer
 */

import AnimatedSection from "@/components/AnimatedSection";
import FloatingParticles from "@/components/FloatingParticles";
import Navigation from "@/components/Navigation";
import ContactFormModal from "@/components/ContactFormModal";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    setIsSubscribing(true);
    try {
      const response = await fetch("https://formspree.io/f/xgovelga", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, type: "newsletter" }),
      });

      if (response.ok) {
        toast.success("Thanks for subscribing!");
        setEmail("");
      } else {
        toast.error("Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Subscription failed. Please try again.");
    } finally {
      setIsSubscribing(false);
    }
  };

  // Systems/Pillars
  const systems = [
    {
      title: "AI Integration",
      description: "Intelligent systems that learn, adapt, and scale with your business.",
      icon: "⚡",
    },
    {
      title: "Automation",
      description: "Eliminate friction. Build workflows that work while you sleep.",
      icon: "🔄",
    },
    {
      title: "SaaS Products",
      description: "Scalable platforms designed for growth and user delight.",
      icon: "📊",
    },
    {
      title: "High-Performance Web",
      description: "Digital experiences that convert. Speed, design, and strategy aligned.",
      icon: "🚀",
    },
  ];

  // Case Studies - Real Projects
  const caseStudies = [
    {
      id: 1,
      title: "Eva Beauty Unisex",
      category: "Beauty & Salon",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663270033289/KQZjlYHYSuqHQBhy.webp",
      challenge: "Transform salon operations with seamless booking and e-commerce",
      result: "150% increase in online bookings, 200% revenue growth",
      tags: ["React", "E-commerce", "Booking System"],
      url: "https://evabeautyunisex.com/",
    },
    {
      id: 2,
      title: "Etnia Braids",
      category: "Hair Salon",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663270033289/VyrKsuJTfkBFxfSL.webp",
      challenge: "Create portfolio showcase with integrated booking system",
      result: "40% increase in client inquiries, premium positioning",
      tags: ["Next.js", "Portfolio", "Mobile Responsive"],
      url: "https://etniabraids.com/",
    },
    {
      id: 3,
      title: "Arriba Gold",
      category: "E-commerce",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663270033289/gkkdKfkIsmYuqEuW.webp",
      challenge: "Build scalable e-commerce platform for premium chocolate brand",
      result: "International shipping enabled, 300% sales increase",
      tags: ["Shopify", "Payment Gateway", "Inventory"],
      url: "https://arribagold.com/",
    },
    {
      id: 4,
      title: "Healthy Choice NY",
      category: "Food & Nutrition",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663270033289/XuMZOMnYyftTmACy.webp",
      challenge: "Streamline catering orders and meal customization",
      result: "50% reduction in order processing time",
      tags: ["React", "Menu System", "Ordering"],
      url: "https://healthychoicenewyork.com/",
    },
  ];

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
            backgroundImage: "url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663270033289/BgCjugAjtjOXkddU.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black z-1" />

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
              We build intelligent digital experiences for ambitious brands. AI-powered automation, scalable SaaS products, and high-performance web platforms that drive real business impact.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="#case-studies">
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-6 text-base">
                  Explore Our Work
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
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
                <p className="text-gray-400 leading-relaxed">{system.description}</p>

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
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663270033289/fqYqZQVVYEZqUuDT.webp"
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
                  We believe the best digital products emerge at the intersection of elegant design and intelligent technology.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Every decision is grounded in systems thinking—understanding how components interact, scale, and create lasting value for your users and business.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Intentional Design</h4>
                    <p className="text-gray-400 text-sm">Every pixel serves a purpose</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-violet-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Scalable Architecture</h4>
                    <p className="text-gray-400 text-sm">Built to grow with your ambitions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Measurable Impact</h4>
                    <p className="text-gray-400 text-sm">Strategy aligned with metrics</p>
                  </div>
                </div>
              </div>
            </motion.div>
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
              <motion.a
                key={study.id}
                href={study.url}
                target="_blank"
                rel="noopener noreferrer"
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
                  <ExternalLink className="w-5 h-5 text-cyan-400" />
                </div>
              </motion.a>
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
              Let's discuss your vision. Whether it's an AI-powered platform, automation system, or high-performance SaaS product, we're ready to collaborate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-6 text-base rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </button>
              <a href="https://wa.me/13478489720?text=Hi%20SCUART%2C%20I%27m%20interested%20in%20discussing%20a%20project" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-gray-600 hover:bg-gray-900 px-8 py-6 text-base">
                  WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== NEWSLETTER SECTION ==================== */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-black to-gray-950 border-t border-gray-800">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-light">
              Stay Updated
            </h3>
            <p className="text-gray-400">
              Insights on AI, automation, and digital product design.
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
              />
              <Button
                type="submit"
                disabled={isSubscribing}
                className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold"
              >
                {isSubscribing ? "..." : "Subscribe"}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactFormModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

      {/* ==================== FOOTER ==================== */}
      <footer className="relative py-16 px-4 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h4 className="text-lg font-semibold mb-4">SCUART</h4>
              <p className="text-gray-500 text-sm">
                Premium digital studio & product lab specializing in AI, automation, and SaaS.
              </p>
            </div>

            {/* Links */}
            <div>
              <h5 className="text-sm font-semibold uppercase tracking-widest mb-4 text-gray-400">
                Company
              </h5>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#systems" className="hover:text-cyan-400 transition-colors">Our Systems</a></li>
                <li><a href="#case-studies" className="hover:text-cyan-400 transition-colors">Case Studies</a></li>
                <li><Link to="/blog" className="hover:text-cyan-400 transition-colors">Blog</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h5 className="text-sm font-semibold uppercase tracking-widest mb-4 text-gray-400">
                Legal
              </h5>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className="text-sm font-semibold uppercase tracking-widest mb-4 text-gray-400">
                Contact
              </h5>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><button onClick={() => setIsContactModalOpen(true)} className="hover:text-cyan-400 transition-colors text-left">info@scuart.com</button></li>
                <li><a href="https://wa.me/13478489720" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">+1 (347) 848-9720</a></li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
              <p>&copy; 2026 SCUART. All rights reserved.</p>
              <p>Crafted with intention. Built to scale.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
