"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../lib/styles";
import { DB } from "../lib/storage";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const u = DB.getCurrentUser();
    if (!u) {
      router.push("/auth");
      return;
    }
    setUser(u);
    setReady(true);
  }, [router]);

  const handleLogout = () => {
    DB.logout();
    router.push("/");
  };

  if (!ready) {
    return (
      <div style={{ fontFamily: "var(--ff)", background: "var(--bg)", color: "var(--t1)", minHeight: "100vh" }}>
        <style>{styles}</style>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
          <div style={{ textAlign: "center" }}>
            <div className="logo-i" style={{ width: 48, height: 48, fontSize: 24, margin: "0 auto 12px" }}>N</div>
            <p style={{ color: "var(--t2)", fontSize: 14 }}>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "var(--ff)", background: "var(--bg)", color: "var(--t1)", minHeight: "100vh" }}>
      <style>{styles}</style>
      <div className="nb-bg" />
      <div className="dash">
        <Sidebar onLogout={handleLogout} />
        <main className="dash-main">
          {children}
        </main>
      </div>
    </div>
  );
}
