"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Database, Server } from "lucide-react";
import Image from "next/image";
import TiltCard from "./TiltCard";
import ThreeDTagCloud from "./ThreeDTagCloud";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "8+", icon: <Briefcase size={18} className="text-blue-400" /> },
    { label: "Cloud Platforms", value: "Azure", icon: <Server size={18} className="text-cyan-400" /> },
    { label: "Enterprise Domains", value: "3", icon: <Award size={18} className="text-purple-400" /> },
    { label: "Database Engine", value: "SQL/Cosmos", icon: <Database size={18} className="text-teal-400" /> }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="about">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 glow-orb-blue -z-10 rounded-full opacity-35"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Column 1: Photo Column (with 3D tilt) */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center relative group">
            <TiltCard className="w-full max-w-[280px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-2xl filter blur-lg opacity-40 group-hover:opacity-75 transition-opacity duration-500 -z-10"></div>
              
              <div className="glass-panel p-2.5 border border-white/5 rounded-2xl overflow-hidden aspect-[3/4] w-full">
                <Image
                  src="/profile-photo.png"
                  alt="M Lakshmi Prasanna Kumar Reddy"
                  width={280}
                  height={373}
                  className="w-full h-full object-cover object-[center_14%] rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500 shadow-2xl scale-[1.12]"
                  unoptimized
                  priority
                />
                <div className="absolute inset-0 border border-white/5 group-hover:border-cyan-500/30 rounded-xl pointer-events-none transition-colors duration-300"></div>
              </div>
            </TiltCard>
            
            <div className="mt-4 text-center px-2">
              <span className="text-xs font-mono font-bold text-gray-300 group-hover:text-cyan-400 transition-colors duration-200 block leading-tight">
                M Lakshmi Prasanna Kumar Reddy
              </span>
              <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest mt-1.5 leading-tight">
                Specialist - Software Engineering
              </p>
            </div>
          </div>

          {/* Column 2: Info Column (Biography & Stats) */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-6 sm:p-8 border border-white/5 relative"
            >
              {/* Retro HUD brackets */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-cyan-400/40"></div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-purple-400/40"></div>

              <h3 className="text-lg font-semibold mb-4 text-cyan-300 font-mono">
                Senior Azure PaaS Developer & Backend Engineer
              </h3>
              
              <p className="text-gray-300 leading-relaxed font-light text-xs sm:text-sm mb-4">
                Prasanna here, with 8+ years of enterprise experience specializing in C#, .NET Core, and Azure PaaS. I build highly scalable, resilient cloud applications, secure REST APIs, and microservices architectures that power large-scale enterprise services.
              </p>

              <p className="text-gray-300 leading-relaxed font-light text-xs sm:text-sm">
                Over the course of my career at Cognizant, Accenture, and LTM, I've worked in crucial domains including Healthcare, Utilities, and Education. I have a track record of driving cloud modernization initiatives, building secure payment processing pipelines, customer portal management, and setting up automated CI/CD workflows using Azure DevOps.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="glass-panel p-4 flex flex-col items-center justify-center text-center border border-white/5 bg-slate-950/20"
                >
                  <div className="p-2.5 rounded-full bg-white/5 mb-2">
                    {stat.icon}
                  </div>
                  <span className="text-lg sm:text-xl font-mono font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                  <span className="text-[9px] text-gray-500 font-mono mt-1 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 3: Interactive 3D Keyword Tag Cloud */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-2xl filter blur-xl opacity-30 -z-10"></div>
            
            <div className="w-full flex flex-col items-center">
              <div className="text-center mb-4">
                <span className="text-[10px] font-mono text-cyan-400/80 uppercase tracking-widest block">
                  Interactive Skills Cloud
                </span>
                <span className="text-[9px] font-mono text-gray-500 block mt-1">
                  Drag / hover to interact in 3D
                </span>
              </div>
              <ThreeDTagCloud />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
