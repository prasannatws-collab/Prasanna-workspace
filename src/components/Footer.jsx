"use client";

import { Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-12 bg-slate-950/30 backdrop-blur-md relative overflow-hidden">
      {/* Background decoration line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <span className="font-bold font-mono text-gray-200 tracking-wide text-sm">
            Prasanna.tws
          </span>
          <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
            Specialist, Software Engineer
          </span>
        </div>

        {/* Signature with subtle glow */}
        <div className="text-xs font-mono text-gray-400 text-center flex flex-col items-center gap-1.5">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent filter drop-shadow-[0_0_10px_rgba(6,182,212,0.2)]">
            Designed & Developed by Prasanna
          </span>
          <span className="text-[10px] text-gray-600 font-light">
            &copy; {currentYear} M Lakshmi Prasanna Kumar Reddy. All rights reserved.
          </span>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-4">
          <a
            href="https://linkedin.com/in/mlprasanna"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-white/5 bg-white/5 hover:border-blue-500/30 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 text-gray-400"
            title="LinkedIn"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
          </a>
          <a
            href="https://github.com/prasannatws-collab"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-white/5 bg-white/5 hover:border-purple-500/30 hover:text-purple-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300 text-gray-400"
            title="GitHub"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
          </a>
          <a
            href="mailto:prasanna.tws@gmail.com"
            className="p-2 rounded-full border border-white/5 bg-white/5 hover:border-cyan-500/30 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 text-gray-400"
            title="Email"
          >
            <Mail size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
