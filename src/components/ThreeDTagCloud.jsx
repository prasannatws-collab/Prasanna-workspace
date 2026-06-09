"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const TAGS = [
  "C#",
  ".NET Core",
  "Azure Functions",
  "APIM",
  "Cosmos DB",
  "Azure DevOps",
  "Microservices",
  "REST APIs",
  "Docker",
  "SQL Server",
  "Event Grid",
  "Service Bus",
  "Key Vault",
  "Bicep",
  "Logic Apps",
  "ARM",
  "xUnit",
  "YAML"
];

export default function ThreeDTagCloud() {
  const containerRef = useRef(null);
  const [tags, setTags] = useState([]);
  
  // Angles and target velocities
  const anglesRef = useRef({
    x: 0.005,
    y: 0.005,
    tx: 0.005,
    ty: 0.005
  });

  const isMouseOverRef = useRef(false);

  useEffect(() => {
    const N = TAGS.length;
    const radius = 130;
    const focalLength = 300;

    // Distribute tags evenly on a sphere using Fibonacci sphere algorithm
    const initialTags = TAGS.map((text, i) => {
      const phi = Math.acos(-1 + (2 * i) / N);
      const theta = Math.sqrt(N * Math.PI) * phi;
      
      return {
        text,
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        projX: 0,
        projY: 0,
        scale: 1,
        opacity: 1,
      };
    });

    setTags(initialTags);

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      
      // Calculate normalized speed vectors relative to center
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;

      anglesRef.current.ty = (dx / (rect.width / 2)) * 0.02;
      anglesRef.current.tx = -(dy / (rect.height / 2)) * 0.02;
    };

    const handleMouseEnter = () => {
      isMouseOverRef.current = true;
    };

    const handleMouseLeave = () => {
      isMouseOverRef.current = false;
      // Revert to slow rotation
      anglesRef.current.tx = 0.003;
      anglesRef.current.ty = 0.003;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    let frameId;
    const update = () => {
      anglesRef.current.x += (anglesRef.current.tx - anglesRef.current.x) * 0.05;
      anglesRef.current.y += (anglesRef.current.ty - anglesRef.current.y) * 0.05;

      const cosX = Math.cos(anglesRef.current.x);
      const sinX = Math.sin(anglesRef.current.x);
      const cosY = Math.cos(anglesRef.current.y);
      const sinY = Math.sin(anglesRef.current.y);

      setTags((prevTags) =>
        prevTags.map((tag) => {
          // Rotate X axis
          const y1 = tag.y * cosX - tag.z * sinX;
          const z1 = tag.y * sinX + tag.z * cosX;

          // Rotate Y axis
          const x2 = tag.x * cosY - z1 * sinY;
          const z2 = tag.x * sinY + z1 * cosY;

          // Project
          const scale = focalLength / (focalLength + z2);
          const opacity = Math.max(0.15, Math.min(0.9, (focalLength - z2) / (focalLength * 1.2)));

          return {
            ...tag,
            x: x2,
            y: y1,
            z: z2,
            projX: x2 * scale,
            projY: y1 * scale,
            scale,
            opacity,
          };
        })
      );

      frameId = requestAnimationFrame(update);
    };

    frameId = requestAnimationFrame(update);

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[320px] mx-auto flex items-center justify-center select-none overflow-visible cursor-pointer"
    >
      {/* Decorative center orb */}
      <div className="absolute w-24 h-24 rounded-full bg-cyan-500/10 border border-cyan-500/20 blur-sm pointer-events-none" />

      {tags.map((tag, i) => (
        <span
          key={i}
          className="absolute text-xs sm:text-sm font-mono px-2.5 py-1 rounded bg-slate-950/75 border border-white/5 text-gray-300 font-bold whitespace-nowrap shadow-md pointer-events-none transition-all"
          style={{
            transform: `translate3d(${tag.projX}px, ${tag.projY}px, 0px) scale(${tag.scale})`,
            opacity: tag.opacity,
            zIndex: Math.round(tag.scale * 100),
            color: tag.scale > 1.1 
              ? "#22d3ee" // Cyan
              : tag.scale > 0.9 
              ? "#a78bfa" // Purple
              : "#94a3b8", // Muted slate
            borderColor: tag.scale > 1.1 
              ? "rgba(6, 182, 212, 0.3)" 
              : "rgba(255, 255, 255, 0.05)"
          }}
        >
          {tag.text}
        </span>
      ))}
    </div>
  );
}
