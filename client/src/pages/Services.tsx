/**
 * Services page - Detailed overview of SCUART's offerings
 * Design: Editorial premium dark theme, consistent with site
 */

import Navigation from "@/components/Navigation";
import ContactFormModal from "@/components/ContactFormModal";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import SplitText from "@/components/SplitText";
import MagneticButton from "@/components/MagneticButton";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Bot,
  LayoutDashboard,
  ShoppingCart,
  Paintbrush,
  Zap,
  Search,
  Palette,
  Code2,
  Rocket,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web Design & Development",
    description:
      "High-performance websites and web applications built with modern frameworks. From landing pages to complex platforms.",
    features: [
      "Custom responsive design",
      "React / Next.js development",
      "CMS integration",
      "SEO optimization",
    ],
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "AI Integration & Automation",
    description:
      "Intelligent systems that learn, adapt, and scale. Automate workflows, integrate AI, and build smarter products.",
    features: [
      "Custom AI chatbots",
      "Workflow automation",
      "Data processing pipelines",
      "API integrations",
    ],
  },
  {
    icon: <LayoutDashboard className="w-8 h-8" />,
    title: "SaaS Product Development",
    description:
      "Scalable software-as-a-service platforms designed for growth. From MVP to full-scale product.",
    features: [
      "Product architecture",
      "User dashboard design",
      "Subscription systems",
      "Analytics & reporting",
    ],
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "E-commerce Solutions",
    description:
      "Online stores that convert. Custom e-commerce platforms with seamless checkout and inventory management.",
    features: [
      "Custom storefront design",
      "Payment integration",
      "Inventory management",
      "Order automation",
    ],
  },
  {
    icon: <Paintbrush className="w-8 h-8" />,
    title: "Brand & Digital Identity",
    description:
      "Strategic brand systems that communicate your vision. From visual identity to comprehensive brand guidelines.",
    features: [
      "Logo & visual identity",
      "Brand strategy",
      "Design systems",
      "Digital asset creation",
    ],
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Performance Optimization",
    description:
      "Speed is revenue. We optimize existing digital products for maximum performance, accessibility, and conversion.",
    features: [
      "Core Web Vitals",
      "Load time optimization",
      "Accessibility (WCAG)",
      "Conversion rate optimization",
    ],
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

export default function Services() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white overflow-hidden">
        <Navigation onContactClick={() => setIsContactModalOpen(true)} />

        {/* ==================== HERO ==================== */}
        <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-6"
            >
              <p className="text-sm font-light tracking-widest text-cyan-300">
                WHAT WE DO
              </p>
            </motion.div>

            <div className="text-5xl md:text-7xl font-light leading-tight mb-6">
              <SplitText
                text="Design. Build. Scale."
                delay={0.3}
                staggerDelay={0.1}
                once={false}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed"
            >
              We combine strategic design with cutting-edge technology to build
              digital products that drive real business impact.
            </motion.p>
          </div>
        </section>

        {/* ==================== SERVICES GRID ==================== */}
        <section className="relative py-32 px-4 bg-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20 text-center"
            >
              <SplitText
                text="Our Services"
                as="h2"
                className="text-5xl md:text-6xl font-light mb-6"
              />
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                End-to-end digital solutions, from concept to launch and
                beyond.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 0 20px oklch(0.85 0.18 195 / 0.15)",
                  }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-8 rounded-lg border border-gray-800 hover:border-cyan-500/50 bg-gradient-to-br from-gray-900/50 to-black transition-all duration-300"
                >
                  <div className="text-cyan-400 mb-6">{service.icon}</div>

                  <h3 className="text-xl font-light mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <div className="w-1 h-1 rounded-full bg-cyan-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== PROCESS ==================== */}
        <section className="relative py-32 px-4 bg-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20 text-center"
            >
              <SplitText
                text="How We Work"
                as="h2"
                className="text-5xl md:text-6xl font-light mb-6"
              />
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                A proven process that turns ideas into high-performing digital
                products.
              </p>
            </motion.div>

            <div className="relative">
              <div className="hidden md:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
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
                    <div className="absolute left-0 md:relative md:left-auto md:mx-auto w-12 h-12 rounded-full border border-cyan-500/50 bg-black flex items-center justify-center mb-6 z-10">
                      <span className="text-cyan-400 font-semibold text-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="text-cyan-400 mb-4 md:flex md:justify-center">
                      {step.icon}
                    </div>

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

        {/* ==================== CTA ==================== */}
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
                Ready to Start
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                  Your Project?
                </span>
              </h2>

              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Tell us about your vision. We'll help you find the right
                approach and build something extraordinary.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <MagneticButton strength={0.2}>
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-6 text-base rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    Start a Project
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </section>

        <ContactFormModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        />
        <Footer onContactClick={() => setIsContactModalOpen(true)} />
      </div>
    </PageTransition>
  );
}
