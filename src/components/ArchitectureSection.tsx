"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Sparkles, Brain, Atom } from "lucide-react";
import Link from "next/link";

function StreamCard({
  icon: Icon,
  title,
  subtitle,
  description,
  color,
  delay,
  isInView,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
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
      <p className="text-xs uppercase tracking-wider mb-1" style={{ color }}>
        {subtitle}
      </p>
      <h4 className="text-lg font-semibold mb-2 text-white">{title}</h4>
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
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
            Core Architecture
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Multi-Modal Fusion{" "}
            <span className="text-[#4d7cff]">Pipeline</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto text-lg">
            VoxelTox treats drug discovery as a microscopic &ldquo;panoramic perception &amp; intelligent control&rdquo; system —
            mirroring how autonomous vehicles fuse LiDAR, cameras, and radar.
          </p>
        </motion.div>

        {/* Input Streams */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <StreamCard
            icon={Brain}
            title="1D Semantic Navigation Brain"
            subtitle="LLM Engine"
            description="Parses FASTA sequences, SMILES compound structures, and millions of biomedical papers to establish logical-semantic and functional target associations."
            color="#00f0ff"
            delay={0.2}
            isInView={isInView}
          />
          <StreamCard
            icon={Atom}
            title="4D Spatial-Temporal Prediction"
            subtitle="World Model"
            description="Voxelizes protein binding pockets into continuous spatial grids. Learns from massive structural evolution data to intuitively predict molecular occupancy changes and conformational collapse."
            color="#39ff14"
            delay={0.4}
            isInView={isInView}
          />
        </div>

        {/* Flow arrows */}
        <div className="relative flex items-center justify-center my-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="flex items-center gap-3">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + i * 0.1, duration: 0.3 }}
                  className="w-2 h-2 rounded-full bg-[#4d7cff]"
                />
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.5, duration: 0.3 }}
              className="text-[#4d7cff] text-2xl"
            >
              ▼
            </motion.div>
          </motion.div>
        </div>

        {/* Shared Latent Space */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="relative mx-auto max-w-2xl p-8 rounded-2xl border border-[#4d7cff]/30 bg-gradient-to-br from-[#4d7cff]/10 via-[#0a0a0f] to-[#00f0ff]/5"
        >
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-[#00f0ff]/20 via-[#4d7cff]/20 to-[#39ff14]/20 blur-sm -z-10" />
          <div className="text-center">
            <Sparkles className="w-8 h-8 text-[#4d7cff] mx-auto mb-3" />
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#00f0ff] to-[#4d7cff] bg-clip-text text-transparent">
              Unified High-Dimensional Latent Space
            </h3>
            <p className="text-sm text-gray-400 mt-3 max-w-lg mx-auto leading-relaxed">
              Cross-attention mechanisms align 1D sequence logic constraints with 3D/4D spatial physical
              constraints. The LLM &ldquo;proposes molecules&rdquo; while the World Model runs spatial collision
              and energy stability tests in a virtual physical environment — enabling bi-directional self-correction.
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
          <FileText className="w-6 h-6 text-[#39ff14] mx-auto mb-2" />
          <h4 className="text-lg font-bold text-[#39ff14]">
            High-Affinity Lead Compound
          </h4>
          <p className="text-sm text-gray-400 mt-2">
            Deterministic output validated against 4D spatial-temporal constraints
            with conformational dynamics analysis.
          </p>
        </motion.div>

        {/* CTA to technology page */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 2.2, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/technology"
            className="inline-flex items-center gap-2 text-[#00f0ff] hover:text-white transition-colors font-medium"
          >
            Explore full technical details →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
