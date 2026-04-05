"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Icons } from "../components/Icons";
import { DB } from "../lib/storage";
import { DISCORD_LINK } from "../lib/constants";
import NerveDivider from "../components/NerveDivider";

export default function DashboardHome() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = DB.getCurrentUser();
    if (u) setUser(u);
  }, []);

  if (!user) return null;

  const firstName = user.fullName ? user.fullName.split(" ")[0] : "there";

  return (
    <div className="au">
      <div className="dash-header">
        <h1 className="dash-ti">Welcome, {firstName}</h1>
        <p className="dash-sub">Your neural journey at a glance.</p>
      </div>

      <div className="stat-grid">
        {[
          [Icons.brain, "rgba(45,253,193,.1)", "var(--teal)", user.screeningDone ? "Done" : "Pending", "Screening"],
          [Icons.clip, "rgba(255,107,157,.1)", "var(--rose)", String((user.reports || []).length), "Reports"],
          [Icons.shield, "rgba(255,217,61,.1)", "var(--gold)", "Free", "Plan"],
          [Icons.zap, "rgba(107,138,255,.1)", "var(--blue)", "Full", "Access"],
        ].map(([Ic, bg, c, v, l], i) => (
          <div key={i} className={`scard au ad${i + 1}`}>
            <div className="scard-ic" style={{ background: bg, color: c }}>{Ic()}</div>
            <div className="scard-v" style={{ color: c }}>{v}</div>
            <div className="scard-l">{l}</div>
          </div>
        ))}
      </div>

      <NerveDivider />

      <div className="d-card" style={{ marginTop: 20, marginBottom: 20 }}>
        <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, textAlign: "center" }}>Quick Actions</h3>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/dashboard/screening" className="btn b1" style={{ textDecoration: "none" }}>
            {Icons.brain(16)} {user.screeningDone ? "Retake" : "Start"} Screening
          </Link>
          {user.screeningDone && (
            <Link href="/dashboard/reports" className="btn b2" style={{ textDecoration: "none" }}>
              {Icons.clip(16)} View Report
            </Link>
          )}
          <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" className="btn b-disc" style={{ textDecoration: "none" }}>
            {Icons.disc(16)} Discord
          </a>
        </div>
      </div>

      <NerveDivider />

      <div className="disc-cta au ad4" style={{ marginTop: 20 }}>
        <h3>Join the NeuroBridge Community</h3>
        <p>Thousands of neurodivergent individuals sharing, supporting, thriving.</p>
        <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" className="btn b-disc bL" style={{ textDecoration: "none" }}>
          {Icons.disc(18)} Open Discord
        </a>
      </div>
    </div>
  );
}
