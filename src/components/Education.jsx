import React from 'react';
import { Award, School, BookOpen, Layers, Terminal, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const educationList = [
  {
    id: "polines",
    institution: "Politeknik Negeri Semarang",
    degree: "Applied Bachelor (D4) — Teknologi Rekayasa Komputer",
    period: "2022 — 2026",
    level: "HIGHER EDUCATION",
    gpa: "3.74",
    maxGpa: "4.00",
    honors: "Cum Laude Standing",
    thesis: "Pengembangan Sistem Berbasis IoT, AI & Computer Vision untuk Smart Automation",
    domains: ["IoT & Embedded C++", "Computer Vision & AI", "Full-Stack Web", "Microcontroller Architecture"],
    accentColor: "emerald",
    serialNumber: "POLINES-TK-2022",
  },
  {
    id: "smkn1",
    institution: "SMK Negeri 1 Batang",
    degree: "Vocational Diploma — Teknik Komputer dan Jaringan",
    period: "2019 — 2022",
    level: "VOCATIONAL FOUNDATION",
    honors: "Network & Hardware Major",
    thesis: "Administrasi Infrastruktur Jaringan, Routing Switching, dan Troubleshooting Server",
    domains: ["Computer Networking", "MikroTik & Cisco", "Linux Server Admin", "Hardware Troubleshooting"],
    accentColor: "blue",
    serialNumber: "SMKN1B-TKJ-2019",
  },
];

const Education = () => {
  return (
    <section 
      id="education" 
      className="relative py-28 bg-transparent text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-mono tracking-widest uppercase mb-2">
            <Terminal size={12} />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Educational <span className="text-[#4ade80]">Journey</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Fondasi akademik dan pembentukan keahlian rekayasa teknologi komputasi.
          </p>
        </motion.div>

        {/* Dynamic Dual Credential Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ================= CARD 1: POLINES (LARGER / PRIMARY CARD) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative rounded-[28px] bg-gradient-to-br from-[#0c1410] via-[#080d0a] to-[#040605] border border-white/15 hover:border-emerald-500/50 p-6 sm:p-9 flex flex-col justify-between transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.85)] hover:shadow-[0_0_35px_rgba(74,222,128,0.15)] group overflow-hidden"
          >
            {/* Background Circuit Grid Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity" />
            <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              
              {/* Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2 text-[11px] font-mono tracking-wider text-emerald-400 uppercase">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{educationList[0].level}</span>
                </div>
                <div className="text-[11px] font-mono text-gray-500">
                  {educationList[0].period}
                </div>
              </div>

              {/* Institution & Degree */}
              <div className="space-y-1.5">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 flex items-center gap-1.5">
                  <School size={14} className="text-emerald-400" />
                  <span>{educationList[0].institution}</span>
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  {educationList[0].degree}
                </h3>
              </div>

              {/* GPA & Honor Highlight Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-emerald-500/25 flex flex-wrap items-center justify-between gap-4 backdrop-blur-sm">
                <div>
                  <span className="text-[10px] font-mono uppercase text-gray-400 tracking-wider block">
                    Cumulative GPA Score
                  </span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#4ade80] font-mono tracking-tight">
                      {educationList[0].gpa}
                    </span>
                    <span className="text-sm font-mono text-gray-500">/ {educationList[0].maxGpa}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                  <Award size={15} className="text-emerald-400" />
                  <span>{educationList[0].honors}</span>
                </div>
              </div>

              {/* Capstone / Focus Overview */}
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                <span className="text-gray-500 block text-[11px] font-mono uppercase tracking-wider mb-1">Focus & Applied Engineering:</span>
                {educationList[0].thesis}
              </p>
            </div>

            {/* Core Domain Badges */}
            <div className="relative z-10 pt-6 mt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                {educationList[0].domains.map((domain, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs font-medium group-hover:border-emerald-500/30 transition-colors"
                  >
                    #{domain}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>


          {/* ================= CARD 2: SMK NEGERI 1 BATANG (FOUNDATIONAL CARD) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative rounded-[28px] bg-gradient-to-br from-[#0c1014] via-[#080a0d] to-[#040507] border border-white/15 hover:border-blue-400/50 p-6 sm:p-9 flex flex-col justify-between transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.85)] hover:shadow-[0_0_35px_rgba(56,189,248,0.15)] group overflow-hidden"
          >
            {/* Background Circuit Grid Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              
              {/* Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2 text-[11px] font-mono tracking-wider text-blue-400 uppercase">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <span>{educationList[1].level}</span>
                </div>
                <div className="text-[11px] font-mono text-gray-500">
                  {educationList[1].period}
                </div>
              </div>

              {/* Institution & Degree */}
              <div className="space-y-1.5">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 flex items-center gap-1.5">
                  <BookOpen size={14} className="text-blue-400" />
                  <span>{educationList[1].institution}</span>
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  {educationList[1].degree}
                </h3>
              </div>

              {/* Foundation Note Box */}
              <div className="p-4 rounded-2xl bg-black/40 border border-blue-500/20 space-y-1 backdrop-blur-sm">
                <span className="text-[10px] font-mono uppercase text-blue-400 tracking-wider block">
                  Core Foundation Track
                </span>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {educationList[1].thesis}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Membangun pemahaman mendalam tentang arsitektur jaringan komputer, routing protokol, dan perakitan sistem perangkat keras.
              </p>
            </div>

            {/* Core Domain Badges */}
            <div className="relative z-10 pt-6 mt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                {educationList[1].domains.map((domain, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs font-medium group-hover:border-blue-400/30 transition-colors"
                  >
                    #{domain}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Education;
