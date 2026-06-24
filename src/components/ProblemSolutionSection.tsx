"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ProblemSolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-28 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-3">
            The Opportunity
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Current drug discovery AI cannot model<br className="hidden md:block" /> what actually happens inside the body.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Legacy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-8 rounded-xl border border-white/[0.06] bg-white/[0.015]"
          >
            <p className="text-[11px] uppercase tracking-widest text-zinc-500 mb-4">Industry Status Quo</p>
            <h3 className="text-xl font-semibold text-white mb-4">Static & Probabilistic</h3>
            <ul className="space-y-4">
              {[
                { title: "Molecular Dynamics", desc: "Days to weeks of compute for microsecond-scale simulation. Cannot scale to virtual screening." },
                { title: "AlphaFold & Variants", desc: "Single static conformation. Blind to binding dynamics, induced fit, and temporal conformational shifts." },
                { title: "Data Silos", desc: "1D sequences, 2D microscopy, 3D structures handled by separate tools — losing cross-dimensional signal." },
              ].map((item) => (
                <li key={item.title} className="border-l-2 border-zinc-700 pl-4">
                  <p className="text-sm font-medium text-zinc-300">{item.title}</p>
                  <p className="text-sm text-zinc-500 mt-0.5 leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* VoxelTox */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-xl border border-sky-500/10 bg-sky-500/[0.02]"
          >
            <p className="text-[11px] uppercase tracking-widest text-sky-400 mb-4">VoxelTox Approach</p>
            <h3 className="text-xl font-semibold text-white mb-4">Dynamic & Deterministic</h3>
            <ul className="space-y-4">
              {[
                { title: "4D Occupancy Forecasting", desc: "Predicts how molecular binding evolves over time — learned from data, not brute-forced from equations." },
                { title: "World Model + LLM Fusion", desc: "LLM reasons about chemistry; World Model simulates physics. Bidirectional correction eliminates false positives." },
                { title: "Native Multi-Modal (1D/2D/3D/4D)", desc: "Cross-attention fusion of sequences, Cryo-EM, voxels, and dynamics — like sensor fusion in autonomous driving." },
              ].map((item) => (
                <li key={item.title} className="border-l-2 border-sky-500/30 pl-4">
                  <p className="text-sm font-medium text-zinc-200">{item.title}</p>
                  <p className="text-sm text-zinc-500 mt-0.5 leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
