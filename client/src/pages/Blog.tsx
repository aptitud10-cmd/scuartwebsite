/**
 * Blog page - Insights on AI, Automation, and Digital Products
 * Design: Editorial premium dark theme
 */

import Navigation from "@/components/Navigation";
import ContactFormModal from "@/components/ContactFormModal";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useState } from "react";

// Blog posts data
const blogPosts = [
  {
    id: 1,
    slug: "ai-automation-future",
    title: "The Future of AI-Powered Automation",
    excerpt: "How intelligent automation is reshaping business operations. A deep dive into systems that work while you sleep.",
    date: "2026-01-15",
    readTime: "12 min",
    category: "AI",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663270033289/dlkWTFFehciIHlvZ.webp",
  },
  {
    id: 2,
    slug: "saas-product-design",
    title: "Designing SaaS Products for Scale",
    excerpt: "Principles for building scalable, user-centric SaaS platforms. From architecture to user experience.",
    date: "2026-01-10",
    readTime: "10 min",
    category: "Product",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663270033289/QIzNlIkvPEJtGCnp.webp",
  },
  {
    id: 3,
    slug: "web-performance-2026",
    title: "Web Performance: The New Competitive Advantage",
    excerpt: "Why speed matters more than ever. Technical strategies for achieving lightning-fast digital experiences.",
    date: "2026-01-05",
    readTime: "8 min",
    category: "Development",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663270033289/zLTvOMcJuAafIhtG.webp",
  },
  {
    id: 4,
    slug: "design-systems-thinking",
    title: "Design Systems & Systems Thinking",
    excerpt: "How design systems enable scalable, intentional digital products. Building for growth from day one.",
    date: "2025-12-28",
    readTime: "11 min",
    category: "Design",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663270033289/TmDOHJsEIOxuhcGf.webp",
  },
  {
    id: 5,
    slug: "automation-workflows",
    title: "Building Intelligent Workflows",
    excerpt: "Practical approaches to automation that eliminate friction and improve business efficiency.",
    date: "2025-12-20",
    readTime: "9 min",
    category: "Automation",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663270033289/dlkWTFFehciIHlvZ.webp",
  },
  {
    id: 6,
    slug: "digital-product-strategy",
    title: "Digital Product Strategy for 2026",
    excerpt: "Strategic frameworks for building digital products that matter. From conception to market fit.",
    date: "2025-12-15",
    readTime: "13 min",
    category: "Strategy",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663270033289/rSIuevWDPSGIkBES.webp",
  },
];

const categories = ["All", "AI", "Automation", "Product", "Design", "Development", "Strategy"];

export default function Blog() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation onContactClick={() => setIsContactModalOpen(true)} />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 px-4">
        {/* Background */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663270033289/fqYqZQVVYEZqUuDT.webp"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <div className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-6">
            <p className="text-sm font-light tracking-widest text-cyan-300">INSIGHTS & PERSPECTIVES</p>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-light mb-6">
            Insights on AI,
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Automation & Digital Products
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-light">
            Thoughts on systems thinking, product design, and the future of intelligent digital experiences.
          </p>
        </motion.div>
      </section>

      {/* Categories Filter */}
      <section className="px-4 py-12 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`px-6 py-2 rounded-full font-light text-sm transition-all duration-300 ${
                  index === 0
                    ? "bg-cyan-500 text-black font-semibold"
                    : "border border-gray-800 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-4 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <a className="group block h-full">
                    <div className="relative overflow-hidden rounded-lg h-96 cursor-pointer">
                      {/* Image */}
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                      {/* Category Badge */}
                      <div className="absolute top-6 left-6">
                        <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
                          {post.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6">
                        <h3 className="text-2xl font-light mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        {/* Meta */}
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        {/* Arrow */}
                        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowRight className="w-5 h-5 text-cyan-400" />
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Build Something Extraordinary?
            </h3>
            <p className="text-gray-400">
              Let's discuss your vision. Whether it's an AI-powered platform, automation system, or high-performance SaaS product.
            </p>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Start a Conversation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactFormModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

      {/* Footer */}
      <footer className="relative py-16 px-4 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="text-lg font-semibold mb-4">SCUART</h4>
              <p className="text-gray-500 text-sm">
                Premium digital studio & product lab specializing in AI, automation, and SaaS.
              </p>
            </div>
            <div>
              <h5 className="text-sm font-semibold uppercase tracking-widest mb-4 text-gray-400">Company</h5>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="/" className="hover:text-cyan-400 transition-colors">Home</a></li>
                <li><a href="/#systems" className="hover:text-cyan-400 transition-colors">Systems</a></li>
                <li><a href="/blog" className="hover:text-cyan-400 transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-semibold uppercase tracking-widest mb-4 text-gray-400">Legal</h5>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-semibold uppercase tracking-widest mb-4 text-gray-400">Contact</h5>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="mailto:info@scuart.com" className="hover:text-cyan-400 transition-colors">info@scuart.com</a></li>
                <li><a href="https://wa.me/13478489720" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">+1 (347) 848-9720</a></li>
              </ul>
            </div>
          </div>
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
