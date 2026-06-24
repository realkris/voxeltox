"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { XCircle, Zap, Clock, Target } from "lucide-react";

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
          <h2 className="text-3xl md:text-5xl font-bold">
            Why the Industry Needs a{" "}
            <span className="text-[#00f0ff]">Paradigm Shift</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Traditional approaches are hitting fundamental limits. We&apos;re redefining the boundary.
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
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">Legacy Approach</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-400/60 mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">MD Simulations: Days to Weeks</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Traditional molecular dynamics require enormous compute for microsecond-scale dynamics.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-400/60 mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">AlphaFold: Static Snapshots Only</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Predicts a single conformation — blind to the dynamic reality of protein binding.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-400/60 mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">No Temporal Context</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Cannot model how binding pockets shift over time or predict induced fit.
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* OmniBind Side */}
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
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">The OmniBind Approach</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-[#00f0ff]/80 mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">4D Spatial-Temporal Forecasting</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Applying autonomous driving occupancy prediction to biological micro-environments.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-[#00f0ff]/80 mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Cross-Attention Latent Fusion</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Maps 1D SMILES/text data + 3D/4D spatial data into a unified representation.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-[#00f0ff]/80 mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">World Model + LLM Synergy</p>
                  <p className="text-sm text-gray-500 mt-1">
                    LLM reasoning meets physics-grounded world simulation for deterministic lead generation.
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
