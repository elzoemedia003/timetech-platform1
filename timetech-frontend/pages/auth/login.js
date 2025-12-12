import { useState } from "react";

function saveFakeUser(email) {
  if (typeof window === "undefined") return;
  localStorage.setItem(
    "timetech_user",
    JSON.stringify({ email, id: "PUT_REAL_USER_ID_FROM_BACKEND_HERE" })
  );
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // TODO: Replace with real backend login
    saveFakeUser(email);
    alert(
      "Logged in locally. Replace this with real /auth/login endpoint when backend auth is ready."
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
        style={{ width: "min(360px, 92%)", paddingBlock: "1.7rem" }}
      >
        <h2 style={{ marginTop: 0, marginBottom: 8 }}>Sign in</h2>
        <p style={{ marginTop: 0, fontSize: 13, color: "#9ca3af" }}>
          Use the same email you registered with on TimeTech.
        </p>

        <form onSubmit={handleLogin} style={{ marginTop: 14 }}>
          <label style={{ fontSize: 12, color: "#9ca3af" }}>Email</label>
          <input
            type="email"
            required
            placeholder="you@wallet.dev"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginTop: 4 }}
          />
          <button
            className="btn-primary"
            style={{ width: "100%", marginTop: 16 }}
            disabled={loading}
            type="submit"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}

LoginPage.noLayout = true;
