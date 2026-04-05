"use client";
// Radar/Spider chart for ADHD domain spectrum visualization

export default function SpectrumChart({ domains, size = 280 }) {
  const cx = size / 2;
  const cy = size / 2;
  const maxR = size / 2 - 30;
  const n = domains.length;

  const getPoint = (index, value) => {
    const angle = (Math.PI * 2 * index) / n - Math.PI / 2;
    const r = (value / 100) * maxR;
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    };
  };

  const gridLevels = [25, 50, 75, 100];

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ filter: "drop-shadow(0 0 16px rgba(45,253,193,.1))" }}
    >
      <defs>
        <linearGradient id="radarStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2DFDC1" />
          <stop offset="50%" stopColor="#FF6B9D" />
          <stop offset="100%" stopColor="#FFD93D" />
        </linearGradient>
      </defs>

      {/* Grid rings */}
      {gridLevels.map((level) => {
        const points = Array.from({ length: n }, (_, i) => getPoint(i, level));
        const path =
          points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ") + "Z";
        return (
          <path key={level} d={path} fill="none" stroke="rgba(45,253,193,.08)" strokeWidth="1" />
        );
      })}

      {/* Axis lines */}
      {domains.map((_, i) => {
        const p = getPoint(i, 100);
        return (
          <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="rgba(45,253,193,.06)" strokeWidth="1" />
        );
      })}

      {/* Data polygon */}
      {(() => {
        const points = domains.map((d, i) => getPoint(i, d.score));
        const path =
          points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ") + "Z";
        return (
          <>
            <path d={path} fill="rgba(45,253,193,.08)" stroke="rgba(45,253,193,.4)" strokeWidth="2" style={{ animation: "radarDraw 1.2s ease .5s both" }} />
            <path d={path} fill="none" stroke="url(#radarStroke)" strokeWidth="2" style={{ animation: "radarDraw 1.2s ease .5s both" }} />
          </>
        );
      })()}

      {/* Data points */}
      {domains.map((d, i) => {
        const p = getPoint(i, d.score);
        const delay = 0.6 + i * 0.1;
        return (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="6" fill={d.color} opacity="0.2" style={{ animation: `radarDraw 0.8s ease ${delay}s both` }} />
            <circle cx={p.x} cy={p.y} r="3.5" fill={d.color} style={{ animation: `radarDraw 0.8s ease ${delay}s both` }} />
          </g>
        );
      })}

      {/* Labels */}
      {domains.map((d, i) => {
        const p = getPoint(i, 118);
        const label = d.name.length > 12 ? d.name.slice(0, 11) + "." : d.name;
        return (
          <text key={i} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" fill="#B8B8D8" fontSize="10" fontFamily="'Sora', sans-serif" fontWeight="600">
            {label}
          </text>
        );
      })}
    </svg>
  );
}

// Circular score ring for individual domains
export function ScoreRing({ score, color, size = 64 }) {
  const r = (size - 8) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;

  return (
    <div style={{ width: size, height: size, position: "relative", flexShrink: 0 }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,.04)" strokeWidth="4" />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset} style={{ transition: "stroke-dashoffset 1.5s ease" }} />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--fm)", fontSize: 16, fontWeight: 700, color }}>
        {score}
      </div>
    </div>
  );
}
