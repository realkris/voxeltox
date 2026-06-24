"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function StreamNode({
  label,
  sublabel,
  color,
  delay,
  isInView,
}: {
  label: string;
  sublabel: string;
  color: string;
  delay: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-3"
    >
      <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: color }} />
      <div>
        <p className="text-sm font-medium text-white">{label}</p>
        <p className="text-xs text-zinc-500">{sublabel}</p>
      </div>
    </motion.div>
  );
}

export default function ArchitectureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="architecture" className="relative py-28 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-3">
            Architecture
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Multi-dimensional sensor fusion,<br className="hidden md:block" /> applied to molecular space.
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Analogous to how autonomous vehicles fuse LiDAR, cameras, and radar — VoxelTox 
            fuses four dimensions of biological data into a unified spatial understanding.
          </p>
        </motion.div>

        {/* Architecture Diagram - proper visual layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 md:p-12 rounded-2xl border border-white/[0.06] bg-white/[0.015]"
        >
          <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 md:gap-4 items-center">
            {/* Input streams */}
            <div className="space-y-5">
              <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-4">Input Modalities</p>
              <StreamNode label="1D — Sequences & Literature" sublabel="LLM Semantic Encoding" color="#0ea5e9" delay={0.3} isInView={isInView} />
              <StreamNode label="2D — Cryo-EM Microscopy" sublabel="Vision Transformer" color="#f97316" delay={0.4} isInView={isInView} />
              <StreamNode label="3D — Protein Structures" sublabel="Spatial Voxelization" color="#10b981" delay={0.5} isInView={isInView} />
              <StreamNode label="4D — Temporal Dynamics" sublabel="World Model Forecasting" color="#a78bfa" delay={0.6} isInView={isInView} />
            </div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="hidden md:flex flex-col items-center gap-1"
            >
              <div className="w-12 h-px bg-gradient-to-r from-zinc-600 to-zinc-400" />
              <ArrowRight className="w-3 h-3 text-zinc-400" />
            </motion.div>

            {/* Latent Space */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="p-6 rounded-xl border border-sky-500/20 bg-sky-500/[0.03] text-center"
            >
              <p className="text-[10px] uppercase tracking-widest text-sky-400 mb-2">Core Engine</p>
              <p className="text-base font-semibold text-white">Shared Latent Space</p>
              <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                Cross-attention alignment across all four dimensions
              </p>
              <div className="mt-4 flex justify-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              </div>
            </motion.div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.4 }}
              className="hidden md:flex flex-col items-center gap-1"
            >
              <div className="w-12 h-px bg-gradient-to-r from-zinc-400 to-emerald-400" />
              <ArrowRight className="w-3 h-3 text-emerald-400" />
            </motion.div>

            {/* Output */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1, duration: 0.5 }}
              className="p-6 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.03] text-center"
            >
              <p className="text-[10px] uppercase tracking-widest text-emerald-400 mb-2">Output</p>
              <p className="text-base font-semibold text-white">Validated Lead Compound</p>
              <p className="text-xs text-zinc-500 mt-2">
                Pre-validated against 4D spatial-temporal constraints
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            href="/technology"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            Read the full technical deep-dive
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
