import React from "react";
import { motion } from "framer-motion";

// High-fidelity Tech & Tool SVG Icons
const TechIcons = {
  React: () => (
    <svg className="w-8 h-8 text-[#61DAFB]" viewBox="0 0 24 24" fill="currentColor">
      <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(30 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(90 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(150 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  ),
  Nextjs: () => (
    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" fill="black" stroke="white" strokeWidth="1.5" />
      <path d="M9 8v8l8-9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 11v5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  JavaScript: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path d="M7 16.5c.5.8 1.2 1.3 2.2 1.3 1.2 0 1.9-.6 1.9-1.9v-5.4h-1.6v5.4c0 .4-.2.6-.6.6-.3 0-.5-.2-.7-.5l-1.2.5zm6.4 1.3c1.2 0 2.1-.6 2.5-1.5l-1.3-.8c-.3.5-.7.8-1.2.8-.7 0-1.1-.4-1.1-1 0-.6.4-.9 1.4-1.3 1.7-.7 2.4-1.4 2.4-2.6 0-1.4-1.1-2.4-2.7-2.4-1.3 0-2.3.6-2.8 1.7l1.3.8c.3-.6.7-.9 1.5-.9.7 0 1.1.4 1.1.9 0 .5-.3.8-1.3 1.2-1.8.8-2.5 1.5-2.5 2.7 0 1.6 1.1 2.4 2.7 2.4z" fill="#000000" />
    </svg>
  ),
  Tailwind: () => (
    <svg className="w-8 h-8 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" />
    </svg>
  ),
  Nodejs: () => (
    <svg className="w-8 h-8 text-[#68A063]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l8.5 4.9v9.8L12 21.6l-8.5-4.9V6.9L12 2z" strokeLinejoin="round" />
      <path d="M12 22V12" />
      <path d="M20.5 7L12 12 3.5 7" />
    </svg>
  ),
  MySQL: () => (
    <svg className="w-8 h-8 text-[#00758F]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3C7.03 3 3 7.03 3 12c0 2.12.74 4.07 1.97 5.61L4.3 20.3c-.14.42.23.82.66.71l3.05-.76C9.37 20.71 10.65 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1.5 13.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5c.88 0 1.69.33 2.31.87l-1.06 1.06c-.34-.27-.78-.43-1.25-.43-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75c.47 0 .91-.16 1.25-.43l1.06 1.06c-.62.54-1.43.87-2.31.87z" />
    </svg>
  ),
  Git: () => (
    <svg className="w-8 h-8 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.62 10.63l-8.25-8.25a2.76 2.76 0 0 0-3.9 0L7.54 4.31l3.12 3.12a2.38 2.38 0 0 1 3 .62 2.38 2.38 0 0 1 .5 2.65l3 3a2.38 2.38 0 0 1 2.64.5 2.39 2.39 0 0 1 0 3.38 2.39 2.39 0 0 1-3.38 0 2.39 2.39 0 0 1-.5-2.65L13.1 11.7v5.1a2.38 2.38 0 0 1 .63 1.74 2.39 2.39 0 0 1-4.78 0c0-.68.28-1.3.74-1.74V11.5a2.38 2.38 0 0 1-.74-1.73c0-.75.35-1.42.89-1.85L6.64 4.9 2.38 9.16a2.76 2.76 0 0 0 0 3.9l8.25 8.25a2.76 2.76 0 0 0 3.9 0l7.09-7.09a2.76 2.76 0 0 0 0-3.9z" />
    </svg>
  ),
  Python: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      <path d="M11.91 2C6.73 2 7.05 4.25 7.05 4.25l.01 2.34h4.94v.7H5.06S2 6.94 2 12.12c0 5.19 2.68 5 2.68 5h1.6v-2.25s-.09-2.68 2.64-2.68h4.54s2.55.04 2.55-2.48V4.48S16.48 2 11.91 2zM9.54 3.65a.73.73 0 1 1 0 1.46.73.73 0 0 1 0-1.46z" fill="#3776AB" />
      <path d="M12.09 22c5.18 0 4.86-2.25 4.86-2.25l-.01-2.34h-4.94v-.7h6.94S22 17.06 22 11.88c0-5.19-2.68-5-2.68-5h-1.6v2.25s.09 2.68-2.64 2.68h-4.54s-2.55-.04-2.55 2.48v5.23S7.52 22 12.09 22zm2.37-1.65a.73.73 0 1 1 0-1.46.73.73 0 0 1 0 1.46z" fill="#FFD43B" />
    </svg>
  ),
  Laravel: () => (
    <svg className="w-8 h-8 text-[#FF2D20]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.5 7.5L12 2 2.5 7.5l9.5 5.5 9.5-5.5zm-9.5 7.2l-8-4.6v6.8l8 4.6v-6.8zm1.5 0v6.8l8-4.6v-6.8l-8 4.6z" />
    </svg>
  ),
  Firebase: () => (
    <svg className="w-8 h-8 text-[#FFCA28]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.65 18.57l7.05-13.07a.64.64 0 0 1 1.15.02l2.36 4.43-8.8 8.62h-1.76zm14.7 0L14.7 8.35l-3.3 6.22 7.95 4zM12 21.5a8.5 8.5 0 0 1-8.5-8.5c0-.6.07-1.18.2-1.74l9.16 9.16c-.28.7-.56 1.08-.86 1.08zm8.3-10.24c.13.56.2 1.14.2 1.74a8.5 8.5 0 0 1-8.5 8.5c-.3 0-.58-.38-.86-1.08l9.16-9.16z" />
    </svg>
  ),
  Postman: () => (
    <svg className="w-8 h-8 text-[#FF6C37]" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" />
      <path d="M14.5 7.5l-6 3.5 3.5 1.5 2.5-5zm-5 4.5l-2 4 4.5-2.5-2.5-1.5z" fill="#FFFFFF" />
    </svg>
  ),
  Figma: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24">
      <path d="M8 2h4v5H8a2.5 2.5 0 0 1 0-5z" fill="#F24E1E" />
      <path d="M12 2h4a2.5 2.5 0 0 1 0 5h-4V2z" fill="#FF7262" />
      <path d="M8 7h4v5H8a2.5 2.5 0 0 1 0-5z" fill="#A259FF" />
      <circle cx="14.5" cy="9.5" r="2.5" fill="#1ABCFE" />
      <path d="M8 12h4v5a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 7 17a2.5 2.5 0 0 1 1-2v-3z" fill="#0ACF83" />
    </svg>
  ),
  Canva: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="url(#canvaGrad)" />
      <defs>
        <linearGradient id="canvaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C4CC" />
          <stop offset="100%" stopColor="#7D2AE8" />
        </linearGradient>
      </defs>
      <text x="12" y="16" fill="white" fontSize="11" fontWeight="bold" textAnchor="middle" fontStyle="italic" fontFamily="serif">Canva</text>
    </svg>
  ),
  Flutter: () => (
    <svg className="w-8 h-8 text-[#02569B]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.314 0L2.3 12 6 15.7 21.7 0h-7.386zM14.314 11.23L8.5 17.044l3.7 3.7 3.7-3.7 5.8-5.814h-7.386z" />
    </svg>
  ),
  VSCode: () => (
    <svg className="w-8 h-8 text-[#007ACC]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.5 1.5L7.8 10.3 3.5 7 1.5 8.3v7.4L3.5 17l4.3-3.3 9.7 8.8 5-2.5V4l-5-2.5zm1.5 5.2v10.6l-6-5.3 6-5.3z" />
    </svg>
  ),
  GitHub: () => (
    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  Gemini: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4E95FF" />
          <stop offset="50%" stopColor="#9B72CB" />
          <stop offset="100%" stopColor="#D96570" />
        </linearGradient>
      </defs>
      <path d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z" fill="url(#geminiGrad)" />
    </svg>
  ),
  IoT: () => (
    <svg className="w-8 h-8 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="5" y="5" width="14" height="14" rx="2" strokeLinecap="round" />
      <rect x="9" y="9" width="6" height="6" fill="currentColor" fillOpacity="0.3" />
      <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" strokeLinecap="round" />
    </svg>
  ),
  AI: () => (
    <svg className="w-8 h-8 text-[#A855F7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="6" r="2" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="M7 6h10M5 8v8M19 8v8M7 18h10M7 7l3.5 3.5M17 7l-3.5 3.5M7 17l3.5-3.5M17 17l-3.5-3.5" strokeLinecap="round" />
    </svg>
  ),
  Antigravity: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#18181b" stroke="#ffffff20" />
      <path d="M12 4L6 18h3.5l1.5-4h2l1.5 4H18L12 4zm0 4.5l1 2.5h-2l1-2.5z" fill="#4ade80" />
    </svg>
  ),
};

