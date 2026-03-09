"use client";

import AnimatedSection from "./AnimatedSection";
import LinkedInBadge from "./LinkedInBadge";
import { MapPin, GraduationCap, Target, Shield } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <AnimatedSection>
        <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-text-primary mb-2">
          <span className="text-accent-blue font-jetbrains text-sm font-normal tracking-widest block mb-2">
            // SECTION 01
          </span>
          DOSSIER
        </h2>
        <div className="h-px bg-gradient-to-r from-accent-blue/50 to-transparent mt-4 mb-12" />
      </AnimatedSection>

      <div className="grid md:grid-cols-5 gap-6 sm:gap-8">
        {/* Profile Card */}
        <AnimatedSection className="md:col-span-2" delay={0.1}>
          <div className="glow-card rounded-lg bg-bg-card p-5 sm:p-6 space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="font-outfit font-semibold text-lg text-text-primary">Profile</h3>
              <span className="flex items-center gap-1.5 text-xs font-jetbrains text-accent-green">
                <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                ACTIVE
              </span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-text-body">
                <MapPin size={14} className="text-accent-blue shrink-0" />
                Holly Springs, NC / Wilmington, NC
              </div>
              <div className="flex items-center gap-2 text-text-body">
                <Target size={14} className="text-accent-blue shrink-0" />
                Age: 20
              </div>
              <div className="flex items-center gap-2 text-text-body">
                <Shield size={14} className="text-accent-gold shrink-0" />
                Clearance: <span className="text-accent-gold font-jetbrains text-xs px-2 py-0.5 border border-accent-gold/30 rounded">FOUNDER</span>
              </div>
              <div className="flex items-center gap-2 text-text-body">
                <GraduationCap size={14} className="text-accent-blue shrink-0" />
                GPA: 3.7 / 4.0
              </div>
            </div>

            <div className="pt-3 border-t border-accent-blue/10">
              <p className="text-xs font-jetbrains text-text-muted uppercase tracking-wider mb-2">Current Focus</p>
              <p className="text-sm text-text-body leading-relaxed">
                Scaling LuminArch &bull; Building passive income engines &bull; Graduating early
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Bio */}
        <AnimatedSection className="md:col-span-3" delay={0.2}>
          <div className="glow-card rounded-lg bg-bg-card p-5 sm:p-6">
            <h3 className="font-outfit font-semibold text-lg text-text-primary mb-4">Bio</h3>
            <div className="space-y-4 text-sm text-text-body leading-relaxed">
              <p>
                I&apos;m a junior at UNC Wilmington studying Economics with a Pre-Law minor, running a web development agency, and building multiple revenue streams all at the same time. I&apos;m set to graduate a year early.
              </p>
              <p>
                I started LuminArch Digital Agency in early 2026 after seeing how many small businesses were getting hit with $10,000 to $30,000 quotes from agencies for websites that weren&apos;t even that good. We build custom Next.js sites at a fraction of the cost, and we&apos;ve already landed multiple paying clients including commercial cabinetry companies, national nonprofits, law firms, and real estate professionals.
              </p>
              <p>
                My path here hasn&apos;t been a straight line. I came into college as a Biomedical Engineering major, switched to AI Engineering my second semester freshman year, and then pivoted again to Economics with a Pre-Law minor. I lost my dad during my junior year of high school. I worked restaurant and service jobs to build work ethic. I was a three-year varsity lacrosse captain and won the AHS Coaches Award, which is given to one male athlete per year as voted on by the entire coaching staff. I traveled to Italy twice to teach English through Speak Teens, and I helped raise over $5,000 and build beds for kids in need through Sleep in Heavenly Peace.
              </p>
              <p>
                I don&apos;t just study business, I run one. I don&apos;t just talk about AI, I build with it. And I&apos;m not waiting until after graduation to get started.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* LinkedIn Badge */}
      <AnimatedSection className="mt-6 sm:mt-8" delay={0.3}>
        <LinkedInBadge />
      </AnimatedSection>
    </section>
  );
}
