import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyPill({ textToCopy, label = "Email", className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Gagal menyalin:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      className={`group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 text-xs font-mono transition-all duration-150 cursor-pointer active:scale-95 ${className}`}
      title={`Salin ${textToCopy}`}
    >
      <span className="text-zinc-500 group-hover:text-zinc-400 transition-colors">
        {label}:
      </span>
      <span className="font-medium text-zinc-200">{textToCopy}</span>
      {copied ? (
        <span className="inline-flex items-center gap-1 text-emerald-400 text-xs font-sans">
          <Check className="w-3.5 h-3.5" />
          <span>Tersalin</span>
        </span>
      ) : (
        <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
      )}
    </button>
  );
}
