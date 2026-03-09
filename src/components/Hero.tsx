"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [phase, setPhase] = useState(0);
  // 0: cursor blink, 1: typing INITIALIZING, 2: SYSTEM ONLINE, 3: main content

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1800),
      setTimeout(() => setPhase(3), 2800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center dot-grid scan-lines overflow-hidden px-4">
      <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
        <AnimatePresence mode="wait">
          {phase === 0 && (
            <motion.div
              key="cursor"
              exit={{ opacity: 0 }}
              className="font-jetbrains text-accent-blue text-lg"
            >
              <span className="cursor-blink">_</span>
            </motion.div>
          )}

          {phase === 1 && (
            <motion.div
              key="init"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="font-jetbrains text-text-muted text-sm tracking-widest"
            >
              INITIALIZING...
              <span className="cursor-blink ml-1">_</span>
            </motion.div>
          )}

          {phase === 2 && (
            <motion.div
              key="online"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="font-jetbrains text-accent-green text-lg tracking-widest text-glow-green"
            >
              SYSTEM ONLINE
            </motion.div>
          )}
        </AnimatePresence>

        {phase >= 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-outfit font-black text-4xl sm:text-6xl md:text-8xl text-text-primary text-glow-blue tracking-tight"
            >
              TYLER LUCCHI
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-4 sm:mt-6 space-y-2"
            >
              <p className="font-outfit text-base sm:text-xl text-accent-gold font-medium">
                Founder & CEO, LuminArch Digital Agency
              </p>
              <p className="font-jetbrains text-xs sm:text-sm text-text-muted">
                Economics & Pre-Law // UNC Wilmington
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-6 sm:mt-8 font-inter text-sm sm:text-lg text-text-body max-w-2xl mx-auto leading-relaxed"
            >
              I build things. Websites, businesses, systems, whatever the problem needs.
            </motion.p>
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      {phase >= 3 && (
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent-blue pulse-glow"
        >
          <ChevronDown size={28} />
        </motion.a>
      )}
    </section>
  );
}
