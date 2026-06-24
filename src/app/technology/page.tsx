"use client";

import { motion } from "framer-motion";
import { Brain, Atom, Layers, ArrowRight, GitBranch, Cpu, Database, ScanEye, RefreshCcw, Zap, Network } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    id: "llm-engine",
    icon: Brain,
    color: "#00f0ff",
    title: "1D Semantic Navigation Brain — LLM Engine",
    description:
      "Our fine-tuned large language model serves as the semantic reasoning backbone, responsible for parsing and understanding biological macromolecular sequences, compound structures, and global biomedical literature.",
    details: [
      "Parses FASTA protein sequences and SMILES chemical notation",
      "Processes millions of PubMed research papers for contextual reasoning",
      "Establishes logical-semantic associations between functional targets",
      "Proposes candidate molecules based on learned biochemical principles",
      "Provides the 'hypothesis generation' layer in our bi-directional system",
    ],
  },
  {
    id: "vision-transformer",
    icon: ScanEye,
    color: "#ff6b35",
    title: "2D Structural Image Understanding — Vision Transformers",
    description:
      "High-resolution Cryo-EM (Cryo-Electron Microscopy) images are processed by Vision Transformer architectures to extract spatial features that bridge the gap between 2D observations and 3D structural reality.",
    details: [
      "Processes raw Cryo-EM micrographs and 2D density maps",
      "Vision Transformer (ViT) extracts hierarchical spatial features from electron microscopy data",
      "Resolves sub-angstrom structural details invisible to sequence-only methods",
      "Provides complementary 2D → 3D reconstruction priors for the World Model",
      "Enables the system to leverage the rapidly growing Cryo-EM data repositories (EMDB)",
    ],
  },
  {
    id: "world-model",
    icon: Atom,
    color: "#39ff14",
    title: "3D/4D Spatial-Temporal Micro-Environment — World Model",
    description:
      "Inspired by autonomous driving's occupancy forecasting, our World Model voxelizes protein binding pockets into continuous spatial grids and predicts molecular dynamics without brute-force quantum calculations.",
    details: [
      "Converts protein binding pockets into continuous spatial voxel grids",
      "Learns from massive structural evolution datasets (PDB, UniProt dynamics)",
      "Predicts molecular spatial occupancy changes over the time dimension (3D → 4D)",
      "Models conformational collapse and induced-fit dynamics",
      "Validates LLM proposals via spatial collision & energy stability testing",
    ],
  },
  {
    id: "fusion",
    icon: Layers,
    color: "#4d7cff",
    title: "Unified High-Dimensional Feature Alignment — Sensor Fusion",
    description:
      "Cross-attention mechanisms map multi-dimensional data — 1D sequences, 2D microscopy, 3D structures, and 4D dynamics — into a shared Latent Space, enabling full-spectrum bi-directional reasoning.",
    details: [
      "Cross-attention mechanism aligns representations across all four data dimensions (1D/2D/3D/4D)",
      "1D sequence logic + 2D image features + 3D/4D spatial-physical constraints → unified embedding",
      "Shared latent space enables holistic molecular reasoning no single modality can achieve",
      "LLM proposes → Vision verifies → World Model validates → feedback loop refines",
      "Achieves deterministic prediction rather than probabilistic screening",
    ],
  },
];

