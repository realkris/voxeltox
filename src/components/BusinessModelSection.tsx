"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const phases = [
  {
    phase: "Phase 1",
    timeline: "Year 1–2",
    title: "Compute SaaS Platform",
    description: "High-precision 4D virtual screening as a service for pharma R&D teams. Validate the technology with paying customers.",
    status: "Current Focus",
    color: "#0ea5e9",
  },
  {
    phase: "Phase 2",
    timeline: "Year 2–4",
    title: "Joint Pipeline Development",
    description: "Co-develop lead compounds with wet-lab partners. Shared IP and milestone-based revenue from co-development agreements.",
    status: "Next",
    color: "#a78bfa",
  },
  {
    phase: "Phase 3",
    timeline: "Year 4+",
    title: "Platform Licensing",
    description: "License VoxelTox as the industry-standard spatial prediction engine across global pharma R&D organizations.",
    status: "Scale",
    color: "#10b981",
  },
];

export default function BusinessModelSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-28 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-3">
            Business Model
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Platform to Pipeline
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            A phased approach from technology validation to value capture across the drug discovery stack.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.015] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-px" style={{ background: `linear-gradient(to right, ${phase.color}40, transparent)` }} />
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full border" style={{ color: phase.color, borderColor: `${phase.color}30` }}>
                  {phase.status}
                </span>
              </div>
              <p className="text-xs text-zinc-500 mb-1">{phase.phase} · {phase.timeline}</p>
              <h4 className="text-base font-semibold text-white mb-2">{phase.title}</h4>
              <p className="text-sm text-zinc-500 leading-relaxed">{phase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
