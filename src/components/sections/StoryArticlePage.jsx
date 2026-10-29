import React, { useEffect } from "react";
import { ArrowLeft, ArrowRight, Share2, CheckCheck } from "lucide-react";
import { journeyChapters } from "../../data/journeyData";
import { profileData } from "../../data/profileData";
import heroImg from "../../assets/hero.png";

export function StoryArticlePage({ storyId, onBack, onSelectStory }) {
  const [copied, setCopied] = React.useState(false);

  const currentIndex = journeyChapters.findIndex((c) => c.id === storyId);
  const story = journeyChapters[currentIndex] || journeyChapters[0];

  const prevStory = currentIndex > 0 ? journeyChapters[currentIndex - 1] : null;
  const nextStory = currentIndex < journeyChapters.length - 1 ? journeyChapters[currentIndex + 1] : null;

  // Scroll to top when story changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [storyId]);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-zinc-800 selection:text-white pb-24">
      
      {/* Top Editorial Sticky Bar */}
      <nav className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <button
            onClick={onBack}
            type="button"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Kembali ke Portofolio</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-500">
            <span>Rekam Jejak</span>
            <span>/</span>
            <span className="text-zinc-300 truncate max-w-xs">{story.title}</span>
          </div>

          <button
            onClick={handleShare}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 text-xs font-mono transition-colors cursor-pointer"
            title="Salin tautan artikel"
          >
            {copied ? (
              <>
                <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Tersalin</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-zinc-400" />
                <span>Bagikan</span>
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Main Editorial Container */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14">
        
        {/* Editorial Category & Read Time */}
        <div className="text-xs font-mono text-zinc-500 mb-3 space-x-2">
          <span className="text-zinc-300 font-semibold">{story.category}</span>
          <span>·</span>
          <span>{story.period}</span>
          <span>·</span>
          <span>{story.readTime}</span>
        </div>

        {/* Big Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
          {story.title}
        </h1>

        {/* Subtitle / Lead Deck */}
        <p className="text-lg sm:text-xl text-zinc-400 font-medium leading-relaxed mb-8">
          {story.subtitle}
        </p>

        {/* Author Byline Bar (News Style) */}
        <div className="flex items-center justify-between gap-4 py-4 border-y border-zinc-800 mb-8 text-xs font-mono">
          <div className="flex items-center gap-3">
            <img
              src={heroImg}
              alt="M. Irfan"
              className="w-10 h-10 rounded-full object-cover border border-zinc-700"
            />
            <div>
              <div className="font-semibold text-white">{profileData.name}</div>
              <div className="text-zinc-500">{story.stat}</div>
            </div>
          </div>

          <div className="text-zinc-500 font-mono">
            {story.location}
          </div>
        </div>

        {/* Credential / Formal Validation Banner */}
        {story.credential && (
          <div className="mb-10 px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
              <span className="text-zinc-400">Validasi / Luaran:</span>
              <span className="text-zinc-200 font-semibold">{story.credential}</span>
            </div>
            <span className="text-[11px] text-zinc-500">Terverifikasi</span>
          </div>
        )}

        {/* Featured Hero Image (if available) - Uncropped */}
        {story.heroImage && (
          <figure className="mb-10">
            <div className="w-full max-h-[72vh] min-h-[300px] sm:min-h-[420px] rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-xl flex items-center justify-center p-2 sm:p-4">
              <img
                src={story.heroImage}
                alt={story.title}
                className="max-h-[68vh] w-auto h-auto max-w-full object-contain rounded-lg"
              />
            </div>
            {story.heroCaption && (
              <figcaption className="text-xs text-zinc-500 font-mono mt-2.5 px-1 leading-relaxed">
                {story.heroCaption}
              </figcaption>
            )}
          </figure>
        )}

        {/* Lead In Paragraph (Large Editorial Font) */}
        <p className="text-lg sm:text-xl text-zinc-200 leading-relaxed font-normal mb-8 pb-6 border-b border-zinc-800/80">
          {story.lead}
        </p>

        {/* Article Body Content */}
        <div className="space-y-6 text-sm sm:text-base text-zinc-300 leading-[1.8]">
          {story.content.map((block, i) => {
            if (block.type === "paragraph") {
              return <p key={i}>{block.text}</p>;
            }
            if (block.type === "quote") {
              return (
                <blockquote
                  key={i}
                  className="my-8 py-2 pl-5 border-l-2 border-emerald-400 italic text-zinc-100 text-base sm:text-lg font-medium leading-relaxed bg-zinc-900/40 rounded-r-xl pr-4"
                >
                  “{block.text}”
                </blockquote>
              );
            }
            if (block.type === "subheading") {
              return (
                <h2
                  key={i}
                  className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-4 mt-6"
                >
                  {block.text}
                </h2>
              );
            }
            return null;
          })}
        </div>

        {/* Editorial Takeaways Callout Box */}
        <div className="my-10 p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold mb-3">
            Poin Intisari & Pembelajaran:
          </div>
          <ul className="space-y-2.5">
            {story.learnings.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                <span className="text-zinc-600 select-none mt-0.5">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Journalistic Photo Gallery Grid (if multiple images) */}
        {story.gallery && story.gallery.length > 1 && (
          <section className="my-12 pt-8 border-t border-zinc-800">
            <h3 className="text-lg font-bold text-white mb-2">
              Galeri Dokumentasi Lapangan
            </h3>
            <p className="text-xs text-zinc-400 mb-6 font-mono">
              Foto-foto riil yang terekam selama menjalani babak ini.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {story.gallery.map((photo, pIdx) => (
                <figure key={pIdx} className="rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800">
                  <div className="w-full min-h-[220px] max-h-[360px] flex items-center justify-center overflow-hidden bg-zinc-950 p-2">
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      className="max-h-[340px] w-auto h-auto max-w-full object-contain"
                    />
                  </div>
                  <figcaption className="p-3 text-[11px] font-mono text-zinc-400 leading-snug">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Sertifikat & Dokumen Resmi Terpisah */}
        {story.certificates && story.certificates.length > 0 && (
          <section className="my-12 pt-8 border-t border-zinc-800 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Sertifikat & Dokumen Resmi Terkait
              </h3>
            </div>
            <p className="text-xs text-zinc-400 font-mono">
              Dokumen validasi resmi yang diperoleh selama menjalani babak ini:
            </p>

            <div className="space-y-6 pt-2">
              {story.certificates.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="rounded-2xl bg-zinc-900/60 border border-zinc-800 p-4 sm:p-5 space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono border-b border-zinc-800 pb-2.5">
                    <span className="font-bold text-white text-sm">{cert.title}</span>
                    <span className="text-zinc-500">{cert.number}</span>
                  </div>
                  <div className="text-xs text-zinc-400 font-mono">
                    Penerbit: <span className="text-zinc-300">{cert.issuer}</span>
                  </div>
                  <div className="rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 p-2 sm:p-4 flex items-center justify-center">
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

        {/* Author Bio Card at End of Article */}
        <div className="mt-14 pt-8 border-t border-zinc-800 flex items-start gap-4 p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80">
          <img
            src={heroImg}
            alt="M. Irfan"
            className="w-14 h-14 rounded-xl object-cover border border-zinc-700 shrink-0"
          />
          <div className="space-y-1">
            <div className="text-sm font-bold text-white">{profileData.name}</div>
            <div className="text-xs text-zinc-400 font-mono">{profileData.role} · {profileData.location}</div>
            <p className="text-xs text-zinc-300 leading-relaxed pt-1">
              {profileData.tagline}
            </p>
          </div>
        </div>

        {/* Next / Previous Story Navigation Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevStory ? (
            <button
              onClick={() => onSelectStory(prevStory.id)}
              type="button"
              className="p-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-left transition-all cursor-pointer group"
            >
              <div className="text-[11px] font-mono text-zinc-500 uppercase flex items-center gap-1 mb-1">
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                <span>Babak Sebelumnya</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-zinc-200 group-hover:text-white line-clamp-1">
                {prevStory.title}
              </div>
            </button>
          ) : <div />}

          {nextStory ? (
            <button
              onClick={() => onSelectStory(nextStory.id)}
              type="button"
              className="p-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-right transition-all cursor-pointer group sm:col-start-2"
            >
              <div className="text-[11px] font-mono text-zinc-500 uppercase flex items-center justify-end gap-1 mb-1">
                <span>Babak Selanjutnya</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-xs sm:text-sm font-semibold text-zinc-200 group-hover:text-white line-clamp-1">
                {nextStory.title}
              </div>
            </button>
          ) : <div />}
        </div>

        {/* Back to top button */}
        <div className="mt-12 text-center">
          <button
            onClick={onBack}
            type="button"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs font-mono transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Halaman Portofolio</span>
          </button>
        </div>

      </main>
    </article>
  );
}

