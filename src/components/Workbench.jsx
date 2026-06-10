"use client";

import { useState, useEffect, useRef } from "react";
import { Folder, FolderOpen, FileJson, FileText, Code, FileCode, Play, Terminal, ChevronRight, Menu, X } from "lucide-react";

import BioView from "./views/BioView";
import SkillsView from "./views/SkillsView";
import ExperienceView from "./views/ExperienceView";
import ProjectsView from "./views/ProjectsView";
import ContactView from "./views/ContactView";
import AchievementsView from "./views/AchievementsView";

// Structure of file tree (re-aligned to three specific projects)
const FILE_TREE = [
  {
    name: "src",
    type: "folder",
    children: [
      { id: "bio.json", name: "bio.json", type: "json", icon: <FileJson size={14} className="text-amber-400/80" /> },
      { id: "skills.yaml", name: "skills.yaml", type: "yaml", icon: <FileText size={14} className="text-emerald-400/80" /> },
      { id: "experience.yaml", name: "experience.yaml", type: "yaml", icon: <FileText size={14} className="text-sky-400/80" /> },
      { id: "achievements.json", name: "achievements.json", type: "json", icon: <FileJson size={14} className="text-purple-400/80" /> },
      { id: "contact_endpoint.py", name: "contact_endpoint.py", type: "python", icon: <FileCode size={14} className="text-blue-400/80" /> }
    ]
  },
  {
    name: "projects",
    type: "folder",
    children: [
      { id: "ltm_premera_bluecross.cs", name: "ltm_premera_bluecross.cs", type: "cs", icon: <Code size={14} className="text-emerald-400/80" /> },
      { id: "accenture_conedison.cs", name: "accenture_conedison.cs", type: "cs", icon: <Code size={14} className="text-sky-400/80" /> },
      { id: "cognizant_pearson.cs", name: "cognizant_pearson.cs", type: "cs", icon: <Code size={14} className="text-amber-400/80" /> }
    ]
  }
];

