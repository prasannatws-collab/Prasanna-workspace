"use client";

import { useState, useRef } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

export default function TiltCard({ children, className = "" }) {
  const cardRef = useRef(null);

  // Motion values for mouse coordinates
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for tilt values
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 20 });

  // Shadows or highlights responding to tilt
  const glowX = useSpring(useTransform(x, [-0.5, 0.5], ["30%", "70%"]), { stiffness: 150, damping: 20 });
  const glowY = useSpring(useTransform(y, [-0.5, 0.5], ["30%", "70%"]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Relative offset from -0.5 to 0.5
    const relativeX = (e.clientX - rect.left) / width - 0.5;
    const relativeY = (e.clientY - rect.top) / height - 0.5;

    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative perspective-1000 select-none ${className}`}
    >
      {/* Glow highlight overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-[inherit] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useTransform(
            [glowX, glowY],
            (latest) => `radial-gradient(circle at ${latest[0]} ${latest[1]}, rgba(6, 182, 212, 0.15) 0%, transparent 60%)`
          ),
        }}
      />
      {children}
    </motion.div>
  );
}
