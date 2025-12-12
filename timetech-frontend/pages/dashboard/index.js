import { useEffect, useState } from "react";
import DashboardSidebar from "../../components/DashboardSidebar";
import StatCard from "../../components/StatCard";
import { fetchUser } from "../../lib/api";

function getLocalUser() {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem("timetech_user");
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [remoteUser, setRemoteUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadUser() {
    const local = getLocalUser();
    setUser(local);
    if (!local?.id) {
      setError(
        "No backend user ID set. Update local storage or wire login to real backend."
      );
      return;
    }
    setLoading(true);
    try {
      const data = await fetchUser(local.id);
      setRemoteUser(data.user);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Unable to load user from backend. Check API URL & user ID.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUser();
  }, []);

  const points = remoteUser?.points ?? 0;
  const usdt = remoteUser?.usdt_balance ?? 0;
  const tier = remoteUser?.tier ?? "none";

  return (
    <div className="dashboard-layout">
      <DashboardSidebar />
      <div style={{ padding: "1.5rem 1.5rem 2.5rem" }}>
        <h2 style={{ marginTop: 0, marginBottom: 6 }}>Dashboard</h2>
        <p style={{ marginTop: 0, fontSize: 13, color: "#9ca3af" }}>
          Track your plan, points, profit share and wallet metrics.
        </p>

        {user && (
          <p style={{ fontSize: 11, color: "#6b7280", marginTop: 2 }}>
            Signed in as <span style={{ color: "#e5e7eb" }}>{user.email}</span>
          </p>
        )}

        {error && (
          <p style={{ marginTop: 10, fontSize: 12, color: "#f97373" }}>{error}</p>
        )}

        <div className="grid-3" style={{ marginTop: 18 }}>
          <StatCard
            label="TimeTech Points"
            value={points}
            hint="Earned from tasks completed on the platform."
            tone="success"
          />
          <StatCard
            label="USDT profit share"
            value={`$${usdt.toFixed(2)}`}
            hint="Accumulated share from active plan."
          />
          <StatCard
            label="Subscription tier"
            value={tier === "none" ? "Free" : tier}
            hint="Upgrade to unlock full job feed & higher splits."
            tone={tier === "none" ? "warning" : "success"}
          />
        </div>

        <div
          className="card"
          style={{
            marginTop: 18,
            display: "flex",
            flexDirection: "column",
            gap: 8
          }}
        >
          <p style={{ margin: 0, fontSize: 13, color: "#e5e7eb" }}>
            Next earnings cycle
          </p>
          <p style={{ margin: 0, fontSize: 12, color: "#9ca3af" }}>
            Profit share settles every 30 days. Basic plan settles after 45 days.
          </p>
          <p style={{ margin: 0, fontSize: 12, color: "#facc15" }}>
            Keep completing tasks & sharing TimeTech. Points convert to tokens at
            launch.
          </p>
        </div>
      </div>
    </div>
  );
}
