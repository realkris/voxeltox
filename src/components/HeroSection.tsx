"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight, Eye } from "lucide-react";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <Scene3D />

      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/30 via-transparent to-[#0a0a0f]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#00f0ff] mb-6 font-mono">
            OmniBind AI
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
        >
          Predicting{" "}
          <span className="bg-gradient-to-r from-[#00f0ff] via-[#4d7cff] to-[#39ff14] bg-clip-text text-transparent">
            Molecular Reality.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          The first World Model + LLM fusion platform for 4D dynamic drug discovery.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-3 text-sm text-gray-500 italic font-mono"
        >
          &ldquo;Decoding the Micro-Environment with 4D Spatial Intelligence.&rdquo;
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#architecture"
            className="group flex items-center gap-2 px-6 py-3 border border-[#00f0ff]/40 rounded-full text-[#00f0ff] hover:bg-[#00f0ff]/10 transition-all duration-300"
          >
            <Eye className="w-4 h-4" />
            View Architecture
          </a>
          <a
            href="#contact"
            className="glow-button flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#00f0ff] to-[#4d7cff] rounded-full text-black font-semibold hover:scale-105 transition-transform duration-300"
          >
            Partner with Us
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#00f0ff] rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
