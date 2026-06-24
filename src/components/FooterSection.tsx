"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";
import Link from "next/link";

export default function FooterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer id="contact" className="relative py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Email Capture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Get Early Access to Our Platform
          </h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Be among the first to integrate 4D spatial intelligence into your drug discovery pipeline.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@pharma.com"
                required
                className="w-full px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#00f0ff]/50 focus:ring-1 focus:ring-[#00f0ff]/30 transition-all"
              />
              <button
                type="submit"
                className="shrink-0 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00f0ff] to-[#4d7cff] rounded-full text-black font-semibold hover:scale-105 transition-transform duration-300"
              >
                <Send className="w-4 h-4" />
                Subscribe
              </button>
            </form>
          ) : (
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-[#39ff14] font-medium"
            >
              Thank you! We&apos;ll be in touch soon.
            </motion.p>
          )}
        </motion.div>

        {/* Footer Links */}
        <div className="border-t border-white/5 pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00f0ff] to-[#39ff14] flex items-center justify-center">
                <span className="text-black font-bold text-xs">VT</span>
              </div>
              <span className="font-semibold text-lg text-white">VoxelTox AI</span>
            </Link>

            <nav className="flex items-center gap-8">
              <Link
                href="/technology"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Technology
              </Link>
              <Link
                href="/team"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Team
              </Link>
              <a
                href="#contact"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600">
              &copy; 2026 VoxelTox AI. All rights reserved.
            </p>
            <p className="text-xs text-gray-600 font-mono">
              voxeltox.space
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
