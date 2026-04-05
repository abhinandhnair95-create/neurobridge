"use client";
// Animated nerve fiber divider between sections

export default function NerveDivider() {
  return (
    <div className="nerve-div">
      <svg width="100%" height="60" preserveAspectRatio="none" viewBox="0 0 1200 60">
        <path d="M0 30 C100 15 200 45 300 28 C400 10 500 48 600 30 C700 12 800 45 900 28 C1000 10 1100 42 1200 30" stroke="#2DFDC1" strokeWidth="1" fill="none" opacity="0.15">
          <animate attributeName="d" values="M0 30 C100 15 200 45 300 28 C400 10 500 48 600 30 C700 12 800 45 900 28 C1000 10 1100 42 1200 30;M0 30 C100 42 200 18 300 35 C400 50 500 15 600 30 C700 48 800 18 900 38 C1000 50 1100 22 1200 30;M0 30 C100 15 200 45 300 28 C400 10 500 48 600 30 C700 12 800 45 900 28 C1000 10 1100 42 1200 30" dur="8s" repeatCount="indefinite" />
        </path>
        <path d="M0 32 C150 18 300 48 450 30 C600 12 750 44 900 32 C1050 20 1150 40 1200 28" stroke="#FF6B9D" strokeWidth="0.8" fill="none" opacity="0.08">
          <animate attributeName="d" values="M0 32 C150 18 300 48 450 30 C600 12 750 44 900 32 C1050 20 1150 40 1200 28;M0 28 C150 44 300 16 450 32 C600 48 750 18 900 30 C1050 42 1150 22 1200 34;M0 32 C150 18 300 48 450 30 C600 12 750 44 900 32 C1050 20 1150 40 1200 28" dur="10s" repeatCount="indefinite" />
        </path>
        <circle r="3" fill="#2DFDC1" opacity="0.6">
          <animateMotion dur="4s" repeatCount="indefinite" path="M0 30 C100 15 200 45 300 28 C400 10 500 48 600 30 C700 12 800 45 900 28 C1000 10 1100 42 1200 30" />
          <animate attributeName="opacity" values="0;0.7;0" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle r="2" fill="#FFD93D" opacity="0.4">
          <animateMotion dur="5s" repeatCount="indefinite" begin="2s" path="M1200 30 C1100 42 1000 10 900 28 C800 45 700 12 600 30 C500 48 400 10 300 28 C200 45 100 15 0 30" />
          <animate attributeName="opacity" values="0;0.5;0" dur="5s" repeatCount="indefinite" begin="2s" />
        </circle>
      </svg>
    </div>
  );
}
