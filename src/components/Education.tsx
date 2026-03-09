"use client";

import AnimatedSection from "./AnimatedSection";
import { GraduationCap, BookOpen, Award, Users } from "lucide-react";

const coursework = [
  "ECN 322 — Intermediate Macroeconomics (GDP accounting, Cobb-Douglas production, loanable funds, quantity theory of money, Fisher equation)",
  "Constitutional Law (Establishment Clause, Second Amendment, First Amendment speech doctrine, judicial review)",
  "Labor Economics",
  "Public Speaking",
];

const programs = [
  "Cameron Executive Network (CEN) Mentorship Program — matched with Tim Allen, Senior Technology Executive at nCino (publicly traded fintech, Wilmington HQ)",
  "Applied to Truist Capitalism and Ethics Scholars Program (Milton Friedman Colloquium, May 2026)",
  "Applied to Live Oak Bank Loan Operations Internship (part-time, $20–$32/hr)",
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <AnimatedSection>
        <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-text-primary mb-2">
          <span className="text-accent-blue font-jetbrains text-sm font-normal tracking-widest block mb-2">
            // SECTION 05
          </span>
          EDUCATION
        </h2>
        <div className="h-px bg-gradient-to-r from-accent-blue/50 to-transparent mt-4 mb-12" />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="glow-card rounded-lg bg-bg-card p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <GraduationCap size={20} className="text-accent-blue" />
                <h3 className="font-outfit font-bold text-xl text-text-primary">
                  University of North Carolina Wilmington
                </h3>
              </div>
              <p className="font-jetbrains text-xs text-text-muted ml-7">Cameron School of Business</p>
            </div>
            <div className="flex items-center gap-3">
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
                Bachelor of Arts in Economics, Minor in Pre-Law
              </p>
              <p className="text-sm text-text-body mt-2">
                <span className="text-text-muted font-jetbrains text-xs">TRACK:</span>{" "}
                Early graduation (planning to graduate ahead of schedule)
              </p>
            </div>
            <div className="text-sm text-text-body bg-bg-hover/50 rounded p-4 border border-accent-blue/10">
              <p className="text-xs font-jetbrains text-text-muted mb-2">BACKGROUND NOTE</p>
              <p className="text-text-body leading-relaxed">
                Started college as a Biomedical Engineering major before pivoting to Economics with a Pre-Law minor — reflecting both technical aptitude and a strategic pivot toward business, entrepreneurship, and legal thinking.
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
                <li key={i} className="text-sm text-text-body flex gap-2">
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
                <li key={i} className="text-sm text-text-body flex gap-2">
                  <span className="text-accent-blue mt-0.5 shrink-0">▸</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
