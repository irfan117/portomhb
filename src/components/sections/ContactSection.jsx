import React from "react";
import { profileData } from "../../data/profileData";
import { CopyPill } from "../common/CopyPill";
import { GithubIcon, LinkedinIcon } from "../common/SocialIcons";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          
          <div className="max-w-xl space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>{profileData.availability}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Tertarik Berkolaborasi?
            </h2>

            <p className="text-sm text-zinc-400 leading-relaxed">
              Saya selalu terbuka untuk berdiskusi seputar rekayasa backend, integrasi AI/RAG terapan, maupun peluang bergabung dengan tim teknis yang solid.
            </p>

            <div className="text-xs font-mono text-zinc-500 pt-1">
              {profileData.location}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
            <a
              href={`mailto:${profileData.email}`}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs transition-colors"
            >
              <span>Kirim Email</span>
            </a>

            {profileData.whatsapp && (
              <a
                href={profileData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-800/80 text-emerald-300 font-semibold text-xs font-mono transition-colors"
              >
                <span>WhatsApp ({profileData.phone})</span>
              </a>
            )}

            <a
              href={profileData.links.resume}
              download
              className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white text-xs font-mono transition-colors"
            >
              <span>Unduh CV (PDF) ↗</span>
            </a>

            <CopyPill textToCopy={profileData.email} label="Salin Alamat" />

            <div className="flex items-center gap-2 pt-1">
              <a
                href={profileData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white text-xs font-mono transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={profileData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white text-xs font-mono transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