export default function TechnologyPage() {
  return (
    <main className="pt-24 pb-20">
      {/* Header */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.2em] text-[#39ff14] mb-4 font-mono"
          >
            Deep Technical Overview
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            VoxelTox Core{" "}
            <span className="bg-gradient-to-r from-[#00f0ff] to-[#39ff14] bg-clip-text text-transparent">
              Technology
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            We break the traditional single-modality limitations by treating drug discovery
            as a microscopic &ldquo;panoramic perception and intelligent control&rdquo; system — fusing
            1D, 2D, 3D, and 4D data just as autonomous vehicles fuse LiDAR, cameras, and radar.
          </motion.p>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] font-mono text-sm leading-loose overflow-x-auto"
          >
            <p className="text-gray-500 mb-4">// VoxelTox 4-Dimensional Multi-Modal Fusion Architecture</p>
            <div className="space-y-1 text-gray-300 min-w-[500px]">
              <p><span className="text-[#00f0ff]">[1D Sequences / Literature]</span> ──{'>'} <span className="text-gray-500">(LLM Semantic Encoding)</span> ────────┐</p>
              <p className="text-gray-600 pl-64">│</p>
              <p><span className="text-[#ff6b35]">[2D Cryo-EM Images]</span> ─────────{'>'} <span className="text-gray-500">(Vision Transformer)</span> ──────────┤</p>
              <p className="text-gray-600 pl-64">├──{'>'} <span className="text-[#4d7cff]">[Shared Latent Space]</span> ──{'>'} <span className="text-[#39ff14]">Lead Compound</span></p>
              <p><span className="text-[#39ff14]">[3D Protein Structures]</span> ───────{'>'} <span className="text-gray-500">(Spatial Voxelization)</span> ─────────┤</p>
              <p className="text-gray-600 pl-64">│</p>
              <p><span className="text-[#a855f7]">[4D Temporal Dynamics]</span> ────────{'>'} <span className="text-gray-500">(World Model Forecasting)</span> ───┘</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-20">
          {sections.map((sec, i) => {
            const IconComp = sec.icon;
            return (
            <motion.div
              key={sec.id}
              id={sec.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${sec.color}15`, border: `1px solid ${sec.color}30` }}
                >
                  <IconComp className="w-6 h-6" style={{ color: sec.color }} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider" style={{ color: sec.color }}>
                    Module {i + 1}
                  </p>
                  <h2 className="text-xl md:text-2xl font-bold text-white">{sec.title}</h2>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                {sec.description}
              </p>

              <div className="grid gap-3 pl-4 border-l-2" style={{ borderColor: `${sec.color}40` }}>
                {sec.details.map((detail, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 mt-0.5 shrink-0" style={{ color: sec.color }} />
                    <p className="text-gray-300 text-sm">{detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            );
          })}
        </div>
      </section>

      {/* Key Differentiators - Expanded */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-white text-center mb-4"
          >
            Key Technical Differentiators
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-center mb-16 max-w-2xl mx-auto"
          >
            Three fundamental architectural decisions that separate VoxelTox from existing computational drug discovery approaches.
          </motion.p>

          <div className="space-y-12">
            {/* Bi-directional Loop */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl border border-[#00f0ff]/15 bg-gradient-to-br from-[#00f0ff]/5 to-transparent"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#00f0ff]/10 border border-[#00f0ff]/20">
                  <RefreshCcw className="w-6 h-6 text-[#00f0ff]" />
                </div>
                <h3 className="text-xl font-bold text-white">Bi-directional Self-Correction Loop</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Unlike linear pipelines where a model generates once and outputs, VoxelTox implements
                a continuous closed-loop between the LLM and World Model. The system iteratively refines
                candidates until convergence.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="text-sm font-medium text-[#00f0ff]">How it works:</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00f0ff] mt-1">1.</span>
                      LLM generates candidate molecules based on semantic understanding of target biology
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00f0ff] mt-1">2.</span>
                      World Model simulates the candidate in the 4D micro-environment (spatial collision, energy stability, conformational fit)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00f0ff] mt-1">3.</span>
                      Failure signals are fed back to the LLM as structured constraints, narrowing the search space
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00f0ff] mt-1">4.</span>
                      The loop repeats until the World Model confirms spatial-temporal stability — eliminating false positives at the source
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-300">Result:</p>
                  <p className="text-sm text-gray-500">
                    Traditional virtual screening produces thousands of candidates with high false-positive rates,
                    requiring expensive wet-lab validation. Our bi-directional loop achieves pre-validated outputs —
                    only molecules that survive physics-grounded simulation reach the pipeline.
                  </p>
                  <div className="mt-4 p-3 rounded-lg bg-white/[0.03] border border-white/5 font-mono text-xs text-gray-400">
                    LLM(propose) → WorldModel(validate) → feedback → LLM(refine) → ... → converged_lead
                  </div>
                </div>
              </div>
            </motion.div>

            {/* No Quantum Brute-Force */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl border border-[#39ff14]/15 bg-gradient-to-br from-[#39ff14]/5 to-transparent"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#39ff14]/10 border border-[#39ff14]/20">
                  <Zap className="w-6 h-6 text-[#39ff14]" />
                </div>
                <h3 className="text-xl font-bold text-white">No Quantum Brute-Force</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Traditional molecular dynamics (MD) simulations attempt to solve quantum mechanical equations
                for every atom at every timestep — computationally prohibitive for real-world drug discovery timelines.
                VoxelTox takes a fundamentally different approach.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="text-sm font-medium text-[#39ff14]">Our approach:</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-3 h-3 text-[#39ff14] mt-1 shrink-0" />
                      Instead of solving Schr&ouml;dinger equations, we learn the physics directly from millions of observed structural transitions
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-3 h-3 text-[#39ff14] mt-1 shrink-0" />
                      The World Model develops an &ldquo;intuition&rdquo; for molecular behavior — predicting outcomes without deriving them from first principles
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-3 h-3 text-[#39ff14] mt-1 shrink-0" />
                      Occupancy forecasting replaces trajectory integration: we predict where atoms will be, not trace how they got there
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-300">Performance comparison:</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] border border-white/5">
                      <span className="text-xs text-gray-400">Traditional MD (microsecond)</span>
                      <span className="text-xs text-red-400 font-mono">~days to weeks</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] border border-white/5">
                      <span className="text-xs text-gray-400">AlphaFold (single structure)</span>
                      <span className="text-xs text-yellow-400 font-mono">~minutes (static only)</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-[#39ff14]/5 border border-[#39ff14]/20">
                      <span className="text-xs text-white">VoxelTox (4D dynamics)</span>
                      <span className="text-xs text-[#39ff14] font-mono font-bold">~seconds to minutes</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Multi-Modal Native */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl border border-[#4d7cff]/15 bg-gradient-to-br from-[#4d7cff]/5 to-transparent"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#4d7cff]/10 border border-[#4d7cff]/20">
                  <Network className="w-6 h-6 text-[#4d7cff]" />
                </div>
                <h3 className="text-xl font-bold text-white">Multi-Modal Native (1D + 2D + 3D + 4D)</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Biological data spans vastly different dimensionalities — text sequences (1D), electron microscopy images (2D),
                protein point clouds (3D), and temporal dynamics (4D). Most approaches handle these separately, losing critical
                cross-dimensional correlations. VoxelTox is architecturally multi-modal from the ground up.
              </p>
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="p-4 rounded-lg bg-white/[0.03] border border-[#00f0ff]/20 text-center">
                  <p className="text-2xl font-bold text-[#00f0ff]">1D</p>
                  <p className="text-xs text-gray-500 mt-1">Sequences, SMILES, Literature Text</p>
                </div>
                <div className="p-4 rounded-lg bg-white/[0.03] border border-[#ff6b35]/20 text-center">
                  <p className="text-2xl font-bold text-[#ff6b35]">2D</p>
                  <p className="text-xs text-gray-500 mt-1">Cryo-EM Images, Density Maps</p>
                </div>
                <div className="p-4 rounded-lg bg-white/[0.03] border border-[#39ff14]/20 text-center">
                  <p className="text-2xl font-bold text-[#39ff14]">3D</p>
                  <p className="text-xs text-gray-500 mt-1">Protein Voxels, Point Clouds</p>
                </div>
                <div className="p-4 rounded-lg bg-white/[0.03] border border-[#a855f7]/20 text-center">
                  <p className="text-2xl font-bold text-[#a855f7]">4D</p>
                  <p className="text-xs text-gray-500 mt-1">Temporal Dynamics, Occupancy</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-medium text-[#4d7cff]">Why native fusion matters:</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-[#4d7cff] mt-1 shrink-0" />
                    <span>Traditional approaches reduce high-dimensional data to fit single-modality models (e.g., collapsing 3D to 1D fingerprints) — losing spatial information irreversibly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-[#4d7cff] mt-1 shrink-0" />
                    <span>Our cross-attention fusion preserves full fidelity of each dimension while extracting cross-modal correlations invisible to any single data type</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-[#4d7cff] mt-1 shrink-0" />
                    <span>Analogous to autonomous driving: a car that only uses cameras (2D) will always underperform one that fuses LiDAR (3D) + cameras (2D) + radar (velocity) simultaneously</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#00f0ff] to-[#4d7cff] rounded-full text-black font-bold hover:scale-105 transition-transform text-lg"
          >
            Get Early Access
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
