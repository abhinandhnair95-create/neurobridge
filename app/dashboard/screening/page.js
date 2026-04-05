"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Icons } from "../../components/Icons";
import { DB } from "../../lib/storage";
import { callClaude } from "../../lib/ai";
import { REPORT_PROMPT } from "../../lib/constants";
import ChatMessage, { TypingIndicator } from "../../components/ChatMessage";

export default function ScreeningPage() {
  const router = useRouter();
  const [msgs, setMsgs] = useState([]);
  const [hist, setHist] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [chatErr, setChatErr] = useState(null);
  const [mc, setMc] = useState(0);
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const chatRef = useRef(null);
  const iRef = useRef(null);

  const scroll = useCallback(() => {
    if (chatRef.current) {
      setTimeout(() => {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }, 50);
    }
  }, []);

  useEffect(() => {
    scroll();
  }, [msgs, typing, scroll]);

  const startChat = useCallback(async () => {
    if (started) return;
    setStarted(true);
    setTyping(true);
    setChatErr(null);
    try {
      const r = await callClaude("Hi, I would like to start the ADHD screening.", []);
      setMsgs([{ role: "ai", text: r.text }]);
      setHist(r.history);
      setMc(1);
    } catch (err) {
      setChatErr("Unable to connect to AI. Please check your internet and try again.");
      setStarted(false);
    } finally {
      setTyping(false);
    }
  }, [started]);

  const sendMsg = useCallback(async () => {
    const msg = input.trim();
    if (!msg || typing) return;
    setInput("");
    setChatErr(null);
    setMsgs((prev) => [...prev, { role: "user", text: msg }]);
    setTyping(true);
    try {
      const r = await callClaude(msg, hist);
      setMsgs((prev) => [...prev, { role: "ai", text: r.text }]);
      setHist(r.history);
      setMc((prev) => prev + 1);
    } catch (err) {
      setChatErr("Connection issue. Please try again.");
      setMsgs((prev) => prev.slice(0, -1));
    } finally {
      setTyping(false);
      iRef.current?.focus();
    }
  }, [input, typing, hist]);

  const genReport = useCallback(async () => {
    setTyping(true);
    setChatErr(null);
    try {
      const r = await callClaude(REPORT_PROMPT, hist);
      const user = DB.getCurrentUser();
      if (user) {
        user.reportContent = r.text;
        user.screeningDone = true;
        user.reports = [...(user.reports || []), { date: new Date().toISOString(), content: r.text }];
        DB.set("user:" + user.id, user);
      }
      setDone(true);
    } catch (err) {
      setChatErr("Could not generate report. Please try again.");
    } finally {
      setTyping(false);
    }
  }, [hist]);

  const phase = mc < 6 ? "Phase 1 — Initial" : mc < 15 ? "Phase 2 — Deep" : "Wrapping Up";

  return (
    <div className="au">
      <div className="dash-header">
        <h1 className="dash-ti">AI Screening</h1>
        <p className="dash-sub">Adaptive clinical screening powered by Claude AI</p>
      </div>

      <div className="chat-full">
        <div className="chat-hdr">
          <div className="chat-hdr-l">
            <div className="chat-av">NB</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>NeuroBridge AI</div>
              <div style={{ fontSize: 12, color: "var(--teal)", display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{ width: 6, height: 6, background: "var(--teal)", borderRadius: "50%", display: "inline-block" }} />
                Active
              </div>
            </div>
          </div>
          {started && <div className="chat-phase">{phase}</div>}
        </div>

        <div className="chat-body" ref={chatRef}>
          {!started && !typing && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, gap: 16, padding: "40px 20px", textAlign: "center" }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(45,253,193,.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--teal)" }}>
                {Icons.brain(28)}
              </div>
              <div style={{ fontSize: 20, fontWeight: 700 }}>Ready to explore your mind?</div>
              <div style={{ fontSize: 14, color: "var(--t2)", maxWidth: 320, lineHeight: 1.6 }}>
                This adaptive screening takes 5-15 minutes. Private, research-backed, and completely free.
              </div>
              <button className="btn b1" onClick={startChat}>Begin Screening</button>
            </div>
          )}

          {msgs.map((m, i) => (
            <ChatMessage key={i} role={m.role} text={m.text} />
          ))}

          {typing && <TypingIndicator />}
          {chatErr && <div className="chat-err">{chatErr}</div>}

          {started && !typing && mc >= 6 && !done && (
            <div className="chat-done">
              <button className="btn b1" onClick={genReport}>{Icons.clip(16)} Generate Results</button>
              <button className="btn b2" onClick={() => iRef.current?.focus()}>Continue Screening</button>
            </div>
          )}

          {done && (
            <div className="chat-done">
              <button className="btn b1" onClick={() => router.push("/dashboard/reports")}>
                {Icons.clip(16)} View My Report
              </button>
            </div>
          )}
        </div>

        {started && !done && (
          <div className="chat-bar">
            <input
              ref={iRef}
              className="chat-i"
              placeholder={typing ? "Thinking..." : "Share your experience..."}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMsg()}
              disabled={typing}
            />
            <button className="chat-send" onClick={sendMsg} disabled={typing || !input.trim()}>
              {"↑"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
