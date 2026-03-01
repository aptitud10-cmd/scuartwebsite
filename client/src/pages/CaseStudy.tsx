import { useEffect, useState, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import ContactFormModal from "@/components/ContactFormModal";
import Footer from "@/components/Footer";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";

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

export default function CaseStudy({
  params,
}: {
  params: { slug: string };
}) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const study = getCaseStudyBySlug(params.slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.slug]);

  if (!study) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Project Not Found</h1>
          <Link to="/">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-black">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const otherStudies = caseStudies.filter((cs) => cs.slug !== study.slug);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navigation onContactClick={() => setIsContactModalOpen(true)} />

      {/* ==================== HERO ==================== */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={study.heroImage}
          alt={study.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 z-10">
          <div className="max-w-6xl mx-auto">
            <Link to="/#case-studies">
              <span className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm mb-6 cursor-pointer">
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </span>
            </Link>
            <span className="block text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">
              {study.category}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light">
              {study.title}
            </h1>
          </div>
        </div>
      </section>

      {/* ==================== PROJECT OVERVIEW BAR ==================== */}
      <section className="relative py-12 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { label: "Client", value: study.title },
              { label: "Industry", value: study.industry },
              { label: "Timeline", value: study.timeline },
              {
                label: "Services",
                value: study.services.slice(0, 2).join(", "),
              },
            ].map((item) => (
              <div
                key={item.label}
                className="p-5 border border-gray-800 rounded-lg"
              >
                <p className="text-xs text-cyan-400 uppercase tracking-widest mb-2">
                  {item.label}
                </p>
                <p className="text-white font-light text-sm">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== THE CHALLENGE ==================== */}
      <section className="relative py-24 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-8">
              The Challenge
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              {study.challengeDetail}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================== OUR APPROACH ==================== */}
      <section className="relative py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-light mb-8">
                Our Approach
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed font-light mb-6">
                {study.solutionDetail}
              </p>
              <div className="flex flex-wrap gap-2">
                {study.services.map((service, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full border border-gray-700 text-gray-400"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-lg overflow-hidden"
            >
              <img
                src={study.image}
                alt={`${study.title} showcase`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== THE RESULTS ==================== */}
      <section className="relative py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              The Results
            </h2>
            <p className="text-gray-400 text-lg">{study.result}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {study.resultMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="p-8 border border-gray-800 rounded-lg text-center hover:border-cyan-500/50 transition-colors"
              >
                <div className="text-5xl md:text-6xl font-light text-cyan-400 mb-3">
                  <AnimatedCounter
                    value={metric.number}
                    suffix={metric.suffix}
                  />
                </div>
                <p className="text-gray-400 text-sm">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TECH STACK ==================== */}
      <section className="relative py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm text-gray-500 uppercase tracking-widest mb-6">
              Built With
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {study.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-sm font-light"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={study.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Visit Live Site
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ==================== TESTIMONIAL ==================== */}
      <section className="relative py-24 px-4 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-10 rounded-lg border border-gray-800 bg-gradient-to-br from-gray-900/50 to-black"
          >
            <div className="text-cyan-400 text-5xl mb-6 font-serif">"</div>
            <p className="text-gray-300 text-lg leading-relaxed font-light italic mb-8">
              {study.testimonial.quote}
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-black font-semibold text-sm">
                {study.testimonial.name.charAt(0)}
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-sm">
                  {study.testimonial.name}
                </p>
                <p className="text-gray-500 text-xs">
                  {study.testimonial.role}, {study.title}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="relative py-24 px-4 bg-black">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/30 rounded-lg p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-400 mb-8">
              Let's build something extraordinary together.
            </p>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-4 rounded-lg inline-flex items-center gap-2 transition-colors"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ==================== MORE PROJECTS ==================== */}
      <section className="relative py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light">More Projects</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {otherStudies.map((other, index) => (
              <Link key={other.id} to={`/case-study/${other.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-lg h-72 cursor-pointer"
                >
                  <img
                    src={other.image}
                    alt={other.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
                      {other.category}
                    </span>
                    <h3 className="text-xl font-light text-white group-hover:text-cyan-400 transition-colors">
                      {other.title}
                    </h3>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-cyan-400" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer onContactClick={() => setIsContactModalOpen(true)} />
      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
