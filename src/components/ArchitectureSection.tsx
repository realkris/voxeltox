"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Image, Box, Sparkles } from "lucide-react";

function StreamCard({
  icon: Icon,
  title,
  description,
  color,
  delay,
  isInView,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
  delay: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="relative flex flex-col items-center text-center p-6 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm"
    >
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
        style={{ backgroundColor: `${color}15`, border: `1px solid ${color}30` }}
      >
        <Icon className="w-7 h-7" style={{ color }} />
      </div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function FlowLine({ delay, isInView }: { delay: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={isInView ? { scaleY: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="hidden md:block absolute left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[#00f0ff]/60 to-transparent origin-top"
    />
  );
}

export default function ArchitectureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="architecture" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-[#39ff14] mb-3 font-mono">
            System Architecture
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Multi-Modal Fusion{" "}
            <span className="text-[#4d7cff]">Pipeline</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Three distinct data streams converge in our unified latent space, enabling
            unprecedented binding affinity prediction.
          </p>
        </motion.div>

        {/* Input Streams */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <StreamCard
            icon={FileText}
            title="1D Sequences & Literature"
            description="PubMed literature, SMILES strings, and protein sequences processed by fine-tuned LLMs for deep contextual reasoning."
            color="#00f0ff"
            delay={0.2}
            isInView={isInView}
          />
          <StreamCard
            icon={Image}
            title="2D Cryo-EM Images"
            description="High-resolution structural imagery processed by Vision Transformers for spatial feature extraction."
            color="#39ff14"
            delay={0.4}
            isInView={isInView}
          />
          <StreamCard
            icon={Box}
            title="3D Protein Voxels"
            description="Volumetric occupancy grids processed by World Model spatial computing for temporal dynamics."
            color="#4d7cff"
            delay={0.6}
            isInView={isInView}
          />
        </div>

        {/* Flow arrows */}
        <div className="relative flex items-center justify-center my-8">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center gap-2"
          >
            <div className="hidden md:flex items-center gap-1">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1 + i * 0.2, duration: 0.3 }}
                  className="w-2 h-2 rounded-full bg-[#00f0ff]"
                />
              ))}
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: 60 } : {}}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="h-px bg-gradient-to-r from-[#00f0ff] to-[#4d7cff]"
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: [0, 1, 0.8, 1] } : {}}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="text-[#00f0ff] text-2xl"
            >
              ▼
            </motion.div>
            <div className="hidden md:flex items-center gap-1">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: 60 } : {}}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="h-px bg-gradient-to-r from-[#4d7cff] to-[#39ff14]"
              />
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1 + i * 0.2, duration: 0.3 }}
                  className="w-2 h-2 rounded-full bg-[#39ff14]"
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Shared Latent Space */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="relative mx-auto max-w-lg p-8 rounded-2xl border border-[#4d7cff]/30 bg-gradient-to-br from-[#4d7cff]/10 via-[#0a0a0f] to-[#00f0ff]/5"
        >
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-[#00f0ff]/20 via-[#4d7cff]/20 to-[#39ff14]/20 blur-sm -z-10" />
          <div className="text-center">
            <Sparkles className="w-8 h-8 text-[#4d7cff] mx-auto mb-3" />
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#00f0ff] to-[#4d7cff] bg-clip-text text-transparent">
              Shared Latent Space
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              Cross-attention mechanisms unify all modalities into a single, physics-aware representation.
            </p>
          </div>
        </motion.div>

        {/* Output arrow */}
        <div className="flex justify-center my-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.8, duration: 0.5 }}
            className="text-[#39ff14] text-2xl"
          >
            ▼
          </motion.div>
        </div>

        {/* Output */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 2 }}
          className="mx-auto max-w-md p-6 rounded-xl border border-[#39ff14]/30 bg-[#39ff14]/5 text-center"
        >
          <h4 className="text-lg font-bold text-[#39ff14]">
            High-Affinity Lead Compound
          </h4>
          <p className="text-sm text-gray-400 mt-2">
            Deterministic output with binding dynamics validated against 4D spatial constraints.
          </p>
        </motion.div>
      </div>

      <FlowLine delay={1} isInView={isInView} />
    </section>
  );
}
