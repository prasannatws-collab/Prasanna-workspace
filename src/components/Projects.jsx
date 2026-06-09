"use client";

import { motion } from "framer-motion";
import { ExternalLink, Layers, ShieldCheck, Zap, Server } from "lucide-react";
import TiltCard from "./TiltCard";

const PROJECTS = [
  {
    title: "Healthcare Transaction Processor",
    category: "Financials / Healthcare",
    icon: <ShieldCheck className="text-teal-400" size={20} />,
    description: "A high-performance transaction platform processing payment validations, subsidies, invoices, and receipts under strict compliance requirements. Leverages serverless architectures to handle spikes safely.",
    tech: ["C#", "Azure Functions", "APIM", "Cosmos DB", "xUnit", "YAML Pipelines"],
    github: "#",
    demo: "#"
  },
  {
    title: "Utility Account Management Portal",
    category: "Utilities / Enterprise Scale",
    icon: <Server className="text-sky-400" size={20} />,
    description: "Customer portal backend servicing millions of utility users. Re-architected core accounts data layers into microservices, yielding 40% performance gains and decoupled service integrations.",
    tech: [".NET Core", "Microservices", "Cosmos DB", "APIM", "Bicep Templates", "Azure DevOps"],
    github: "#",
    demo: "#"
  },
  {
    title: "E-Learning Event Scheduler",
    category: "Education / Event Schedulers",
    icon: <Zap className="text-amber-400" size={20} />,
    description: "Distributed scheduling and grading engine built to support concurrent assessments and course sync schedules. Utilizes queues for high reliability and guaranteed message delivery.",
    tech: ["C#", "ASP.NET Web APIs", "Azure Service Bus", "SQL Server", "Docker", "Git"],
    github: "#",
    demo: "#"
  },
  {
    title: "Event-Driven Microservices Skeleton",
    category: "Cloud Architecture Template",
    icon: <Layers className="text-purple-400" size={20} />,
    description: "An architectural boilerplate featuring centralized API management, event broker routes, standard logging configurations, retry circuits, and infrastructure automated with Bicep.",
    tech: ["Azure Functions", "Service Bus", "APIM", "Bicep", "Docker", "xUnit"],
    github: "#",
    demo: "#"
  }
];

export default function Projects() {
  return (
    <section className="py-24 relative overflow-hidden" id="projects">
      <div className="absolute top-1/2 right-1/4 w-96 h-96 glow-orb-blue -z-10 rounded-full opacity-20"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Enterprise Solutions
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 font-light mt-4 max-w-xl mx-auto text-sm sm:text-base">
            A selection of production-grade systems engineered with a focus on durability, secure transactions, and cloud-native scalability.
          </p>
        </div>

        {/* Project Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((proj, idx) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="w-full flex"
            >
              <TiltCard className="w-full flex group">
                <div className="glass-panel p-6 sm:p-8 border border-white/5 bg-slate-950/15 group-hover:border-cyan-500/30 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-300 flex flex-col justify-between w-full h-full">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest bg-cyan-400/5 px-2.5 py-1 rounded border border-cyan-400/10">
                        {proj.category}
                      </span>
                      <div className="p-2 rounded-full bg-white/5 text-cyan-400 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                        {proj.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-100 group-hover:text-cyan-300 transition-colors duration-300 mb-3 font-mono">
                      {proj.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed mb-6">
                      {proj.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {proj.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-gray-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Footer Links */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="text-[10px] font-mono text-gray-500 group-hover:text-cyan-400/70 transition-colors duration-300">
                        &gt;_ production code
                      </span>
                      <div className="flex space-x-3">
                        <a
                          href={proj.github}
                          className="p-2 rounded bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors duration-200 border border-white/5"
                          onClick={(e) => { e.preventDefault(); alert("GitHub repository is enterprise-private."); }}
                          title="View Code (Private)"
                        >
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                        </a>
                        <a
                          href={proj.demo}
                          className="p-2 rounded bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 hover:text-sky-300 transition-colors duration-200 border border-sky-500/10"
                          onClick={(e) => { e.preventDefault(); alert("Enterprise architectural sandbox - login required."); }}
                          title="View Case Study"
                        >
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
