"use client";

import AnimatedSection from "./AnimatedSection";
import { GraduationCap, BookOpen, Users } from "lucide-react";

const coursework = [
  "ECN 322: Intermediate Macroeconomics (GDP accounting, Cobb-Douglas production, loanable funds, quantity theory of money, Fisher equation)",
  "Constitutional Law (Establishment Clause, Second Amendment, First Amendment speech doctrine, judicial review)",
  "Labor Economics",
  "Public Speaking",
];

const programs = [
  "Truist Capitalism and Ethics Fellowship: Selected as one of four UNCW students to study 'Free to Choose' and 'Capitalism and Freedom' at Capitaf, Milton Friedman's former summer home in Vermont (May 2026)",
  "Cameron Executive Network (CEN) Mentorship Program: Matched with Tim Allen, Senior Technology Executive at nCino (publicly traded fintech, Wilmington HQ)",
  "Truist Capitalism Speaker Series at UNCW including meet-and-greets and dinners with guest speakers",
  "Applied to Live Oak Bank Loan Operations Internship (part-time, $20-$32/hr)",
];

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <AnimatedSection>
        <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-text-primary mb-2">
          <span className="text-accent-blue font-jetbrains text-sm font-normal tracking-widest block mb-2">
            // SECTION 05
          </span>
          EDUCATION
        </h2>
        <div className="h-px bg-gradient-to-r from-accent-blue/50 to-transparent mt-4 mb-12" />
      </AnimatedSection>

      <div className="space-y-6">
        {/* UNCW */}
        <AnimatedSection delay={0.1}>
          <div className="glow-card rounded-lg bg-bg-card p-5 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <GraduationCap size={20} className="text-accent-blue shrink-0" />
                  <h3 className="font-outfit font-bold text-lg sm:text-xl text-text-primary">
                    University of North Carolina Wilmington
                  </h3>
                </div>
                <p className="font-jetbrains text-xs text-text-muted ml-7">Cameron School of Business // 2024 - 2027</p>
              </div>
              <div className="flex items-center gap-3 ml-7 sm:ml-0">
                <span className="font-jetbrains text-xs px-3 py-1 rounded border border-accent-gold/30 text-accent-gold">
                  GPA: 3.7
                </span>
                <span className="font-jetbrains text-xs px-3 py-1 rounded border border-accent-green/30 text-accent-green">
                  Dean&apos;s List
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-sm text-text-body">
                  <span className="text-text-muted font-jetbrains text-xs">DEGREE:</span>{" "}
                  BS in Economics, Minor in Pre-Law
                </p>
                <p className="text-sm text-text-body mt-2">
                  <span className="text-text-muted font-jetbrains text-xs">TRACK:</span>{" "}
                  Graduating a year early
                </p>
                <p className="text-sm text-text-body mt-2">
                  <span className="text-text-muted font-jetbrains text-xs">STATUS:</span>{" "}
                  Junior
                </p>
              </div>
              <div className="text-sm text-text-body bg-bg-hover/50 rounded p-4 border border-accent-blue/10">
                <p className="text-xs font-jetbrains text-text-muted mb-2">BACKGROUND NOTE</p>
                <p className="text-text-body leading-relaxed">
                  Started as a Biomedical Engineering major, switched to AI Engineering my second semester freshman year, then pivoted to Economics with a Pre-Law minor. The moves reflect both technical aptitude and a strategic shift toward business, entrepreneurship, and legal thinking.
                </p>
              </div>
            </div>

            {/* Coursework */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen size={14} className="text-accent-blue" />
                <h4 className="font-jetbrains text-xs tracking-widest text-accent-gold">NOTABLE COURSEWORK</h4>
              </div>
              <ul className="space-y-1.5">
                {coursework.map((c, i) => (
                  <li key={i} className="text-xs sm:text-sm text-text-body flex gap-2">
                    <span className="text-accent-blue mt-0.5 shrink-0">▸</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Users size={14} className="text-accent-blue" />
                <h4 className="font-jetbrains text-xs tracking-widest text-accent-gold">PROGRAMS & AFFILIATIONS</h4>
              </div>
              <ul className="space-y-1.5">
                {programs.map((p, i) => (
                  <li key={i} className="text-xs sm:text-sm text-text-body flex gap-2">
                    <span className="text-accent-blue mt-0.5 shrink-0">▸</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Wake Tech */}
        <AnimatedSection delay={0.2}>
          <div className="glow-card rounded-lg bg-bg-card p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap size={18} className="text-accent-blue" />
              <h3 className="font-outfit font-semibold text-text-primary">
                Wake Technical Community College
              </h3>
            </div>
            <p className="font-jetbrains text-xs text-text-muted ml-6 mb-3">Associates in Arts // 2022 - 2023</p>
            <p className="text-sm text-text-body ml-6">
              Took general education classes through this local community college to get ahead in my studies.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
