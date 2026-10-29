import React from "react";

export function BrandLogo({ className = "w-6 h-6", glow = true }) {
  return (
    <svg
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Muhammad Irfan Monogram Logo"
    >
      <defs>
        <linearGradient id="navBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#09090b" />
          <stop offset="100%" stopColor="#18181b" />
        </linearGradient>

        <linearGradient id="navBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="50%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>

        <linearGradient id="navLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>

        {glow && (
          <filter id="navGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
      </defs>

      {/* Rounded Squircle Container */}
      <rect
        x="6"
        y="6"
        width="116"
        height="116"
        rx="28"
        fill="url(#navBgGrad)"
        stroke="url(#navBorderGrad)"
        strokeWidth="2.5"
      />

      {/* Monogram M & I Geometry */}
      <g filter={glow ? "url(#navGlow)" : undefined}>
        {/* Left Leg of M */}
        <path
          d="M30 92 V40 L50 64"
          stroke="url(#navLogoGrad)"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Right Leg of M */}
        <path
          d="M98 92 V40 L78 64"
          stroke="url(#navLogoGrad)"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Center I Core Stem */}
        <path
          d="M64 56 V92"
          stroke="#10b981"
          strokeWidth="9"
          strokeLinecap="round"
        />

        {/* Radar Node at top of I */}
        <circle cx="64" cy="34" r="5.5" fill="#22d3ee" />
        <circle cx="64" cy="34" r="9" stroke="#38bdf8" strokeWidth="1.5" opacity="0.5" />
      </g>
    </svg>
  );
}

