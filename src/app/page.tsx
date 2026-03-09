"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Ventures from "@/components/Ventures";
import Arsenal from "@/components/Arsenal";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Intel from "@/components/Intel";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Ventures />
        <Arsenal />
        <Experience />
        <Education />
        <Intel />
        <Contact />
      </main>
    </>
  );
}
