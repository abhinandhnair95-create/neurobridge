"use client";
import Link from "next/link";
import styles from "./lib/styles";
import { Icons } from "./components/Icons";
import NeuralBackground from "./components/NeuralBackground";
import NerveDivider from "./components/NerveDivider";
import { DISCORD_LINK } from "./lib/constants";

export default function LandingPage() {
  return (
    <div style={{ fontFamily: "var(--ff)", background: "var(--bg)", color: "var(--t1)", minHeight: "100vh" }}>
      <style>{styles}</style>
      <div className="nb-bg" />
      <NeuralBackground opacity={0.6} />

      {/* NAV */}
      <nav className="nav">
        <div className="nav-in">
          <div className="logo">
            <div className="logo-i">N</div>
            <span className="logo-t">Neuro<span className="lo-hi">Bridge</span></span>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <Link href="/auth" className="btn b1" style={{ padding: "8px 20px", fontSize: 13, textDecoration: "none" }}>
              Take Free ADHD Test
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <div className="au">
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                Free, private, 5-minute screening
              </div>
            </div>
            <h1 className="au ad1">Think You<br />Might Have <span className="hl">ADHD</span>?</h1>
            <p className="hero-sub au ad2">
              Take a free AI-powered screening grounded in clinical research. Understand your mind in 5 minutes. No judgment, just clarity.
            </p>
            <div className="hero-ctas au ad3">
              <Link href="/auth" className="btn b1 bL" style={{ textDecoration: "none" }}>
                Start Free Screening {Icons.arr()}
              </Link>
              <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" className="btn b-disc bL" style={{ textDecoration: "none" }}>
                {Icons.disc(18)} Join Community
              </a>
            </div>
            <div className="hero-trust au ad4">
              <span>{Icons.shield(14)} Private & encrypted</span>
              <span>{Icons.brain(14)} DSM-5 based</span>
              <span>{Icons.zap(14)} 5 min avg</span>
            </div>
          </div>
          <div className="hero-brain au ad3">
            {/* Placeholder for brain visual — will be canvas-based */}
            <div style={{ width: 400, height: 400, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.15 }}>
              {Icons.brain(200)}
            </div>
          </div>
        </div>
      </section>

      <NerveDivider />

      {/* HOW IT WORKS */}
      <section style={{ position: "relative", padding: "80px 32px", overflow: "hidden" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div className="sec-tag">How It Works</div>
          <h2 className="sec-h">Three steps to <span style={{ color: "var(--teal)" }}>clarity</span></h2>
          <p className="sec-p">A clear, supportive path from curiosity to understanding your mind.</p>
          <div className="how-grid">
            {[
              [Icons.brain, "rgba(45,253,193,.1)", "var(--teal)", "01 — SCREEN", "Take the Screening", "Have a natural conversation with our AI. It adapts to your responses and probes deeper when it detects patterns."],
              [Icons.clip, "rgba(255,107,157,.1)", "var(--rose)", "02 — DISCOVER", "Get Your Results", "See your alignment across ADHD domains with a visual spectrum chart and detailed clinical analysis."],
              [Icons.people, "rgba(255,217,61,.1)", "var(--gold)", "03 — CONNECT", "Join the Community", "Connect with thousands of neurodivergent people on Discord. Support, strategies, and belonging."],
            ].map(([Ic, bg, c, n, t, d], i) => (
              <div key={i} className={`how-card au ad${i + 1}`}>
                <div className="how-num" style={{ color: c }}>{n}</div>
                <div className="how-ic" style={{ background: bg, color: c }}>{Ic()}</div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NerveDivider />

      {/* STATS */}
      <section style={{ padding: "60px 32px", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
          {[["50,000+", "Screenings taken"], ["4.8/5", "User satisfaction"], ["200+", "Verified specialists"], ["5 min", "Average time"]].map(([v, l], i) => (
            <div key={i} className={`au ad${i + 1}`} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: -1, background: "linear-gradient(135deg, var(--teal), var(--gold))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{v}</div>
              <div style={{ fontSize: 13, color: "var(--tm)", marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      <NerveDivider />

      {/* PRICING */}
      <section style={{ padding: "80px 32px", textAlign: "center", position: "relative" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div className="sec-tag">100% Free</div>
          <h2 className="sec-h">Everything is <span style={{ color: "var(--gold)" }}>free</span> during testing</h2>
          <p className="sec-p" style={{ margin: "0 auto", textAlign: "center" }}>
            Full screening, detailed report with spectrum visualization, AI chatbot — all free while we are in testing.
          </p>
          <div style={{ maxWidth: 480, margin: "32px auto 0", background: "var(--card)", border: "1px solid var(--bl2)", borderRadius: "var(--r4)", padding: 40, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, var(--teal), var(--rose), var(--gold))" }} />
            <div style={{ fontSize: 40, fontWeight: 800, background: "linear-gradient(135deg, var(--teal), var(--gold))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 4 }}>Free</div>
            <div style={{ fontSize: 14, color: "var(--tm)", marginBottom: 28 }}>During testing phase</div>
            <div style={{ textAlign: "left", marginBottom: 28 }}>
              {[
                ["Full spectrum visualization & domain scores", "var(--teal)"],
                ["Detailed clinical analysis report", "var(--rose)"],
                ["AI chatbot to discuss your results", "var(--gold)"],
                ["Discord community access", "var(--blue)"],
                ["Specialist recommendations", "var(--purple)"],
              ].map(([f, c], i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "12px 0", borderBottom: i < 4 ? "1px solid rgba(255,255,255,.04)" : "none", fontSize: 14, color: "var(--t2)", lineHeight: 1.5 }}>
                  <span style={{ color: c, flexShrink: 0, marginTop: 2 }}>{Icons.chk(14)}</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <Link href="/auth" className="btn b1 bL" style={{ width: "100%", textDecoration: "none" }}>
              Start Free Screening
            </Link>
          </div>
        </div>
      </section>

      <NerveDivider />

      <footer className="footer">
        {"©"} 2026 NeuroBridge. Built with empathy, backed by science.
      </footer>
    </div>
  );
}
