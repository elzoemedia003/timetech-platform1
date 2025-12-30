import { useState } from "react";
import Link from "next/link";

const TABS = ["Dashboard", "Jobs", "Wallet", "Blog", "Earnings"];

export default function Dashboard() {
  const user = {
    name: "User",
    isSubscribed: false,
    points: 0,
    balance: 0,
  };

  const [active, setActive] = useState("Dashboard");

  return (
    <main style={s.container}>
      <header style={s.header}>
        <h1 style={s.logo}>TimeTech</h1>

        <button style={s.signout}>Sign out</button>
      </header>

      <nav style={s.tabs}>
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            style={active === t ? s.tabActive : s.tab}
          >
            {t}
          </button>
        ))}
      </nav>

      <section style={s.card}>
        {active === "Dashboard" && (
          <>
            <h2>Overview</h2>
            <p>Points: {user.points}</p>
            <p>Status: {user.isSubscribed ? "Subscribed" : "Free"}</p>
          </>
        )}

        {active === "Jobs" && <p>Jobs available after backend hookup.</p>}

        {active === "Wallet" && (
          <p>Fiat-first wallet. Withdrawals require subscription.</p>
        )}

        {active === "Blog" && <p>TimeTech updates and insights.</p>}

        {active === "Earnings" && (
          <>
            {!user.isSubscribed ? (
              <>
                <p>Earnings locked.</p>
                <Link href="/subscriptions">
                  <button style={s.primary}>Upgrade to earn</button>
                </Link>
              </>
            ) : (
              <p>Your earnings will appear here.</p>
            )}
          </>
        )}
      </section>
    </main>
  );
}

const s = {
  container: { maxWidth: 900, margin: "0 auto", padding: 20 },
  header: { display: "flex", justifyContent: "space-between" },
  logo: { fontSize: 26, fontWeight: 800 },
  signout: { border: "none", background: "transparent", cursor: "pointer" },
  tabs: { display: "flex", gap: 8, marginTop: 16 },
  tab: { padding: 10, borderRadius: 8, border: "1px solid #1e293b" },
  tabActive: {
    padding: 10,
    borderRadius: 8,
    background: "#22d3ee",
    border: "none",
  },
  card: { marginTop: 20, padding: 16, border: "1px solid #1e293b" },
  primary: {
    marginTop: 10,
    padding: 12,
    background: "#22d3ee",
    border: "none",
    borderRadius: 8,
  },
};
