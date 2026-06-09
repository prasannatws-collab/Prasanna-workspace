"use client";

import ThreeDCanvas from "@/components/ThreeDCanvas";
import Workbench from "@/components/Workbench";

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 3D Floating Particle Background */}
      <ThreeDCanvas />

      {/* Cyber HUD Overlay Grids & Scanlines */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none -z-20" />
      <div className="fixed inset-0 hud-scanline pointer-events-none -z-20 opacity-30" />

      {/* Interactive Developer IDE Workbench Dashboard */}
      <Workbench />
    </div>
  );
}
