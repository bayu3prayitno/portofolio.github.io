import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ExternalLink, Github, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/portfolioData";
import { useLanguage } from "../contexts/LanguageContext";
import { CyberHeader } from "./CyberText";

const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const { t } = useLanguage();

  const displayProjects = projects.map((proj, idx) => {
    const trans = t.projects.items?.find((item) => item.id === proj.id) || t.projects.items?.[idx];
    return {
      ...proj,
      title: trans?.title || proj.title,
      category: trans?.category || proj.category,
      description: trans?.description || proj.description,
      techText: trans?.techText || proj.techText,
    };
  });

  const activeProject = displayProjects.find((p) => p.id === selectedProjectId);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeProject]);

  return (
    <section 
      id="projects" 
      className="relative py-24 bg-transparent text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <CyberHeader
          titlePrefix={t.projects.titlePrefix}
          titleHighlight={t.projects.titleHighlight}
          subtitle={t.projects.subtitle}
          triggerKey={`${t.projects.titlePrefix}-${t.projects.titleHighlight}`}
        />

        {/* 4-Column Grid Layout matching the reference */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ staggerChildren: 0.06 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ y: -4, scale: 1.02 }}
              onClick={() => setSelectedProjectId(project.id)}
              className="group relative rounded-[22px] bg-[#0c100e] hover:bg-[#0c100e] border border-white/10 hover:border-emerald-500/70 p-2.5 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-[0_12px_28px_rgba(0,0,0,0.8)] cursor-pointer overflow-hidden"
            >
              {/* Project Image Window */}
              <div className="relative w-full aspect-[16/10] rounded-[16px] overflow-hidden bg-black/90 mb-2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105 transition-all duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80";
                  }}
                />
              </div>

              {/* Bottom Project Details Bar (Deep calm forest-emerald tone on hover) */}
              <div className="relative z-10 px-3 py-2 rounded-[14px] transition-all duration-300 group-hover:bg-[#113821] flex flex-col justify-center space-y-1">
                {/* Row 1: Title & Category */}
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-bold text-xs sm:text-sm text-white tracking-tight truncate">
                    {project.title}
                  </h3>
                  <span className="text-[10px] sm:text-[11px] font-medium text-gray-400 group-hover:text-emerald-300 whitespace-nowrap flex-shrink-0">
                    {project.category || "Web Application"}
                  </span>
                </div>

                {/* Row 2: Technologies */}
                <div className="text-[9px] sm:text-[10px] text-gray-500 group-hover:text-gray-300 font-mono tracking-tight truncate">
                  {project.techText || (project.technologies ? project.technologies.join(', ') : 'HTML, CSS, JS')}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Interactive Project Modal Rendered Directly to Body via Portal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {activeProject && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/85 backdrop-blur-md"
                onClick={() => setSelectedProjectId(null)}
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative z-10 w-full max-w-2xl bg-[#0b0f0d] border border-white/20 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.98)] max-h-[90vh] flex flex-col"
              >
                {/* Modal Header Image */}
                <div className="relative w-full aspect-[16/9] bg-black overflow-hidden flex-shrink-0">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setSelectedProjectId(null)}
                    aria-label="Close modal"
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/70 hover:bg-black text-white hover:text-emerald-400 border border-white/20 transition-all cursor-pointer shadow-lg"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 sm:p-8 space-y-4 overflow-y-auto bg-[#0b0f0d]">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {activeProject.title}
                      </h3>
                      <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mt-0.5">
                        {activeProject.category}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {activeProject.description}
                  </p>

                  {/* Tech Tags */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase text-gray-400 tracking-wider mb-2">
                      {t.projects.techUsed}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.technologies?.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-white/10">
                    {activeProject.github && (
                      <a
                        href={activeProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/15 transition-all"
                      >
                        <Github size={16} />
                        <span>{t.projects.sourceCode}</span>
                      </a>
                    )}
                    {activeProject.liveDemo && (
                      <a
                        href={activeProject.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4ade80] hover:bg-[#3ec974] text-[#050607] text-xs sm:text-sm font-bold shadow-[0_0_15px_rgba(74,222,128,0.35)] transition-all"
                      >
                        <ExternalLink size={16} />
                        <span>{t.projects.livePreview}</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

export default Projects;
