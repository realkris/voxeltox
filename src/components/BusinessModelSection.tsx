"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, FlaskConical, Rocket } from "lucide-react";

const phases = [
  {
    icon: Rocket,
    phase: "Phase 1",
    timeline: "Year 1–2",
    title: "Compute SaaS & Technical Services",
    description:
      "Provide high-precision 4D dynamic virtual screening services to top pharma companies and research institutions. Validate the technical closed loop.",
    color: "#00f0ff",
  },
  {
    icon: FlaskConical,
    phase: "Phase 2",
    timeline: "Year 2–4",
    title: "Joint Pipeline Development",
    description:
      "Partner with wet lab giants to output high-druggability lead compounds. Share IP and downstream milestone payments through co-development agreements.",
    color: "#4d7cff",
  },
  {
    icon: Layers,
    phase: "Phase 3",
    timeline: "Year 4+",
    title: "Platform Ecosystem",
    description:
      "Scale the VoxelTox platform into a self-sustaining ecosystem for spatial-temporal molecular prediction, licensing technology to global pharma R&D.",
    color: "#39ff14",
  },
];

export default function BusinessModelSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-[#4d7cff] mb-3 font-mono">
            Business Model
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            From Platform to{" "}
            <span className="text-[#39ff14]">Pipeline</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            A phased approach to capturing value across the drug discovery stack.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-[#00f0ff]/50 via-[#4d7cff]/50 to-[#39ff14]/50 hidden md:block" />

          <div className="space-y-12">
            {phases.map((phase, i) => {
              const PhaseIcon = phase.icon;
              return (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 items-center justify-center"
                  style={{ borderColor: phase.color, backgroundColor: `${phase.color}20` }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: phase.color }} />
                </div>

                <div className={`flex-1 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div
                    className={`p-6 rounded-xl border bg-white/[0.02] ${
                      i % 2 === 0 ? "md:ml-auto" : ""
                    } max-w-lg`}
                    style={{ borderColor: `${phase.color}20` }}
                  >
                    <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <PhaseIcon className="w-5 h-5" style={{ color: phase.color }} />
                      <span className="text-xs font-mono uppercase tracking-wider" style={{ color: phase.color }}>
                        {phase.phase} · {phase.timeline}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{phase.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{phase.description}</p>
                  </div>
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
