"use client";
import { useState, useEffect } from "react";
import { Icons } from "../../components/Icons";
import { DB } from "../../lib/storage";
import NerveDivider from "../../components/NerveDivider";

export default function ProgressPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = DB.getCurrentUser();
    if (u) setUser(u);
  }, []);

  if (!user) return null;

  const steps = [
    { t: "Create Account", d: "Join the NeuroBridge platform", done: true, Ic: Icons.user },
    { t: "Complete Screening", d: "Take the AI-powered ADHD assessment", done: user.screeningDone, curr: !user.screeningDone, Ic: Icons.brain },
    { t: "View Results", d: "See your spectrum visualization and domain scores", done: user.screeningDone, Ic: Icons.clip },
    { t: "Download Report", d: "Save your detailed report for personal records", done: false, curr: user.screeningDone, Ic: Icons.target },
    { t: "Join Community", d: "Connect with others on Discord", done: false, Ic: Icons.people },
    { t: "Consult Specialist", d: "Get professionally evaluated by a licensed clinician", done: false, Ic: Icons.shield },
  ];

  const completed = steps.filter((s) => s.done).length;

  return (
    <div className="au">
      <div className="dash-header">
        <h1 className="dash-ti">Your Journey</h1>
        <p className="dash-sub">From screening to understanding — {completed}/{steps.length} steps completed</p>
      </div>

      {/* Progress bar */}
      <div className="au ad1" style={{ background: "var(--card)", border: "1px solid var(--bl)", borderRadius: "var(--r3)", padding: 24, marginBottom: 32 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "var(--teal)" }}>{Math.round((completed / steps.length) * 100)}% Complete</span>
          <span style={{ fontSize: 13, color: "var(--tm)" }}>{completed}/{steps.length} steps</span>
        </div>
        <div style={{ height: 8, background: "var(--bg3)", borderRadius: 8, overflow: "hidden" }}>
          <div style={{ height: "100%", width: ((completed / steps.length) * 100) + "%", background: "linear-gradient(90deg, var(--teal), var(--gold))", borderRadius: 8, transition: "width 1s ease" }} />
        </div>
      </div>

      <NerveDivider />

      {/* Steps */}
      <div className="prog-track">
        {steps.map((st, i) => {
          const status = st.done ? "done" : st.curr ? "curr" : "lock";
          return (
            <div key={i} className={`prog-step ${status === "done" ? "done" : ""} au ad${i + 1}`}>
              <div className={`prog-dot ${status}`}>
                {status === "done" ? Icons.chk(18) : st.Ic()}
              </div>
              <div style={{ flex: 1, paddingTop: 2 }}>
                <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 2, color: status === "lock" ? "var(--tm)" : "var(--t1)" }}>
                  {st.t}
                </h4>
                <p style={{ fontSize: 13, color: "var(--t2)", lineHeight: 1.5 }}>{st.d}</p>
                <span className="prog-tag" style={{
                  background: status === "done" ? "rgba(45,253,193,.1)" : status === "curr" ? "rgba(255,107,157,.1)" : "var(--bg3)",
                  color: status === "done" ? "var(--teal)" : status === "curr" ? "var(--rose)" : "var(--tm)",
                }}>
                  {status === "done" ? "Completed" : status === "curr" ? "In Progress" : "Upcoming"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
