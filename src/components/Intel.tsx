"use client";

import AnimatedSection from "./AnimatedSection";
import { Trophy, Handshake, Target, Zap, Users, GraduationCap, Plane, Heart, Shield, Award, UserCheck } from "lucide-react";

const achievements = [
  { icon: Trophy, label: "FIRST CLIENT", description: "Closed MDN Cabinets ($1,500) within the first week of launching LuminArch", color: "text-accent-gold" },
  { icon: Handshake, label: "NONPROFIT DEAL", description: "Negotiated a $5,000 website contract with Moms Across America, a national nonprofit", color: "text-accent-gold" },
  { icon: Target, label: "SPEC SITE STRATEGY", description: "Pioneered a sales approach of building demo websites for prospects before pitching — closing at dramatically higher rates than cold outreach alone", color: "text-accent-blue" },
  { icon: Zap, label: "WEEKEND WARRIOR", description: "Launched Haven & Home Pinterest affiliate brand from zero to 130+ pins and 56 blog posts in a single weekend", color: "text-accent-green" },
  { icon: Users, label: "75 DEEP", description: "Built a prospect pipeline of 75+ Wilmington businesses through in-person door-to-door outreach", color: "text-accent-blue" },
  { icon: GraduationCap, label: "3.7 GPA", description: "Maintaining Dean's List while running a business, working part-time, and leading organizations", color: "text-accent-green" },
  { icon: Plane, label: "ITALY", description: "Volunteered internationally teaching English to Italian students through Speak Teens", color: "text-accent-blue" },
  { icon: Heart, label: "BEDS FOR KIDS", description: "Built beds for children in need through Sleep in Heavenly Peace", color: "text-accent-green" },
  { icon: Shield, label: "CAPTAIN x3", description: "Three-year varsity lacrosse captain", color: "text-accent-gold" },
  { icon: Award, label: "VP", description: "Elected Vice President of Lambda Chi Alpha fraternity", color: "text-accent-gold" },
  { icon: UserCheck, label: "CEN MENTEE", description: "Selected for Cameron Executive Network mentorship with nCino executive", color: "text-accent-blue" },
];

export default function Intel() {
  return (
    <section id="intel" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <AnimatedSection>
        <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-text-primary mb-2">
          <span className="text-accent-blue font-jetbrains text-sm font-normal tracking-widest block mb-2">
            // SECTION 06
          </span>
          INTEL
        </h2>
        <div className="h-px bg-gradient-to-r from-accent-blue/50 to-transparent mt-4 mb-12" />
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((a, i) => (
          <AnimatedSection key={a.label} delay={i * 0.05}>
            <div className="glow-card rounded-lg bg-bg-card p-5 h-full">
              <div className="flex items-center gap-2 mb-3">
                <a.icon size={16} className={a.color} />
                <span className={`font-jetbrains text-xs font-bold tracking-wider ${a.color}`}>
                  {a.label}
                </span>
              </div>
              <p className="text-sm text-text-body leading-relaxed">{a.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
