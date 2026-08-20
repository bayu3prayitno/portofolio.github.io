import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, FolderOpen, Calendar, Mail, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { id: 'home', label: t.nav.home, icon: Home },
    { id: 'profile', label: t.nav.profile, icon: User },
    { id: 'skills', label: t.nav.skills, icon: Code },
    { id: 'projects', label: t.nav.projects, icon: FolderOpen },
    { id: 'activities', label: t.nav.activities, icon: Calendar },
    { id: 'contact', label: t.nav.contact, icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Desktop & Mobile Navigation Bar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none ${
          scrolled 
            ? 'py-3' 
            : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center relative">
          
          {/* ================= 1. PURE CENTERED NAVIGATION PILL ================= */}
          <div className="hidden md:flex items-center space-x-1 p-1.5 rounded-full bg-[#090c0a]/85 border border-white/10 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.8)] pointer-events-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                      : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <Icon size={14} className={isActive ? 'text-emerald-400' : 'text-gray-400'} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* ================= 2. SEPARATE INDEPENDENT LANGUAGE SWITCHER (TOP-RIGHT) ================= */}
          <div className="absolute right-4 sm:right-6 lg:right-8 top-0 pointer-events-auto flex items-center space-x-2.5">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3.5 py-2 sm:py-2.5 rounded-full bg-[#090c0a]/85 hover:bg-emerald-500/15 border border-white/10 hover:border-emerald-400 text-xs font-mono font-bold text-gray-300 hover:text-emerald-400 shadow-[0_8px_25px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-200 cursor-pointer group"
              title="Switch Language / Ganti Bahasa"
            >
              <Globe size={14} className="text-emerald-400 group-hover:rotate-45 transition-transform duration-300" />
              <span className="tracking-wider">
                <span className={language === 'en' ? 'text-emerald-400' : 'text-gray-500'}>EN</span>
                <span className="text-gray-600 mx-1">/</span>
                <span className={language === 'id' ? 'text-emerald-400' : 'text-gray-500'}>ID</span>
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Open menu"
                className="p-2.5 rounded-full text-gray-300 hover:text-white bg-[#090c0a]/90 border border-white/15 backdrop-blur-xl shadow-lg transition-all duration-200 cursor-pointer"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm" 
            onClick={() => setIsOpen(false)} 
          />
          <div className="fixed top-20 inset-x-4 max-w-sm mx-auto bg-[#0c0f0d] border border-white/15 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden z-50 p-3 animate-fade-in">
            <div className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-3 w-full px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-emerald-400 bg-emerald-500/15 border border-emerald-500/30'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon size={18} className={isActive ? 'text-emerald-400' : 'text-gray-400'} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