const techStackList = [
  { name: "React", icon: TechIcons.React },
  { name: "Next.js", icon: TechIcons.Nextjs },
  { name: "JavaScript", icon: TechIcons.JavaScript },
  { name: "Tailwind", icon: TechIcons.Tailwind },
  { name: "Node.js", icon: TechIcons.Nodejs },
  { name: "MySQL", icon: TechIcons.MySQL },
  { name: "Git", icon: TechIcons.Git },
  { name: "Python", icon: TechIcons.Python },
  { name: "Laravel", icon: TechIcons.Laravel },
  { name: "Firebase", icon: TechIcons.Firebase },
  { name: "Postman", icon: TechIcons.Postman },
  { name: "Figma", icon: TechIcons.Figma },
  { name: "Canva", icon: TechIcons.Canva },
  { name: "Flutter", icon: TechIcons.Flutter },
  { name: "VS Code", icon: TechIcons.VSCode },
  { name: "GitHub", icon: TechIcons.GitHub },
  { name: "Google Gemini", icon: TechIcons.Gemini },
  { name: "IoT & Hardware", icon: TechIcons.IoT },
  { name: "AI & Image Processing", icon: TechIcons.AI },
  { name: "Antigravity", icon: TechIcons.Antigravity },
];

const Skills = () => {
  return (
    <section 
      id="skills" 
      className="relative py-24 bg-transparent text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-3 mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Tools & Tech Stack
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Teknologi dan tools yang saya gunakan untuk membangun aplikasi dan solusi digital.
          </p>
        </motion.div>

        {/* 5-Column Grid Layout matching the reference */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ staggerChildren: 0.05 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4"
        >
          {techStackList.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative rounded-2xl bg-[#0b0e0c]/80 hover:bg-[#111713]/90 border border-white/10 hover:border-emerald-500/40 p-4 sm:p-5 flex flex-col items-center justify-center gap-3 transition-all duration-300 shadow-md hover:shadow-[0_10px_25px_rgba(0,0,0,0.8)] hover:shadow-emerald-500/10 cursor-pointer overflow-hidden backdrop-blur-md"
              >
                {/* Subtle Hover Glow Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Tech Icon */}
                <div className="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Icon />
                </div>

                {/* Label */}
                <span className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200 text-center tracking-tight truncate w-full">
                  {item.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
