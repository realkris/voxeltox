"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FooterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer id="contact" className="relative py-28 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-3">
            Get in Touch
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Interested in what we&apos;re building?
          </h3>
          <p className="text-zinc-400 mb-8 max-w-md mx-auto">
            We&apos;re open to conversations with investors, pharma partners, and compute providers
            who share our vision for the future of drug discovery.
          </p>
          <a
            href="mailto:question@voxeltox.space"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-zinc-200 transition-colors"
          >
            question@voxeltox.space
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Footer */}
        <div className="border-t border-white/[0.06] pt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-2.5">
              <img src="/icon.svg" alt="VoxelTox" className="w-6 h-6" />
              <span className="text-sm font-medium text-zinc-400">VoxelTox AI</span>
            </Link>

            <nav className="flex items-center gap-6">
              <Link href="/technology" className="text-xs text-zinc-500 hover:text-white transition-colors">
                Technology
              </Link>
              <Link href="/team" className="text-xs text-zinc-500 hover:text-white transition-colors">
                Team
              </Link>
              <a href="mailto:question@voxeltox.space" className="text-xs text-zinc-500 hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-[11px] text-zinc-600">
              &copy; 2026 VoxelTox AI (沃森生科). All rights reserved.
            </p>
            <p className="text-[11px] text-zinc-600">
              voxeltox.space
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
