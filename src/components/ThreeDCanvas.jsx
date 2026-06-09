"use client";

import { useEffect, useRef } from "react";

export default function ThreeDCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    const particleCount = 280;
    
    // 3D parameters
    const focalLength = 300;
    let angleX = 0.003;
    let angleY = 0.003;
    let targetAngleX = 0.003;
    let targetAngleY = 0.003;
    
    // Drag parameters
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;

    let currentShape = "sphere"; // sphere, cube, torus

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Math shapes generators
    const getSphereCoords = (i) => {
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      const radius = 120;
      return {
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi)
      };
    };

    const getCubeCoords = (i) => {
      // Evenly distribute coordinates across 6 faces of a cube
      const range = 160;
      const face = i % 6;
      const u = ((Math.floor(i / 6) % 10) / 10 - 0.5) * range;
      const v = ((Math.floor(i / 60) % 10) / 10 - 0.5) * range;
      const half = range / 2;

      switch (face) {
        case 0: return { x: u, y: v, z: half };
        case 1: return { x: u, y: v, z: -half };
        case 2: return { x: u, y: half, z: v };
        case 3: return { x: u, y: -half, z: v };
        case 4: return { x: half, y: u, z: v };
        default: return { x: -half, y: u, z: v };
      }
    };

    const getTorusCoords = (i) => {
      const R = 100; // Major radius
      const r = 40;  // Minor radius
      
      const phi = (i / particleCount) * Math.PI * 2 * 6;
      const theta = (i / particleCount) * Math.PI * 2;
      
      return {
        x: (R + r * Math.cos(theta)) * Math.cos(phi),
        y: (R + r * Math.cos(theta)) * Math.sin(phi),
        z: r * Math.sin(theta)
      };
    };

    // Initialize particles
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const sphereTarget = getSphereCoords(i);
        particles.push({
          x: (Math.random() - 0.5) * 800,
          y: (Math.random() - 0.5) * 800,
          z: (Math.random() - 0.5) * 800,
          tx: sphereTarget.x,
          ty: sphereTarget.y,
          tz: sphereTarget.z,
          size: Math.random() * 2 + 1,
          color: i % 2 === 0 ? "rgba(16, 185, 129, " : "rgba(192, 132, 252, "
        });
      }
    };

    const morphTo = (shape) => {
      currentShape = shape;
      particles.forEach((p, i) => {
        let targets;
        if (shape === "cube") targets = getCubeCoords(i);
        else if (shape === "torus") targets = getTorusCoords(i);
        else targets = getSphereCoords(i);
        
        p.tx = targets.x;
        p.ty = targets.y;
        p.tz = targets.z;
      });
    };

    // Global scroll triggers to automatically morph background shape
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;
      
      if (scrollY < height * 0.8) {
        if (currentShape !== "sphere") morphTo("sphere");
      } else if (scrollY >= height * 0.8 && scrollY < height * 2.3) {
        if (currentShape !== "cube") morphTo("cube");
      } else {
        if (currentShape !== "torus") morphTo("torus");
      }
    };

    // Drag interactions
    const handleMouseDown = (e) => {
      isDragging = true;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - lastMouseX;
      const deltaY = e.clientY - lastMouseY;
      
      targetAngleY = deltaX * 0.002;
      targetAngleX = deltaY * 0.002;
      
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    // Custom shape button dispatch listener
    const handleMorphMessage = (e) => {
      if (e.detail && e.detail.shape) {
        morphTo(e.detail.shape);
      }
    };

    // Render loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Decay angle velocities smoothly back to default
      if (!isDragging) {
        angleX += (0.003 - angleX) * 0.05;
        angleY += (0.003 - angleY) * 0.05;
      } else {
        angleX += (targetAngleX - angleX) * 0.1;
        angleY += (targetAngleY - angleY) * 0.1;
      }

      // Sort particles by Z-axis for proper depth rendering
      const sortedParticles = [...particles].map(p => {
        // Morph interpolation
        p.x += (p.tx - p.x) * 0.08;
        p.y += (p.ty - p.y) * 0.08;
        p.z += (p.tz - p.z) * 0.08;

        // Rotation around X axis
        const cosX = Math.cos(angleX);
        const sinX = Math.sin(angleX);
        const y1 = p.y * cosX - p.z * sinX;
        const z1 = p.y * sinX + p.z * cosX;

        // Rotation around Y axis
        const cosY = Math.cos(angleY);
        const sinY = Math.sin(angleY);
        const x2 = p.x * cosY - z1 * sinY;
        const z2 = p.x * sinY + z1 * cosY;

        return { ...p, rx: x2, ry: y1, rz: z2 };
      }).sort((a, b) => b.rz - a.rz);

      // Draw projected particles
      sortedParticles.forEach(p => {
        const perspectiveScale = focalLength / (focalLength + p.rz);
        
        // Skip drawing if behind perspective camera
        if (perspectiveScale < 0) return;

        const screenX = centerX + p.rx * perspectiveScale;
        const screenY = centerY + p.ry * perspectiveScale;
        const size = Math.max(0.2, p.size * perspectiveScale);

        // Fade out particles that are far back
        const depthOpacity = Math.max(0.05, Math.min(0.8, 1 - p.rz / 200));

        ctx.beginPath();
        ctx.arc(screenX, screenY, size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${depthOpacity})`;
        ctx.fill();
      });

      // Connect coordinates when they are close
      ctx.lineWidth = 0.5;
      for (let a = 0; a < sortedParticles.length; a += 4) {
        for (let b = a + 1; b < a + 4; b++) {
          if (b >= sortedParticles.length) break;
          const dx = sortedParticles[a].rx - sortedParticles[b].rx;
          const dy = sortedParticles[a].ry - sortedParticles[b].ry;
          const dz = sortedParticles[a].rz - sortedParticles[b].rz;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 75) {
            const scaleA = focalLength / (focalLength + sortedParticles[a].rz);
            const scaleB = focalLength / (focalLength + sortedParticles[b].rz);
            
            const x1 = centerX + sortedParticles[a].rx * scaleA;
            const y1 = centerY + sortedParticles[a].ry * scaleA;
            const x2 = centerX + sortedParticles[b].rx * scaleB;
            const y2 = centerY + sortedParticles[b].ry * scaleB;

            const lineOpacity = (1 - dist / 75) * 0.12 * Math.min(scaleA, scaleB);
            ctx.strokeStyle = `rgba(16, 185, 129, ${lineOpacity})`;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Events
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("morph-bg", handleMorphMessage);

    // Initial setup
    handleResize();
    initParticles();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("morph-bg", handleMorphMessage);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 bg-transparent cursor-grab active:cursor-grabbing"
    />
  );
}
