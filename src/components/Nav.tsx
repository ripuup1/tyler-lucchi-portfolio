"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

const navItems = [
  { label: "DOSSIER", href: "#about" },
  { label: "VENTURES", href: "#ventures" },
  { label: "ARSENAL", href: "#arsenal" },
  { label: "MISSIONS", href: "#experience" },
  { label: "EDUCATION", href: "#education" },
  { label: "INTEL", href: "#intel" },
  { label: "CONNECT", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ delay: 3.5, duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg-primary/90 backdrop-blur-md border-b border-accent-blue/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 font-jetbrains text-accent-blue text-sm">
            <Terminal size={16} />
            <span className="hidden sm:inline">TL://</span>
            <span className="text-text-muted">portfolio</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 text-xs font-jetbrains text-text-muted hover:text-accent-blue transition-colors border border-transparent hover:border-accent-blue/30 rounded"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-text-muted hover:text-accent-blue transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-bg-primary/95 backdrop-blur-md border-b border-accent-blue/20"
        >
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-sm font-jetbrains text-text-muted hover:text-accent-blue transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
