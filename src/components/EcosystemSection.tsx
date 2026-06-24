"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Cpu, Database } from "lucide-react";

const partners = [
  {
    name: "NVIDIA Inception",
    icon: Cpu,
    description: "GPU-accelerated inference pipeline",
  },
  {
    name: "AWS for Health",
    icon: Cloud,
    description: "HIPAA-compliant cloud infrastructure",
  },
  {
    name: "Google Cloud AI",
    icon: Database,
    description: "Scalable training & model serving",
  },
];

export default function EcosystemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-3 font-mono">
            Strategic Partners
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Built for the Modern{" "}
            <span className="text-[#4d7cff]">Compute Ecosystem</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="group relative flex flex-col items-center text-center p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-white/5 group-hover:bg-white/10 transition-colors">
                <partner.icon className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors">
                {partner.name}
              </h4>
              <p className="text-sm text-gray-500 mt-2">{partner.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-[#4d7cff]/30 to-transparent"
        />
      </div>
    </section>
  );
}
