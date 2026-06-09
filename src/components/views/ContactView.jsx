"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";

export default function ContactView() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate SMTP API POST transmission
    // Send a message to the agent console too!
    const event = new CustomEvent("terminal-output", { 
      detail: { line: `[API] POST /api/v1/contact - Payload: Name="${formData.name}" Email="${formData.email}" - Transmitting...` } 
    });
    window.dispatchEvent(event);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
      
      const successEvent = new CustomEvent("terminal-output", { 
        detail: { line: `[API] Response 200 OK: {"status": "SUCCESS", "log": "Secure SMTP packet transmitted."}` } 
      });
      window.dispatchEvent(successEvent);

      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const pythonCode = `<span class="code-comment"># REST API Endpoint for transmitting secure messages</span>
<span class="code-keyword">from</span> fastapi <span class="code-keyword">import</span> FastAPI, HTTPException
<span class="code-keyword">from</span> pydantic <span class="code-keyword">import</span> BaseModel

app = FastAPI()

<span class="code-keyword">class</span> <span class="code-class">ContactMessage</span>(BaseModel):
    name: <span class="code-class">str</span>
    email: <span class="code-class">str</span>
    message: <span class="code-class">str</span>

<span class="code-keyword">@app.post</span>(<span class="code-string">"/api/v1/contact"</span>)
<span class="code-keyword">async def</span> <span class="code-func">transmit_message</span>(payload: ContactMessage):
    <span class="code-keyword">if not</span> payload.name <span class="code-keyword">or not</span> payload.email:
        <span class="code-keyword">raise</span> HTTPException(status_code=<span class="code-number">400</span>, detail=<span class="code-string">"Missing parameters"</span>)
    
    <span class="code-comment"># Transmit via secure cloud transport</span>
    await smtp_client.send_secure_async(payload)
    <span class="code-keyword">return</span> {<span class="code-string">"status"</span>: <span class="code-string">"SUCCESS"</span>, <span class="code-string">"log"</span>: <span class="code-string">"Secure packet transmitted"</span>}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full min-h-0 overflow-y-auto p-4 sm:p-6 lg:p-8">
      {/* Code Editor Column */}
      <div className="lg:col-span-5 glass-panel border-white/5 bg-slate-950/45 p-4 sm:p-5 flex flex-col font-mono text-xs h-fit select-text relative">
        <div className="absolute top-2 right-4 text-[9px] text-primary-blue/50 select-none">
          contact_endpoint.py
        </div>
        <div className="flex border-b border-white/5 pb-2.5 mb-3 text-[10px] text-gray-500 select-none">
          <span className="text-primary-blue/80 mr-2">&gt;_</span> EDITOR | PYTHON LANGUAGE MODE
        </div>

        <div className="flex leading-relaxed overflow-x-auto">
          {/* Line Numbers */}
          <div className="text-gray-600 text-right pr-4 border-r border-white/5 mr-4 select-none">
            {Array.from({ length: 19 }).map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          {/* Syntax Code block */}
          <pre 
            className="text-gray-300 whitespace-pre" 
            dangerouslySetInnerHTML={{ __html: pythonCode }}
          />
        </div>
      </div>

      {/* Visual Form Column */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        <div className="glass-panel p-5 sm:p-6 border border-white/5 bg-slate-950/15 relative">
          {/* Active indicator */}
          <div className="absolute top-2 right-4 text-[8px] font-mono text-primary-blue/60 flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-primary-blue animate-ping"></span>
            <span>SECURE_CONNECTION_STABLE</span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-gray-200 mb-6 font-mono tracking-tight">API Interface Portal</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-[9px] font-mono text-gray-400 uppercase tracking-widest mb-1.5">Payload: name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 rounded-lg bg-slate-950/65 border border-white/10 text-gray-200 focus:outline-none focus:border-primary-blue focus:shadow-[0_0_10px_rgba(10,124,110,0.2)] transition-all duration-300 font-mono text-xs sm:text-sm"
                placeholder="Enter name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[9px] font-mono text-gray-400 uppercase tracking-widest mb-1.5">Payload: email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 rounded-lg bg-slate-950/65 border border-white/10 text-gray-200 focus:outline-none focus:border-primary-blue focus:shadow-[0_0_10px_rgba(10,124,110,0.2)] transition-all duration-300 font-mono text-xs sm:text-sm"
                placeholder="Enter email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[9px] font-mono text-gray-400 uppercase tracking-widest mb-1.5">Payload: message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-3 py-2 rounded-lg bg-slate-950/65 border border-white/10 text-gray-200 focus:outline-none focus:border-primary-blue focus:shadow-[0_0_10px_rgba(10,124,110,0.2)] transition-all duration-300 resize-none font-mono text-xs sm:text-sm"
                placeholder="Write message..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSent}
              className="w-full py-3 px-5 rounded-lg font-semibold bg-gradient-to-r from-primary-blue to-secondary-cyan text-white flex items-center justify-center space-x-2 hover:shadow-[0_0_20px_rgba(10,124,110,0.3)] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 hover:scale-[1.01] uppercase tracking-wider text-xs font-mono"
            >
              {isSubmitting ? (
                <span>Executing transmit_message()...</span>
              ) : isSent ? (
                <span className="text-primary-blue">Packet Dispatched!</span>
              ) : (
                <>
                  <span>Execute API Call</span>
                  <Send size={12} />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact details */}
        <div className="grid grid-cols-3 gap-4">
          <a
            href="mailto:prasanna.tws@gmail.com"
            className="glass-panel p-3 border border-white/5 bg-slate-950/20 hover:border-primary-blue/20 hover:bg-slate-950/30 transition-all flex flex-col items-center text-center gap-1.5"
          >
            <Mail size={16} className="text-primary-blue" />
            <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Email</span>
            <span className="text-[10px] text-gray-300 font-bold truncate w-full">prasanna.tws@gmail.com</span>
          </a>

          <a
            href="https://linkedin.com/in/mlprasanna"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel p-3 border border-white/5 bg-slate-950/20 hover:border-secondary-cyan/20 hover:bg-slate-950/30 transition-all flex flex-col items-center text-center gap-1.5"
          >
            <svg className="w-4 h-4 text-secondary-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">LinkedIn</span>
            <span className="text-[10px] text-gray-300 font-bold truncate w-full">mlprasanna</span>
          </a>

          <a
            href="https://github.com/prasannatws-collab"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel p-3 border border-white/5 bg-slate-950/20 hover:border-accent-purple/20 hover:bg-slate-950/30 transition-all flex flex-col items-center text-center gap-1.5"
          >
            <svg className="w-4 h-4 text-accent-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">GitHub</span>
            <span className="text-[10px] text-gray-300 font-bold truncate w-full">prasannatws-collab</span>
          </a>
        </div>
      </div>
    </div>
  );
}
