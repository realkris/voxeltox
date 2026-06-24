"use client";

import { motion } from "framer-motion";
import { Brain, Atom, Layers, ArrowRight, GitBranch, Cpu, Database } from "lucide-react";
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
    id: "world-model",
    icon: Atom,
    color: "#39ff14",
    title: "4D Spatial-Temporal Micro-Environment — World Model",
    description:
      "Inspired by autonomous driving's occupancy forecasting, our World Model voxelizes protein binding pockets into continuous spatial grids and predicts molecular dynamics without brute-force quantum calculations.",
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
    icon: Layers,
    color: "#4d7cff",
    title: "Unified High-Dimensional Feature Alignment — Sensor Fusion",
    description:
      "Cross-attention mechanisms map the logical constraints from 1D sequences and the physical constraints from 3D/4D spatial data into a shared Latent Space, enabling bi-directional self-correction between the LLM and World Model.",
    details: [
      "Cross-attention mechanism aligns multi-modal representations",
      "1D sequence logic constraints ↔ 3D/4D spatial physical constraints",
      "Shared latent space enables unified molecular reasoning",
      "LLM proposes → World Model validates → feedback loop refines",
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
            as a microscopic &ldquo;panoramic perception and intelligent control&rdquo; system — analogous
            to how autonomous vehicles fuse LiDAR, cameras, and radar for spatial understanding.
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
            className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] font-mono text-sm leading-relaxed"
          >
            <p className="text-gray-500 mb-4">// VoxelTox Multi-Modal Fusion Architecture</p>
            <div className="space-y-2 text-gray-300">
              <p><span className="text-[#00f0ff]">[1D Sequences / Literature]</span> ──{'>'} <span className="text-gray-500">(LLM Semantic Encoding)</span> ──┐</p>
              <p className="pl-56 md:pl-64 text-gray-500">│</p>
              <p className="pl-48 md:pl-56">├──{'>'} <span className="text-[#4d7cff]">[Shared Latent Space]</span> ──{'>'} <span className="text-gray-400">[Cross-Attention]</span> ──{'>'} <span className="text-[#39ff14]">Lead Compound</span></p>
              <p className="pl-56 md:pl-64 text-gray-500">│</p>
              <p><span className="text-[#39ff14]">[3D/4D Protein Voxels]</span> ──{'>'} <span className="text-gray-500">(World Model Spatial)</span> ─┘</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-20">
          {sections.map((section, i) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${section.color}15`, border: `1px solid ${section.color}30` }}
                >
                  <section.icon className="w-6 h-6" style={{ color: section.color }} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider" style={{ color: section.color }}>
                    Module {i + 1}
                  </p>
                  <h2 className="text-xl md:text-2xl font-bold text-white">{section.title}</h2>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                {section.description}
              </p>

              <div className="grid gap-3 pl-4 border-l-2" style={{ borderColor: `${section.color}40` }}>
                {section.details.map((detail, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 mt-0.5 shrink-0" style={{ color: section.color }} />
                    <p className="text-gray-300 text-sm">{detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-white text-center mb-12"
          >
            Key Technical Differentiators
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: GitBranch, title: "Bi-directional Loop", desc: "LLM proposes, World Model validates — continuous self-correction eliminates false positives." },
              { icon: Cpu, title: "No Quantum Brute-Force", desc: "Learns physics from data instead of solving equations — orders of magnitude faster than MD." },
              { icon: Database, title: "Multi-Modal Native", desc: "Natively fuses 1D, 2D, 3D, 4D data — no more information loss from dimension reduction." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border border-white/5 bg-white/[0.02] text-center"
              >
                <item.icon className="w-8 h-8 text-[#4d7cff] mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
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
