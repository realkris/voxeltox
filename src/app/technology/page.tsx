"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const modules = [
  {
    id: "llm",
    dim: "1D",
    color: "#0ea5e9",
    title: "Semantic Reasoning Engine",
    subtitle: "Large Language Model",
    description: "Fine-tuned LLM serving as the semantic reasoning backbone — parsing biological macromolecular sequences, compound structures, and global biomedical literature to generate informed molecular hypotheses.",
    details: [
      "Parses FASTA protein sequences and SMILES chemical notation",
      "Processes millions of PubMed research papers for contextual reasoning",
      "Establishes logical-semantic associations between functional targets",
      "Proposes candidate molecules based on learned biochemical principles",
      "Provides the hypothesis generation layer in our bi-directional system",
    ],
  },
  {
    id: "vision",
    dim: "2D",
    color: "#f97316",
    title: "Structural Image Understanding",
    subtitle: "Vision Transformer",
    description: "High-resolution Cryo-EM images processed by Vision Transformer architectures to extract spatial features that bridge the gap between 2D observations and 3D structural reality.",
    details: [
      "Processes raw Cryo-EM micrographs and 2D density maps",
      "Hierarchical spatial feature extraction from electron microscopy data",
      "Resolves sub-angstrom structural details invisible to sequence-only methods",
      "Provides complementary 2D → 3D reconstruction priors for the World Model",
      "Leverages the rapidly growing Cryo-EM data repositories (EMDB)",
    ],
  },
  {
    id: "world-model",
    dim: "3D/4D",
    color: "#10b981",
    title: "Spatial-Temporal Micro-Environment",
    subtitle: "World Model",
    description: "Inspired by autonomous driving occupancy forecasting — voxelizes protein binding pockets into continuous spatial grids and predicts molecular dynamics without brute-force quantum calculations.",
    details: [
      "Converts protein binding pockets into continuous spatial voxel grids",
      "Learns from massive structural evolution datasets (PDB, UniProt dynamics)",
      "Predicts molecular spatial occupancy changes over the time dimension",
      "Models conformational collapse and induced-fit dynamics",
      "Validates LLM proposals via spatial collision & energy stability testing",
    ],
  },
  {
    id: "fusion",
    dim: "Unified",
    color: "#a78bfa",
    title: "Cross-Dimensional Feature Alignment",
    subtitle: "Sensor Fusion Layer",
    description: "Cross-attention mechanisms map multi-dimensional data — 1D sequences, 2D microscopy, 3D structures, and 4D dynamics — into a shared latent space, enabling full-spectrum bi-directional reasoning.",
    details: [
      "Cross-attention aligns representations across all four data dimensions",
      "1D logic + 2D features + 3D geometry + 4D dynamics → unified embedding",
      "Shared latent space enables holistic reasoning no single modality can achieve",
      "LLM proposes → Vision verifies → World Model validates → loop refines",
      "Achieves deterministic prediction rather than probabilistic screening",
    ],
  },
];

export default function TechnologyPage() {
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
            Technical Architecture
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            How VoxelTox Works
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-zinc-400 leading-relaxed"
          >
            We treat drug discovery as a microscopic perception and control system — 
            fusing 1D, 2D, 3D, and 4D data the way autonomous vehicles fuse
            LiDAR, cameras, and radar for spatial understanding.
          </motion.p>
        </div>
      </section>

      {/* Modules */}
      <section className="px-6 py-8">
        <div className="max-w-3xl mx-auto space-y-16">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: `${mod.color}15`, color: mod.color, border: `1px solid ${mod.color}25` }}
                >
                  {mod.dim}
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500">{mod.subtitle}</p>
                  <h2 className="text-xl font-semibold text-white">{mod.title}</h2>
                </div>
              </div>

              <p className="text-zinc-400 leading-relaxed mb-5">
                {mod.description}
              </p>

              <div className="space-y-2.5 pl-3 border-l border-white/[0.06]">
                {mod.details.map((detail, j) => (
                  <div key={j} className="flex items-start gap-2.5">
                    <div className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ backgroundColor: mod.color }} />
                    <p className="text-sm text-zinc-500">{detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Differentiators */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-3">Key Differentiators</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Why this approach is fundamentally different
            </h2>
          </motion.div>

          <div className="space-y-8">
            {/* Bi-directional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.015]"
            >
              <h3 className="text-base font-semibold text-white mb-2">Bi-directional Self-Correction</h3>
              <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                Unlike linear pipelines that generate once and output, VoxelTox implements a closed-loop 
                between reasoning (LLM) and simulation (World Model), iteratively refining until convergence.
              </p>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] font-mono text-xs text-zinc-500">
                LLM(propose) → WorldModel(simulate) → feedback → LLM(refine) → ... → converged_lead
              </div>
              <p className="text-xs text-zinc-500 mt-3">
                Result: Only molecules that survive physics-grounded simulation reach the pipeline. False positive rate drops by orders of magnitude.
              </p>
            </motion.div>

            {/* Speed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.015]"
            >
              <h3 className="text-base font-semibold text-white mb-2">Learned Physics, Not Brute-Force</h3>
              <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                Instead of solving quantum mechanical equations for every atom, we learn molecular behavior from millions 
                of observed structural transitions. The model develops physical intuition — predicting where atoms will be, not tracing how they got there.
              </p>
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] text-center">
                  <p className="text-xs text-zinc-500">Traditional MD</p>
                  <p className="text-sm font-medium text-zinc-300 mt-1">Days–Weeks</p>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] text-center">
                  <p className="text-xs text-zinc-500">AlphaFold</p>
                  <p className="text-sm font-medium text-zinc-300 mt-1">Minutes (static)</p>
                </div>
                <div className="p-3 rounded-lg bg-sky-500/[0.05] border border-sky-500/20 text-center">
                  <p className="text-xs text-sky-400">VoxelTox</p>
                  <p className="text-sm font-semibold text-white mt-1">Seconds (4D)</p>
                </div>
              </div>
            </motion.div>

            {/* Multi-modal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.015]"
            >
              <h3 className="text-base font-semibold text-white mb-2">Architecturally Multi-Modal</h3>
              <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                Biological data spans vastly different dimensionalities. Most approaches collapse high-dimensional data 
                to fit single-modality models, losing spatial information irreversibly. VoxelTox is natively multi-dimensional.
              </p>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { dim: "1D", label: "Sequences" },
                  { dim: "2D", label: "Cryo-EM" },
                  { dim: "3D", label: "Voxels" },
                  { dim: "4D", label: "Dynamics" },
                ].map((d) => (
                  <div key={d.dim} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] text-center">
                    <p className="text-lg font-bold text-white">{d.dim}</p>
                    <p className="text-[10px] text-zinc-500 mt-0.5">{d.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <a
            href="mailto:question@voxeltox.space"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-zinc-200 transition-colors"
          >
            Discuss Our Technology
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
