import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion';
import { personalData, socialLinks } from '../data/portfolioData';

// Custom Social Icons matching the reference perfectly
const InstagramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.41a6.33 6.33 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.18z" />
  </svg>
);

const jobRoles = [
  "Mobile Development",
  "Web Development",
  "IT Support",
  "IoT Engineer"
];

const Home = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const cardControls = useAnimationControls();

  // Role rotator
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % jobRoles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Sequence: Drop & Aggressive Damped Pendulum Swing -> Smooth ±0.80° Idle Sway
  useEffect(() => {
    const runEntranceSequence = async () => {
      // 1. Initial Drop with decaying realistic swings
      await cardControls.start({
        y: 0,
        opacity: 1,
        rotate: [-24, 18, -11, 6.5, -3, 1.4, -0.8],
        transition: {
          y: { 
            type: "spring", 
            stiffness: 85, 
            damping: 11.5, 
            mass: 1.15, 
            delay: 0.15 
          },
          opacity: { duration: 0.25, delay: 0.15 },
          rotate: { 
            duration: 3.8, 
            ease: [0.25, 0.1, 0.25, 1], 
            delay: 0.15 
          }
        }
      });

      // 2. Seamlessly enter gentle continuous idle sway at ±0.80°
      cardControls.start({
        rotate: [-0.8, 0.8, -0.8],
        transition: {
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut"
        }
      });
    };

    runEntranceSequence();
  }, [cardControls]);

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = personalData.resume || '/CV_ATS.pdf';
    link.download = 'CV_ATS.pdf';
    link.click();
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full bg-[#050607] text-white flex items-center justify-center overflow-hidden pt-24 pb-16 lg:py-0"
    >
      {/* --- TOP-CENTER OVERHEAD SPOTLIGHT BEAM (ACCORDING TO REFERENCE) --- */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-20 sm:-top-28 left-1/2 -translate-x-1/2 w-[540px] sm:w-[680px] lg:w-[820px] h-[750px] sm:h-[900px] z-0"
      >
        <svg viewBox="0 0 800 900" className="w-full h-full overflow-visible">
          <defs>
            {/* Volumetric Studio Beam Gradient */}
            <linearGradient id="centerStudioBeamGradient" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#86efac" stopOpacity="0.38" />
              <stop offset="18%" stopColor="#4ade80" stopOpacity="0.24" />
              <stop offset="45%" stopColor="#22c55e" stopOpacity="0.10" />
              <stop offset="75%" stopColor="#15803d" stopOpacity="0.03" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </linearGradient>

            {/* Top Ceiling Lamp Source Flare */}
            <radialGradient id="centerLampGlow" cx="50%" cy="0%" r="55%">
              <stop offset="0%" stopColor="#bbf7d0" stopOpacity="0.6" />
              <stop offset="35%" stopColor="#4ade80" stopOpacity="0.22" />
              <stop offset="75%" stopColor="#166534" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>

            {/* Atmospheric Gaussian Blur */}
            <filter id="centerStudioBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="36" />
            </filter>
          </defs>

          {/* Downward Spreading Spotlight Ray Cone */}
          <polygon
            points="360,0 440,0 760,900 40,900"
            fill="url(#centerStudioBeamGradient)"
            filter="url(#centerStudioBlur)"
            opacity="0.85"
          />

          {/* Top Ceiling Light Flare */}
          <ellipse 
            cx="400" 
            cy="0" 
            rx="150" 
            ry="55" 
            fill="url(#centerLampGlow)" 
            filter="url(#centerStudioBlur)" 
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* ================= LEFT COLUMN: HERO CONTENT ================= */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Top Pill Badges with Ultra Smooth Auto-Cycling Roles (Height: 36px) */}
          <div className="h-9 flex items-center gap-2.5 sm:gap-3">
            <span className="text-sm sm:text-base font-semibold text-white tracking-wide">
              I'm Ready For Job
            </span>
            <motion.div 
              layout
              transition={{ type: "spring", stiffness: 450, damping: 32 }}
              className="relative h-7 sm:h-8 px-3 sm:px-4 rounded-full bg-[#4ade80] text-[#050607] font-bold text-xs sm:text-sm tracking-tight shadow-[0_0_18px_rgba(74,222,128,0.45)] inline-flex items-center justify-center overflow-hidden"
            >
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={jobRoles[currentRoleIndex]}
                  initial={{ y: 22, opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -22, opacity: 0, filter: "blur(4px)" }}
                  transition={{ 
                    y: { type: "spring", stiffness: 350, damping: 28 },
                    opacity: { duration: 0.25 },
                    filter: { duration: 0.25 }
                  }}
                  className="inline-block whitespace-nowrap"
                >
                  {jobRoles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Main Headline (Starts at Y = 60px) */}
          <div className="mt-6 space-y-1 sm:space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              I'm {personalData.name || "M. Fadh Khulloh"}
            </h1>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              {personalData.title || "Full Stack Developer"}
            </h2>
          </div>

          {/* Subtitle / Bio */}
          <p className="mt-6 text-gray-400 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed font-normal">
            {personalData.bio || "Saya membantu bisnis dan individu membangun website serta solusi digital yang cepat, modern, dan mudah digunakan."}
          </p>

          {/* Social Links Row */}
          <div className="mt-7 flex items-center gap-3.5 sm:gap-4">
            <a
              href={socialLinks.instagram || "https://instagram.com"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-emerald-500/70 hover:border-emerald-400 bg-[#0d1410]/80 hover:bg-emerald-500/15 text-emerald-400 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_12px_rgba(16,185,129,0.15)] hover:shadow-[0_0_18px_rgba(74,222,128,0.35)]"
            >
              <InstagramIcon />
            </a>

            <a
              href={socialLinks.whatsapp || "https://wa.me/6285725040030"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-emerald-500/70 hover:border-emerald-400 bg-[#0d1410]/80 hover:bg-emerald-500/15 text-emerald-400 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_12px_rgba(16,185,129,0.15)] hover:shadow-[0_0_18px_rgba(74,222,128,0.35)]"
            >
              <WhatsAppIcon />
            </a>

            <a
              href={socialLinks.github || "https://github.com/bayu3prayitno"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-emerald-500/70 hover:border-emerald-400 bg-[#0d1410]/80 hover:bg-emerald-500/15 text-emerald-400 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_12px_rgba(16,185,129,0.15)] hover:shadow-[0_0_18px_rgba(74,222,128,0.35)]"
            >
              <GithubIcon />
            </a>

            <a
              href={socialLinks.tiktok || socialLinks.linkedin || "https://tiktok.com"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-emerald-500/70 hover:border-emerald-400 bg-[#0d1410]/80 hover:bg-emerald-500/15 text-emerald-400 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_12px_rgba(16,185,129,0.15)] hover:shadow-[0_0_18px_rgba(74,222,128,0.35)]"
            >
              <TikTokIcon />
            </a>
          </div>

          {/* Download CV Action Button */}
          <div className="mt-8">
            <button
              onClick={downloadCV}
              className="px-7 py-2.5 sm:py-3 rounded-full border border-emerald-500/80 hover:border-emerald-400 bg-transparent hover:bg-emerald-500/15 text-white font-medium text-sm sm:text-base tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(74,222,128,0.35)] cursor-pointer"
            >
              Download CV
            </button>
          </div>
        </motion.div>


        {/* ================= RIGHT COLUMN: HANGING ID BADGE CARD ================= */}
        <div className="lg:col-span-5 flex justify-center items-start relative w-full pt-4 lg:pt-0">

          {/* Framer Motion Container with Drop & Dynamic Damped Pendulum Swing */}
          <motion.div
            initial={{ opacity: 0, y: -450, rotate: -24 }}
            animate={cardControls}
            style={{ transformOrigin: "top center" }}
            className="flex flex-col items-center relative z-20 w-full"
          >
            {/* Top clearance matching 60px on desktop with chain suspended from above */}
            <div className="relative pt-2 lg:pt-[60px] flex flex-col items-center">
              
              {/* --- SUSPENSION BEAD CHAIN & CLASP (VISIBLE ON DESKTOP, COMPACT CLASP ON MOBILE) --- */}
              <div className="lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 lg:-mt-20 flex flex-col items-center pointer-events-none mb-1 lg:mb-0">
                {/* Top Anchor Point from Top Screen (Desktop only) */}
                <div className="hidden lg:block w-1.5 h-1.5 rounded-full bg-gray-300 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                
                {/* Metallic Ball Chain (Desktop only - prevents weird floating chain on mobile) */}
                <div className="hidden lg:flex flex-col items-center space-y-1.5 my-0.5">
                  {[...Array(14)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600 shadow-[0_1px_3px_rgba(0,0,0,0.9)]"
                    />
                  ))}
                </div>

                {/* Lanyard Swivel Clasp / Metallic Hook */}
                <div className="relative flex flex-col items-center -mt-0.5">
                  {/* Upper ring */}
                  <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-gray-400 bg-gray-900 shadow-md" />
                  {/* Metallic Clip latch */}
                  <div className="w-2 h-4 sm:w-2.5 sm:h-5 bg-gradient-to-r from-gray-500 via-gray-300 to-gray-600 rounded-sm -mt-1 shadow-md" />
                  {/* Clasp base */}
                  <div className="w-4 h-1.5 sm:w-5 sm:h-2 bg-gradient-to-r from-gray-600 via-gray-300 to-gray-700 rounded-full -mt-0.5 shadow-lg" />
                </div>
              </div>

              {/* --- ID BADGE CARD HOLDER --- */}
              <div className="relative cursor-pointer select-none [perspective:1200px] mt-1 lg:mt-0">
                <motion.div
                  whileHover={{ rotateY: 180 }}
                  whileTap={{ rotateY: 180 }}
                transition={{ 
                  duration: 0.85, 
                  ease: [0.34, 1.3, 0.64, 1] 
                }}
                className="relative w-[240px] sm:w-[280px] md:w-[320px] aspect-[3/4.4] [transform-style:preserve-3d]"
              >
                {/* ================= CARD FRONT ================= */}
                <div className="absolute inset-0 w-full h-full rounded-[22px] bg-[#0c0d0e] p-2 sm:p-2.5 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.95)] [backface-visibility:hidden] flex flex-col">
                  
                  {/* Lanyard Slot Hole at Top of Card */}
                  <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-8 h-2 rounded-full bg-[#050607] border border-gray-700/80 z-30" />

                  {/* Inner Card Container */}
                  <div className="relative w-full h-full rounded-[16px] overflow-hidden bg-[#08090a] flex flex-col justify-between">
                    
                    {/* Natural Glass Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/80 pointer-events-none z-10" />

                    {/* Profile / Character Image */}
                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                      <img
                        src={personalData.image || "/assets/profile/foto.png"}
                        alt={personalData.name || "Full Stack Developer"}
                        className="w-full h-full object-cover object-top select-none pointer-events-none filter brightness-95 contrast-105"
                        onError={(e) => {
                          e.target.src = "/assets/profile/cnn.png";
                        }}
                      />
                    </div>

                    {/* Bottom Text Overlay inside the ID Card */}
                    <div className="absolute bottom-0 inset-x-0 pt-12 pb-5 px-4 bg-gradient-to-t from-[#050706] via-[#050706]/90 to-transparent z-20 flex flex-col items-center text-center">
                      <span className="font-serif text-lg sm:text-xl font-bold tracking-wide text-white leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                        FullStack
                      </span>
                      <span className="font-serif text-base sm:text-lg font-semibold tracking-normal text-gray-200 leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                        Web Developer
                      </span>
                    </div>

                  </div>
                </div>

                {/* ================= CARD BACK (REALISTIC ACCESS PASS) ================= */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-[22px] bg-[#0c0d0e] p-3.5 sm:p-4 border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.95)] [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-between"
                >
                  {/* Lanyard Slot Hole */}
                  <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-8 h-2 rounded-full bg-[#050607] border border-gray-700/80 z-30" />

                  {/* Top Bar / Header */}
                  <div className="pt-5 flex items-center justify-between border-b border-white/10 pb-2.5">
                    <div>
                      <p className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                        IDENTIFICATION CARD
                      </p>
                      <p className="text-[9px] text-gray-400 font-mono">
                        NO: DEV-2026-BTP
                      </p>
                    </div>
                    {/* Status indicator */}
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[9px] font-bold text-emerald-300 uppercase tracking-wider">ACTIVE</span>
                    </div>
                  </div>

                  {/* Smart Card Chip & Details */}
                  <div className="space-y-3 my-auto">
                    {/* Metallic Smartcard EMV Chip */}
                    <div className="w-10 h-7 rounded-md bg-gradient-to-tr from-amber-600 via-amber-300 to-yellow-600 p-0.5 shadow-sm border border-yellow-700/50 flex flex-col justify-between">
                      <div className="w-full h-px bg-yellow-900/40 mt-1" />
                      <div className="w-full h-px bg-yellow-900/40 mb-1" />
                    </div>

                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-mono tracking-wider">Name</p>
                      <p className="text-sm font-bold text-white tracking-wide truncate">{personalData.name}</p>
                    </div>

                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-mono tracking-wider">Graduation</p>
                      <p className="text-xs font-semibold text-gray-200">Computer Engineering Technology</p>
                    </div>

                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-mono tracking-wider">Institution</p>
                      <p className="text-[11px] text-gray-300 truncate">Politeknik Negeri Semarang</p>
                    </div>
                  </div>

                  {/* Bottom Barcode & Magnetic Stripe */}
                  <div className="pt-2 border-t border-white/10 space-y-2">
                    {/* Barcode representation */}
                    <div className="h-7 w-full flex items-end justify-between px-1 opacity-80">
                      {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 4, 1, 2, 3, 1, 4, 2, 1, 3, 2, 4].map((h, i) => (
                        <div 
                          key={i} 
                          className="bg-gray-200" 
                          style={{ 
                            width: `${(i % 3 === 0) ? 2.5 : 1.5}px`, 
                            height: `${14 + (h * 3)}px` 
                          }} 
                        />
                      ))}
                    </div>
                    <p className="text-[8px] text-center font-mono text-gray-400 tracking-widest">
                      * AUTHORIZED DEVELOPER PASS *
                    </p>
                  </div>

                </div>
              </motion.div>
            </div>

            </div> {/* Closes pt-[60px] container */}

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Home;
