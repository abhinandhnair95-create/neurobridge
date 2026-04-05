"use client";
import { useState, useEffect, useMemo } from "react";
import { Icons } from "../../components/Icons";
import { DB } from "../../lib/storage";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editForm, setEditForm] = useState({});

  useEffect(() => {
    const u = DB.getCurrentUser();
    if (u) setUser(u);
  }, []);

  const initials = useMemo(() => {
    if (!user || !user.fullName) return "";
    const parts = user.fullName.split(" ");
    const first = parts[0] ? parts[0][0] : "";
    const last = parts[1] ? parts[1][0] : "";
    return first + last;
  }, [user]);

  const saveProfile = () => {
    const updated = { ...user, ...editForm };
    setUser(updated);
    DB.set("user:" + user.id, updated);
    setEditMode(false);
  };

  if (!user) return null;

  const fields = [
    ["Full Name", "fullName"],
    ["Email", "email"],
    ["Age", "age"],
    ["Gender", "gender"],
    ["City", "city"],
    ["Occupation", "occupation"],
    ["Education", "education"],
    ["Reason", "reason"],
    ["User ID", "id"],
  ];

  return (
    <div className="au">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <div>
          <h1 className="dash-ti">Profile</h1>
          <p className="dash-sub">Your personal information</p>
        </div>
        <button
          className="btn b2"
          style={{ padding: "8px 16px", fontSize: 13, gap: 6 }}
          onClick={() => {
            if (editMode) {
              saveProfile();
            } else {
              setEditForm({ ...user });
              setEditMode(true);
            }
          }}
        >
          {editMode ? Icons.chk(14) : Icons.edit(14)} {editMode ? "Save" : "Edit"}
        </button>
      </div>

      <div className="prof-card">
        <div className="prof-hdr">
          <div className="prof-av">{initials}</div>
          <div>
            <div className="prof-name">{user.fullName}</div>
            <div className="prof-email">{user.email}</div>
            <div style={{ fontSize: 12, color: "var(--tm)", marginTop: 2 }}>
              Joined {new Date(user.registeredAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
            </div>
          </div>
        </div>

        <div className="prof-grid">
          {fields.map(([label, key]) => (
            <div key={key}>
              <div className="prof-fl">{label}</div>
              {editMode && key !== "id" ? (
                <input
                  className="fi pl"
                  style={{ padding: "8px 10px", fontSize: 14 }}
                  value={editForm[key] || ""}
                  onChange={(e) => setEditForm((prev) => ({ ...prev, [key]: e.target.value }))}
                />
              ) : (
                <div className="prof-fv">{user[key] || "\u2014"}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
