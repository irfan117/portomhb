import React from "react";

export function SectionHeader({
  title,
  subtitle,
  className = ""
}) {
  return (
    <div className={`mb-6 sm:mb-8 ${className}`}>
      {title && (
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
