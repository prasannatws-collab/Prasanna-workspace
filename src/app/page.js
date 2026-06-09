"use client";

import ThreeDCanvas from "@/components/ThreeDCanvas";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 3D Morphing Particle Background */}
      <ThreeDCanvas />

      {/* Cyber HUD Overlay Grids & Scanlines */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none -z-20" />
      <div className="fixed inset-0 hud-scanline pointer-events-none -z-20 opacity-50" />

      {/* Main Layout Stack */}
      <Navbar />
      
      <main className="relative z-10 w-full">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
