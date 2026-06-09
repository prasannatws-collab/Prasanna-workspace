"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Send, Download } from "lucide-react";
import TiltCard from "./TiltCard";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset status after a few seconds
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 glow-orb-blue -z-10 rounded-full opacity-15"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Initiate Connection
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 font-light mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Ready to collaborate on large-scale cloud applications or architectural modernizations? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Column */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-200 font-mono tracking-tight">Contact Information</h3>
              <p className="text-gray-400 font-light leading-relaxed text-xs sm:text-sm">
                Whether you have an open role, need architectural guidance, or want to discuss enterprise .NET/Azure services, feel free to send a message.
              </p>

              {/* Action Cards */}
              <div className="space-y-4 pt-4">
                <a
                  href="mailto:prasanna.tws@gmail.com"
                  className="flex items-center space-x-4 p-4 rounded-lg border border-white/5 bg-white/5 hover:border-cyan-500/20 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-sky-500/10 text-sky-400 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Email Direct</h4>
                    <p className="text-xs sm:text-sm font-semibold text-gray-200">prasanna.tws@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/mlprasanna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-lg border border-white/5 bg-white/5 hover:border-blue-500/20 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">LinkedIn Connection</h4>
                    <p className="text-xs sm:text-sm font-semibold text-gray-200">M Lakshmi Prasanna Kumar Reddy</p>
                  </div>
                </a>

                <a
                  href="https://github.com/prasannatws-collab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-lg border border-white/5 bg-white/5 hover:border-purple-500/20 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">GitHub Profile</h4>
                    <p className="text-xs sm:text-sm font-semibold text-gray-200">github.com/prasannatws-collab</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Resume button */}
            <div className="pt-6">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Resume download triggered (Placeholder).");
                }}
                className="flex items-center justify-center space-x-2 w-full p-4 rounded-lg border border-cyan-400/20 bg-cyan-400/5 hover:bg-cyan-400/10 hover:border-cyan-400/40 text-cyan-400 transition-all duration-300 font-semibold uppercase tracking-wider text-xs"
              >
                <Download size={16} />
                <span>Download Professional Resume</span>
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <TiltCard className="w-full group">
              <div className="glass-panel p-6 sm:p-8 border border-white/5 bg-slate-950/15 group-hover:border-cyan-500/20 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 relative">
                {/* HUD Grid element */}
                <div className="absolute top-2 right-2 text-[8px] font-mono text-cyan-400/40 select-none">
                  SECURE_CONN_ESTABLISHED
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-200 mb-6 font-mono tracking-tight">Secure Message Portal</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-950/65 border border-white/10 text-gray-200 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all duration-300 font-mono text-xs sm:text-sm"
                      placeholder="Enter name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-950/65 border border-white/10 text-gray-200 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all duration-300 font-mono text-xs sm:text-sm"
                      placeholder="Enter email"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-950/65 border border-white/10 text-gray-200 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all duration-300 resize-none font-mono text-xs sm:text-sm"
                      placeholder="Write details..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || isSent}
                    className="w-full py-3.5 px-6 rounded-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center space-x-2 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 hover:scale-[1.01] uppercase tracking-wider text-xs"
                  >
                    {isSubmitting ? (
                      <span>Encrypting & Sending...</span>
                    ) : isSent ? (
                      <span className="text-teal-300 font-mono">Transmission Complete!</span>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>

                  {isSent && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[10px] text-teal-400 font-mono text-center pt-2"
                    >
                      Success! Your message was mock-transmitted successfully.
                    </motion.p>
                  )}
                </form>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
