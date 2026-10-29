import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { journeyChapters } from "../../data/journeyData";
import { SectionHeader } from "../common/SectionHeader";

export function JourneySection({ onSelectStory }) {
  const containerRef = useRef(null);

  // Track scroll through the timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Map progress to SVG stroke length
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="journey" className="py-24 border-b border-zinc-800/80 relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader title="Rekam Jejak" />

        <div ref={containerRef} className="relative mt-12 pt-4 pb-12">
          {/* Vertical Cyberpunk Circuit Board Line */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 -translate-x-1/2 w-8 pointer-events-none z-0">
            <svg
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
              viewBox="0 0 32 1000"
            >
              <defs>
                <linearGradient id="cyberCircuitPlasma" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="50%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <filter id="circuitGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Background Inactive Dim Track */}
              <line
                x1="16"
                y1="0"
                x2="16"
                y2="1000"
                stroke="#27272a"
                strokeWidth="2.5"
                strokeDasharray="4 6"
              />

              {/* Active Neon Electric Plasma Line */}
              <motion.line
                x1="16"
                y1="0"
                x2="16"
                y2="1000"
                stroke="url(#cyberCircuitPlasma)"
                strokeWidth="3"
                filter="url(#circuitGlow)"
                style={{ pathLength }}
              />
            </svg>
          </div>

          {/* Milestones Nodes */}
          <div className="space-y-16 sm:space-y-24">
            {journeyChapters.map((chapter, idx) => (
              <CircuitMilestoneNode
                key={chapter.id}
                chapter={chapter}
                isEven={idx % 2 === 0}
                onSelect={() => onSelectStory(chapter.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CircuitMilestoneNode({ chapter, isEven, onSelect }) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-80px" });

  return (
    <div
      ref={nodeRef}
      className={`relative flex items-center gap-8 ${
        isEven ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* Content Card */}
      <motion.div
        onClick={onSelect}
        initial={{ opacity: 0, x: isEven ? 35 : -35 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -4 }}
        className="group w-full md:w-[calc(50%-2.5rem)] ml-14 md:ml-0 p-5 sm:p-6 rounded-2xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-cyan-500/10 z-10"
      >
        {/* Meta Header */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-500 mb-2">
          <span className="text-cyan-400 font-semibold">{chapter.category}</span>
          <span>·</span>
          <span>{chapter.period}</span>
          <span>·</span>
          <span>{chapter.readTime}</span>
        </div>

        {/* Typewriter Title */}
        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
          {isInView ? (
            <TypewriterHeader text={chapter.title} />
          ) : (
            <span>{chapter.title}</span>
          )}
        </h3>

        {/* Subtitle / Synopsis */}
        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mt-2 mb-3">
          {chapter.subtitle}
        </p>

        {/* Credential / Formal Luaran Highlight */}
        {chapter.credential && (
          <div className="py-2 px-3 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs font-mono text-zinc-300 flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_6px_#10b981]" />
            <span className="truncate">{chapter.credential}</span>
          </div>
        )}

        {/* Bottom Status & CTA */}
        <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500">
          <span>{chapter.stat}</span>
          <span className="text-zinc-300 group-hover:text-cyan-400 group-hover:underline inline-flex items-center gap-1 transition-colors">
            Baca Selengkapnya ↗
          </span>
        </div>
      </motion.div>

      {/* Central Circuit Node with Pulse Experience Radar */}
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center z-10 pointer-events-none">
        {/* Radar Wave 1 */}
        {isInView && (
          <>
            <motion.div
              animate={{ scale: [1, 2.5], opacity: [0.75, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeOut" }}
              className="absolute inset-0 rounded-full border border-cyan-400/80 bg-cyan-500/15"
            />
            {/* Radar Wave 2 (delayed) */}
            <motion.div
              animate={{ scale: [1, 3.2], opacity: [0.4, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, delay: 0.5, ease: "easeOut" }}
              className="absolute inset-0 rounded-full border border-emerald-400/60"
            />
          </>
        )}

        {/* Solid Center Node with Circuit Pad Ring */}
        <div
          className={`w-4 h-4 rounded-full transition-all duration-500 z-10 flex items-center justify-center ${
            isInView
              ? "bg-cyan-400 shadow-[0_0_14px_#22d3ee] ring-4 ring-cyan-950"
              : "bg-zinc-800 border border-zinc-700"
          }`}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-950" />
        </div>
      </div>
    </div>
  );
}

function TypewriterHeader({ text }) {
  const characters = Array.from(text);

  return (
    <span>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.02, delay: Math.min(index * 0.02, 1) }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}
