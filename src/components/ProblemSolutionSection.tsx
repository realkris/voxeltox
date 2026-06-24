"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { XCircle, Zap, Clock, Target, TrendingUp } from "lucide-react";

export default function ProblemSolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-[#00f0ff] mb-3 font-mono">
            Industry Pain Points
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Why the Industry Needs a{" "}
            <span className="text-[#00f0ff]">Paradigm Shift</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto text-lg">
            Current AI-driven drug discovery (AIDD) relies on static structural predictions.
            In real physiological environments, protein-molecule binding is dynamic, continuous,
            and full of spatial steric changes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Legacy Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative p-8 rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-950/10 to-transparent"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/50 to-transparent rounded-t-2xl" />
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-6 h-6 text-red-400" />
              <h3 className="text-2xl font-bold text-red-400">Static & Slow</h3>
            </div>
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-6">Legacy Approach</p>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-400/60 mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-200 font-medium">MD Simulations: Days to Weeks</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Traditional molecular dynamics rely on expensive physics equation solving.
                    Computationally prohibitive for large-scale virtual screening.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-400/60 mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-200 font-medium">AlphaFold: Static Snapshots Only</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Predicts a single conformation — blind to dynamic binding reality,
                    induced fit, and temporal conformational changes.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-400/60 mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-200 font-medium">Data Silos Across Dimensions</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Biological data spans 1D text, 2D electron microscopy, and 3D point clouds —
                    the industry lacks a unified multi-modal fusion architecture.
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* VoxelTox Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative p-8 rounded-2xl border border-[#00f0ff]/20 bg-gradient-to-br from-[#00f0ff]/5 to-transparent"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00f0ff]/80 to-[#39ff14]/40 rounded-t-2xl" />
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-[#00f0ff]" />
              <h3 className="text-2xl font-bold text-[#00f0ff]">Dynamic & Deterministic</h3>
            </div>
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-6">The VoxelTox Approach</p>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-[#00f0ff]/80 mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-200 font-medium">4D Spatial-Temporal Occupancy Forecasting</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Voxelizes protein binding pockets into continuous spatial grids. The World Model
                    intuitively predicts molecular occupancy changes over time without brute-force quantum calculations.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-[#00f0ff]/80 mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-200 font-medium">Cross-Attention Latent Space Fusion</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Maps 1D sequence logic constraints and 3D/4D spatial physical constraints
                    into a unified shared latent representation via cross-attention mechanisms.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-[#00f0ff]/80 mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-200 font-medium">Bi-directional Self-Correction</p>
                  <p className="text-sm text-gray-500 mt-1">
                    LLM proposes molecules, World Model validates them in a virtual physical environment
                    via spatial collision and energy stability testing — achieving closed-loop refinement.
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
