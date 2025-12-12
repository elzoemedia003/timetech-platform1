import { useState } from "react";
import DashboardSidebar from "../../components/DashboardSidebar";

export default function WalletPage() {
  const [wallet, setWallet] = useState("");

  function saveWallet(e) {
    e.preventDefault();
    if (typeof window !== "undefined") {
      localStorage.setItem("timetech_wallet", wallet);
    }
    alert(
      "Wallet saved locally. Connect this to your backend user wallet field for real payouts."
    );
  }

  return (
    <div className="dashboard-layout">
      <DashboardSidebar />
      <div style={{ padding: "1.5rem 1.5rem 2.5rem" }}>
        <h2 style={{ marginTop: 0, marginBottom: 6 }}>Wallet</h2>
        <p style={{ marginTop: 0, fontSize: 13, color: "#9ca3af" }}>
          Set the Solana wallet that will receive your USDT and token rewards.
        </p>

        <div className="card" style={{ marginTop: 18, maxWidth: 480 }}>
          <form onSubmit={saveWallet}>
            <label style={{ fontSize: 12, color: "#9ca3af" }}>
              Solana wallet address
            </label>
            <input
              placeholder="Your Phantom wallet address"
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
              style={{ marginTop: 4 }}
            />
            <button
              className="btn-primary"
              style={{ marginTop: 14 }}
              type="submit"
            >
              Save wallet
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
