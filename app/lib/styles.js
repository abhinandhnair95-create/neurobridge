// NeuroBridge Design System — Deep Indigo + Bioluminescent
// Shared across all pages

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap');

:root {
  --bg: #0B0E1A; --bg2: #0F1225; --bg3: #151833; --bg4: #1C2040;
  --card: #111430; --card2: #171A3A; --card-h: #1E2148;
  --t1: #F0F0FF; --t2: #B8B8D8; --tm: #8080A0;
  --teal: #2DFDC1; --rose: #FF6B9D; --gold: #FFD93D; --blue: #6B8AFF; --purple: #B366FF;
  --bl: rgba(45,253,193,.06); --bl2: rgba(45,253,193,.12);
  --glow-t: 0 0 24px rgba(45,253,193,.12); --glow-r: 0 0 24px rgba(255,107,157,.12);
  --r2: 12px; --r3: 16px; --r4: 24px; --pill: 100px;
  --ff: 'Sora', system-ui, sans-serif; --fm: 'JetBrains Mono', monospace;
  --ts: 300ms cubic-bezier(.4,0,.2,1);
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: var(--ff); background: var(--bg); color: var(--t1); -webkit-font-smoothing: antialiased; }

/* ANIMATIONS */
@keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes scaleIn { from { opacity: 0; transform: scale(.92); } to { opacity: 1; transform: scale(1); } }
@keyframes barGrow { from { width: 0; } }
@keyframes radarDraw { from { opacity: 0; transform: scale(.5); } to { opacity: 1; transform: scale(1); } }
@keyframes pulseGlow { 0%, 100% { box-shadow: 0 0 15px rgba(45,253,193,.1); } 50% { box-shadow: 0 0 30px rgba(45,253,193,.25); } }
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
@keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }

.au { animation: fadeUp .6s ease forwards; opacity: 0; }
.ad1{animation-delay:.1s} .ad2{animation-delay:.2s} .ad3{animation-delay:.3s}
.ad4{animation-delay:.4s} .ad5{animation-delay:.5s} .ad6{animation-delay:.6s}
.ad7{animation-delay:.7s} .ad8{animation-delay:.8s}

/* AMBIENT BG */
.nb-bg { position: fixed; inset: 0; pointer-events: none; z-index: 0;
  background: radial-gradient(ellipse 40% 30% at 20% 15%, rgba(45,253,193,.04) 0%, transparent 60%),
    radial-gradient(ellipse 35% 25% at 80% 40%, rgba(255,107,157,.03) 0%, transparent 60%),
    radial-gradient(ellipse 40% 30% at 50% 80%, rgba(255,217,61,.025) 0%, transparent 60%); }

