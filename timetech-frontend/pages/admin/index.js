import { useState } from "react";
import DashboardSidebar from "../../components/DashboardSidebar";
import { triggerJobSync } from "../../lib/api";

export default function AdminPage() {
  const [loading, setLoading] = useState(false);
  const [log, setLog] = useState("");

  async function runSync() {
    setLoading(true);
    setLog("");
    try {
      const res = await triggerJobSync();
      setLog(JSON.stringify(res, null, 2));
    } catch (err) {
      console.error(err);
      setLog("Failed to sync jobs. Check backend admin route & auth.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="dashboard-layout">
      <DashboardSidebar />
      <div style={{ padding: "1.5rem 1.5rem 2.5rem" }}>
        <h2 style={{ marginTop: 0, marginBottom: 6 }}>Admin</h2>
        <p style={{ marginTop: 0, fontSize: 13, color: "#9ca3af" }}>
          Manual controls for job index and system checks.
        </p>

        <div className="card" style={{ marginTop: 18 }}>
          <p style={{ marginTop: 0, fontSize: 13, color: "#e5e7eb" }}>
            Sync jobs from external sources
          </p>
          <p style={{ marginTop: 4, fontSize: 12, color: "#9ca3af" }}>
            Calls your backend <code>/api/admin/sync-jobs</code> endpoint.
          </p>
          <button
            className="btn-primary"
            style={{ marginTop: 12 }}
            onClick={runSync}
            disabled={loading}
          >
            {loading ? "Syncing…" : "Run sync now"}
          </button>

          {log && (
            <pre
              style={{
                marginTop: 14,
                fontSize: 11,
                background: "#020617",
                padding: "0.75rem",
                borderRadius: 8,
                overflowX: "auto",
                border: "1px solid #111827"
              }}
            >
              {log}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}
