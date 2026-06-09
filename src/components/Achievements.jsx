"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Lightbulb, Trophy } from "lucide-react";
import TiltCard from "./TiltCard";

const ACHIEVEMENTS = [
  {
    title: "Senior Promotion",
    subtitle: "Accenture Analyst Team",
    icon: <Award size={24} className="text-cyan-400" />,
    description: "Promoted to Senior Application Development Analyst in recognition of technical leadership in cloud orchestration and automated pipeline reliability.",
    date: "Accenture"
  },
  {
    title: "Innovation Competitor",
    subtitle: "ATCI & GTIC Tech Contests",
    icon: <Lightbulb size={24} className="text-amber-400" />,
    description: "Selected to pitch scalable, event-driven solution prototypes at Accenture Technology Centers in India (ATCI) and Global Technology Innovation contests.",
    date: "Inventions"
  },
  {
    title: "Hackathon Champion",
    subtitle: "Blockchain & Analytics Solutions",
    icon: <Trophy size={24} className="text-purple-400" />,
    description: "Awarded top ranks in corporate hackathons for designing analytics dashboards and decentralized smart-contract proofs-of-concept.",
    date: "Hackathons"
  },
  {
    title: "Master of Engineering",
    subtitle: "Computer & Communication",
    icon: <GraduationCap size={24} className="text-blue-400" />,
    description: "Graduated with a Master's degree in Computer & Communication Engineering from VIT University (Vellore Institute of Technology). Secured CGPA: 7.4.",
    date: "Academic"
  }
];

export default function Achievements() {
  return (
    <section className="py-24 relative overflow-hidden" id="achievements">
      <div className="absolute bottom-10 left-10 w-80 h-80 glow-orb-purple -z-10 rounded-full opacity-25"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Milestones & Credentials
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 font-light mt-4 max-w-xl mx-auto text-sm sm:text-base">
            A selection of milestones representing leadership, academic studies, hackathons, and corporate recognition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((ach, idx) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="w-full flex"
            >
              <TiltCard className="w-full flex group">
                <div className="glass-panel p-6 border border-white/5 bg-slate-950/15 group-hover:border-cyan-500/20 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.08)] transition-all duration-300 flex items-start space-x-5 w-full h-full">
                  {/* Icon Container */}
                  <div className="p-3.5 rounded-lg bg-white/5 flex-shrink-0 border border-white/5">
                    {ach.icon}
                  </div>

                  {/* Text content */}
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-gray-200 font-mono">{ach.title}</h3>
                      <span className="text-[9px] font-mono text-cyan-400/80 bg-cyan-400/5 px-2 py-0.5 rounded uppercase tracking-wider border border-cyan-400/10">
                        {ach.date}
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-mono text-gray-400 font-medium">{ach.subtitle}</h4>
                    <p className="text-gray-400 font-light text-xs sm:text-sm leading-relaxed pt-2">
                      {ach.description}
                    </p>
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
