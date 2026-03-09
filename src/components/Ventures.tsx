"use client";

import AnimatedSection from "./AnimatedSection";
import { Globe, ShoppingBag, Map, Bot, ExternalLink } from "lucide-react";

const ventures = [
  {
    icon: Globe,
    name: "LuminArch Digital Agency",
    status: "ACTIVE",
    statusColor: "text-accent-green",
    dotColor: "bg-accent-green",
    role: "Founder & CEO",
    coOwner: "Davis Olson",
    url: "luminarch.pro",
    description:
      "Custom web development agency specializing in Next.js websites for small businesses. Full-stack builds from design through deployment on Vercel. Clients include commercial contractors, nonprofits, law firms, real estate professionals, restaurants, and retail businesses.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "GitHub", "Figma", "Claude Code"],
    highlights: [
      "Multiple paying clients in first month of operation",
      "Spec-site sales strategy — build the site first, sell second",
      "75+ prospect pipeline built through door-to-door outreach",
      "Demo sites built for: MDN Cabinets, Moms Across America, Diana May Realty, EBMM Attorneys, Rocco's Cigar Bar, RLS-NC, Island Burgers, Soul Flavor Kitchen, Ocean View Restaurant",
    ],
  },
  {
    icon: ShoppingBag,
    name: "Haven & Home Co.",
    status: "ACTIVE",
    statusColor: "text-accent-green",
    dotColor: "bg-accent-green",
    role: "Founder",
    platform: "Pinterest (@havenandhomeco)",
    description:
      "Faceless Pinterest affiliate brand in the home decor and organization niche. Targeting women aged 35–55 with curated product recommendations. Revenue through Amazon Associates, LTK, and ShareASale. Built from zero to 130+ pins and 56 blog posts in a single weekend launch sprint.",
    revenueModel: "Affiliate commissions (Amazon Associates), future Shopify store",
    goal: "Scale to $2K–5K/month passive income within 6 months",
  },
  {
    icon: Map,
    name: "Vox Terra",
    status: "IN DEVELOPMENT",
    statusColor: "text-accent-gold",
    dotColor: "bg-accent-gold",
    role: "Creator",
    description:
      "Global news visualization project — an interactive 3D globe that surfaces real-time news events geographically. Built with Next.js, Three.js, and Supabase.",
  },
  {
    icon: Bot,
    name: 'AI Infrastructure — "Vici"',
    status: "IN DEVELOPMENT",
    statusColor: "text-accent-gold",
    dotColor: "bg-accent-gold",
    role: "Architect",
    description:
      "Personal AI assistant system built on the OpenClaw framework, paired with Telegram (@Luminarchvici_bot). Named after the Latin 'I conquered.' Designed to be Tyler's Jarvis — handling lead research, scheduling, business intelligence, and task automation across all ventures.",
  },
];

export default function Ventures() {
  return (
    <section id="ventures" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <AnimatedSection>
        <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-text-primary mb-2">
          <span className="text-accent-blue font-jetbrains text-sm font-normal tracking-widest block mb-2">
            // SECTION 02
          </span>
          VENTURES
        </h2>
        <div className="h-px bg-gradient-to-r from-accent-blue/50 to-transparent mt-4 mb-12" />
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6">
        {ventures.map((v, i) => (
          <AnimatedSection key={v.name} delay={i * 0.1}>
            <div className="glow-card rounded-lg bg-bg-card p-6 h-full flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <v.icon size={20} className="text-accent-blue" />
                  <h3 className="font-outfit font-semibold text-lg text-text-primary">{v.name}</h3>
                </div>
                <span className={`flex items-center gap-1.5 text-xs font-jetbrains ${v.statusColor}`}>
                  <span className={`w-2 h-2 rounded-full ${v.dotColor} animate-pulse`} />
                  {v.status}
                </span>
              </div>

              <div className="text-xs font-jetbrains text-text-muted mb-1">ROLE: {v.role}</div>
              {v.coOwner && <div className="text-xs font-jetbrains text-text-muted mb-1">CO-OWNER: {v.coOwner}</div>}
              {v.url && (
                <a
                  href={`https://${v.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-jetbrains text-accent-blue hover:underline flex items-center gap-1 mb-1"
                >
                  {v.url} <ExternalLink size={10} />
                </a>
              )}
              {v.platform && <div className="text-xs font-jetbrains text-text-muted mb-1">PLATFORM: {v.platform}</div>}

              <p className="text-sm text-text-body leading-relaxed mt-3 flex-1">{v.description}</p>

              {v.tech && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {v.tech.map((t) => (
                    <span key={t} className="text-xs font-jetbrains px-2 py-0.5 rounded border border-accent-blue/20 text-accent-blue/80">
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {v.highlights && (
                <ul className="mt-4 space-y-1.5">
                  {v.highlights.map((h, j) => (
                    <li key={j} className="text-xs text-text-muted flex gap-2">
                      <span className="text-accent-gold mt-0.5">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}

              {v.revenueModel && (
                <div className="mt-3 text-xs text-text-muted">
                  <span className="text-accent-gold">Revenue:</span> {v.revenueModel}
                </div>
              )}
              {v.goal && (
                <div className="mt-1 text-xs text-text-muted">
                  <span className="text-accent-gold">Goal:</span> {v.goal}
                </div>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
