"use client";

import AnimatedSection from "./AnimatedSection";
import { Briefcase, Dumbbell, ShoppingBag, Wine, Pizza, Languages, Users, Trophy } from "lucide-react";

const entries = [
  {
    icon: Briefcase,
    role: "Founder & CEO",
    org: "LuminArch Digital Agency",
    date: "January 2026 – Present",
    location: "Wilmington, NC",
    bullets: [
      "Founded and operate a custom web development agency with co-owner Davis Olson",
      "Design and develop production-grade Next.js websites for small businesses, pricing from $500–$5,000+",
      "Manage full project lifecycle: client consultation, competitive research, design, development, deployment, DNS migration, and ongoing maintenance",
      "Built prospect pipeline of 75+ local businesses through door-to-door outreach, SEO audits, and spec-site demos",
      "Negotiated $5,000 nonprofit website redesign contract with Moms Across America including $150/month maintenance",
      "Clients served: MDN Cabinets ($1,500 contract), Diana May Realty, EBMM Attorneys, and more",
    ],
  },
  {
    icon: Dumbbell,
    role: "Trainer",
    org: "9Round Kickboxing",
    date: "2025 – Present",
    location: "Wilmington, NC",
    bullets: [
      "Lead group kickboxing training sessions for members of all fitness levels",
      "Motivate and coach clients through high-intensity interval training circuits",
      "Manage session scheduling, member engagement, and facility upkeep",
    ],
  },
  {
    icon: ShoppingBag,
    role: "Founder",
    org: "Haven & Home Co.",
    date: "March 2026 – Present",
    location: "Pinterest",
    bullets: [
      "Launched faceless Pinterest affiliate brand from concept to 130+ pins in one weekend",
      "Created 56 SEO-optimized blog posts for affiliate link distribution",
      "Monetizing through Amazon Associates, LTK, and ShareASale programs",
    ],
  },
  {
    icon: Wine,
    role: "Service Staff",
    org: "Figure 8 Yacht Club",
    date: "Previous",
    location: "Wilmington, NC",
    bullets: [
      "Provided high-end food and beverage service in a private yacht club setting",
      "Developed professionalism and attention to detail in a luxury hospitality environment",
    ],
  },
  {
    icon: Pizza,
    role: "Delivery Driver",
    org: "Randy's Pizza",
    date: "Previous",
    location: "",
    bullets: [
      "Managed delivery logistics, customer interactions, and cash handling",
      "Built work ethic and time management skills while balancing academics",
    ],
  },
  {
    icon: Languages,
    role: "Volunteer English Teacher",
    org: "Speak Teens",
    date: "Previous",
    location: "Italy",
    bullets: [
      "Traveled to Italy to teach English to Italian high school students through an international volunteer exchange",
      "Developed cross-cultural communication skills and adaptability in an immersive environment",
    ],
  },
  {
    icon: Users,
    role: "Vice President",
    org: "Lambda Chi Alpha Fraternity",
    date: "Previous",
    location: "UNCW",
    bullets: [
      "Elected Vice President of the UNCW chapter",
      "Managed organizational operations, member development, and event coordination",
      "Led a chapter of peers through strategic planning and conflict resolution",
    ],
  },
  {
    icon: Trophy,
    role: "Three-Year Captain",
    org: "Varsity Lacrosse",
    date: "High School",
    location: "",
    bullets: [
      "Three-year captain of the varsity lacrosse team",
      "Led team through practices, games, and off-season development",
      "Developed leadership, discipline, and competitive drive",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <AnimatedSection>
        <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-text-primary mb-2">
          <span className="text-accent-blue font-jetbrains text-sm font-normal tracking-widest block mb-2">
            // SECTION 04
          </span>
          MISSION LOG
        </h2>
        <div className="h-px bg-gradient-to-r from-accent-blue/50 to-transparent mt-4 mb-12" />
      </AnimatedSection>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-accent-blue/20" />

        <div className="space-y-12">
          {entries.map((entry, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent-blue border-2 border-bg-primary -translate-x-1.5 mt-1.5 z-10" />

                {/* Date side */}
                <div className={`md:w-1/2 pl-10 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                  <span className="font-jetbrains text-xs text-accent-gold">{entry.date}</span>
                  {entry.location && (
                    <span className="font-jetbrains text-xs text-text-muted ml-2">// {entry.location}</span>
                  )}
                </div>

                {/* Content side */}
                <div className={`md:w-1/2 pl-10 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12 md:pl-0"}`}>
                  <div className="glow-card rounded-lg bg-bg-card p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <entry.icon size={16} className="text-accent-blue" />
                      <h3 className="font-outfit font-semibold text-text-primary">{entry.role}</h3>
                    </div>
                    <p className="font-jetbrains text-xs text-text-muted mb-3">{entry.org}</p>
                    <ul className="space-y-1.5">
                      {entry.bullets.map((b, j) => (
                        <li key={j} className="text-sm text-text-body flex gap-2">
                          <span className="text-accent-blue mt-0.5 shrink-0">▸</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
