"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Icons } from "../../components/Icons";
import { DB } from "../../lib/storage";
import { MOCK_REPORT } from "../../lib/constants";
import SpectrumChart, { ScoreRing } from "../../components/SpectrumChart";
import NerveDivider from "../../components/NerveDivider";
import NeuralBackground from "../../components/NeuralBackground";

function parseDomains(text) {
  const domains = [];
  const lines = text.split("\n");
  let inD = false;
  for (const l of lines) {
    if (l.includes("Domain Scores")) { inD = true; continue; }
    if (l.startsWith("## ") && inD) break;
    if (inD && l.startsWith("- ")) {
      const m = l.match(/^- (.+?):\s*(\d+)\/100\s*(Low|Moderate|Notable|Low-Moderate)\s*(?:alignment)?\s*[-—]\s*(.+)/i);
      if (m) {
        const level = m[3].trim();
        const color = level === "Notable" ? "#FF6B9D" : level === "Moderate" ? "#FFD93D" : "#2DFDC1";
        domains.push({ name: m[1].trim(), score: parseInt(m[2]), level, color, desc: m[4].trim(), detail: "" });
      }
    }
  }
  return domains;
}

function parseSection(text, heading) {
  const lines = text.split("\n");
  let capture = false;
  const result = [];
  for (const l of lines) {
    if (l.includes("## " + heading)) { capture = true; continue; }
    if (l.startsWith("## ") && capture) break;
    if (capture && l.trim()) result.push(l.trim());
  }
  return result;
}

