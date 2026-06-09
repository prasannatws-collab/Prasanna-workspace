"use client";

import { Award, GraduationCap, Lightbulb, Trophy } from "lucide-react";

const ACHIEVEMENTS = [
  {
    title: "Senior Promotion",
    subtitle: "Accenture Analyst Team",
    icon: <Award size={20} className="text-cyan-400" />,
    description: "Promoted to Senior Application Development Analyst in recognition of technical leadership in cloud orchestration and automated pipeline reliability.",
    date: "Accenture"
  },
  {
    title: "Innovation Competitor",
    subtitle: "ATCI & GTIC Tech Contests",
    icon: <Lightbulb size={20} className="text-amber-400" />,
    description: "Selected to pitch scalable, event-driven solution prototypes at Accenture Technology Centers in India (ATCI) and Global Technology Innovation contests.",
    date: "Inventions"
  },
  {
    title: "Hackathon Champion",
    subtitle: "Blockchain & Analytics Solutions",
    icon: <Trophy size={20} className="text-purple-400" />,
    description: "Awarded top ranks in corporate hackathons for designing analytics dashboards and decentralized smart-contract proofs-of-concept.",
    date: "Hackathons"
  },
  {
    title: "Master of Engineering",
    subtitle: "Computer & Communication",
    icon: <GraduationCap size={20} className="text-blue-400" />,
    description: "Graduated with a Master's degree in Computer & Communication Engineering from VIT University (Vellore Institute of Technology). Secured CGPA: 7.4.",
    date: "Academic"
  }
];

export default function AchievementsView() {
  const jsonCode = `[
  {
    <span class="code-property">"title"</span>: <span class="code-string">"Senior Promotion"</span>,
    <span class="code-property">"team"</span>: <span class="code-string">"Accenture Analyst Team"</span>,
    <span class="code-property">"milestone"</span>: <span class="code-string">"Technical Leadership & Cloud Reliability"</span>
  },
  {
    <span class="code-property">"title"</span>: <span class="code-string">"Innovation Competitor"</span>,
    <span class="code-property">"contests"</span>: [<span class="code-string">"ATCI"</span>, <span class="code-string">"GTIC"</span>],
    <span class="code-property">"topic"</span>: <span class="code-string">"Scalable Event-Driven Prototypes"</span>
  },
  {
    <span class="code-property">"title"</span>: <span class="code-string">"Hackathon Champion"</span>,
    <span class="code-property">"focus"</span>: <span class="code-string">"Decentralized Smart-Contract proofs"</span>
  },
  {
    <span class="code-property">"title"</span>: <span class="code-string">"Master of Engineering"</span>,
    <span class="code-property">"university"</span>: <span class="code-string">"VIT University (Vellore)"</span>,
    <span class="code-property">"cgpa"</span>: <span class="code-number">7.4</span>
  }
]`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full min-h-0 overflow-y-auto p-4 sm:p-6 lg:p-8">
      {/* Code Editor Column */}
      <div className="lg:col-span-5 glass-panel border-white/5 bg-slate-950/45 p-4 sm:p-5 flex flex-col font-mono text-xs h-fit select-text relative">
        <div className="absolute top-2 right-4 text-[9px] text-cyan-400/40 select-none">
          achievements.json
        </div>
        <div className="flex border-b border-white/5 pb-2.5 mb-3 text-[10px] text-gray-500 select-none">
          <span className="text-cyan-500/80 mr-2">&gt;_</span> EDITOR | JSON LANGUAGE MODE
        </div>

        <div className="flex leading-relaxed overflow-x-auto">
          {/* Line Numbers */}
          <div className="text-gray-600 text-right pr-4 border-r border-white/5 mr-4 select-none">
            {Array.from({ length: 22 }).map((_, i) => (
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

      {/* Visual Timeline Cards Column */}
      <div className="lg:col-span-7 flex flex-col gap-4">
        {ACHIEVEMENTS.map((ach) => (
          <div
            key={ach.title}
            className="glass-panel p-4 border border-white/5 bg-slate-950/15 flex items-start space-x-4 hover:border-cyan-500/20 transition-all duration-300"
          >
            <div className="p-2.5 rounded bg-white/5 border border-white/5 text-gray-300">
              {ach.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-sm font-bold text-gray-200 font-mono truncate">{ach.title}</h4>
                <span className="text-[8px] font-mono text-cyan-400 bg-cyan-400/5 px-2 py-0.5 rounded border border-cyan-400/10 tracking-widest uppercase">
                  {ach.date}
                </span>
              </div>
              <h5 className="text-[11px] font-mono text-gray-400 mt-0.5">{ach.subtitle}</h5>
              <p className="text-gray-400 text-xs font-light leading-relaxed mt-2">
                {ach.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
