"use client";

import Image from "next/image";
import TiltCard from "../TiltCard";
import { Briefcase, Server, Award, Database } from "lucide-react";

export default function BioView() {
  const stats = [
    { label: "Years Experience", value: "8+", icon: <Briefcase size={16} className="text-blue-400" /> },
    { label: "Cloud Platforms", value: "Azure", icon: <Server size={16} className="text-cyan-400" /> },
    { label: "Enterprise Domains", value: "3", icon: <Award size={16} className="text-purple-400" /> },
    { label: "Database Engine", value: "SQL/Cosmos", icon: <Database size={16} className="text-teal-400" /> }
  ];

  const jsonCode = `{
  <span class="code-property">"name"</span>: <span class="code-string">"M Lakshmi Prasanna Kumar Reddy"</span>,
  <span class="code-property">"alias"</span>: <span class="code-string">"Prasanna.tws"</span>,
  <span class="code-property">"role"</span>: <span class="code-string">"Specialist - Software Engineering"</span>,
  <span class="code-property">"experience_years"</span>: <span class="code-number">8</span>,
  <span class="code-property">"location"</span>: <span class="code-string">"Hyderabad, India / Hybrid"</span>,
  <span class="code-property">"cloud_focus"</span>: <span class="code-string">"Azure PaaS / Serverless"</span>,
  <span class="code-property">"backend_focus"</span>: <span class="code-string">"C# / .NET Core 8 / ASP.NET Web API"</span>,
  <span class="code-property">"domains"</span>: [
    <span class="code-string">"Healthcare"</span>,
    <span class="code-string">"Utilities"</span>,
    <span class="code-string">"Education"</span>
  ],
  <span class="code-property">"status"</span>: <span class="code-string">"Active Modernizations"</span>
}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full min-h-0 overflow-y-auto p-4 sm:p-6 lg:p-8">
      {/* Code Editor Window Pane */}
      <div className="glass-panel border-white/5 bg-slate-950/45 p-4 sm:p-5 flex flex-col font-mono text-xs sm:text-sm h-fit select-text relative">
        <div className="absolute top-2 right-4 text-[9px] text-cyan-400/40 select-none">
          bio.json
        </div>
        <div className="flex border-b border-white/5 pb-2.5 mb-3 text-[10px] text-gray-500 select-none">
          <span className="text-cyan-500/80 mr-2">&gt;_</span> EDITOR | JSON LANGUAGE MODE
        </div>
        
        <div className="flex leading-relaxed overflow-x-auto">
          {/* Line Numbers */}
          <div className="text-gray-600 text-right pr-4 border-r border-white/5 mr-4 select-none">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          {/* Syntax Code block */}
          <pre 
            className="text-gray-300 whitespace-pre" 
            dangerouslySetInnerHTML={{ __html: jsonCode }}
          />
        </div>
      </div>

      {/* Visual Dashboard Rendering Pane */}
      <div className="flex flex-col gap-6 h-fit">
        {/* Photo Header block */}
        <div className="glass-panel border-white/5 p-4 sm:p-6 bg-slate-950/20 flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-shrink-0 group">
            <TiltCard className="w-[120px] sm:w-[130px] aspect-[3/4]">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-xl filter blur-sm opacity-50 group-hover:opacity-80 transition-opacity duration-300 -z-10"></div>
              <div className="glass-panel p-1.5 border border-white/10 rounded-xl overflow-hidden w-full h-full">
                <Image
                  src="/profile-photo.png"
                  alt="Prasanna Reddy close-up portrait"
                  width={130}
                  height={173}
                  className="w-full h-full object-cover object-[center_14%] rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 scale-[1.15]"
                  unoptimized
                  priority
                />
              </div>
            </TiltCard>
          </div>
          
          <div className="text-center sm:text-left flex-1 space-y-2">
            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest bg-cyan-400/5 px-2.5 py-1 rounded border border-cyan-400/10">
              Agent Profile Loaded
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-100 font-mono tracking-tight pt-1">
              M Lakshmi Prasanna Kumar Reddy
            </h1>
            <p className="text-xs font-mono text-gray-400 uppercase tracking-wider">
              Specialist - Software Engineering
            </p>
          </div>
        </div>

        {/* Story biography text block */}
        <div className="glass-panel border-white/5 p-6 bg-slate-950/30 relative">
          <div className="absolute top-2 right-4 text-[9px] font-mono text-purple-400/50 uppercase tracking-widest">
            Identity Card
          </div>
          <h3 className="text-sm font-semibold mb-3 text-cyan-300 font-mono">
            Senior Azure PaaS Developer & Backend Engineer
          </h3>
          <p className="text-gray-300 leading-relaxed text-xs sm:text-sm font-light mb-3">
            I am a cloud software specialist with 8+ years of enterprise experience specializing in C#, .NET Core, and Azure PaaS. I build highly scalable, resilient cloud applications, secure REST APIs, and microservices architectures that power large-scale enterprise services.
          </p>
          <p className="text-gray-300 leading-relaxed text-xs sm:text-sm font-light">
            I have modernized critical banking, healthcare, and utility platforms at Accenture, Cognizant, and LTM, designing payment queues, subsidy validators, and CI/CD automated test deployments.
          </p>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="glass-panel p-3 sm:p-4 flex items-center space-x-3.5 border border-white/5 bg-slate-950/25"
            >
              <div className="p-2 rounded-lg bg-white/5">
                {stat.icon}
              </div>
              <div>
                <div className="text-xs sm:text-sm font-mono font-bold text-gray-200">
                  {stat.value}
                </div>
                <div className="text-[9px] text-gray-500 font-mono uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
