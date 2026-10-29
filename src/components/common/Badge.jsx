import React from "react";

export function Badge({ 
  children, 
  variant = "default", 
  size = "md",
  className = "" 
}) {
  const base = "inline-flex items-center gap-1.5 font-mono font-medium rounded-md transition-colors";
  
  const sizes = {
    sm: "text-[11px] px-2 py-0.5",
    md: "text-xs px-2.5 py-1",
    lg: "text-sm px-3 py-1.5"
  };

  const variants = {
    default: "bg-zinc-900 text-zinc-300 border border-zinc-800",
    neutral: "bg-zinc-800/80 text-zinc-200 border border-zinc-700/60",
    emerald: "bg-emerald-950/40 text-emerald-300 border border-emerald-800/50",
    sky: "bg-sky-950/40 text-sky-300 border border-sky-800/50",
    amber: "bg-amber-950/40 text-amber-300 border border-amber-800/50"
  };

  return (
    <span className={`${base} ${sizes[size]} ${variants[variant] || variants.default} ${className}`}>
      {children}
    </span>
  );
}
