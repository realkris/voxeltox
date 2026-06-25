"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function TeamPage() {
  return (
    <main className="pt-24 pb-20">
      {/* Header */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-4"
          >
            Leadership
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-zinc-400 max-w-xl mx-auto"
          >
            Cross-disciplinary expertise at the intersection of AI systems, 
            spatial computing, and computational biology.
          </motion.p>
        </div>
      </section>

      {/* Founder */}
      <section className="px-6 py-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 md:p-10 rounded-2xl border border-white/[0.06] bg-white/[0.015]"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="shrink-0">
                <img
                  src="/team-tensor.png"
                  alt="Tensor"
                  className="w-36 h-36 md:w-44 md:h-44 rounded-xl object-cover object-top"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white">Tensor</h2>
                <p className="text-sky-400 text-sm font-medium mt-1">Founder & CEO</p>

                <p className="text-zinc-400 mt-4 leading-relaxed text-[15px]">
                  Leading the vision to bring autonomous driving perception technology to molecular 
                  dynamics — transforming drug discovery from static probability screening into 
                  4D deterministic spatial-temporal prediction.
                </p>

                <div className="mt-6">
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-3">Focus Areas</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Multi-modal Sensor Fusion",
                      "World Models",
                      "LLM Systems",
                      "4D Spatial Computing",
                      "Computational Drug Discovery",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-[11px] rounded-md border border-white/[0.08] bg-white/[0.03] text-zinc-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hiring */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-10 rounded-xl border border-white/[0.06] bg-white/[0.015]"
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              We&apos;re building the team.
            </h3>
            <p className="text-zinc-400 text-sm max-w-md mx-auto mb-6">
              Looking for exceptional researchers and engineers at the intersection
              of spatial computing, deep learning, and molecular biology.
            </p>
            <a
              href="mailto:tzhang@voxeltox.space"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-medium rounded-lg hover:bg-zinc-200 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
