import React, { useState, useRef } from "react";
import { motion, useMotionValue, useMotionTemplate } from "motion/react";
import { projectsData } from "../../data/projectsData";
import { SectionHeader } from "../common/SectionHeader";
import { Badge } from "../common/Badge";

export function ProjectsSection({ onSelectProject }) {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const categories = ["Semua", "AI & Backend", "Full-Stack Web", "Konsep & Riset"];

  const filteredProjects = selectedCategory === "Semua"
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 border-b border-zinc-800/80 relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader title="Proyek" />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                type="button"
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-zinc-100 text-zinc-950 font-bold shadow-sm shadow-white/20"
                    : "bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800/80"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Bento Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, idx) => (
            <BentoProjectCard
              key={project.id}
              project={project}
              index={idx}
              onSelect={() => onSelectProject(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoProjectCard({ project, index, onSelect }) {
  const cardRef = useRef(null);
  const visualRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFlashlightActive, setIsFlashlightActive] = useState(false);

  // Card mouse tracking for border spotlight
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Flashlight mask tracking inside thumbnail
  const flashX = useMotionValue(-1000);
  const flashY = useMotionValue(-1000);

  const accentColor = project.accentColor || "#10b981";
  const hasImages = project.images && project.images.length > 0;
  const previewImg = hasImages ? project.images[0] : null;

  const handleCardMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleVisualMouseMove = (e) => {
    if (!visualRef.current) return;
    const rect = visualRef.current.getBoundingClientRect();
    flashX.set(e.clientX - rect.left);
    flashY.set(e.clientY - rect.top);
  };

  const borderSpotlight = useMotionTemplate`
    radial-gradient(
      380px circle at ${mouseX}px ${mouseY}px,
      ${accentColor}80 0%,
      ${accentColor}20 40%,
      transparent 75%
    )
  `;

  const flashlightMask = useMotionTemplate`
    radial-gradient(
      120px circle at ${flashX}px ${flashY}px,
      black 0%,
      transparent 100%
    )
  `;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleCardMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(-1000);
        mouseY.set(-1000);
      }}
      onClick={onSelect}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      style={{
        boxShadow: isHovered
          ? `0 24px 50px -15px ${accentColor}25, 0 0 35px 2px ${accentColor}15`
          : "none"
      }}
      className={`group relative rounded-2xl bg-zinc-950 p-6 flex flex-col justify-between overflow-hidden border border-zinc-800/80 transition-shadow duration-300 cursor-pointer ${
        project.bentoSpan || "md:col-span-1"
      }`}
    >
      {/* 1. Dynamic Cursor Spotlight Glow Border */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: borderSpotlight
        }}
      />

      {/* Internal Card Body */}
      <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
        <div>
          {/* Top Metadata */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: accentColor, boxShadow: `0 0 8px ${accentColor}` }}
              />
              <Badge variant={project.featured ? "emerald" : "default"} size="sm">
                {project.badge}
              </Badge>
            </div>
            <span className="text-[11px] font-mono text-zinc-500">
              {project.period}
            </span>
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-zinc-100 transition-colors">
            {project.title}
          </h3>
          <div className="text-xs font-mono text-zinc-400 mt-0.5 mb-2 line-clamp-1">
            {project.subtitle}
          </div>

          {/* Description */}
          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
            {project.shortDescription}
          </p>

          {/* 2. Visual Viewport: Dark-to-Light Flashlight Window Preview */}
          {previewImg ? (
            <div
              ref={visualRef}
              onMouseMove={handleVisualMouseMove}
              onMouseEnter={() => setIsFlashlightActive(true)}
              onMouseLeave={() => {
                setIsFlashlightActive(false);
                flashX.set(-1000);
                flashY.set(-1000);
              }}
              className="relative w-full h-44 sm:h-52 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800/80 mb-4 group/visual select-none"
            >
              {/* Base Layer: Dark Mode UI / Screenshot */}
              <img
                src={previewImg}
                alt={`${project.title} Dark Mode`}
                className="absolute inset-0 w-full h-full object-cover filter brightness-90 group-hover/visual:brightness-95 transition-all duration-300"
              />

              {/* Flashlight Revealed Layer: High-Contrast Light Mode / Wireframe View */}
              <motion.div
                className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover/visual:opacity-100 transition-opacity duration-200"
                style={{
                  WebkitMaskImage: flashlightMask,
                  maskImage: flashlightMask
                }}
              >
                <img
                  src={previewImg}
                  alt={`${project.title} Light Schematic`}
                  className="w-full h-full object-cover filter invert contrast-125 brightness-110 hue-rotate-180"
                />
                {/* Crosshair target indicator */}
                <div
                  className="absolute inset-0 pointer-events-none bg-emerald-500/10 mix-blend-overlay"
                />
              </motion.div>

              {/* Flashlight Hint Badge */}
              <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[10px] font-mono text-zinc-300 border border-white/10 flex items-center gap-1.5 opacity-80 group-hover/visual:opacity-100 transition-opacity">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>{isFlashlightActive ? "Light Preview Aktif" : "Sorot Senter"}</span>
              </div>
            </div>
          ) : (
            <div className="relative w-full h-24 rounded-xl bg-zinc-900/40 border border-zinc-800/80 p-3 mb-4 flex flex-col justify-center">
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-1">
                Sorotan Teknis
              </span>
              <p className="text-xs text-zinc-300 font-mono line-clamp-2">
                {project.highlight}
              </p>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 text-zinc-500 border border-zinc-800">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Footer Action */}
        <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500 group-hover:text-zinc-200 transition-colors">
          <span>{hasImages ? `${project.images.length} Media` : "Arsitektur"}</span>
          <span className="inline-flex items-center gap-1 font-semibold text-white group-hover:underline">
            Lihat Studi Kasus
            <span className="text-zinc-400 group-hover:translate-x-0.5 transition-transform">↗</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
