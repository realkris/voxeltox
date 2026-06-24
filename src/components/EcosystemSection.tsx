"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Handshake, Server, FlaskConical, Building2 } from "lucide-react";

const goals = [
  {
    icon: Server,
    title: "Compute Infrastructure",
    description: "GPU-accelerated inference pipelines and cloud-native scalable training.",
  },
  {
    icon: FlaskConical,
    title: "Wet Lab Partnerships",
    description: "Joint pipeline development with experimental validation partners.",
  },
  {
    icon: Building2,
    title: "Pharma Collaborations",
    description: "Strategic IP sharing and milestone-based co-development agreements.",
  },
];

export default function EcosystemSection() {
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
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-3 font-mono">
            Partnerships
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Actively Seeking{" "}
            <span className="text-[#4d7cff]">Strategic Partners</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            We are open to collaborations with compute giants, cloud ecosystems, and pharmaceutical leaders
            to accelerate the future of deterministic drug discovery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {goals.map((goal, i) => {
            const GoalIcon = goal.icon;
            return (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="group relative flex flex-col items-center text-center p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-[#4d7cff]/20 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-white/5 group-hover:bg-[#4d7cff]/10 transition-colors">
                <GoalIcon className="w-8 h-8 text-gray-400 group-hover:text-[#4d7cff] transition-colors" />
              </div>
              <h4 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors">
                {goal.title}
              </h4>
              <p className="text-sm text-gray-500 mt-2">{goal.description}</p>
            </motion.div>
            );
          })}
        </div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl border border-[#00f0ff]/20 bg-[#00f0ff]/5">
            <Handshake className="w-5 h-5 text-[#00f0ff]" />
            <p className="text-gray-300">
              Seed round: <span className="text-white font-semibold">$3M – $5M</span> targeting compute assets, cloud ecosystems & strategic capital.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
