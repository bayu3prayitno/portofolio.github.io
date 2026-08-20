import React, { useState } from 'react';
import { Trophy, BookOpen, Users, Calendar, Award, ExternalLink, X, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { activities } from '../data/portfolioData';

const Activities = () => {
  const [filter, setFilter] = useState('all');
  const [selectedActivity, setSelectedActivity] = useState(null);

  const activityTypes = ['all', ...new Set(activities.map(activity => activity.type))];
  
  const filteredActivities = filter === 'all' 
    ? activities 
    : activities.filter(activity => activity.type === filter);

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
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-3 mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Activities & <span className="text-[#4ade80]">Experiences</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Pengalaman organisasi, pelatihan bersertifikat, dan kontribusi akademik.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {activityTypes.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                filter === type
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-[0_0_15px_rgba(74,222,128,0.2)]'
                  : 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10'
              }`}
            >
              {type.toUpperCase()}
            </button>
          ))}
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
                onClick={() => setSelectedActivity(activity)}
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

        {/* Modal */}
        <AnimatePresence>
          {selectedActivity && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-md"
                onClick={() => setSelectedActivity(null)}
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative z-10 w-full max-w-xl bg-[#0b0f0d] border border-white/20 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      {selectedActivity.type} • {selectedActivity.date}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
                      {selectedActivity.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedActivity(null)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-black/80">
                  <img
                    src={selectedActivity.image}
                    alt={selectedActivity.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {selectedActivity.description}
                </p>

                {selectedActivity.certificate && (
                  <div className="pt-3 border-t border-white/10">
                    <a
                      href={selectedActivity.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-xs sm:text-sm shadow-md transition-all"
                    >
                      <ExternalLink size={16} />
                      <span>Lihat Sertifikat / Dokumen</span>
                    </a>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Activities;
