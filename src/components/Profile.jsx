import React from "react";
import { motion } from "framer-motion";
import { personalData, socialLinks } from "../data/portfolioData";

const Profile = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="profile" 
      className="relative py-24 bg-transparent text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Glassmorphic About Me Panel */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-3xl bg-[#090c0a]/90 border border-white/10 p-6 sm:p-10 lg:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden"
        >
          {/* Subtle Ambient Interior Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* ================= LEFT COLUMN: PROFILE SHOWCASE CARD (DESKTOP ONLY) ================= */}
            <div className="hidden lg:flex lg:col-span-5 justify-center w-full">
              <div className="relative w-full max-w-[320px] sm:max-w-[340px] aspect-[3/4.5] rounded-2xl border border-white/15 p-5 flex flex-col justify-between overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.95)] group">
                
                {/* Full Background Image */}
                <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#0a0d0c]">
                  <img
                    src="/assets/profile/foto1.png"
                    alt={personalData.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = personalData.image || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80";
                    }}
                  />
                  {/* Top Vignette Gradient for Text Readability */}
                  <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/85 via-black/40 to-transparent pointer-events-none" />
                  {/* Bottom Vignette Gradient for Pill Readability */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-none" />
                  {/* Subtle Emerald Tint Aura */}
                  <div className="absolute inset-0 bg-emerald-950/10 pointer-events-none" />
                </div>

                {/* Overlaid Card Header (Name & Title) */}
                <div className="relative z-10 text-center space-y-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                    {personalData.name.split(' ').slice(0, 2).join(' ')} {personalData.name.split(' ')[2] ? personalData.name.split(' ')[2][0] + '.' : ''}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-gray-200">
                    {personalData.title || "Fresh Graduate"}
                  </p>
                </div>

                {/* Overlaid Floating Bottom Online Pill Bar */}
                <div className="relative z-10 p-2 sm:p-2.5 rounded-xl bg-[#0e1411]/85 border border-white/20 backdrop-blur-md flex items-center justify-between shadow-[0_8px_20px_rgba(0,0,0,0.6)]">
                  <div className="flex items-center space-x-2.5">
                    {/* Small User Avatar */}
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-white/30 bg-gray-800 flex-shrink-0 shadow-sm">
                      <img 
                        src="/assets/profile/foto1.png" 
                        alt="Avatar" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Username & Status */}
                    <div className="text-left">
                      <p className="text-xs font-bold text-white leading-tight">
                        @{socialLinks.github ? socialLinks.github.split('/').pop() : 'bayu3prayitno'}
                      </p>
                      <div className="flex items-center space-x-1.5 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(74,222,128,0.9)]" />
                        <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">Online</span>
                      </div>
                    </div>
                  </div>

                  {/* Compact Contact Me Button */}
                  <button
                    onClick={() => scrollTo('contact')}
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-emerald-500/25 text-white hover:text-emerald-300 border border-white/20 hover:border-emerald-500/50 text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer shadow-sm"
                  >
                    Contact Me
                  </button>
                </div>

              </div>
            </div>


            {/* ================= RIGHT COLUMN: ABOUT ME DETAILS & STATS ================= */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
              
              {/* Heading */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                  About Me
                </h2>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-3.5 text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  A disciplined, responsible, and open-minded Applied Bachelor of <span className="text-white font-medium">Computer Engineering Technology</span> graduate from <span className="text-white font-medium">Politeknik Negeri Semarang</span>.
                </p>
                <p className="text-gray-400">
                  I possess practical experience and a broad technology engineering portfolio, ranging from developing integrated web applications and implementing <span className="text-gray-200 font-medium">Artificial Intelligence (AI)</span> for smart analysis, to designing <span className="text-gray-200 font-medium">IoT-based automation systems</span>. Backed by a solid internship track record and adaptive problem-solving skills, I am ready to fully contribute to an innovative professional work environment.
                </p>
              </div>

              {/* 3 Metric Counters / Highlights for Fresh Graduate */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 py-4 border-t border-b border-white/10">
                
                {/* Stat 1: GPA */}
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4ade80] tracking-tight">
                    3.74
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold uppercase text-gray-400 tracking-wider">
                    GPA / 4.00
                  </div>
                </div>

                {/* Stat 2: Projects */}
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4ade80] tracking-tight">
                    10+
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold uppercase text-gray-400 tracking-wider">
                    Completed Projects
                  </div>
                </div>

                {/* Stat 3: Tech Domains */}
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4ade80] tracking-tight">
                    5+
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold uppercase text-gray-400 tracking-wider">
                    Core Tech Domains
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  onClick={() => scrollTo('projects')}
                  className="px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#4ade80] hover:bg-[#3ec974] text-[#050607] font-bold text-sm sm:text-base tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_18px_rgba(74,222,128,0.4)] cursor-pointer"
                >
                  Lihat Project
                </button>

                <button
                  onClick={() => scrollTo('contact')}
                  className="px-6 sm:px-7 py-2.5 sm:py-3 rounded-full border border-white/20 hover:border-emerald-400 bg-transparent hover:bg-white/5 text-white hover:text-emerald-400 font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  Contact Me
                </button>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Profile;
