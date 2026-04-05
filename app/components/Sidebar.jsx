"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Icons } from "./Icons";
import { DISCORD_LINK } from "../lib/constants";

const NAV_ITEMS = [
  { path: "/dashboard", label: "Home", icon: Icons.home },
  { path: "/dashboard/screening", label: "AI Screening", icon: Icons.brain },
  { path: "/dashboard/reports", label: "My Reports", icon: Icons.clip },
  { path: "/dashboard/progress", label: "Progress", icon: Icons.target },
  { path: "/dashboard/profile", label: "Profile", icon: Icons.user },
  { path: "/dashboard/settings", label: "Settings", icon: Icons.settings },
];

export default function Sidebar({ onLogout }) {
  const pathname = usePathname();

  return (
    <aside className="dash-sb">
      <div className="dash-sb-logo">
        <div className="logo-i">N</div>
        <span>Neuro<span style={{ color: "var(--teal)" }}>Bridge</span></span>
      </div>

      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.path;
        return (
          <Link
            key={item.path}
            href={item.path}
            className={`dash-sb-item ${isActive ? "on" : ""}`}
          >
            {item.icon()} {item.label}
          </Link>
        );
      })}

      <div className="dash-sb-sep" />

      <a
        href={DISCORD_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="dash-sb-item"
        style={{ color: "#7B8CFF" }}
      >
        {Icons.disc(18)} Discord
      </a>

      <div style={{ flex: 1 }} />

      <button
        className="dash-sb-item"
        onClick={onLogout}
        style={{ color: "var(--rose)" }}
      >
        {Icons.logout()} Sign Out
      </button>
    </aside>
  );
}