export default function ReportsPage() {
  const [user, setUser] = useState(null);
  const [expanded, setExpanded] = useState({});
  const [useMock, setUseMock] = useState(false);

  useEffect(() => {
    const u = DB.getCurrentUser();
    if (u) setUser(u);
  }, []);

  if (!user) return null;

  const hasReport = Boolean(user.reportContent);
  const domains = hasReport ? parseDomains(user.reportContent) : [];
  const displayDomains = (hasReport && domains.length > 0) ? domains : MOCK_REPORT.domains;
  const showMock = !hasReport || useMock || domains.length === 0;

  const patterns = hasReport && !showMock ? parseSection(user.reportContent, "Key Patterns") : MOCK_REPORT.patterns;
  const recommendations = hasReport && !showMock ? parseSection(user.reportContent, "Recommendations") : MOCK_REPORT.recommendations;

  const overall = showMock ? MOCK_REPORT.overall : (
    displayDomains.filter((d) => d.level === "Notable" || d.level === "Moderate").length >= 3
      ? "Moderate-to-Notable" : "Moderate"
  );

  const toggle = (i) => setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));

  // Empty state
  if (!hasReport && !useMock) {
    return (
      <div className="au">
        <div className="dash-header">
          <h1 className="dash-ti">My Reports</h1>
          <p className="dash-sub">Screening results and spectrum visualization</p>
        </div>
        <div className="d-card" style={{ textAlign: "center", padding: 48 }}>
          <div style={{ color: "var(--tm)", marginBottom: 12 }}>{Icons.clip(40)}</div>
          <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>No reports yet</h3>
          <p style={{ fontSize: 14, color: "var(--t2)", maxWidth: 360, margin: "0 auto 20px" }}>
            Take the AI screening to get your first report with spectrum visualization.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/dashboard/screening" className="btn b1" style={{ textDecoration: "none" }}>
              Start Screening
            </Link>
            <button className="btn b2" onClick={() => setUseMock(true)}>
              View Sample Report
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Full report — matching approved design
  return (
    <div style={{ position: "relative" }}>
      <NeuralBackground opacity={0.4} />
      <div className="report-page">

        {/* HEADER */}
        <div className="rp-hdr au">
          <div className="rp-hdr-tag">Screening Complete</div>
          <h1>Your ADHD <span>Screening Report</span></h1>
          <p>{showMock ? "Sample report with mock data" : `Prepared for ${user.fullName} on ${new Date().toLocaleDateString()}`}</p>
        </div>

        {/* OVERALL ALIGNMENT */}
        <div className="overall-card au ad1">
          <div className="overall-level">{overall} Alignment</div>
          <div className="overall-desc">
            {showMock ? MOCK_REPORT.overallDesc : "Your responses indicate patterns across multiple domains. See the detailed breakdown below."}
          </div>
        </div>

        <NerveDivider />

        {/* RADAR CHART */}
        <div className="radar-section au ad2">
          <div className="sec-title" style={{ color: "var(--teal)" }}>
            {Icons.target(22)} Spectrum Visualization
          </div>
          <div className="radar-wrap">
            <SpectrumChart domains={displayDomains} size={280} />
            <div className="radar-legend">
              {displayDomains.map((d, i) => (
                <div key={i} className="radar-legend-item" onClick={() => toggle(i)}>
                  <div className="radar-dot" style={{ background: d.color, boxShadow: `0 0 8px ${d.color}40` }} />
                  <span className="radar-legend-name">{d.name}</span>
                  <span className="radar-legend-score" style={{ color: d.color }}>{d.score}/100</span>
                  <span style={{ color: "var(--tm)", transform: expanded[i] ? "rotate(90deg)" : "none", transition: "var(--ts)" }}>
                    {Icons.chevron(14)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <NerveDivider />

        {/* DOMAIN ANALYSIS */}
        <div className="domains-section au ad3">
          <div className="sec-title">{Icons.brain(22)} Domain Analysis</div>
          <div className="domain-cards">
            {displayDomains.map((d, i) => {
              const bgAlpha = d.level === "Notable" ? "rgba(255,107,157,.06)" : d.level === "Moderate" ? "rgba(255,217,61,.06)" : "rgba(45,253,193,.06)";
              return (
                <div key={i} className={`dom-card au ad${Math.min(i + 1, 6)}`} onClick={() => toggle(i)}>
                  <div className="dom-card-top">
                    <ScoreRing score={d.score} color={d.color} />
                    <div className="dom-info">
                      <div className="dom-info-top">
                        <span className="dom-name">{d.name}</span>
                        <span className="dom-badge" style={{ background: bgAlpha, color: d.color }}>{d.level}</span>
                      </div>
                      <div className="dom-desc">{d.desc}</div>
                    </div>
                  </div>
                  <div className="dom-bar-wrap">
                    <div className="dom-bar">
                      <div className="dom-bar-fill" style={{ width: d.score + "%", background: `linear-gradient(90deg, ${d.color}40, ${d.color})` }} />
                    </div>
                  </div>
                  {expanded[i] && d.detail && (
                    <div className="dom-expand" style={{ animation: "fadeUp .3s ease" }}>
                      <p>{d.detail}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <NerveDivider />

        {/* KEY PATTERNS */}
        <div className="patterns-section au ad4">
          <div className="sec-title" style={{ color: "var(--gold)" }}>{Icons.zap(22)} Key Patterns Identified</div>
          <div className="pattern-list">
            {patterns.map((p, i) => {
              const text = typeof p === "string" ? p.replace(/^[-•]\s*/, "") : p;
              return (
                <div key={i} className={`pattern-item au ad${Math.min(i + 1, 5)}`}>
                  <div className="pattern-num">{String(i + 1).padStart(2, "0")}</div>
                  <div className="pattern-text">{text}</div>
                </div>
              );
            })}
          </div>
        </div>

        <NerveDivider />

        {/* FLAGS */}
        {showMock && (
          <div className="flags-section au ad5">
            <div className="sec-title" style={{ color: "var(--rose)" }}>{Icons.flag(22)} Additional Concerns Flagged</div>
            {MOCK_REPORT.flags.map((f, i) => (
              <div key={i} className="flag-card">
                <div className="flag-icon">{Icons.warn(18)}</div>
                <div>
                  <div className="flag-label">{f.label}</div>
                  <div className="flag-desc">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {showMock && <NerveDivider />}

        {/* RECOMMENDATIONS */}
        <div className="recs-section au ad6">
          <div className="sec-title" style={{ color: "var(--teal)" }}>{Icons.chk(22)} Recommendations</div>
          {(showMock ? MOCK_REPORT.recommendations : recommendations).map((r, i) => {
            const text = typeof r === "string" ? r.replace(/^[-•\d.)\s]+/, "") : r;
            return (
              <div key={i} className="rec-item">
                <div className="rec-check">{Icons.chk(14)}</div>
                <div className="rec-text">{text}</div>
              </div>
            );
          })}
        </div>

        <NerveDivider />

        {/* DISCLAIMER */}
        <div className="disclaimer au ad7">
          <div className="disclaimer-icon">{Icons.warn(20)}</div>
          <div>
            <p>
              <strong>Important Disclaimer:</strong> This report does NOT constitute a medical diagnosis. It is designed to help you understand patterns in your responses and prepare for professional clinical assessment. Only a licensed psychologist or psychiatrist can diagnose ADHD. Please share this report with a qualified professional for proper evaluation.
            </p>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="actions au ad8">
          <button className="btn b1" onClick={() => {
            const content = hasReport ? user.reportContent : "SAMPLE REPORT\n\n" + MOCK_REPORT.overallDesc + "\n\n" + displayDomains.map((d) => d.name + ": " + d.score + "/100 (" + d.level + ")\n" + d.desc).join("\n\n");
            const el = document.createElement("a");
            el.href = "data:text/plain;charset=utf-8," + encodeURIComponent("NEUROBRIDGE ADHD SCREENING REPORT\n\n" + content);
            el.download = "NeuroBridge_Report.txt";
            el.click();
          }}>
            {Icons.dl()} Download Report
          </button>
          <Link href="/dashboard/screening" className="btn b2" style={{ textDecoration: "none" }}>
            {Icons.chat()} {hasReport ? "Retake Screening" : "Start Screening"}
          </Link>
          <button className="btn b-disc">{Icons.disc()} Join Community</button>
        </div>
      </div>
    </div>
  );
}
