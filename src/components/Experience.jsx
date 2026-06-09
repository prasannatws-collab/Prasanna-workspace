"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle, MapPin } from "lucide-react";
import TiltCard from "./TiltCard";

const EXPERIENCES = [
  {
    company: "LTM (Premera BlueCross)",
    role: "Specialist - Software Engineering",
    duration: "Aug 2025 – Present",
    location: "Hyderabad, India / Hybrid",
    domain: "Healthcare",
    description: "Developing account management and financial transaction workflows for a major US healthcare platform. Focusing on secure payment validation, invoices, receipts, and subsidy processing using Azure services and microservices.",
    achievements: [
      "Designed secure APIs and backend microservices for healthcare transaction validation.",
      "Built resilient, automated payment and subsidy validation workflows using serverless computing.",
      "Integrated CI/CD workflows and automated tests to streamline cloud deployments in Agile cycles."
    ]
  },
  {
    company: "Accenture (Client: Consolidated Edison)",
    role: "Senior Azure PaaS Developer / Senior Application Analyst",
    duration: "June 2021 – July 2025",
    location: "Hyderabad, India / Hybrid",
    domain: "Utilities",
    description: "Built customer account management systems for one of the largest utility providers in the United States. Designed and optimized cloud-native backend services using Azure serverless and NoSQL solutions.",
    achievements: [
      "Architected REST APIs and microservices using Azure Functions, APIM, and Cosmos DB.",
      "Successfully automated deployments with Azure DevOps YAML pipelines and IaC (ARM, Bicep).",
      "Led cloud modernization initiatives transitioning legacy backend apps to PaaS architecture.",
      "Promoted to Senior Application Development Analyst for exceptional contributions."
    ]
  },
  {
    company: "Cognizant (Client: Pearson Connexus)",
    role: "Azure Developer / Software Engineer",
    duration: "Nov 2017 – June 2021",
    location: "Chennai, India",
    domain: "Education / EdTech",
    description: "Contributed to Pearson's digital learning and content management platform. Developed robust web APIs and background services, event schedulers, and supported Agile product delivery.",
    achievements: [
      "Developed enterprise web APIs and backends using C#, ASP.NET Core, and SQL Server.",
      "Implemented complex scheduling databases and synchronization logic for student assessments.",
      "Optimized query performance and improved CI/CD build speeds by refactoring tasks.",
      "Participated actively in corporate hackathons and innovation programs (ATCI, GTIC)."
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-24 relative overflow-hidden" id="experience">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 glow-orb-blue -z-10 rounded-full opacity-20"></div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Professional Odyssey
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 font-light mt-4 max-w-xl mx-auto text-sm sm:text-base">
            A chronological timeline of my engineering roles, key domains, and technical leadership in the enterprise cloud ecosystem.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-sky-500/20 ml-4 md:ml-6 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={exp.company} className="relative pl-8 md:pl-10">
              {/* Timeline Indicator Node */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-slate-950 border border-sky-500 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)] z-20"
              >
                <Briefcase size={12} className="text-cyan-400" />
              </motion.div>

              {/* Experience Card with 3D Tilt */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="w-full"
              >
                <TiltCard className="w-full group">
                  <div className="glass-panel p-6 sm:p-8 border border-white/5 bg-slate-950/15 group-hover:border-cyan-500/20 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.08)] transition-all duration-300">
                    {/* Meta details */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-white/5 pb-4 mb-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-100 font-mono">{exp.role}</h3>
                        <h4 className="text-sm font-mono text-cyan-400 mt-1">{exp.company}</h4>
                      </div>
                      <div className="flex flex-col sm:items-end text-[10px] sm:text-xs font-mono text-gray-400 mt-3 sm:mt-0 gap-1.5">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={12} className="text-cyan-400" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={12} className="text-cyan-400" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="mt-1 self-start sm:self-auto px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 uppercase tracking-widest text-[9px]">
                          {exp.domain}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Key Achievements */}
                    <div>
                      <h5 className="text-[10px] font-mono font-semibold uppercase tracking-wider text-cyan-400/80 mb-2">Key Contributions</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="flex items-start text-xs sm:text-sm text-gray-300">
                            <CheckCircle size={14} className="text-cyan-500/80 mr-2.5 mt-1 flex-shrink-0" />
                            <span className="font-light leading-relaxed">{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
