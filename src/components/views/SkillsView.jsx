"use client";

import { Cloud, Cpu, Database, GitBranch, Layers } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Azure PaaS Services",
    icon: <Cloud className="text-emerald-400" size={16} />,
    skills: ["Azure Functions", "APIM", "App Service", "Event Grid", "Service Bus", "Key Vault", "Logic Apps"]
  },
  {
    title: "Backend & Core",
    icon: <Cpu className="text-amber-500" size={16} />,
    skills: ["C# Language", ".NET Core / 8", "ASP.NET Web APIs", "LINQ", "Entity Framework", "Async IO"]
  },
  {
    title: "DevOps & IaC",
    icon: <GitBranch className="text-orange-500" size={16} />,
    skills: ["Azure DevOps", "CI/CD Pipelines", "ARM & Bicep Templates", "Docker", "Git Versioning"]
  },
  {
    title: "Databases & Storage",
    icon: <Database className="text-emerald-500" size={16} />,
    skills: ["Cosmos DB (NoSQL)", "MS SQL Server", "Azure Blob", "Performance Tuning"]
  },
  {
    title: "Architecture & Practices",
    icon: <Layers className="text-orange-400" size={16} />,
    skills: ["Microservices", "Event-Driven", "RESTful Patterns", "xUnit TDD", "Agile / Scrum"]
  }
];

export default function SkillsView() {
  const yamlCode = `<span class="code-comment"># Developer technical capabilities file</span>
<span class="code-property">azure_paas_services</span>:
  - <span class="code-string">"Azure Functions"</span>
  - <span class="code-string">"APIM (API Management)"</span>
  - <span class="code-string">"Azure App Service"</span>
  - <span class="code-string">"Event Grid & Service Bus"</span>
  - <span class="code-string">"Key Vault & Logic Apps"</span>
<span class="code-property">backend_core</span>:
  - <span class="code-string">"C# Language (Modern .NET 8)"</span>
  - <span class="code-string">"ASP.NET Core Web APIs"</span>
  - <span class="code-string">"LINQ & Entity Framework"</span>
  - <span class="code-string">"Asynchronous & Multi-threaded"</span>
<span class="code-property">devops_iac</span>:
  - <span class="code-string">"Azure DevOps YAML Pipelines"</span>
  - <span class="code-string">"Infrastructure as Code (Bicep/ARM)"</span>
  - <span class="code-string">"Docker Container Orchestration"</span>
<span class="code-property">databases_storage</span>:
  - <span class="code-string">"Cosmos DB NoSQL Datastore"</span>
  - <span class="code-string">"Microsoft SQL Server Engine"</span>
  - <span class="code-string">"Azure Blob BlobStorage System"</span>
<span class="code-property">architectures</span>:
  - <span class="code-string">"Microservices Architectures"</span>
  - <span class="code-string">"Event-Driven Design Patterns"</span>
  - <span class="code-string">"xUnit TDD Automation Suite"</span>`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full min-h-0 overflow-y-auto p-4 sm:p-6 lg:p-8">
      {/* Code Editor Column */}
      <div className="lg:col-span-5 glass-panel border-white/5 bg-slate-950/45 p-4 sm:p-5 flex flex-col font-mono text-xs h-fit select-text relative min-w-0">
        <div className="absolute top-2 right-4 text-[9px] text-emerald-400/40 select-none">
          skills.yaml
        </div>
        <div className="flex border-b border-white/5 pb-2.5 mb-3 text-[10px] text-gray-500 select-none">
          <span className="text-emerald-500/80 mr-2">&gt;_</span> EDITOR | YAML LANGUAGE MODE
        </div>

        <div className="flex leading-relaxed overflow-x-auto">
          {/* Line Numbers */}
          <div className="text-gray-600 text-right pr-4 border-r border-white/5 mr-4 select-none">
            {Array.from({ length: 24 }).map((_, i) => (
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

      {/* Visual Badge Grid Column */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        <div className="border-b border-white/5 pb-2">
          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block">
            Visual Matrix View
          </span>
          <h3 className="text-lg font-bold text-gray-200 font-mono tracking-tight mt-1">
            Technical Stack Catalog
          </h3>
        </div>

        {/* Categorized Badges list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="glass-panel p-4 border border-white/5 bg-slate-950/20 flex flex-col h-full justify-between"
            >
              <div>
                <div className="flex items-center space-x-2.5 mb-3.5 border-b border-white/5 pb-2 text-gray-300">
                  <div className="p-1.5 rounded bg-white/5 border border-white/5">
                    {category.icon}
                  </div>
                  <h4 className="text-xs font-semibold font-mono tracking-tight uppercase">
                    {category.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-gray-400"
                    >
                      {skill}
                    </span>
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
