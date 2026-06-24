"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function EcosystemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-28 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-3">
            Fundraising
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Seeking Strategic Partners
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-12">
            Seed round of $3M–$5M targeting compute infrastructure, 
            cloud ecosystem access, and strategic capital from partners aligned with our mission.
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-left">
            {[
              { title: "Compute Infrastructure", desc: "GPU clusters for training and high-throughput inference at scale." },
              { title: "Pharma Collaborations", desc: "Joint development with drug discovery organizations for pipeline validation." },
              { title: "Wet Lab Partners", desc: "Experimental validation to close the loop between prediction and confirmation." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="p-5 rounded-lg border border-white/[0.06] bg-white/[0.015]"
              >
                <h4 className="text-sm font-medium text-white mb-1.5">{item.title}</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
