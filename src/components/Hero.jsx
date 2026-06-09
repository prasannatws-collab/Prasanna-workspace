"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Terminal, Globe, Box, Orbit } from "lucide-react";

const ROLES = [
  "Azure PaaS Developer",
  "Cloud & Backend Engineer",
  "REST API Architect",
  "Microservices Specialist",
  "DevOps Engineer"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeShape, setActiveShape] = useState("sphere");

  useEffect(() => {
    let timer;
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && displayedText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(
          isDeleting
            ? currentRole.substring(0, displayedText.length - 1)
            : currentRole.substring(0, displayedText.length + 1)
          );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  // Synchronize button click with ThreeDCanvas via window custom events
  const morphBackground = (shape) => {
    setActiveShape(shape);
    const event = new CustomEvent("morph-bg", { detail: { shape } });
    window.dispatchEvent(event);
  };

  // Listen to background scroll morphs to update active shape button state
  useEffect(() => {
    const syncShape = () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;
      if (scrollY < height * 0.8) {
        setActiveShape("sphere");
      } else if (scrollY >= height * 0.8 && scrollY < height * 2.3) {
        setActiveShape("cube");
      } else {
        setActiveShape("torus");
      }
    };
    window.addEventListener("scroll", syncShape);
    return () => window.removeEventListener("scroll", syncShape);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="hero">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 glow-orb-blue -z-10 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 glow-orb-purple -z-10 rounded-full animate-pulse-slow" style={{ animationDelay: "2s" }}></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 w-full text-center relative z-10 flex flex-col items-center">
        {/* Experience Tag */}
        <div className="flex space-x-2 items-center mb-6 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs sm:text-sm backdrop-blur-md animate-float">
          <Terminal size={14} className="animate-pulse" />
          <span className="font-mono">8+ Years of Enterprise Cloud Experience</span>
        </div>

        {/* Core Headers */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
        >
          <span className="block text-gray-400 font-medium text-lg sm:text-xl md:text-2xl tracking-widest uppercase">
            Hello, I'm
          </span>
          <span className="font-[family-name:var(--font-script)] text-5xl sm:text-7xl md:text-8xl text-cyan-400 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent filter drop-shadow-[0_0_30px_rgba(6,182,212,0.3)] block py-2 select-none">
            Prasanna
          </span>
          <span className="block text-gray-500 font-mono text-xs sm:text-sm tracking-widest mt-2 uppercase">
            M L Prasanna Kumar Reddy
          </span>
        </motion.h1>

        {/* Typed Subtext */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="h-10 sm:h-12 mt-6 flex items-center justify-center"
        >
          <p className="text-lg sm:text-2xl md:text-3xl text-sky-300 font-mono tracking-tight flex items-center">
            &gt; <span className="ml-2 border-r-2 border-cyan-400 pr-1 animate-pulse">{displayedText}</span>
          </p>
        </motion.div>

        {/* Pitch Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-light"
        >
          Building scalable enterprise applications & cloud-native solutions using <strong className="text-blue-400 font-semibold">C#</strong>, <strong className="text-blue-400 font-semibold">.NET Core</strong>, <strong className="text-cyan-400 font-semibold">Azure Cloud Services (PaaS)</strong>, and <strong className="text-purple-400 font-semibold">Microservices</strong> architectures.
        </motion.p>

        {/* Dynamic 3D Morph Controller HUD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 p-3 sm:p-4 rounded-xl border border-white/5 bg-slate-950/45 backdrop-blur-md flex flex-col sm:flex-row items-center gap-3 sm:gap-6 shadow-2xl"
        >
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest sm:border-r sm:border-white/10 sm:pr-6">
            Geometry engine controls
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => morphBackground("sphere")}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg font-mono text-[10px] sm:text-xs uppercase tracking-wider transition-all duration-300 border ${
                activeShape === "sphere"
                  ? "bg-cyan-500/10 border-cyan-500/50 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                  : "bg-transparent border-white/5 text-gray-500 hover:text-gray-300 hover:border-white/10"
              }`}
            >
              <Globe size={12} className={activeShape === "sphere" ? "animate-spin" : ""} style={{ animationDuration: "12s" }} />
              <span>Sphere Projection</span>
            </button>
            
            <button
              onClick={() => morphBackground("cube")}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg font-mono text-[10px] sm:text-xs uppercase tracking-wider transition-all duration-300 border ${
                activeShape === "cube"
                  ? "bg-purple-500/10 border-purple-500/50 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.25)]"
                  : "bg-transparent border-white/5 text-gray-500 hover:text-gray-300 hover:border-white/10"
              }`}
            >
              <Box size={12} />
              <span>Cube Matrix</span>
            </button>

            <button
              onClick={() => morphBackground("torus")}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg font-mono text-[10px] sm:text-xs uppercase tracking-wider transition-all duration-300 border ${
                activeShape === "torus"
                  ? "bg-blue-500/10 border-blue-500/50 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.25)]"
                  : "bg-transparent border-white/5 text-gray-500 hover:text-gray-300 hover:border-white/10"
              }`}
            >
              <Orbit size={12} />
              <span>Pipeline Torus</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
