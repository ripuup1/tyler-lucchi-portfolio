"use client";

import AnimatedSection from "./AnimatedSection";
import { Mail, Phone, Linkedin, Github, Instagram, Globe, ExternalLink } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", value: "tylucchi@gmail.com", href: "mailto:tylucchi@gmail.com" },
  { icon: Phone, label: "Phone", value: "(201) 628-6860", href: "tel:+12016286860" },
  { icon: Linkedin, label: "LinkedIn", value: "tyler-lucchi", href: "https://linkedin.com/in/tyler-lucchi" },
  { icon: Github, label: "GitHub", value: "ripuup1", href: "https://github.com/ripuup1" },
  { icon: Instagram, label: "Instagram", value: "@tylerlucchi", href: "https://instagram.com/tylerlucchi" },
  { icon: Globe, label: "LuminArch", value: "luminarch.pro", href: "https://luminarch.pro" },
  { icon: ExternalLink, label: "Haven & Home", value: "Pinterest", href: "https://pinterest.com/havenandhomeco" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <AnimatedSection>
        <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-text-primary mb-2">
          <span className="text-accent-blue font-jetbrains text-sm font-normal tracking-widest block mb-2">
            // SECTION 07
          </span>
          ESTABLISH CONNECTION
        </h2>
        <div className="h-px bg-gradient-to-r from-accent-blue/50 to-transparent mt-4 mb-12" />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="glow-card rounded-lg bg-bg-card p-4 flex items-center gap-3 group hover:bg-bg-hover transition-all"
            >
              <link.icon size={18} className="text-accent-blue group-hover:text-accent-gold transition-colors" />
              <div>
                <p className="text-xs font-jetbrains text-text-muted">{link.label}</p>
                <p className="text-sm text-text-body group-hover:text-text-primary transition-colors">{link.value}</p>
              </div>
            </a>
          ))}
        </div>
      </AnimatedSection>

      {/* Footer */}
      <div className="mt-20 text-center">
        <p className="font-jetbrains text-xs text-text-muted">
          <span className="text-accent-blue">TL://</span> Built with Next.js, Tailwind CSS, and Framer Motion
        </p>
        <p className="font-jetbrains text-xs text-text-muted mt-1">
          &copy; {new Date().getFullYear()} Tyler Lucchi. All systems operational.
        </p>
      </div>
    </section>
  );
}
