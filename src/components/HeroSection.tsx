"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight, Eye } from "lucide-react";
import Link from "next/link";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <Scene3D />

      {/* Strong overlay to ensure text readability */}
      <div className="absolute inset-0 bg-[#0a0a0f]/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/40 via-transparent to-[#0a0a0f]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-base md:text-lg uppercase tracking-[0.3em] text-[#00f0ff] mb-6 font-mono font-bold drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
            VoxelTox AI
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]"
        >
          Predicting{" "}
          <span className="bg-gradient-to-r from-[#00f0ff] via-[#4d7cff] to-[#39ff14] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">
            Molecular Reality.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-8 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
        >
          The first platform fusing <span className="text-[#00f0ff] font-bold">World Models</span> with{" "}
          <span className="text-[#39ff14] font-bold">LLMs</span> for 4D dynamic drug discovery.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4 text-lg text-white/70 font-mono drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
        >
          Decoding the Micro-Environment with 4D Spatial Intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/technology"
            className="group flex items-center gap-2 px-7 py-3.5 border-2 border-[#00f0ff]/60 rounded-full text-[#00f0ff] font-semibold hover:bg-[#00f0ff]/15 transition-all duration-300 text-lg"
          >
            <Eye className="w-5 h-5" />
            View Architecture
          </Link>
          <a
            href="#contact"
            className="glow-button flex items-center gap-2 px-9 py-3.5 bg-gradient-to-r from-[#00f0ff] to-[#4d7cff] rounded-full text-black font-bold hover:scale-105 transition-transform duration-300 text-lg"
          >
            Partner with Us
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
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
