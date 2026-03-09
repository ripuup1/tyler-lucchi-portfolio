"use client";

import AnimatedSection from "./AnimatedSection";
import { Briefcase, Dumbbell, ShoppingBag, Wine, Pizza, Languages, Trophy, UtensilsCrossed } from "lucide-react";

const entries = [
  {
    icon: Briefcase,
    role: "Founder & CEO",
    org: "LuminArch Digital Agency",
    date: "Feb 2026 - Present",
    location: "Wilmington, NC",
    bullets: [
      "Co-founded a custom web development agency with Davis Olson",
      "Design and develop production-grade Next.js websites for small businesses, pricing from $500 to $5,000+",
      "Manage the full project lifecycle from client consultation and competitive research through design, development, deployment, DNS migration, and ongoing maintenance",
      "Built a prospect pipeline of 75+ local businesses through door-to-door outreach, SEO audits, and spec-site demos",
      "Negotiated a $5,000 nonprofit website redesign contract with Moms Across America including $150/month maintenance",
      "Clients include MDN Cabinets ($1,500 contract), Diana May Realty, EBMM Attorneys, and more",
    ],
  },
  {
    icon: Dumbbell,
    role: "Kickboxing Instructor",
    org: "9Round Kickboxing Fitness",
    date: "Jan 2026 - Present",
    location: "Wilmington, NC",
    bullets: [
      "Lead high-energy circuit training workouts and ensure safe, effective sessions",
      "Guide new guests through their first workouts and introduce them to 9Round programs",
      "Support membership sales and sign-ups through clear communication and positive guest interactions",
      "Help maintain studio quality and collaborate with the team on smooth daily operations",
    ],
  },
  {
    icon: ShoppingBag,
    role: "Founder",
    org: "Haven & Home Co.",
    date: "Mar 2026 - Present",
    location: "Pinterest",
    bullets: [
      "Launched a faceless Pinterest affiliate brand from concept to 130+ pins in one weekend",
      "Created 56 SEO-optimized blog posts for affiliate link distribution",
      "Monetizing through Amazon Associates, LTK, and ShareASale programs",
    ],
  },
  {
    icon: Wine,
    role: "Food Runner",
    org: "Figure 8 Yacht Club",
    date: "Jun 2025 - Oct 2025",
    location: "Wilmington, NC",
    bullets: [
      "Delivered high-quality service in a fast-paced, high-end dining environment",
      "Coordinated with servers, kitchen staff, and management to ensure timely and accurate food delivery",
      "Supported front-of-house operations during peak service hours and private events",
    ],
  },
  {
    icon: Pizza,
    role: "Delivery Driver",
    org: "Randy's Pizza",
    date: "Dec 2023 - Jun 2024",
    location: "Holly Springs, NC",
    bullets: [
      "Verified orders against invoices at delivery to ensure accuracy",
      "Provided excellent customer service and addressed any questions or concerns about orders",
      "Built work ethic and time management skills while balancing academics",
    ],
  },
  {
    icon: UtensilsCrossed,
    role: "Food Runner",
    org: "Stone & Rail",
    date: "Dec 2020 - Jul 2021",
    location: "Glen Rock, NJ",
    bullets: [
      "Served food and assisted waitstaff during busy service periods",
      "Provided attentive customer service and adapted well in fast-paced environments",
    ],
  },
  {
    icon: Languages,
    role: "Volunteer English Teacher",
    org: "Speak Teens",
    date: "Two Programs",
    location: "Italy",
    bullets: [
      "Participated in two Speak camps as an English teacher for Italian students across the country",
      "Traveled to Italy for both programs and spent 7 to 10 hours a day for a total of two weeks helping teach English",
      "Developed cross-cultural communication skills and adaptability in an immersive environment",
    ],
  },
  {
    icon: Trophy,
    role: "Three-Year Captain",
    org: "Varsity Lacrosse, Apex High School",
    date: "High School",
    location: "Apex, NC",
    bullets: [
      "Three-year captain of the varsity lacrosse team",
      "Won the Men's Lacrosse Cougar Award for most dedication to the team (Jun 2024)",
      "Won the AHS Coaches Award, given to one male athlete per year as voted on by the entire Apex High School coaching staff (Apr 2024)",
      "Led the team through practices, games, and off-season development",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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

        <div className="space-y-8 sm:space-y-12">
          {entries.map((entry, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className={`relative flex flex-col md:flex-row gap-3 md:gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
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
                  <div className="glow-card rounded-lg bg-bg-card p-4 sm:p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <entry.icon size={16} className="text-accent-blue shrink-0" />
                      <h3 className="font-outfit font-semibold text-text-primary text-sm sm:text-base">{entry.role}</h3>
                    </div>
                    <p className="font-jetbrains text-xs text-text-muted mb-3">{entry.org}</p>
                    <ul className="space-y-1.5">
                      {entry.bullets.map((b, j) => (
                        <li key={j} className="text-xs sm:text-sm text-text-body flex gap-2">
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
