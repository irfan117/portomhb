import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projectsData } from "../../data/projectsData";
import { GithubIcon } from "../common/SocialIcons";

export function ProjectCaseStudyPage({ projectId, onBack, onSelectProject }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const currentIndex = projectsData.findIndex((p) => p.id === projectId);
  const project = projectsData[currentIndex] || projectsData[0];

  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [projectId]);

  const hasImages = project.images && project.images.length > 0;

  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-zinc-800 selection:text-white pb-24">
      
      {/* Top Minimal Navigation Bar */}
      <nav className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <button
            onClick={onBack}
            type="button"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Kembali ke Portofolio</span>
          </button>

          <div className="flex items-center gap-4 text-xs font-mono">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-white underline underline-offset-4"
              >
                Live Demo ↗
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white inline-flex items-center gap-1.5"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16">
        
        {/* Header Metadata (Pure Typography, No Icon Clutter) */}
        <div className="text-xs font-mono text-zinc-500 mb-3 space-x-2">
          <span>{project.period}</span>
          <span>·</span>
          <span>{project.category}</span>
          <span>·</span>
          <span className="text-zinc-400">{project.organization}</span>
        </div>

        {/* Big Clean Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
          {project.title}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-8">
          {project.subtitle}
        </p>

        {/* Primary Uncropped Image Showcase */}
        {hasImages && (
          <div className="mb-14 space-y-3">
            <div className="w-full max-h-[75vh] min-h-[260px] sm:min-h-[400px] rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-center p-2 sm:p-4">
              <img
                src={project.images[activeImageIndex]}
                alt={project.title}
                className="max-h-[70vh] w-auto h-auto max-w-full object-contain rounded-lg"
              />
            </div>

            {/* Thumbnail switcher (Clean dots/thumbnails) */}
            {project.images.length > 1 && (
              <div className="flex items-center justify-between text-xs font-mono text-zinc-500 pt-1">
                <div className="flex items-center gap-2 overflow-x-auto">
                  {project.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      type="button"
                      className={`h-12 w-16 sm:h-14 sm:w-20 shrink-0 rounded-lg overflow-hidden border transition-all cursor-pointer bg-zinc-900 p-0.5 ${
                        activeImageIndex === idx
                          ? "border-zinc-200 opacity-100"
                          : "border-zinc-800 opacity-40 hover:opacity-80"
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>

                <span className="shrink-0">
                  {activeImageIndex + 1} / {project.images.length}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Editorial Body (Clean, Calm, Zero Unnecessary Icons) */}
        <div className="space-y-12 text-sm sm:text-base leading-relaxed text-zinc-300">
          
          {/* Latar Belakang & Masalah */}
          {project.problemStatement && (
            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Latar Belakang & Masalah
              </h2>
              <p className="text-zinc-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </section>
          )}

          {/* Pendekatan & Solusi */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Pendekatan & Solusi
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              {project.description}
            </p>
            {project.solutionApproach && (
              <p className="text-zinc-300 leading-relaxed pt-1">
                {project.solutionApproach}
              </p>
            )}
          </section>

          {/* Sorotan Arsitektur */}
          {project.highlight && (
            <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                Sorotan Arsitektur:
              </div>
              <p className="text-sm text-zinc-200 leading-relaxed">
                {project.highlight}
              </p>
            </div>
          )}

          {/* Peran & Kontribusi Saya */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Peran & Kontribusi Saya
            </h2>
            <p className="text-xs font-mono text-zinc-500">
              Pekerjaan dan keputusan teknis yang saya tangani secara langsung:
            </p>
            <ul className="space-y-2.5 pt-1 text-zinc-300">
              {project.contribution.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-zinc-600 select-none mt-0.5">—</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Teknologi yang Saya Gunakan */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Teknologi yang Digunakan
            </h2>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1 rounded bg-zinc-900 text-zinc-300 border border-zinc-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Galeri Dokumentasi Tambahan (Uncropped) */}
          {hasImages && project.images.length > 1 && (
            <section className="pt-8 border-t border-zinc-800/80 space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Dokumentasi Lapangan
              </h2>
              <p className="text-xs font-mono text-zinc-500">
                Dokumentasi visual terekam dalam proporsi asli.
              </p>

              <div className="space-y-6 pt-2">
                {project.images.map((img, i) => (
                  <div key={i} className="rounded-xl overflow-hidden bg-zinc-900/60 border border-zinc-800/80 p-2 sm:p-4 flex items-center justify-center">
                    <img
                      src={img}
                      alt={`${project.title} ${i + 1}`}
                      className="max-h-[80vh] w-auto h-auto max-w-full object-contain rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Sertifikat & Dokumen Resmi Terpisah */}
          {project.certificates && project.certificates.length > 0 && (
            <section className="pt-8 border-t border-zinc-800/80 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Kredensial & Sertifikat Terkait
                </h2>
              </div>
              <p className="text-xs font-mono text-zinc-500">
                Dokumen validasi dan sertifikat penghargaan resmi atas kontribusi pada proyek ini:
              </p>

              <div className="space-y-6 pt-2">
                {project.certificates.map((cert, cIdx) => (
                  <div
                    key={cIdx}
                    className="rounded-2xl bg-zinc-900/40 border border-zinc-800/80 p-4 sm:p-5 space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono border-b border-zinc-800 pb-2.5">
                      <span className="font-bold text-white text-sm">{cert.title}</span>
                      <span className="text-zinc-500">{cert.number}</span>
                    </div>
                    <div className="text-xs text-zinc-400 font-mono">
                      Penerbit: <span className="text-zinc-300">{cert.issuer}</span>
                    </div>
                    <div className="rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800/80 p-2 sm:p-4 flex items-center justify-center">
                      <img
                        src={cert.src}
                        alt={cert.title}
                        className="max-h-[70vh] w-auto h-auto max-w-full object-contain rounded-lg"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>

        {/* Footer Navigation (Clean Typography) */}
        <div className="mt-16 pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          {prevStoryOrProject(prevProject, onSelectProject)}
          <button
            onClick={onBack}
            type="button"
            className="text-zinc-400 hover:text-white underline underline-offset-4 cursor-pointer"
          >
            Kembali ke Beranda
          </button>
          {nextStoryOrProject(nextProject, onSelectProject)}
        </div>

      </main>
    </article>
  );
}

function prevStoryOrProject(prev, onSelect) {
  if (!prev) return <div />;
  return (
    <button
      onClick={() => onSelect(prev.id)}
      type="button"
      className="text-zinc-400 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1.5"
    >
      <ArrowLeft className="w-3.5 h-3.5" />
      <span>Sebelumnya: {prev.title}</span>
    </button>
  );
}

function nextStoryOrProject(next, onSelect) {
  if (!next) return <div />;
  return (
    <button
      onClick={() => onSelect(next.id)}
      type="button"
      className="text-zinc-400 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1.5"
    >
      <span>Selanjutnya: {next.title}</span>
      <ArrowRight className="w-3.5 h-3.5" />
    </button>
  );
}
