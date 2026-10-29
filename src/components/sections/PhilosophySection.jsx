import React from "react";
import { engineeringPrinciples } from "../../data/skillsData";
import { SectionHeader } from "../common/SectionHeader";

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-20 border-b border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader title="Prinsip" />

        {/* 3 Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {engineeringPrinciples.map((principle) => (
            <div
              key={principle.title}
              className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-bold text-base text-zinc-100 mb-2">
                  {principle.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet Motto Banner */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
              Prinsip Personal
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white mt-1">
              “Still learning. Still building.”
            </div>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed">
            Terus belajar, bereksperimen, membangun, dan memperbaiki pemahaman melalui implementasi dan pengalaman nyata di lapangan.
          </p>
        </div>

      </div>
    </section>
  );
}
