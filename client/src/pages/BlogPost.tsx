/**
 * Individual blog article page
 * Design: Editorial premium dark theme
 */

import Navigation from "@/components/Navigation";
import ContactFormModal from "@/components/ContactFormModal";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useState } from "react";

export default function BlogPost() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // In a real app, this would be fetched based on the slug from the URL
  const post = {
    title: "The Future of AI-Powered Automation",
    date: "2026-01-15",
    readTime: "12 min",
    category: "AI",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663270033289/rQsPILdApRkFAize.webp",
    author: "SCUART Team",
    content: `
      <p>Artificial intelligence and automation are no longer futuristic concepts—they're reshaping how businesses operate today. This article explores the practical applications and strategic considerations for implementing AI-powered automation systems.</p>

      <h2>Understanding Intelligent Automation</h2>
      <p>Intelligent automation combines AI, machine learning, and robotic process automation (RPA) to create systems that can learn, adapt, and improve over time. Unlike traditional automation, these systems don't just follow rigid rules—they understand context and make decisions.</p>

      <h2>Key Applications Across Industries</h2>
      <p>From customer service chatbots to predictive maintenance in manufacturing, AI automation is transforming every sector. The most successful implementations focus on eliminating repetitive tasks and enabling human teams to focus on strategic work.</p>

      <h2>Building Scalable Automation Systems</h2>
      <p>The architecture matters. Successful automation systems are designed with scalability in mind from day one. This means thinking about data pipelines, integration points, and how the system will evolve as your business grows.</p>

      <h2>The Human Element</h2>
      <p>Automation isn't about replacing people—it's about augmenting human capabilities. The most effective implementations combine AI efficiency with human judgment and creativity.</p>

      <h2>Strategic Implementation Framework</h2>
      <p>Start small, measure impact, and scale gradually. Identify high-impact, low-complexity processes first. Build internal expertise. Invest in data quality. These principles guide successful automation initiatives.</p>

      <h2>Looking Ahead</h2>
      <p>The future belongs to organizations that master the integration of AI and human intelligence. The question isn't whether to automate—it's how to automate strategically.</p>

      <p>Ready to explore automation opportunities for your business? <a href="mailto:info@scuart.com">Let's talk</a>.</p>
    `,
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation onContactClick={() => setIsContactModalOpen(true)} />

      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden pt-20">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 -mt-32 relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link href="/blog">
            <a className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-light transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </a>
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-black/40 backdrop-blur-md border border-gray-800 rounded-lg p-8 md:p-12 mb-12"
        >
          {/* Meta */}
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-semibold rounded-full uppercase tracking-widest">
              {post.category}
            </span>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Author & Share */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-black font-semibold text-lg">
                S
              </div>
              <div>
                <div className="font-semibold text-white">
                  {post.author}
                </div>
                <div className="text-sm text-gray-400">
                  Digital Studio
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="gap-2 border-gray-800 text-gray-300 hover:bg-gray-900 hover:text-cyan-400"
            >
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>
        </motion.div>

        {/* Article Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-black/40 backdrop-blur-md border border-gray-800 rounded-lg p-8 md:p-12 mb-12"
        >
          <div
            className="prose prose-invert max-w-none
              prose-headings:font-light prose-headings:text-white
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-p:font-light prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:text-cyan-300
              prose-strong:text-white prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>

        {/* Share Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-black/40 backdrop-blur-md border border-gray-800 rounded-lg p-8 text-center mb-12"
        >
          <h3 className="font-light text-2xl mb-3">
            Share This Article
          </h3>
          <p className="text-gray-400 mb-6 font-light">
            Help others discover insights on AI, automation, and digital products.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-gray-900 border border-gray-800 text-gray-300 hover:border-cyan-500 hover:text-cyan-400">
              Twitter
            </Button>
            <Button className="bg-gray-900 border border-gray-800 text-gray-300 hover:border-cyan-500 hover:text-cyan-400">
              LinkedIn
            </Button>
            <Button className="bg-gray-900 border border-gray-800 text-gray-300 hover:border-cyan-500 hover:text-cyan-400">
              Facebook
            </Button>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/30 rounded-lg p-12 text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="text-gray-300 text-lg mb-8 font-light max-w-2xl mx-auto">
            Whether it's an AI-powered platform, automation system, or high-performance SaaS product, we're ready to collaborate.
          </p>
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Start a Conversation
          </button>
        </motion.div>

        {/* Related Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-light mb-8">More Insights</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog">
              <a className="group block p-6 border border-gray-800 rounded-lg hover:border-cyan-500/50 transition-colors">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">Design</span>
                <h4 className="text-xl font-light mt-3 group-hover:text-cyan-400 transition-colors">Design Systems & Systems Thinking</h4>
                <p className="text-gray-400 text-sm mt-2 font-light">How design systems enable scalable, intentional digital products.</p>
              </a>
            </Link>
            <Link href="/blog">
              <a className="group block p-6 border border-gray-800 rounded-lg hover:border-cyan-500/50 transition-colors">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">Product</span>
                <h4 className="text-xl font-light mt-3 group-hover:text-cyan-400 transition-colors">Designing SaaS Products for Scale</h4>
                <p className="text-gray-400 text-sm mt-2 font-light">Principles for building scalable, user-centric SaaS platforms.</p>
              </a>
            </Link>
          </div>
        </motion.div>
      </article>

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
                <li><button onClick={() => setIsContactModalOpen(true)} className="hover:text-cyan-400 transition-colors text-left">info@scuart.com</button></li>
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