export default function Workbench() {
  // Tab states
  const [openTabs, setOpenTabs] = useState(["bio.json"]);
  const [activeTab, setActiveTab] = useState("bio.json");
  const [folderOpen, setFolderOpen] = useState({ src: true, projects: true });

  // Sidebar visibility states for responsiveness
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Terminal states
  const [terminalLines, setTerminalLines] = useState([
    "Microsoft Windows [Version 10.0.22631]",
    "(c) Microsoft Corporation. All rights reserved.",
    "",
    "Prasanna's Workspace Initialized.",
    "Type 'help' to view available operations.",
    ""
  ]);
  const [terminalInput, setTerminalInput] = useState("");
  const terminalBottomRef = useRef(null);

  // Automatically scroll terminal to bottom on new outputs
  useEffect(() => {
    if (terminalBottomRef.current) {
      terminalBottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalLines]);

  // Adjust sidebars based on screen size on mount
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Listen to window logs from API validation triggers
  useEffect(() => {
    const handleLogs = (e) => {
      if (e.detail && e.detail.line) {
        addTerminalLine(e.detail.line);
      }
    };
    window.addEventListener("terminal-output", handleLogs);
    return () => window.removeEventListener("terminal-output", handleLogs);
  }, []);

  const addTerminalLine = (line) => {
    setTerminalLines((prev) => [...prev, line]);
  };

  // Handle clicking file in sidebar tree
  const handleFileClick = (fileId) => {
    if (!openTabs.includes(fileId)) {
      setOpenTabs((prev) => [...prev, fileId]);
    }
    setActiveTab(fileId);
    
    // Auto-close overlay sidebar on mobile/tablet clicking files
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  // Close file tab
  const handleTabClose = (e, fileId) => {
    e.stopPropagation();
    const remaining = openTabs.filter(t => t !== fileId);
    setOpenTabs(remaining);
    
    if (activeTab === fileId && remaining.length > 0) {
      setActiveTab(remaining[remaining.length - 1]);
    }
  };

  // Terminal commands interpreter
  const handleTerminalSubmit = (e, overrideCommand = "") => {
    if (e) e.preventDefault();
    const command = overrideCommand ? overrideCommand.trim() : terminalInput.trim();
    if (!command) return;

    addTerminalLine(`C:\\Users\\prasanna\\workspace> ${command}`);
    const tokens = command.split(" ");
    const primaryCmd = tokens[0].toLowerCase();

    switch (primaryCmd) {
      case "help":
        addTerminalLine("Available Commands:");
        addTerminalLine("  help               - Displays this reference list.");
        addTerminalLine("  cat &lt;file&gt;         - Displays syntax code content of selected file.");
        addTerminalLine("  build              - Executes verification test pipeline.");
        addTerminalLine("  clear              - Clears the console logs.");
        addTerminalLine("  contact            - Outputs direct mail coordinates.");
        break;
      
      case "clear":
        setTerminalLines([]);
        break;

      case "contact":
        addTerminalLine("Direct SMTP Transport Addresses:");
        addTerminalLine("  Email    : prasanna.tws@gmail.com");
        addTerminalLine("  GitHub   : https://github.com/prasannatws-collab");
        addTerminalLine("  LinkedIn : https://linkedin.com/in/mlprasanna");
        break;

      case "cat":
        const fileParam = tokens[1];
        if (!fileParam) {
          addTerminalLine("Usage: cat <file_name>");
        } else {
          const matchedFile = FILE_TREE.flatMap(f => f.children).find(c => c.name === fileParam);
          if (matchedFile) {
            handleFileClick(matchedFile.id);
            addTerminalLine(`File opened: ${fileParam}`);
          } else {
            addTerminalLine(`Error: File not found '${fileParam}'`);
          }
        }
        break;

      case "build":
        addTerminalLine("[build-system] Initiating compiler compilation...");
        setTimeout(() => {
          addTerminalLine("[build-system] Checking system dependencies... OK");
        }, 500);
        setTimeout(() => {
          addTerminalLine("[build-system] Validating database structures and Cosmos indexes... PASS");
        }, 1000);
        setTimeout(() => {
          addTerminalLine("[build-system] Static build prerender completed successfully.");
          addTerminalLine("[build-system] 0 warnings, 0 compile failures. Verification successful.");
        }, 1800);
        break;

      default:
        addTerminalLine(`Command not recognized: '${primaryCmd}'. Type 'help' to review syntax list.`);
    }

    if (!overrideCommand) setTerminalInput("");
  };

  // Render the current editor panel view
  const renderActiveEditor = () => {
    switch (activeTab) {
      case "bio.json":
        return <BioView />;
      case "skills.yaml":
        return <SkillsView />;
      case "experience.yaml":
        return <ExperienceView />;
      case "achievements.json":
        return <AchievementsView />;
      case "contact_endpoint.py":
        return <ContactView />;
      case "ltm_premera_bluecross.cs":
      case "accenture_conedison.cs":
      case "cognizant_pearson.cs":
        return <ProjectsView fileId={activeTab} />;
      default:
        return (
          <div className="flex items-center justify-center h-full text-gray-500 font-mono text-xs select-none">
            No active open file tab. Click a file in the sidebar explorer tree.
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col h-screen w-full select-none text-gray-300 font-sans border border-emerald-500/10 bg-[#090d16] relative overflow-hidden">
      
      {/* 1. Header Toolbar Dashboard */}
      <header className="flex items-center justify-between px-4 py-2 bg-[#0b1329] border-b border-emerald-500/10 text-xs font-mono relative z-30">
        <div className="flex items-center gap-3">
          {/* Mobile menu toggle */}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-1.5 rounded hover:bg-white/5 text-gray-400 hover:text-emerald-400"
          >
            <Menu size={16} />
          </button>
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-bold text-gray-200 uppercase tracking-wider text-[10px] sm:text-xs">Prasanna.Tws</span>
          </div>
        </div>

        {/* IDE actions */}
        <div className="hidden sm:flex items-center gap-4 text-[10px] text-gray-500">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>Local Node: Up</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60"></span>
            <span>Port: 3000</span>
          </div>
        </div>

        <div>
          <button 
            onClick={(e) => handleTerminalSubmit(e, "build")}
            className="flex items-center gap-1 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 text-emerald-400 rounded transition-all font-mono"
            title="Execute Build System"
          >
            <Play size={10} className="fill-emerald-400" />
            <span className="text-[10px]">RUN VALIDATIONS</span>
          </button>
        </div>
      </header>

      {/* 2. Primary Workspace Panel */}
      <div className="flex flex-1 min-h-0 relative z-20">
        
        {/* Left Explorer Sidebar */}
        <aside 
          className={`fixed lg:static top-0 left-0 h-full w-[240px] bg-[#0b1329]/95 lg:bg-[#0b1329] border-r border-emerald-500/10 flex flex-col z-40 transition-transform duration-300 lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header explorer */}
          <div className="flex items-center justify-between p-3 border-b border-white/5 text-[10px] uppercase font-mono tracking-widest text-gray-400 select-none">
            <span>Explorer Tree</span>
            <button className="lg:hidden text-gray-500 hover:text-white" onClick={() => setSidebarOpen(false)}>
              <X size={14} />
            </button>
          </div>

          {/* Navigation links tree */}
          <nav className="flex-1 overflow-y-auto p-2 font-mono text-[11px] space-y-2 select-none">
            {FILE_TREE.map((folder) => {
              const isFolderOpen = folderOpen[folder.name];
              return (
                <div key={folder.name}>
                  <button
                    onClick={() => setFolderOpen(prev => ({ ...prev, [folder.name]: !prev[folder.name] }))}
                    className="flex items-center space-x-1.5 w-full text-left py-1 px-1.5 rounded hover:bg-white/5 text-gray-300 transition-colors"
                  >
                    <ChevronRight 
                      size={12} 
                      className={`text-gray-500 transform transition-transform ${isFolderOpen ? "rotate-90" : ""}`} 
                    />
                    {isFolderOpen ? <FolderOpen size={13} className="text-emerald-500/80" /> : <Folder size={13} className="text-emerald-500/80" />}
                    <span>{folder.name}</span>
                  </button>

                  {/* Folder items */}
                  {isFolderOpen && (
                    <div className="pl-6 mt-1 space-y-1">
                      {folder.children.map((child) => (
                        <button
                          key={child.id}
                          onClick={() => handleFileClick(child.id)}
                          className={`flex items-center space-x-2 w-full text-left py-1 px-2 rounded transition-colors ${
                            activeTab === child.id 
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                              : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
                          }`}
                        >
                          {child.icon}
                          <span className="truncate">{child.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </aside>

        {/* Workspace Central Panels: Editor, Preview, and Terminal */}
        <section className="flex-1 flex flex-col min-w-0 bg-[#090d16]">
          {/* Tabs bar */}
          <div className="flex bg-[#0b1329] border-b border-emerald-500/10 overflow-x-auto select-none relative z-10">
            {openTabs.map((tabId) => {
              const matchedFile = FILE_TREE.flatMap(f => f.children).find(c => c.id === tabId);
              return (
                <button
                  key={tabId}
                  onClick={() => setActiveTab(tabId)}
                  className={`flex items-center space-x-2.5 px-4 py-2 border-r border-white/5 text-[11px] font-mono transition-colors relative group ${
                    activeTab === tabId 
                      ? "bg-[#090d16] text-emerald-400" 
                      : "bg-[#0b1329] text-gray-500 hover:text-gray-300"
                  }`}
                >
                  <span className="flex-shrink-0">{matchedFile?.icon}</span>
                  <span>{tabId}</span>
                  <X 
                    size={10} 
                    className="text-gray-600 hover:text-emerald-400 transition-colors"
                    onClick={(e) => handleTabClose(e, tabId)} 
                  />
                  {activeTab === tabId && (
                    <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-emerald-400" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active view code frame */}
          <div className="flex-1 min-h-0 relative">
            {renderActiveEditor()}
          </div>

          {/* Bottom Terminal console */}
          <div className="h-[90px] sm:h-[110px] bg-[#070b14] border-t border-emerald-500/10 flex flex-col font-mono text-[11px]">
            {/* Terminal bar */}
            <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/5 bg-[#0b1329]/50 select-none">
              <span className="text-[10px] text-gray-500 flex items-center gap-1.5">
                <Terminal size={12} className="text-emerald-500" />
                <span>TERMINAL / DIAGNOSTICS LOGS</span>
              </span>
              <button 
                onClick={() => setTerminalLines([])}
                className="text-[9px] text-gray-600 hover:text-emerald-400 font-semibold"
              >
                CLEAR LOGS
              </button>
            </div>

            {/* Scrollable console lines */}
            <div className="flex-1 overflow-y-auto p-3.5 space-y-1 select-text">
              {terminalLines.map((line, idx) => (
                <div key={idx} className="leading-relaxed whitespace-pre-wrap break-all" dangerouslySetInnerHTML={{ __html: line }} />
              ))}
              <div ref={terminalBottomRef} />
            </div>

            {/* Terminal console input */}
            <form onSubmit={handleTerminalSubmit} className="flex items-center border-t border-white/5 bg-[#05080f] px-3.5 py-1.5 select-none">
              <span className="text-emerald-500 font-bold mr-2">&gt;_</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-emerald-400 placeholder-emerald-900/60 font-mono text-[11px] focus:ring-0"
                placeholder="Type 'help' or execute commands..."
              />
            </form>
          </div>
        </section>
      </div>

      {/* 3. Bottom IDE status bar */}
      <footer className="h-6 bg-[#0b1329] border-t border-emerald-500/10 flex items-center justify-between px-3 text-[9px] font-mono text-gray-500 select-none relative z-30">
        <div className="flex items-center gap-3">
          <span className="text-emerald-500/70">-- NORMAL --</span>
          <span>utf-8</span>
          <span>lf</span>
          <span>javascriptreact</span>
        </div>
        <div className="flex items-center gap-3">
          <span>Git Branch: main</span>
          <span>0 Errors</span>
          <span>0 Warnings</span>
        </div>
      </footer>
    </div>
  );
}
