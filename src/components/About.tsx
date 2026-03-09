"use client";

import AnimatedSection from "./AnimatedSection";
import { MapPin, GraduationCap, Target, Shield } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <AnimatedSection>
        <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-text-primary mb-2">
          <span className="text-accent-blue font-jetbrains text-sm font-normal tracking-widest block mb-2">
            // SECTION 01
          </span>
          DOSSIER
        </h2>
        <div className="h-px bg-gradient-to-r from-accent-blue/50 to-transparent mt-4 mb-12" />
      </AnimatedSection>

      <div className="grid md:grid-cols-5 gap-8">
        {/* Left — Profile Card */}
        <AnimatedSection className="md:col-span-2" delay={0.1}>
          <div className="glow-card rounded-lg bg-bg-card p-6 space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="font-outfit font-semibold text-lg text-text-primary">Profile</h3>
              <span className="flex items-center gap-1.5 text-xs font-jetbrains text-accent-green">
                <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                ACTIVE
              </span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-text-body">
                <MapPin size={14} className="text-accent-blue" />
                Wilmington, NC
              </div>
              <div className="flex items-center gap-2 text-text-body">
                <Target size={14} className="text-accent-blue" />
                Age: 21
              </div>
              <div className="flex items-center gap-2 text-text-body">
                <Shield size={14} className="text-accent-gold" />
                Clearance: <span className="text-accent-gold font-jetbrains text-xs px-2 py-0.5 border border-accent-gold/30 rounded">FOUNDER</span>
              </div>
              <div className="flex items-center gap-2 text-text-body">
                <GraduationCap size={14} className="text-accent-blue" />
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

        {/* Right — Bio */}
        <AnimatedSection className="md:col-span-3" delay={0.2}>
          <div className="glow-card rounded-lg bg-bg-card p-6">
            <h3 className="font-outfit font-semibold text-lg text-text-primary mb-4">Bio</h3>
            <div className="space-y-4 text-sm text-text-body leading-relaxed">
              <p>
                Tyler Lucchi is a junior at UNC Wilmington studying Economics with a Pre-Law minor, running a web development agency, and building multiple revenue streams — all at the same time.
              </p>
              <p>
                He founded LuminArch Digital Agency in early 2026 after recognizing that small businesses were getting crushed by $10,000–$30,000 agency quotes for mediocre template websites. LuminArch builds custom Next.js sites at a fraction of the cost, and has already landed multiple paying clients including commercial cabinetry companies, national nonprofits, law firms, and real estate professionals.
              </p>
              <p>
                Before LuminArch, Tyler&apos;s path was anything but linear. He started college as a Biomedical Engineering major, pivoted to Economics, lost his father during his junior year of high school, worked restaurant and service jobs to build work ethic, became a three-year varsity lacrosse captain, served as Vice President of Lambda Chi Alpha fraternity, traveled to Italy to teach English to students through Speak Teens, and built beds for children in need through Sleep in Heavenly Peace.
              </p>
              <p>
                He doesn&apos;t just study business — he runs them. He doesn&apos;t just talk about AI — he builds with it. And he&apos;s not waiting until after graduation to start.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
