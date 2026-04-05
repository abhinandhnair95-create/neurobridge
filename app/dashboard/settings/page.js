"use client";
import { useRouter } from "next/navigation";
import { Icons } from "../../components/Icons";
import { DB } from "../../lib/storage";

export default function SettingsPage() {
  const router = useRouter();

  const handleLogout = () => {
    DB.logout();
    router.push("/");
  };

  const settingsItems = [
    ["Notifications", "Email and push notification preferences", "Configure"],
    ["Privacy", "Control who can see your data", "Manage"],
    ["Data Export", "Download all your screening data", "Export"],
    ["Delete Account", "Permanently remove your account and data", "Delete"],
  ];

  return (
    <div className="au">
      <div className="dash-header">
        <h1 className="dash-ti">Settings</h1>
        <p className="dash-sub">Manage your preferences</p>
      </div>

      {settingsItems.map(([title, desc, action], i) => (
        <div
          key={i}
          className="d-card"
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}
        >
          <div>
            <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 2 }}>{title}</div>
            <div style={{ fontSize: 13, color: "var(--t2)" }}>{desc}</div>
          </div>
          <button
            className="btn b2"
            style={{
              width: "auto",
              padding: "8px 16px",
              fontSize: 13,
              color: action === "Delete" ? "var(--rose)" : undefined,
            }}
          >
            {action}
          </button>
        </div>
      ))}

      <button
        className="btn b2"
        onClick={handleLogout}
        style={{
          color: "var(--rose)",
          borderColor: "rgba(255,107,157,.2)",
          gap: 6,
          marginTop: 12,
          width: "100%",
        }}
      >
        {Icons.logout()} Sign Out
      </button>
    </div>
  );
}
