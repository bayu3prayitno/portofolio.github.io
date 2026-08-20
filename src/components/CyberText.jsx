import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CYBER_GLYPHS = "0101アイウエオカキクケコサシスセソタチツテト#@*<>{}+=~_";

/**
 * High-tech Hacker / Hologram Decryption Text Effect.
 * Scrambles random runes and decrypts sequentially with glowing emerald highlights.
 */
export const DecryptedText = ({
  text = "",
  speed = 28,
  maxIterations = 8,
  className = "",
  tag: Tag = "span",
  triggerKey,
  highlightColor = "#4ade80",
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isDecrypting, setIsDecrypting] = useState(false);
  const key = triggerKey !== undefined ? triggerKey : text;

  useEffect(() => {
    let iteration = 0;
    let interval = null;
    setIsDecrypting(true);

    const target = String(text || "");
    const len = target.length;

    interval = setInterval(() => {
      setDisplayText(
        target
          .split("")
          .map((char, index) => {
            if (char === " " || char === "\n") return char;
            if (index < iteration) {
              return target[index];
            }
            return CYBER_GLYPHS[Math.floor(Math.random() * CYBER_GLYPHS.length)];
          })
          .join("")
      );

      if (iteration >= len) {
        clearInterval(interval);
        setIsDecrypting(false);
      }

      iteration += 1 / (maxIterations / len || 1);
    }, speed);

    return () => clearInterval(interval);
  }, [key, text, speed, maxIterations]);

  return (
    <Tag className={`inline-block transition-all duration-300 ${className}`}>
      {displayText}
    </Tag>
  );
};

/**
 * 3D Kinetic Staggered Words with Hologram Laser Sweep
 */
export const KineticText = ({
  text = "",
  className = "",
  highlightClass = "text-[#4ade80]",
  highlightWord = "",
}) => {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.02 * i },
    }),
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.03, staggerDirection: -1 },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -70,
      filter: "blur(8px)",
      transformOrigin: "bottom center",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 280,
      },
    },
    exit: {
      opacity: 0,
      y: -18,
      rotateX: 70,
      filter: "blur(8px)",
      transition: { duration: 0.25 },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`inline-flex flex-wrap gap-x-[0.3em] [perspective:1000px] ${className}`}
    >
      {words.map((word, index) => {
        const isHighlighted =
          highlightWord &&
          word.toLowerCase().includes(highlightWord.toLowerCase());

        return (
          <motion.span
            key={`${word}-${index}`}
            variants={wordVariants}
            className={`inline-block transform-gpu ${
              isHighlighted ? highlightClass : ""
            }`}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.span>
  );
};

/**
 * Glitch Neon Sweep Container for Section Headers
 */
export const CyberHeader = ({
  titlePrefix = "",
  titleHighlight = "",
  subtitle = "",
  className = "text-center mb-14",
  triggerKey = "",
}) => {
  return (
    <div className={`space-y-3 overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={`cyber-header-${triggerKey || titlePrefix + titleHighlight}`}
          initial={{ opacity: 0, y: 22, scale: 0.98, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, scale: 0.98, filter: "blur(10px)" }}
          transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          className="relative inline-block"
        >
          {/* Subtle Cyber scanline background aura */}
          <div className="absolute -inset-x-8 -inset-y-3 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent blur-xl pointer-events-none opacity-60" />

          <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {titlePrefix && <span className="mr-2">{titlePrefix}</span>}
            {titleHighlight && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] via-[#86efac] to-[#22c55e] drop-shadow-[0_0_20px_rgba(74,222,128,0.4)]">
                {titleHighlight}
              </span>
            )}
          </h2>
        </motion.div>
      </AnimatePresence>

      {subtitle && (
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={`cyber-sub-${triggerKey || subtitle}`}
              initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
              className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
            >
              {subtitle}
            </motion.p>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};
