"use client";

import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";

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
      "Built resilient, automated payment and subsidy validation workflows using serverless computing."
    ]
  },
  {
    company: "Accenture - ConEdison",
    role: "Senior Azure PaaS Developer",
    duration: "June 2021 – July 2025",
    location: "Hyderabad, India / Hybrid",
    domain: "Utilities",
    description: "Developing enterprise-scale customer account management solutions for one of the largest utility providers in the US. Working on cloud-native microservices architecture using Azure Functions, APIM, Cosmos DB, and .NET Core to build secure, scalable, and high-performance applications.",
    achievements: [
      "Architected REST APIs and microservices using Azure Functions, APIM, and Cosmos DB.",
      "Successfully automated deployments with Azure DevOps YAML pipelines and IaC (ARM, Bicep)."
    ]
  },
  {
    company: "Cognizant - Pearson",
    role: "Azure Developer / Software Engineer",
    duration: "Nov 2017 – June 2021",
    location: "Chennai, India",
    domain: "Education / EdTech",
    description: "Contributed to Pearson's digital learning and content management platform. Developed robust web APIs and background services, event schedulers, and supported Agile product delivery.",
    achievements: [
      "Developed enterprise web APIs and backends using C#, ASP.NET Core, and SQL Server.",
      "Implemented complex scheduling databases and synchronization logic for student assessments."
    ]
  }
];

export default function ExperienceView() {
  const yamlCode = `<span class="code-comment"># Chronological timeline history</span>
<span class="code-property">work_history</span>:
  - <span class="code-property">company</span>: <span class="code-string">"LTM (Premera BlueCross)"</span>
    <span class="code-property">role</span>: <span class="code-string">"Specialist - Software Engineering"</span>
    <span class="code-property">date</span>: <span class="code-string">"Aug 2025 - Present"</span>
    <span class="code-property">loc</span>: <span class="code-string">"Hyderabad, India / Hybrid"</span>
    <span class="code-property">domain</span>: <span class="code-string">"Healthcare"</span>
  - <span class="code-property">company</span>: <span class="code-string">"Accenture - ConEdison"</span>
    <span class="code-property">role</span>: <span class="code-string">"Senior Azure PaaS Developer"</span>
    <span class="code-property">date</span>: <span class="code-string">"June 2021 - July 2025"</span>
    <span class="code-property">loc</span>: <span class="code-string">"Hyderabad, India / Hybrid"</span>
    <span class="code-property">domain</span>: <span class="code-string">"Utilities"</span>
  - <span class="code-property">company</span>: <span class="code-string">"Cognizant - Pearson"</span>
    <span class="code-property">role</span>: <span class="code-string">"Azure Developer / Engineer"</span>
    <span class="code-property">date</span>: <span class="code-string">"Nov 2017 - June 2021"</span>
    <span class="code-property">loc</span>: <span class="code-string">"Chennai, India"</span>
    <span class="code-property">domain</span>: <span class="code-string">"Education"</span>`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full min-h-0 overflow-y-auto p-4 sm:p-6 lg:p-8">
      {/* Code Editor Column */}
      <div className="lg:col-span-5 glass-panel border-white/5 bg-slate-950/45 p-4 sm:p-5 flex flex-col font-mono text-xs h-fit select-text relative min-w-0">
        <div className="absolute top-2 right-4 text-[9px] text-emerald-400/40 select-none">
          experience.yaml
        </div>
        <div className="flex border-b border-white/5 pb-2.5 mb-3 text-[10px] text-gray-500 select-none">
          <span className="text-emerald-500/80 mr-2">&gt;_</span> EDITOR | YAML LANGUAGE MODE
        </div>

        <div className="flex leading-relaxed overflow-x-auto">
          {/* Line Numbers */}
          <div className="text-gray-600 text-right pr-4 border-r border-white/5 mr-4 select-none">
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          {/* Syntax Code block */}
          <pre 
            className="text-gray-300 whitespace-pre" 
            dangerouslySetInnerHTML={{ __html: yamlCode }}
          />
        </div>
      </div>

      {/* Visual Timeline Column */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        <div className="relative border-l border-[#0A7C6E]/20 ml-3 space-y-6 pt-2">
          {EXPERIENCES.map((exp, idx) => (
            <div key={exp.company} className="relative pl-7">
              {/* Node Indicator */}
              <div className="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-slate-950 border border-[#0A7C6E] flex items-center justify-center shadow-[0_0_10px_rgba(10,124,110,0.4)] z-15">
                <Briefcase size={8} className="text-[#0A7C6E]" />
              </div>

              {/* Box Panel */}
              <div className="glass-panel p-4 sm:p-5 border border-white/5 bg-slate-950/15 hover:border-[#0A7C6E]/20 hover:shadow-[0_0_15px_rgba(10,124,110,0.05)] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-white/5 pb-3 mb-3">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-gray-100 font-mono leading-tight">{exp.role}</h3>
                    <h4 className="text-xs font-mono text-[#0A7C6E] mt-1">{exp.company}</h4>
                  </div>
                  <div className="flex flex-col sm:items-end text-[9px] font-mono text-gray-500 gap-1 mt-1 sm:mt-0">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={10} className="text-[#0A7C6E]" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={10} className="text-[#0A7C6E]" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="mt-1 self-start sm:self-auto px-1.5 py-0.5 rounded bg-[#FF6B35]/10 border border-[#FF6B35]/20 text-[#FF6B35] uppercase tracking-widest text-[8px]">
                      {exp.domain}
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 text-xs font-light leading-relaxed mb-3.5">
                  {exp.description}
                </p>

                <div className="space-y-1.5">
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start text-xs text-gray-300">
                      <CheckCircle size={12} className="text-[#0A7C6E] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="font-light leading-relaxed">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