/* BUTTONS */
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 11px 24px; border-radius: var(--pill); font-family: var(--ff); font-size: 14px; font-weight: 600; cursor: pointer; transition: all var(--ts); border: none; white-space: nowrap; }
.b1 { background: linear-gradient(135deg, #2DFDC1, #1AD4A0); color: #0B0E1A; box-shadow: var(--glow-t); }
.b1:hover { transform: translateY(-2px); box-shadow: 0 0 40px rgba(45,253,193,.25); }
.b1:disabled { opacity: .4; cursor: default; transform: none; box-shadow: none; }
.b2 { background: var(--card2); color: var(--t1); border: 1px solid var(--bl2); }
.b2:hover { background: var(--card-h); border-color: rgba(45,253,193,.2); }
.bg { background: transparent; color: var(--t2); padding: 8px 16px; }
.bg:hover { color: var(--t1); background: rgba(255,255,255,.04); }
.bL { padding: 14px 32px; font-size: 16px; }
.b-rose { background: linear-gradient(135deg, #FF6B9D, #E8527D); color: white; box-shadow: var(--glow-r); }
.b-disc { background: #5865F2; color: white; }
.b-disc:hover { background: #4752C4; }

/* NAV */
.nav { position: sticky; top: 0; z-index: 100; background: rgba(11,14,26,.8); backdrop-filter: blur(24px) saturate(1.3); border-bottom: 1px solid var(--bl); padding: 0 32px; }
.nav-in { max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; height: 64px; }
.logo { display: flex; align-items: center; gap: 10px; cursor: pointer; border: none; background: none; color: var(--t1); text-decoration: none; }
.logo-i { width: 34px; height: 34px; background: linear-gradient(135deg, var(--teal), var(--gold)); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 17px; color: var(--bg); font-weight: 800; font-family: var(--ff); box-shadow: var(--glow-t); }
.logo-t { font-size: 20px; font-weight: 700; letter-spacing: -.5px; }
.logo-t .lo-hi { color: var(--teal); }

/* FORMS */
.fg { margin-bottom: 20px; }
.fl { font-size: 13px; font-weight: 600; color: var(--t2); margin-bottom: 6px; display: block; }
.fiw { position: relative; }
.fiic { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: var(--tm); pointer-events: none; }
.fi { width: 100%; padding: 12px 14px 12px 44px; border: 1px solid var(--bl2); border-radius: var(--r2); font-family: var(--ff); font-size: 14px; color: var(--t1); background: var(--bg3); outline: none; transition: 150ms ease; }
.fi:focus { border-color: var(--teal); box-shadow: 0 0 0 3px rgba(45,253,193,.1); }
.fi::placeholder { color: var(--tm); }
.fi.pl { padding-left: 14px; }
.fsel { width: 100%; padding: 12px 14px; border: 1px solid var(--bl2); border-radius: var(--r2); font-family: var(--ff); font-size: 14px; color: var(--t1); background: var(--bg3); outline: none; cursor: pointer; appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238080A0' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 14px center; }
.frow { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.ferr { font-size: 12px; color: var(--rose); margin-top: 4px; }

/* SECTION HELPERS */
.sec-tag { display: inline-flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--teal); padding: 6px 16px; background: rgba(45,253,193,.06); border: 1px solid rgba(45,253,193,.1); border-radius: var(--pill); margin-bottom: 20px; }
.sec-h { font-size: clamp(28px, 4vw, 44px); font-weight: 800; letter-spacing: -1px; line-height: 1.1; margin-bottom: 16px; }
.sec-p { font-size: 16px; color: var(--t2); max-width: 500px; line-height: 1.7; }
.d-card { background: var(--card); border: 1px solid var(--bl); border-radius: var(--r3); padding: 24px; transition: all var(--ts); }
.d-card:hover { border-color: var(--bl2); }

/* DASHBOARD SIDEBAR */
.dash { display: flex; min-height: 100vh; background: var(--bg); position: relative; }
.dash-sb { width: 240px; background: var(--bg2); border-right: 1px solid var(--bl); padding: 20px 12px; display: flex; flex-direction: column; position: fixed; top: 0; bottom: 0; left: 0; z-index: 50; }
.dash-sb-logo { display: flex; align-items: center; gap: 10px; padding: 8px 12px; margin-bottom: 24px; }
.dash-sb-logo .logo-i { width: 30px; height: 30px; font-size: 15px; border-radius: 8px; }
.dash-sb-logo span { font-size: 17px; font-weight: 700; letter-spacing: -.3px; }
.dash-sb-item { display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: var(--r2); font-size: 14px; font-weight: 500; color: var(--t2); cursor: pointer; transition: 150ms ease; border: none; background: none; font-family: var(--ff); text-align: left; width: 100%; text-decoration: none; }
.dash-sb-item:hover { background: rgba(45,253,193,.04); color: var(--t1); }
.dash-sb-item.on { background: rgba(45,253,193,.08); color: var(--teal); font-weight: 600; border-left: 3px solid var(--teal); padding-left: 9px; }
.dash-sb-sep { height: 1px; background: var(--bl); margin: 12px 0; }
.dash-main { margin-left: 240px; flex: 1; padding: 32px; min-height: 100vh; position: relative; z-index: 1; }
.dash-header { margin-bottom: 32px; }
.dash-ti { font-size: 28px; font-weight: 800; letter-spacing: -.8px; margin-bottom: 4px; }
.dash-sub { font-size: 14px; color: var(--t2); }

/* STAT CARDS */
.stat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 28px; }
.scard { background: var(--card); border: 1px solid var(--bl); border-radius: var(--r3); padding: 20px; transition: var(--ts); position: relative; overflow: hidden; }
.scard:hover { border-color: var(--bl2); box-shadow: 0 4px 20px rgba(0,0,0,.3); }
.scard::after { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; }
.scard:nth-child(1)::after { background: var(--teal); }
.scard:nth-child(2)::after { background: var(--rose); }
.scard:nth-child(3)::after { background: var(--gold); }
.scard:nth-child(4)::after { background: var(--blue); }
.scard-ic { width: 40px; height: 40px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 12px; }
.scard-v { font-size: 28px; font-weight: 800; letter-spacing: -1px; }
.scard-l { font-size: 12px; color: var(--tm); margin-top: 2px; }

/* PROGRESS TRACKER */
.prog-track { display: flex; flex-direction: column; }
.prog-step { display: flex; gap: 16px; position: relative; padding-bottom: 28px; }
.prog-step:last-child { padding-bottom: 0; }
.prog-step:not(:last-child)::after { content: ''; position: absolute; left: 21px; top: 48px; bottom: 0; width: 2px; background: var(--bl); }
.prog-step.done:not(:last-child)::after { background: linear-gradient(180deg, var(--teal), var(--bl)); }
.prog-dot { width: 44px; height: 44px; border-radius: 14px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: var(--ts); }
.prog-dot.done { background: rgba(45,253,193,.1); color: var(--teal); }
.prog-dot.curr { background: rgba(255,107,157,.1); color: var(--rose); animation: pulseGlow 3s ease infinite; }
.prog-dot.lock { background: var(--bg3); color: var(--tm); }
.prog-tag { display: inline-block; padding: 3px 10px; border-radius: var(--pill); font-size: 11px; font-weight: 700; margin-top: 6px; }

/* CHAT */
.chat-full { display: flex; flex-direction: column; height: calc(100vh - 100px); background: var(--bg2); border-radius: var(--r3); border: 1px solid var(--bl); overflow: hidden; }
.chat-hdr { padding: 16px 24px; border-bottom: 1px solid var(--bl); display: flex; align-items: center; justify-content: space-between; background: var(--card); }
.chat-hdr-l { display: flex; align-items: center; gap: 12px; }
.chat-av { width: 36px; height: 36px; border-radius: 12px; background: linear-gradient(135deg, var(--teal), var(--blue)); display: flex; align-items: center; justify-content: center; color: var(--bg); font-size: 14px; font-weight: 800; }
.chat-phase { padding: 4px 12px; border-radius: var(--pill); font-size: 11px; font-weight: 600; background: rgba(45,253,193,.08); color: var(--teal); }
.chat-body { flex: 1; padding: 24px; overflow-y: auto; display: flex; flex-direction: column; gap: 16px; }
.chat-msg { display: flex; gap: 10px; animation: fadeUp .3s ease forwards; max-width: 85%; }
.chat-msg.usr { align-self: flex-end; flex-direction: row-reverse; }
.chat-mav { width: 30px; height: 30px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 800; flex-shrink: 0; }
.chat-mav.ai { background: linear-gradient(135deg, var(--teal), var(--blue)); color: var(--bg); }
.chat-mav.hu { background: var(--bg4); color: var(--t2); }
.chat-bub { padding: 14px 18px; border-radius: 16px; font-size: 14px; line-height: 1.7; }
.chat-msg:not(.usr) .chat-bub { background: var(--card); border: 1px solid var(--bl); border-top-left-radius: 4px; }
.chat-msg.usr .chat-bub { background: linear-gradient(135deg, var(--teal), #1AD4A0); color: var(--bg); border-top-right-radius: 4px; font-weight: 500; }
.chat-bar { padding: 16px; border-top: 1px solid var(--bl); background: var(--card); display: flex; gap: 10px; }
.chat-i { flex: 1; padding: 12px 16px; border: 1px solid var(--bl2); border-radius: var(--pill); font-family: var(--ff); font-size: 14px; color: var(--t1); background: var(--bg3); outline: none; transition: 150ms ease; }
.chat-i:focus { border-color: var(--teal); box-shadow: 0 0 0 3px rgba(45,253,193,.08); }
.chat-i::placeholder { color: var(--tm); }
.chat-i:disabled { opacity: .4; }
.chat-send { width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, var(--teal), #1AD4A0); border: none; color: var(--bg); font-size: 18px; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: var(--ts); flex-shrink: 0; }
.chat-send:hover:not(:disabled) { transform: scale(1.08); box-shadow: var(--glow-t); }
.chat-send:disabled { opacity: .3; }
.typing { display: flex; gap: 5px; padding: 8px 0; }
.typing-d { width: 6px; height: 6px; background: var(--teal); border-radius: 50%; animation: float 1s ease-in-out infinite; opacity: .6; }
.typing-d:nth-child(2) { animation-delay: .15s; }
.typing-d:nth-child(3) { animation-delay: .3s; }
.chat-err { padding: 10px 16px; background: rgba(255,107,157,.08); border: 1px solid rgba(255,107,157,.2); border-radius: var(--r2); font-size: 13px; color: var(--rose); }
.chat-done { padding: 16px 0; display: flex; gap: 10px; flex-wrap: wrap; }

/* PROFILE */
.prof-card { background: var(--card); border: 1px solid var(--bl); border-radius: var(--r3); padding: 32px; }
.prof-hdr { display: flex; align-items: center; gap: 20px; margin-bottom: 28px; padding-bottom: 24px; border-bottom: 1px solid var(--bl); }
.prof-av { width: 72px; height: 72px; border-radius: 20px; background: linear-gradient(135deg, var(--teal), var(--rose)); display: flex; align-items: center; justify-content: center; color: var(--bg); font-weight: 800; font-size: 28px; }
.prof-name { font-size: 24px; font-weight: 800; letter-spacing: -.5px; }
.prof-email { font-size: 13px; color: var(--t2); margin-top: 2px; }
.prof-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.prof-fl { font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: var(--tm); margin-bottom: 4px; }
.prof-fv { font-size: 15px; font-weight: 500; }

/* DISCORD */
.disc-cta { background: linear-gradient(135deg, rgba(88,101,242,.15), rgba(88,101,242,.05)); border: 1px solid rgba(88,101,242,.2); border-radius: var(--r3); padding: 32px; text-align: center; }
.disc-cta h3 { font-size: 22px; font-weight: 700; margin-bottom: 8px; }
.disc-cta p { font-size: 14px; color: var(--t2); margin-bottom: 20px; }

/* AUTH */
.auth-wrap { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 32px; position: relative; }
.auth-card { position: relative; z-index: 2; background: var(--card); border: 1px solid var(--bl2); border-radius: var(--r4); box-shadow: 0 16px 64px rgba(0,0,0,.6); width: 100%; max-width: 420px; padding: 40px; animation: scaleIn .4s ease; }
.auth-ti { font-size: 26px; font-weight: 700; text-align: center; margin-bottom: 8px; letter-spacing: -.5px; }
.auth-sub { font-size: 14px; color: var(--t2); text-align: center; margin-bottom: 28px; line-height: 1.6; }
.onb-prog { display: flex; gap: 8px; margin-bottom: 32px; }
.onb-dot { flex: 1; height: 3px; border-radius: 3px; background: var(--bg4); transition: var(--ts); }
.onb-dot.done { background: var(--teal); }
.onb-dot.now { background: var(--rose); }

/* HERO */
.hero { position: relative; padding: 60px 32px 40px; overflow: hidden; min-height: 90vh; display: flex; align-items: center; }
.hero-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; position: relative; z-index: 2; width: 100%; }
.hero-text { position: relative; z-index: 2; }
.hero-badge { display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px 6px 10px; background: rgba(45,253,193,.06); border: 1px solid rgba(45,253,193,.15); border-radius: var(--pill); font-size: 12px; font-weight: 500; color: var(--teal); margin-bottom: 24px; }
.hero-badge-dot { width: 7px; height: 7px; background: var(--teal); border-radius: 50%; animation: pulse 2s ease infinite; }
.hero h1 { font-size: clamp(36px, 5vw, 60px); font-weight: 800; line-height: 1.08; letter-spacing: -2px; margin-bottom: 18px; }
.hero h1 .hl { color: var(--teal); }
.hero-sub { font-size: 17px; line-height: 1.7; color: var(--t2); max-width: 480px; margin-bottom: 32px; }
.hero-ctas { display: flex; gap: 12px; flex-wrap: wrap; }
.hero-trust { margin-top: 32px; font-size: 12px; color: var(--tm); display: flex; gap: 20px; flex-wrap: wrap; }
.hero-trust span { display: flex; align-items: center; gap: 6px; }
.hero-brain { position: relative; display: flex; align-items: center; justify-content: center; }

/* HOW IT WORKS */
.how-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 48px; }
.how-card { background: var(--card); border: 1px solid var(--bl); border-radius: var(--r4); padding: 32px 28px; transition: all var(--ts); position: relative; overflow: hidden; }
.how-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; transition: var(--ts); opacity: 0; }
.how-card:hover { border-color: var(--bl2); transform: translateY(-6px); box-shadow: 0 8px 32px rgba(0,0,0,.4); }
.how-card:hover::before { opacity: 1; }
.how-card:nth-child(1)::before { background: linear-gradient(90deg, var(--teal), transparent); }
.how-card:nth-child(2)::before { background: linear-gradient(90deg, var(--rose), transparent); }
.how-card:nth-child(3)::before { background: linear-gradient(90deg, var(--gold), transparent); }
.how-num { font-family: var(--fm); font-size: 12px; font-weight: 700; margin-bottom: 16px; letter-spacing: 1px; }
.how-ic { width: 52px; height: 52px; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
.how-card h3 { font-size: 20px; font-weight: 700; margin-bottom: 8px; letter-spacing: -.3px; }
.how-card p { font-size: 14px; color: var(--t2); line-height: 1.7; }

/* FOOTER */
.footer { padding: 40px 32px; border-top: 1px solid var(--bl); text-align: center; font-size: 13px; color: var(--tm); position: relative; z-index: 1; }

/* NERVE DIVIDER */
.nerve-div { position: relative; height: 60px; overflow: hidden; margin: 40px 0; }

/* PARTICLE CANVAS */
.particle-canvas { position: fixed; inset: 0; pointer-events: none; z-index: 0; }

/* ════════════════════════════════════════════════════
   REPORT PAGE — Approved Design
   ════════════════════════════════════════════════════ */
.report-page { position: relative; z-index: 1; max-width: 960px; margin: 0 auto; padding: 40px 32px 80px; }

/* Report Header */
.rp-hdr { text-align: center; margin-bottom: 48px; }
.rp-hdr-tag { display: inline-flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--teal); padding: 6px 16px; background: rgba(45,253,193,.06); border: 1px solid rgba(45,253,193,.1); border-radius: var(--pill); margin-bottom: 20px; }
.rp-hdr h1 { font-size: clamp(28px, 4vw, 40px); font-weight: 800; letter-spacing: -1.5px; margin-bottom: 8px; line-height: 1.15; }
.rp-hdr h1 span { color: var(--teal); }
.rp-hdr p { font-size: 15px; color: var(--t2); }

/* Overall Alignment */
.overall-card { background: var(--card); border: 1px solid var(--bl2); border-radius: var(--r4); padding: 32px; margin-bottom: 32px; text-align: center; position: relative; overflow: hidden; }
.overall-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--teal), var(--rose), var(--gold)); }
.overall-level { font-size: 32px; font-weight: 800; letter-spacing: -1px; margin-bottom: 8px; background: linear-gradient(135deg, var(--teal), var(--gold)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.overall-desc { font-size: 14px; color: var(--t2); line-height: 1.7; max-width: 640px; margin: 0 auto; }

/* Radar Chart */
.radar-section { margin-bottom: 40px; }
.radar-wrap { background: var(--card); border: 1px solid var(--bl); border-radius: var(--r4); padding: 32px; display: flex; align-items: center; gap: 40px; }
.radar-chart { flex-shrink: 0; animation: radarDraw 1s ease .3s both; }
.radar-legend { flex: 1; display: flex; flex-direction: column; gap: 10px; }
.radar-legend-item { display: flex; align-items: center; gap: 10px; padding: 8px 12px; border-radius: var(--r2); transition: var(--ts); cursor: pointer; }
.radar-legend-item:hover { background: rgba(255,255,255,.03); }
.radar-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.radar-legend-name { font-size: 13px; font-weight: 600; flex: 1; }
.radar-legend-score { font-family: var(--fm); font-size: 13px; font-weight: 700; }

/* Domain Detail Cards */
.domains-section { margin-bottom: 40px; }
.sec-title { font-size: 22px; font-weight: 800; letter-spacing: -.5px; margin-bottom: 20px; display: flex; align-items: center; gap: 10px; }
.sec-title svg { flex-shrink: 0; }
.domain-cards { display: flex; flex-direction: column; gap: 16px; }
.dom-card { background: var(--card); border: 1px solid var(--bl); border-radius: var(--r3); overflow: hidden; transition: all var(--ts); cursor: pointer; }
.dom-card:hover { border-color: var(--bl2); transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0,0,0,.3); }
.dom-card-top { padding: 24px; display: flex; gap: 20px; align-items: flex-start; }
.dom-score-ring { width: 64px; height: 64px; flex-shrink: 0; position: relative; }
.dom-score-ring svg { transform: rotate(-90deg); }
.dom-score-num { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-family: var(--fm); font-size: 16px; font-weight: 700; }
.dom-info { flex: 1; }
.dom-info-top { display: flex; align-items: center; gap: 10px; margin-bottom: 6px; }
.dom-name { font-size: 16px; font-weight: 700; }
.dom-badge { padding: 3px 10px; border-radius: var(--pill); font-size: 11px; font-weight: 700; }
.dom-desc { font-size: 13px; color: var(--t2); line-height: 1.6; }
.dom-bar-wrap { padding: 0 24px; margin-bottom: 4px; }
.dom-bar { height: 4px; background: var(--bg3); border-radius: 4px; overflow: hidden; }
.dom-bar-fill { height: 100%; border-radius: 4px; animation: barGrow 1s ease forwards; }
.dom-expand { padding: 0 24px 24px; }
.dom-expand p { font-size: 14px; color: var(--t2); line-height: 1.75; }

/* Patterns */
.patterns-section { margin-bottom: 40px; }
.pattern-list { display: flex; flex-direction: column; gap: 12px; }
.pattern-item { background: var(--card); border: 1px solid var(--bl); border-radius: var(--r3); padding: 20px 24px; display: flex; gap: 16px; align-items: flex-start; transition: var(--ts); }
.pattern-item:hover { border-color: var(--bl2); }
.pattern-num { font-family: var(--fm); font-size: 12px; font-weight: 700; color: var(--teal); width: 28px; height: 28px; border-radius: 8px; background: rgba(45,253,193,.08); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.pattern-text { font-size: 14px; color: var(--t2); line-height: 1.7; }

/* Flags */
.flags-section { margin-bottom: 40px; }
.flag-card { background: var(--card); border: 1px solid rgba(255,107,157,.15); border-radius: var(--r3); padding: 20px 24px; margin-bottom: 12px; display: flex; gap: 16px; align-items: flex-start; }
.flag-icon { width: 36px; height: 36px; border-radius: 10px; background: rgba(255,107,157,.1); display: flex; align-items: center; justify-content: center; color: var(--rose); flex-shrink: 0; }
.flag-label { font-size: 14px; font-weight: 700; color: var(--rose); margin-bottom: 4px; }
.flag-desc { font-size: 13px; color: var(--t2); line-height: 1.6; }

/* Recommendations */
.recs-section { margin-bottom: 40px; }
.rec-item { background: var(--card); border: 1px solid var(--bl); border-radius: var(--r3); padding: 20px 24px; margin-bottom: 12px; display: flex; gap: 16px; align-items: flex-start; transition: var(--ts); }
.rec-item:hover { border-color: rgba(45,253,193,.2); background: rgba(45,253,193,.02); }
.rec-check { width: 28px; height: 28px; border-radius: 8px; background: rgba(45,253,193,.08); display: flex; align-items: center; justify-content: center; color: var(--teal); flex-shrink: 0; }
.rec-text { font-size: 14px; color: var(--t2); line-height: 1.6; }

/* Disclaimer */
.disclaimer { background: rgba(255,107,157,.04); border: 1px solid rgba(255,107,157,.12); border-radius: var(--r3); padding: 24px; display: flex; gap: 16px; align-items: flex-start; margin-bottom: 32px; }
.disclaimer-icon { color: var(--rose); flex-shrink: 0; margin-top: 2px; }
.disclaimer p { font-size: 13px; color: var(--t2); line-height: 1.7; }
.disclaimer strong { color: var(--rose); }

/* Actions */
.actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

@media (max-width: 768px) {
  .radar-wrap { flex-direction: column; align-items: center; }
  .report-page { padding: 24px 16px 60px; }
  .dom-card-top { flex-direction: column; align-items: center; text-align: center; }
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .hero-inner { grid-template-columns: 1fr; }
  .hero-brain { display: none; }
  .how-grid { grid-template-columns: 1fr; }
  .stat-grid { grid-template-columns: repeat(2, 1fr); }
  .dash-sb { display: none; }
  .dash-main { margin-left: 0; }
  .prof-grid { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .hero { padding: 40px 16px; }
  .nav { padding: 0 16px; }
}
`;

export default styles;
