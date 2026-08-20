import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Trophy, BookOpen, Users, Calendar, Award, ExternalLink, X, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { activities } from '../data/portfolioData';
import { useLanguage } from '../contexts/LanguageContext';
import { CyberHeader } from './CyberText';

const Activities = () => {
  const [filter, setFilter] = useState('all');
  const [selectedActivityId, setSelectedActivityId] = useState(null);
  const { t } = useLanguage();

  const displayActivities = activities.map((act, idx) => {
    const trans = t.activities.items?.find((item) => item.id === act.id) || t.activities.items?.[idx];
    return {
      ...act,
      title: trans?.title || act.title,
      type: trans?.type || act.type,
      description: trans?.description || act.description,
    };
  });

  const activeActivity = displayActivities.find((a) => a.id === selectedActivityId);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeActivity) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeActivity]);

  const activityTypes = ['all', ...new Set(activities.map(activity => activity.type))];
  
  const filteredActivities = filter === 'all' 
    ? displayActivities 
    : displayActivities.filter(activity => {
        const orig = activities.find(a => a.id === activity.id);
        return orig?.type === filter || activity.type.toLowerCase() === filter.toLowerCase();
      });

  const getTypeIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'competition':
        return Trophy;
      case 'training':
        return BookOpen;
      case 'organization':
      case 'organisasi':
        return Users;
      case 'voulenteer':
      case 'volunteer':
        return Award;
      default:
        return FileText;
    }
  };

  return (
    <section 
      id="activities" 
      className="relative py-24 bg-transparent text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <CyberHeader
          titlePrefix={t.activities.titlePrefix}
          titleHighlight={t.activities.titleHighlight}
          subtitle={t.activities.subtitle}
          triggerKey={`${t.activities.titlePrefix}-${t.activities.titleHighlight}`}
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {activityTypes.map((type) => {
            const filterLabel = t.activities.filters[type.toLowerCase()] || type.toUpperCase();
            return (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  filter === type
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-[0_0_15px_rgba(74,222,128,0.2)]'
                    : 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10'
                }`}
              >
                {filterLabel}
              </button>
            );
          })}
        </div>

        {/* Activities Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ staggerChildren: 0.08 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {filteredActivities.map((activity, index) => {
            const Icon = getTypeIcon(activity.type);
            return (
              <motion.div
                key={activity.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                onClick={() => setSelectedActivityId(activity.id)}
                className="group relative rounded-2xl bg-[#090c0a]/90 hover:bg-[#0f1411] border border-white/10 hover:border-emerald-500/40 p-3 flex flex-col justify-between transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.7)] hover:shadow-emerald-500/10 cursor-pointer overflow-hidden backdrop-blur-md"
              >
                {/* Image Window */}
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-black/60 mb-3">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=80";
                    }}
                  />
                  {/* Type Badge */}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/70 border border-white/20 text-emerald-400 text-[10px] font-bold tracking-wider uppercase backdrop-blur-sm">
                    {activity.type}
                  </div>
                  {/* Date Badge */}
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-md bg-black/70 border border-white/20 text-gray-300 text-[10px] font-mono backdrop-blur-sm">
                    {activity.date}
                  </div>
                </div>

                {/* Details */}
                <div className="px-1 space-y-1.5">
                  <div className="flex items-center space-x-2">
                    <Icon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <h3 className="font-bold text-sm text-white tracking-tight line-clamp-1 group-hover:text-emerald-400 transition-colors">
                      {activity.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* Modal Rendered Directly to Body via Portal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {activeActivity && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/85 backdrop-blur-md"
                onClick={() => setSelectedActivityId(null)}
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative z-10 w-full max-w-xl bg-[#0b0f0d] border border-white/20 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.98)] p-6 sm:p-8 space-y-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      {activeActivity.type} • {activeActivity.date}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
                      {activeActivity.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedActivityId(null)}
                    aria-label="Close modal"
                    className="p-2 rounded-full bg-black/70 hover:bg-black text-white hover:text-emerald-400 border border-white/20 transition-all cursor-pointer shadow-lg"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-black/80">
                  <img
                    src={activeActivity.image}
                    alt={activeActivity.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {activeActivity.description}
                </p>

                {activeActivity.certificate && (
                  <div className="pt-3 border-t border-white/10">
                    <a
                      href={activeActivity.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-xs sm:text-sm shadow-md transition-all"
                    >
                      <ExternalLink size={16} />
                      <span>{t.activities.viewDoc}</span>
                    </a>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

export default Activities;
