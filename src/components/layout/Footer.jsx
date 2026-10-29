import React from "react";
import { ArrowUp } from "lucide-react";
import { profileData } from "../../data/profileData";
import { GithubIcon, LinkedinIcon } from "../common/SocialIcons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 py-10 text-xs font-mono text-zinc-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span>{profileData.name}</span>
          <span className="mx-2 text-zinc-700">·</span>
          <span>{profileData.motto}</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profileData.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href={profileData.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={scrollToTop}
            type="button"
            className="hover:text-zinc-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
