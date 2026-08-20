import React from 'react';
import { ArrowUp, Github, Linkedin, MessageCircle, Mail } from 'lucide-react';
import { personalData, socialLinks } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#profile' },
    { name: 'Tech Stack', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Activities', href: '#activities' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#050706] border-t border-white/10 text-white overflow-hidden">
      {/* Subtle Bottom Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4ade80] shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Bayu Tri Prayitno
              </h3>
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md">
              Applied Bachelor of Computer Engineering Technology graduate. Passionate about Web Development, IoT, and Artificial Intelligence.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-emerald-500/15 border border-white/10 hover:border-emerald-400 text-gray-400 hover:text-emerald-400 transition-all hover:scale-110"
              >
                <Github size={18} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-emerald-500/15 border border-white/10 hover:border-emerald-400 text-gray-400 hover:text-emerald-400 transition-all hover:scale-110"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-emerald-500/15 border border-white/10 hover:border-emerald-400 text-gray-400 hover:text-emerald-400 transition-all hover:scale-110"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                aria-label="Email"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-emerald-500/15 border border-white/10 hover:border-emerald-400 text-gray-400 hover:text-emerald-400 transition-all hover:scale-110"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-gray-400 hover:text-emerald-400 transition-colors text-left cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Direct Contact
            </h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <span className="text-gray-500 text-xs block">Email</span>
                <span className="text-gray-300 hover:text-emerald-400 transition-colors">{personalData.email}</span>
              </p>
              <p>
                <span className="text-gray-500 text-xs block">Location</span>
                <span className="text-gray-300">Jawa Tengah, Indonesia</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Scroll To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {currentYear} Bayu Tri Prayitno. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 hover:bg-emerald-500/15 border border-white/10 hover:border-emerald-400 text-gray-400 hover:text-emerald-300 transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
