"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "../lib/styles";
import { Icons } from "../components/Icons";
import { DB } from "../lib/storage";
import NeuralBackground from "../components/NeuralBackground";

export default function AuthPage() {
  const router = useRouter();
  const [step, setStep] = useState(0); // 0=signup, 1=about, 2=location, 3=goal
  const [form, setForm] = useState({
    email: "", fullName: "", age: "", gender: "",
    city: "", occupation: "", education: "", reason: "",
  });
  const [errors, setErrors] = useState({});

  const up = (k, v) => {
    setForm((prev) => ({ ...prev, [k]: v }));
    setErrors((prev) => ({ ...prev, [k]: "" }));
  };

  const validate = () => {
    const e = {};
    if (step === 0) {
      if (!form.fullName.trim()) e.fullName = "Required";
      if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    } else if (step === 1) {
      if (!form.age || Number(form.age) < 10 || Number(form.age) > 100) e.age = "10-100";
      if (!form.gender) e.gender = "Required";
    } else if (step === 2) {
      if (!form.city.trim()) e.city = "Required";
    } else if (step === 3) {
      if (!form.reason) e.reason = "Required";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (!validate()) return;
    if (step < 3) {
      setStep(step + 1);
      return;
    }
    // Create user
    const id = "NB-" + Date.now().toString(36).toUpperCase();
    const user = {
      id,
      ...form,
      age: Number(form.age),
      registeredAt: new Date().toISOString(),
      screeningDone: false,
      reportContent: "",
      reports: [],
    };
    DB.saveUser(user);
    router.push("/dashboard");
  };

  const titles = ["Create Your Account", "About You", "Where Are You From?", "What Brings You Here?"];
  const subtitles = [
    "Enter your name and email to get started. Everything is free.",
    "Help us personalize your experience.",
    "Connect you with local resources and specialists.",
    "Tailor your screening journey.",
  ];

  return (
    <div style={{ fontFamily: "var(--ff)", background: "var(--bg)", color: "var(--t1)", minHeight: "100vh" }}>
      <style>{styles}</style>
      <div className="nb-bg" />
      <NeuralBackground opacity={0.3} />

      <div className="auth-wrap">
        <div className="auth-card">
          <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", marginBottom: 32 }}>
            <div className="logo-i" style={{ width: 40, height: 40, fontSize: 20 }}>N</div>
            <span style={{ fontSize: 22, fontWeight: 700 }}>
              Neuro<span style={{ color: "var(--teal)" }}>Bridge</span>
            </span>
          </div>

          {step > 0 && (
            <div className="onb-prog" style={{ marginBottom: 24 }}>
              {[1, 2, 3].map((i) => (
                <div key={i} className={`onb-dot ${i < step ? "done" : i === step ? "now" : ""}`} />
              ))}
            </div>
          )}

          <h2 className="auth-ti">{titles[step]}</h2>
          <p className="auth-sub">{subtitles[step]}</p>

          {/* Step 0: Name + Email */}
          {step === 0 && (
            <div className="au">
              <div className="fg">
                <label className="fl">Full Name</label>
                <div className="fiw">
                  <span className="fiic">{Icons.user(18)}</span>
                  <input className="fi" placeholder="Your full name" value={form.fullName} onChange={(e) => up("fullName", e.target.value)} />
                </div>
                {errors.fullName && <div className="ferr">{errors.fullName}</div>}
              </div>
              <div className="fg">
                <label className="fl">Email Address</label>
                <div className="fiw">
                  <span className="fiic">{Icons.mail(18)}</span>
                  <input className="fi" type="email" placeholder="you@example.com" value={form.email} onChange={(e) => up("email", e.target.value)} onKeyDown={(e) => e.key === "Enter" && next()} />
                </div>
                {errors.email && <div className="ferr">{errors.email}</div>}
              </div>
            </div>
          )}

          {/* Step 1: Age + Gender */}
          {step === 1 && (
            <div className="au">
              <div className="frow">
                <div className="fg">
                  <label className="fl">Age</label>
                  <input className="fi pl" type="number" placeholder="25" value={form.age} onChange={(e) => up("age", e.target.value)} />
                  {errors.age && <div className="ferr">{errors.age}</div>}
                </div>
                <div className="fg">
                  <label className="fl">Gender</label>
                  <select className="fsel" value={form.gender} onChange={(e) => up("gender", e.target.value)}>
                    <option value="">Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Non-binary</option>
                    <option>Prefer not to say</option>
                  </select>
                  {errors.gender && <div className="ferr">{errors.gender}</div>}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: City + Occupation */}
          {step === 2 && (
            <div className="au">
              <div className="frow">
                <div className="fg">
                  <label className="fl">City</label>
                  <input className="fi pl" placeholder="Mumbai" value={form.city} onChange={(e) => up("city", e.target.value)} />
                  {errors.city && <div className="ferr">{errors.city}</div>}
                </div>
                <div className="fg">
                  <label className="fl">Occupation</label>
                  <input className="fi pl" placeholder="Engineer, Student..." value={form.occupation} onChange={(e) => up("occupation", e.target.value)} />
                </div>
              </div>
              <div className="fg">
                <label className="fl">Education</label>
                <select className="fsel" value={form.education} onChange={(e) => up("education", e.target.value)}>
                  <option value="">Select (optional)</option>
                  <option>High School</option>
                  <option>Undergraduate</option>
                  <option>Graduate</option>
                  <option>Postgraduate</option>
                  <option>PhD</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 3: Reason */}
          {step === 3 && (
            <div className="au">
              <div className="fg">
                <label className="fl">What brings you here?</label>
                {[
                  ["Self-discovery", "I want to understand my brain better"],
                  ["Seeking diagnosis", "I think I might have ADHD"],
                  ["Already diagnosed", "Looking for community & support"],
                  ["Supporting someone", "A loved one may be neurodivergent"],
                ].map(([v, d]) => (
                  <label key={v} style={{
                    display: "flex", alignItems: "flex-start", gap: 10, padding: "12px 14px", marginBottom: 8,
                    background: form.reason === v ? "rgba(45,253,193,.06)" : "var(--bg3)",
                    border: `1px solid ${form.reason === v ? "var(--teal)" : "var(--bl2)"}`,
                    borderRadius: "var(--r2)", cursor: "pointer",
                  }}>
                    <input type="radio" name="reason" checked={form.reason === v} onChange={() => up("reason", v)} style={{ marginTop: 2, accentColor: "#2DFDC1" }} />
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600 }}>{v}</div>
                      <div style={{ fontSize: 12, color: "var(--tm)" }}>{d}</div>
                    </div>
                  </label>
                ))}
                {errors.reason && <div className="ferr">{errors.reason}</div>}
              </div>
            </div>
          )}

          <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
            {step > 0 && (
              <button className="btn b2" onClick={() => setStep(step - 1)} style={{ width: "auto", padding: "12px 20px" }}>
                {Icons.back()}
              </button>
            )}
            <button className="btn b1" style={{ flex: 1 }} onClick={next}>
              {step < 3 ? "Continue" : "Create Account"} {step < 3 ? Icons.arr() : Icons.chk()}
            </button>
          </div>

          {step === 0 && (
            <Link href="/" className="btn bg" style={{ width: "100%", marginTop: 12, fontSize: 13, textDecoration: "none", display: "flex" }}>
              {Icons.back()} Back to home
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
