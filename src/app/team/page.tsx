"use client";

import { motion } from "framer-motion";
import { Github, Mail, GraduationCap } from "lucide-react";

const team = [
  {
    name: "Kris",
    role: "Founder & CEO",
    bio: "Leading the vision to transform drug discovery through 4D spatial intelligence. Bridging autonomous driving perception technologies with molecular dynamics to build the next-generation computational platform for deterministic lead generation.",
    expertise: [
      "Multi-modal Sensor Fusion",
      "World Models & LLMs",
      "4D Spatial-Temporal Computing",
      "Drug Discovery AI",
    ],
    links: {
      github: "https://github.com/realkris",
    },
  },
];

export default function TeamPage() {
  return (
    <main className="pt-24 pb-20">
      {/* Header */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.2em] text-[#00f0ff] mb-4 font-mono"
          >
            Our Team
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            The People Behind{" "}
            <span className="bg-gradient-to-r from-[#00f0ff] to-[#39ff14] bg-clip-text text-transparent">
              VoxelTox
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto"
          >
            A cross-disciplinary team at the intersection of AI, autonomous systems, and computational biology.
          </motion.p>
        </div>
      </section>

      {/* Team Members */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="relative p-8 md:p-12 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent"
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Avatar placeholder */}
                <div className="shrink-0">
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#00f0ff]/20 to-[#39ff14]/20 border border-white/10 flex items-center justify-center">
                    <span className="text-4xl font-bold bg-gradient-to-r from-[#00f0ff] to-[#39ff14] bg-clip-text text-transparent">
                      {member.name[0]}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{member.name}</h2>
                  <p className="text-[#00f0ff] font-medium mt-1">{member.role}</p>

                  <p className="text-gray-400 mt-4 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Expertise */}
                  <div className="mt-6">
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Areas of Expertise</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-xs rounded-full border border-[#4d7cff]/30 bg-[#4d7cff]/10 text-[#4d7cff]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="mt-6 flex items-center gap-4">
                    {member.links.github && (
                      <a
                        href={member.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hiring CTA */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-12 rounded-2xl border border-[#39ff14]/20 bg-[#39ff14]/5"
          >
            <GraduationCap className="w-10 h-10 text-[#39ff14] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">
              We&apos;re Growing
            </h3>
            <p className="text-gray-400 max-w-md mx-auto mb-6">
              Looking for exceptional researchers and engineers passionate about the intersection
              of spatial computing, AI, and drug discovery.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#39ff14] to-[#00f0ff] rounded-full text-black font-semibold hover:scale-105 transition-transform"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
