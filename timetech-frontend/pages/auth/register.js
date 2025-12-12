import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [wallet, setWallet] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister(e) {
    e.preventDefault();
    setLoading(true);
    // TODO: connect to backend /users/register when available
    alert(
      "This is the frontend only. Connect this form to your backend registration endpoint when ready."
    );
    setLoading(false);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center"
      }}
    >
      <div
        className="card"
        style={{ width: "min(380px, 94%)", paddingBlock: "1.7rem" }}
      >
        <h2 style={{ marginTop: 0, marginBottom: 8 }}>Create TimeTech account</h2>
        <p style={{ marginTop: 0, fontSize: 13, color: "#9ca3af" }}>
          Your email, name and Solana wallet will be used to track profit share.
        </p>

        <form onSubmit={handleRegister} style={{ marginTop: 14 }}>
          <label style={{ fontSize: 12, color: "#9ca3af" }}>Name</label>
          <input
            required
            placeholder="Satoshi Builder"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginTop: 4, marginBottom: 10 }}
          />

          <label style={{ fontSize: 12, color: "#9ca3af" }}>Email</label>
          <input
            required
            type="email"
            placeholder="you@wallet.dev"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginTop: 4, marginBottom: 10 }}
          />

          <label style={{ fontSize: 12, color: "#9ca3af" }}>Solana wallet</label>
          <input
            placeholder="Your Phantom wallet address"
            value={wallet}
            onChange={(e) => setWallet(e.target.value)}
            style={{ marginTop: 4 }}
          />

          <button
            className="btn-primary"
            style={{ width: "100%", marginTop: 16 }}
            disabled={loading}
            type="submit"
          >
            {loading ? "Creating account…" : "Create account"}
          </button>
        </form>
      </div>
    </div>
  );
}

RegisterPage.noLayout = true;
