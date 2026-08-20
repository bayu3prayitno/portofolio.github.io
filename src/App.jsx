import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-[#050607] text-white relative transition-colors duration-300 overflow-x-hidden selection:bg-emerald-500 selection:text-black">
        
        {/* --- GLOBAL FIXED STUDIO OVERHEAD SPOTLIGHT BEAM --- */}
        <div 
          aria-hidden="true" 
          className="fixed top-0 left-1/2 -translate-x-1/2 w-[650px] sm:w-[850px] lg:w-[1050px] h-[850px] sm:h-[950px] pointer-events-none z-0"
        >
          <svg viewBox="0 0 1000 950" className="w-full h-full overflow-visible">
            <defs>
              {/* Volumetric Studio Beam Gradient */}
              <linearGradient id="fixedGlobalBeamGradient" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#86efac" stopOpacity="0.38" />
                <stop offset="18%" stopColor="#4ade80" stopOpacity="0.22" />
                <stop offset="45%" stopColor="#22c55e" stopOpacity="0.08" />
                <stop offset="75%" stopColor="#15803d" stopOpacity="0.02" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>

              {/* Top Ceiling Lamp Source Flare */}
              <radialGradient id="fixedGlobalLampGlow" cx="50%" cy="0%" r="55%">
                <stop offset="0%" stopColor="#bbf7d0" stopOpacity="0.65" />
                <stop offset="30%" stopColor="#4ade80" stopOpacity="0.25" />
                <stop offset="75%" stopColor="#166534" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>

              {/* Atmospheric Studio Gaussian Blur */}
              <filter id="fixedGlobalBlur" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="38" />
              </filter>
            </defs>

            {/* Downward Spreading Spotlight Ray Cone */}
            <polygon
              points="450,0 550,0 950,950 50,950"
              fill="url(#fixedGlobalBeamGradient)"
              filter="url(#fixedGlobalBlur)"
              opacity="0.85"
            />

            {/* Top Ceiling Light Flare */}
            <ellipse 
              cx="500" 
              cy="0" 
              rx="180" 
              ry="60" 
              fill="url(#fixedGlobalLampGlow)" 
              filter="url(#fixedGlobalBlur)" 
            />
          </svg>
        </div>

        <Navigation />
        <main className="relative z-10">
          <Home />
          <Profile />
          <Skills />
          <Projects />
          <Activities />
          <Contact />
        </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
