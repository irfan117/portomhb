import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { skillsData, constellationSkills } from "../../data/skillsData";
import { SectionHeader } from "../common/SectionHeader";

export function SkillsSection() {
  const [viewMode, setViewMode] = useState("cluster"); // "cluster" | "grid"
  const [selectedSkill, setSelectedSkill] = useState(null);

  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const targetPoint = useRef(null);

  // Background Interactive Canvas Particle Engine
  useEffect(() => {
    if (viewMode !== "cluster") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Initialize 100 ambient cyber particles
    const particles = Array.from({ length: 95 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 1.6 + 0.8,
      color: "#52525b"
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render & update particles
      for (const p of particles) {
        if (targetPoint.current) {
          // Physics: Gravitational attraction toward clicked icon center
          const dx = targetPoint.current.x - p.x;
          const dy = targetPoint.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist > 8) {
            const force = Math.min(10, 240 / dist);
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;
            p.color = targetPoint.current.color || "#22d3ee";
          } else {
            // Particle absorbed at node core: reset to perimeter
            p.x = Math.random() > 0.5 ? 0 : width;
            p.y = Math.random() * height;
            p.color = "#52525b";
          }
        } else {
          // Ambient organic drift
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        if (targetPoint.current) {
          ctx.shadowBlur = 6;
          ctx.shadowColor = p.color;
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      }

      // Constellation connecting links between nearby particles
      ctx.strokeStyle = "rgba(63, 63, 70, 0.18)";
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 70) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, [viewMode]);

  const handleNodeClick = (skill, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const parentRect = containerRef.current?.getBoundingClientRect();

    if (parentRect) {
      targetPoint.current = {
        x: rect.left + rect.width / 2 - parentRect.left,
        y: rect.top + rect.height / 2 - parentRect.top,
        color: skill.brandColor
      };

      // Disengage gravity attraction after 1.2s
      setTimeout(() => {
        targetPoint.current = null;
      }, 1200);
    }

    setSelectedSkill(skill);
  };

  return (
    <section id="skills" className="py-24 border-b border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header with View Mode Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <SectionHeader title="Keahlian" />

          {/* Toggle cluster vs structured grid */}
          <div className="inline-flex items-center p-1 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono">
            <button
              onClick={() => setViewMode("cluster")}
              type="button"
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                viewMode === "cluster"
                  ? "bg-zinc-800 text-white font-semibold shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              ✦ Gugusan Rasi Bintang
            </button>
            <button
              onClick={() => setViewMode("grid")}
              type="button"
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                viewMode === "grid"
                  ? "bg-zinc-800 text-white font-semibold shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              ⊞ Matriks Terstruktur
            </button>
          </div>
        </div>

        {/* View 1: Organic Constellation Cluster with Energy Absorption Canvas */}
        {viewMode === "cluster" ? (
          <div
            ref={containerRef}
            className="relative w-full h-[540px] sm:h-[620px] rounded-3xl bg-zinc-950 border border-zinc-800 overflow-hidden select-none"
          >
            {/* Ambient Particle Canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

            {/* Hint Badge */}
            <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-lg bg-zinc-900/80 backdrop-blur-md border border-zinc-800 text-[11px] font-mono text-zinc-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>Klik ikon untuk memicu <em>Energy Absorption</em> & info spesialisasi</span>
            </div>

            {/* Floating Constellation Nodes */}
            {constellationSkills.map((skill, idx) => {
              const isSelected = selectedSkill?.id === skill.id;

              return (
                <motion.div
                  key={skill.id}
                  onClick={(e) => handleNodeClick(skill, e)}
                  style={{
                    left: `${skill.coords.x}%`,
                    top: `${skill.coords.y}%`
                  }}
                  animate={{
                    y: [0, idx % 2 === 0 ? -10 : 10, 0],
                    x: [0, idx % 3 === 0 ? 6 : -6, 0]
                  }}
                  transition={{
                    duration: 4.5 + (idx % 3),
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut"
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10"
                >
                  {/* Outer Node Circle */}
                  <div
                    className={`w-13 h-13 sm:w-15 sm:h-15 rounded-2xl p-2.5 flex flex-col items-center justify-center transition-all duration-300 border bg-zinc-900/90 backdrop-blur-md group-hover:scale-115 ${
                      isSelected
                        ? "border-cyan-400 shadow-[0_0_24px_rgba(34,211,238,0.5)] ring-2 ring-cyan-400/40"
                        : "border-zinc-800/80 hover:border-zinc-700"
                    }`}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 25px ${skill.brandColor}50`;
                      e.currentTarget.style.borderColor = skill.brandColor;
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.borderColor = "#27272a";
                      }
                    }}
                  >
                    {/* Symbol / Shortcode with Color Awake */}
                    <span
                      className="text-xs sm:text-sm font-bold font-mono transition-all duration-300 filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100"
                      style={{ color: skill.brandColor }}
                    >
                      {skill.symbol}
                    </span>
                    <span className="text-[9px] font-mono text-zinc-500 group-hover:text-zinc-200 transition-colors mt-0.5 truncate max-w-[50px]">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}

            {/* Energy Absorption Detail Card HUD */}
            <AnimatePresence>
              {selectedSkill && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 15 }}
                  transition={{ duration: 0.25 }}
                  className="absolute bottom-5 left-5 right-5 sm:left-auto sm:right-6 sm:w-96 p-5 sm:p-6 rounded-2xl bg-zinc-900/95 border border-zinc-700/80 backdrop-blur-xl shadow-2xl z-30"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[11px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800"
                      style={{ color: selectedSkill.brandColor }}
                    >
                      {selectedSkill.category}
                    </span>
                    <button
                      onClick={() => setSelectedSkill(null)}
                      type="button"
                      className="text-zinc-500 hover:text-white text-xs font-mono px-1 py-0.5"
                    >
                      ✕ Tutup
                    </button>
                  </div>

                  <h4 className="text-xl font-bold text-white mt-2 flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{
                        backgroundColor: selectedSkill.brandColor,
                        boxShadow: `0 0 10px ${selectedSkill.brandColor}`
                      }}
                    />
                    {selectedSkill.name}
                  </h4>

                  <p className="mt-2.5 text-xs text-zinc-300 leading-relaxed font-sans">
                    {selectedSkill.experience}
                  </p>

                  <div className="mt-4 pt-3 border-t border-zinc-800 flex justify-between items-center text-xs font-mono">
                    <span className="text-zinc-500">Tingkat Kemahiran:</span>
                    <span
                      className="font-semibold"
                      style={{ color: selectedSkill.brandColor }}
                    >
                      {selectedSkill.level}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          /* View 2: Structured 3x2 Matrix Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillsData.map((group) => (
              <div
                key={group.category}
                className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-semibold text-sm text-zinc-200 mb-3 font-mono">
                    {group.category}
                  </h3>

                  <div className="space-y-2">
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className="p-2.5 rounded-lg bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
                      >
                        <div className="font-mono text-xs font-semibold text-white">
                          {item.name}
                        </div>
                        <div className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
                          {item.context}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
