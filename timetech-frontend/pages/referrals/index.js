import { useEffect, useState } from "react";
import DashboardSidebar from "../../components/DashboardSidebar";

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

export default function ReferralsPage() {
  const [user, setUser] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setUser(getLocalUser());
  }, []);

  const referralCode =
    user?.referral_code || "YOUR_REFERRAL_CODE_FROM_BACKEND_HERE";
  const referralLink = `https://timetech.jobs/signup?ref=${referralCode}`;

  function copyReferral() {
    if (typeof navigator === "undefined") return;
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  }

  return (
    <div className="dashboard-layout">
      <DashboardSidebar />
      <div style={{ padding: "1.5rem 1.5rem 2.5rem" }}>
        <h2 style={{ marginTop: 0, marginBottom: 6 }}>Referrals</h2>
        <p style={{ marginTop: 0, fontSize: 13, color: "#9ca3af" }}>
          Invite builders, earn USDT and points from their activity.
        </p>

        <div className="card" style={{ marginTop: 16 }}>
          <p style={{ marginTop: 0, fontSize: 12, color: "#9ca3af" }}>
            Referral link
          </p>
          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              marginTop: 4
            }}
          >
            <input
              readOnly
              value={referralLink}
              style={{ flex: 1, fontSize: 12 }}
            />
            <button className="btn-primary" onClick={copyReferral}>
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <p style={{ marginTop: 10, fontSize: 11, color: "#6b7280" }}>
            Referral bonuses scale from 10% to 15% depending on your plan.
          </p>
        </div>
      </div>
    </div>
  );
}
