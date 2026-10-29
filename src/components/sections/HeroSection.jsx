import React from "react";
import { ArrowDown } from "lucide-react";
import { profileData } from "../../data/profileData";
import { CopyPill } from "../common/CopyPill";
import { GithubIcon, LinkedinIcon } from "../common/SocialIcons";
import heroImg from "../../assets/hero.png";

export function HeroSection() {
  return (
    <section className="min-h-[calc(100svh-3.5rem)] flex flex-col justify-between py-8 sm:py-12 border-b border-zinc-800/80 relative">
      {/* Spacer to balance vertical centering */}
      <div className="hidden sm:block" />

      {/* Main Hero Content */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 my-auto">
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8 sm:gap-12">
          
          {/* Left Text Column */}
          <div className="flex-1 space-y-4 sm:space-y-6">
            
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>{profileData.availability}</span>
            </div>

            {/* Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
                {profileData.name}
              </h1>
              <p className="text-base sm:text-xl text-zinc-400 font-medium mt-1.5">
                {profileData.role} — {profileData.focus}
              </p>
            </div>

            {/* Simple One-line Tagline */}
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-lg">
              {profileData.tagline}
            </p>

            {/* Actions & Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs sm:text-sm transition-all active:scale-95"
              >
                <span>Lihat Karya</span>
                <ArrowDown className="w-4 h-4 text-zinc-950" />
              </a>

              <CopyPill textToCopy={profileData.email} label="Email" />

              <a
                href={profileData.links.resume}
                download
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-mono text-xs transition-colors"
              >
                <span>Unduh CV</span>
                <span className="text-[10px] text-zinc-500">PDF</span>
              </a>

              <div className="flex items-center gap-2 ml-1">
                <a
                  href={profileData.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={profileData.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Portrait Photo Frame */}
          <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 shrink-0 rounded-2xl border border-zinc-700/80 bg-zinc-900 p-1.5 shadow-2xl relative group">
            <div className="w-full h-full rounded-xl overflow-hidden bg-zinc-950 relative">
              <img
                src={heroImg}
                alt="M. Irfan"
                className="w-full h-full object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            
            {/* Location pin */}
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-zinc-900 border border-zinc-800 px-2.5 py-0.5 rounded-full text-[10px] font-mono text-zinc-400 shadow-sm">
              Bandung, ID
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Hint at the bottom */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-4 flex items-center justify-between text-[11px] font-mono text-zinc-600">
        <span>// SCROLL DOWN</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-zinc-500" />
      </div>
    </section>
  );
}
