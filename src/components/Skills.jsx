"use client";

import { motion } from "framer-motion";
import { Cloud, Cpu, Database, GitBranch, Layers } from "lucide-react";
import TiltCard from "./TiltCard";

const SKILL_CATEGORIES = [
  {
    title: "Azure PaaS Services",
    icon: <Cloud className="text-sky-400" size={24} />,
    glowColor: "group-hover:border-sky-500/30 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.1)]",
    skills: ["Azure Functions", "APIM (API Management)", "Azure App Service", "Event Grid", "Service Bus", "Key Vault", "Logic Apps"]
  },
  {
    title: "Backend & Core",
    icon: <Cpu className="text-blue-400" size={24} />,
    glowColor: "group-hover:border-blue-500/30 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]",
    skills: ["C# Language", ".NET Core / 8", "ASP.NET Web APIs", "LINQ", "Entity Framework", "Asynchronous Programming"]
  },
  {
    title: "DevOps & IaC",
    icon: <GitBranch className="text-purple-400" size={24} />,
    glowColor: "group-hover:border-purple-500/30 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.1)]",
    skills: ["Azure DevOps", "YAML CI/CD Pipelines", "ARM & Bicep Templates", "Docker Containers", "Git & GitHub Versioning"]
  },
  {
    title: "Databases & Storage",
    icon: <Database className="text-teal-400" size={24} />,
    glowColor: "group-hover:border-teal-500/30 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.1)]",
    skills: ["Cosmos DB (NoSQL)", "MS SQL Server", "Azure Blob Storage", "Performance Tuning", "Stored Procedures"]
  },
  {
    title: "Architecture & Practices",
    icon: <Layers className="text-pink-400" size={24} />,
    glowColor: "group-hover:border-pink-500/30 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.1)]",
    skills: ["Microservices", "Event-Driven Systems", "RESTful Design Patterns", "xUnit Testing (TDD)", "Agile / Scrum (Jira)"]
  }
];

export default function Skills() {
  return (
    <section className="py-24 relative overflow-hidden" id="skills">
      {/* Background glow orbs */}
      <div className="absolute bottom-1/4 right-0 w-80 h-80 glow-orb-purple -z-10 rounded-full opacity-35"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 font-light mt-4 max-w-xl mx-auto text-sm sm:text-base">
            A comprehensive overview of cloud architectures, programming languages, databases, and continuous delivery methodologies I specialize in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="w-full flex"
            >
              <TiltCard className="w-full flex flex-col group">
                <div className={`glass-panel p-6 border border-white/5 bg-slate-950/15 transition-all duration-300 h-full flex flex-col justify-between ${category.glowColor}`}>
                  <div>
                    {/* Header */}
                    <div className="flex items-center space-x-3.5 mb-6 border-b border-white/5 pb-4">
                      <div className="p-2.5 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors duration-300 border border-white/5">
                        {category.icon}
                      </div>
                      <h3 className="text-base font-semibold text-gray-200 group-hover:text-white transition-colors duration-300 font-mono tracking-tight">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills list */}
                    <ul className="space-y-2.5">
                      {category.skills.map((skill) => (
                        <li key={skill} className="flex items-center text-xs sm:text-sm text-gray-400 font-mono">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 mr-2.5 group-hover:bg-cyan-400 transition-colors duration-300"></span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
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
