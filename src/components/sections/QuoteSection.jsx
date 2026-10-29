import React from "react";

export function QuoteSection() {
  return (
    <section 
      className="relative py-32 sm:py-44 bg-fixed bg-center bg-cover bg-no-repeat flex items-center justify-center border-y border-zinc-800"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2400&q=85')`
      }}
    >
      {/* Light semi-transparent overlay so the background remains clearly visible */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Quote Container */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
        <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-snug drop-shadow-md">
          “We can only see a short distance ahead, but we can see plenty there that needs to be done.”
        </blockquote>

        <p className="mt-4 text-base sm:text-lg font-mono text-zinc-200 tracking-wide drop-shadow">
          — Alan Turing
        </p>
      </div>
    </section>
  );
}
