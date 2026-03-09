"use client";

import AnimatedSection from "./AnimatedSection";

interface Skill {
  name: string;
  level: string;
  percent: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    title: "DEVELOPMENT",
    skills: [
      { name: "Next.js / React", level: "Advanced", percent: 85 },
      { name: "TypeScript", level: "Intermediate", percent: 60 },
      { name: "Tailwind CSS", level: "Advanced", percent: 90 },
      { name: "HTML / CSS", level: "Advanced", percent: 90 },
      { name: "Node.js", level: "Intermediate", percent: 55 },
      { name: "Git / GitHub", level: "Intermediate", percent: 60 },
      { name: "Vercel", level: "Advanced", percent: 85 },
      { name: "Supabase", level: "Beginner", percent: 25 },
      { name: "Three.js", level: "Beginner", percent: 20 },
    ],
  },
  {
    title: "AI & TOOLING",
    skills: [
      { name: "Claude Code (Anthropic)", level: "Power User", percent: 95 },
      { name: "Prompt Engineering", level: "Advanced", percent: 80 },
      { name: "Cursor IDE", level: "Intermediate", percent: 60 },
      { name: "Figma (Pro)", level: "Intermediate", percent: 55 },
      { name: "OpenClaw / MCP", level: "Beginner", percent: 25 },
    ],
  },
  {
    title: "BUSINESS & STRATEGY",
    skills: [
      { name: "Cold Outreach & Sales", level: "Intermediate", percent: 65 },
      { name: "Client Management", level: "Intermediate", percent: 60 },
      { name: "SEO Auditing", level: "Intermediate", percent: 55 },
      { name: "Affiliate Marketing", level: "Beginner", percent: 30 },
      { name: "Financial Analysis", level: "Intermediate", percent: 60 },
      { name: "Legal Reasoning", level: "Intermediate", percent: 55 },
    ],
  },
  {
    title: "SOFT SKILLS",
    skills: [
      { name: "Leadership", level: "Advanced", percent: 85 },
      { name: "Public Speaking", level: "Intermediate", percent: 65 },
      { name: "Cross-cultural Communication", level: "Intermediate", percent: 65 },
      { name: "Team Management", level: "Advanced", percent: 80 },
      { name: "Problem Solving", level: "Advanced", percent: 85 },
      { name: "Adaptability", level: "Advanced", percent: 80 },
      { name: "Networking & Relationship Building", level: "Intermediate", percent: 70 },
      { name: "Time Management", level: "Advanced", percent: 85 },
      { name: "Conflict Resolution", level: "Intermediate", percent: 60 },
    ],
  },
];

function levelColor(level: string) {
  if (level === "Power User" || level === "Advanced") return "text-accent-green";
  if (level === "Intermediate") return "text-accent-blue";
  return "text-accent-gold";
}

function barColor(level: string) {
  if (level === "Power User" || level === "Advanced") return "bg-accent-green";
  if (level === "Intermediate") return "bg-accent-blue";
  return "bg-accent-gold";
}

export default function Arsenal() {
  return (
    <section id="arsenal" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <AnimatedSection>
        <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-text-primary mb-2">
          <span className="text-accent-blue font-jetbrains text-sm font-normal tracking-widest block mb-2">
            // SECTION 03
          </span>
          ARSENAL
        </h2>
        <div className="h-px bg-gradient-to-r from-accent-blue/50 to-transparent mt-4 mb-12" />
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
        {categories.map((cat, ci) => (
          <AnimatedSection key={cat.title} delay={ci * 0.1}>
            <div className="glow-card rounded-lg bg-bg-card p-5 sm:p-6">
              <h3 className="font-jetbrains text-xs tracking-widest text-accent-gold mb-5">
                {cat.title}
              </h3>
              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs sm:text-sm text-text-body font-inter">{skill.name}</span>
                      <span className={`text-xs font-jetbrains ${levelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-1 bg-bg-hover rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${barColor(skill.level)} transition-all duration-1000`}
                        style={{ width: `${skill.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
