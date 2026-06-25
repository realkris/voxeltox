"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const team = [
  {
    name: "Tensor Zhang",
    title: "Founder & Lead AI/ML Engineer",
    photo: "/team-tensor.png",
    bio: "Leading the vision to bring autonomous driving perception technology to molecular dynamics — transforming drug discovery from static probability screening into 4D deterministic spatial-temporal prediction.",
    skills: ["Multi-modal Sensor Fusion", "World Models", "LLM Systems", "4D Spatial Computing", "CUDA Development"],
  },
  {
    name: "Dr. Francesco Gentile",
    title: "Co-PI, Computational Chemistry",
    photo: "/team-gentile.jpg",
    bio: "Assistant Professor, University of Ottawa. Creator of Deep Docking — an open-source deep learning framework enabling virtual screening of billions of molecules. Pioneer in AI-accelerated drug discovery and GPU-accelerated screening pipelines.",
    skills: ["Deep Learning", "Virtual Screening", "Molecular Docking", "Drug Discovery", "GPU Computing"],
  },
  {
    name: "Dr. Roberto Chica",
    title: "Co-PI, Protein Engineering",
    photo: "/team-chica.jpg",
    bio: "Full Professor, University of Ottawa. Expert in computational protein design and enzyme engineering. Editor-in-Chief of Protein Engineering, Design and Selection (Oxford University Press). Develops cutting-edge computational protein design algorithms.",
    skills: ["Protein Design", "Enzyme Engineering", "Molecular Modelling", "Biocatalysis", "Structural Biology"],
  },
  {
    name: "Dr. Maria Musgaard",
    title: "Co-PI, Molecular Dynamics & Biophysics",
    photo: "/team-musgaard.svg",
    bio: "Computational biophysicist specializing in molecular dynamics simulations of biomolecular systems. Former Canada Research Chair II in Computational Biochemistry at the University of Ottawa. Expert in membrane protein dynamics and conformational transitions.",
    skills: ["MD Simulations", "Ion Channels", "Free-Energy Calculations", "Protein Dynamics", "Computational Biochemistry"],
  },
];

export default function TeamPage() {
  return (
    <main className="pt-24 pb-20">
      {/* Header */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-4"
          >
            Leadership
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-zinc-400 max-w-xl mx-auto"
          >
            Cross-disciplinary expertise spanning AI systems, computational chemistry,
            protein engineering, and molecular biophysics.
          </motion.p>
        </div>
      </section>

      {/* Team Members */}
      <section className="px-6 py-8">
        <div className="max-w-3xl mx-auto space-y-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="p-8 md:p-10 rounded-2xl border border-white/[0.06] bg-white/[0.015]"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="shrink-0">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-32 h-32 md:w-36 md:h-36 rounded-xl object-cover object-top bg-zinc-900"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white">{member.name}</h2>
                  <p className="text-sky-400 text-sm font-medium mt-1">{member.title}</p>

                  <p className="text-zinc-400 mt-4 leading-relaxed text-[15px]">
                    {member.bio}
                  </p>

                  <div className="mt-5">
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-[11px] rounded-md border border-white/[0.08] bg-white/[0.03] text-zinc-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hiring */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-10 rounded-xl border border-white/[0.06] bg-white/[0.015]"
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              We&apos;re building the team.
            </h3>
            <p className="text-zinc-400 text-sm max-w-md mx-auto mb-6">
              Looking for exceptional researchers and engineers at the intersection
              of spatial computing, deep learning, and molecular biology.
            </p>
            <a
              href="mailto:tzhang@voxeltox.space"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-medium rounded-lg hover:bg-zinc-200 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
