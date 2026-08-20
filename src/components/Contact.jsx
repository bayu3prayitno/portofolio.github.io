import React, { useState } from 'react';
import { Send, Github, Instagram, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalData, socialLinks } from '../data/portfolioData';
import { useLanguage } from '../contexts/LanguageContext';
import { CyberHeader } from './CyberText';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Directing to WhatsApp with formatted message
    const messageText = `${t.contact.waIntro} *${formData.name}* (${formData.email}).%0A%0A${formData.message}`;
    const whatsappUrl = `https://wa.me/6285725040030?text=${messageText}`;

    setTimeout(() => {
      setIsSubmitting(false);
      window.open(whatsappUrl, '_blank');
      setFormData({ name: '', email: '', message: '' });
    }, 400);
  };

  return (
    <footer id="contact" className="relative pt-24 pb-12 bg-transparent text-white overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Connect Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* ================= LEFT COLUMN ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <CyberHeader
              titlePrefix={t.contact.titlePrefix}
              titleHighlight={t.contact.titleHighlight}
              subtitle={t.contact.subtitle}
              triggerKey={`${t.contact.titlePrefix}-${t.contact.titleHighlight}`}
              className="text-left mb-6"
            />

            {/* Social Icons Row */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-xl bg-[#0c100e] border border-white/10 hover:border-emerald-400/80 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                <Github size={18} />
              </a>
              <a
                href="https://instagram.com/bayu3prayitno"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-xl bg-[#0c100e] border border-white/10 hover:border-emerald-400/80 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                <Instagram size={18} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-xl bg-[#0c100e] border border-white/10 hover:border-emerald-400/80 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>


          {/* ================= RIGHT COLUMN (FORM) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              {/* Row 1: Name & Email inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.contact.placeholderName}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#090d0b] border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.contact.placeholderEmail}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#090d0b] border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>

              {/* Row 2: Message textarea */}
              <div>
                <textarea
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.placeholderMessage}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#090d0b] border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                />
              </div>

              {/* Row 3: Send Message Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-[#4ade80] hover:bg-[#3ec974] text-[#050607] font-bold text-sm tracking-wide flex items-center justify-center space-x-2 transition-all duration-200 hover:opacity-95 active:scale-[0.99] cursor-pointer shadow-md"
              >
                <Send size={16} />
                <span>{isSubmitting ? t.contact.sendingBtn : t.contact.sendBtn}</span>
              </button>

            </form>
          </motion.div>

        </div>

        {/* Bottom Copyright Text */}
        <div className="mt-24 pt-8 text-center text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Bayu Tri Prayitno — {t.contact.copyright}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Contact;
