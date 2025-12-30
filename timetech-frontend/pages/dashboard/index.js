import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

const TABS = ["Dashboard", "Jobs", "Wallet", "Blog", "Earnings"];

export default function DashboardHub() {
  // TODO: Replace with real auth/user from cookie/JWT/session
  const user = useMemo(
    () => ({
      name: "User",
      isSubscribed: false, // set true after successful subscription
      tier: "Free",
      points: 0,
      usdtBalance: 0,
    }),
    []
  );

  const [active, setActive] = useState("Dashboard");
  const [jobs, setJobs] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(false);
  const [loadingPosts, setLoadingPosts] = useState(false);

  // Example fetch stubs (plug backend later)
  useEffect(() => {
    if (active === "Jobs") void loadJobs();
    if (active === "Blog") void loadPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  async function loadJobs() {
    try {
      setLoadingJobs(true);
      // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs?limit=50`);
      // const data = await res.json();
      // setJobs(data.jobs || data || []);
      setJobs([]); // placeholder
    } finally {
      setLoadingJobs(false);
    }
  }

  async function loadPosts() {
    try {
      setLoadingPosts(true);
      // If you don't have backend blog yet, keep it local.
      setPosts([
        { id: "1", title: "Welcome to TimeTech", excerpt: "Product updates and insights." },
        { id: "2", title: "Fiat-first roadmap", excerpt: "Why we start with Paystack/Stripe." },
      ]);
    } finally {
      setLoadingPosts(false);
    }
  }

  return (
    <div style={s.page}>
      <header style={s.header}>
        <div>
          <h1 style={s.h1}>TimeTech</h1>
          <p style={s.sub}>
            Logged in as <b>{user.name}</b> • Tier: <b>{user.isSubscribed ? "Subscribed" : "Free"}</b>
          </p>
        </div>

        <div style={s.headerActions}>
          <Link href="/subscriptions">
            <button style={user.isSubscribed ? s.btnGhost : s.btnPrimary}>
              {user.isSubscribed ? "Manage Subscription" : "Upgrade to Earn"}
            </button>
          </Link>
          <button style={s.btnGhost} onClick={() => alert("Hook this to your sign out logic")}>
            Sign out
          </button>
        </div>
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

      <main style={s.main}>
        {active === "Dashboard" && (
          <section style={s.card}>
            <h2 style={s.h2}>Overview</h2>
            <div style={s.grid}>
              <Stat label="Points" value={user.points} />
              <Stat label="USDT Balance" value={user.usdtBalance} />
              <Stat label="Subscription" value={user.isSubscribed ? "Active" : "Not active"} />
              <Stat label="Next action" value={user.isSubscribed ? "Start earning" : "Upgrade to earn"} />
            </div>

            {!user.isSubscribed && (
              <div style={s.notice}>
                <b>Free tier:</b> You can browse Jobs + Blog and track points.{" "}
                <b>Earnings are locked</b> until subscription.
              </div>
            )}
          </section>
        )}

        {active === "Jobs" && (
          <section style={s.card}>
            <h2 style={s.h2}>Jobs</h2>
            {loadingJobs ? (
              <p>Loading jobs…</p>
            ) : jobs.length === 0 ? (
              <p>No jobs yet. (Connect backend later.)</p>
            ) : (
              jobs.map((j) => (
                <div key={j.id} style={s.row}>
                  <div>
                    <b>{j.title}</b>
                    <div style={s.muted}>{j.company} • {j.location}</div>
                  </div>
                  <button style={s.btnGhost}>View</button>
                </div>
              ))
            )}
          </section>
        )}

        {active === "Wallet" && (
          <section style={s.card}>
            <h2 style={s.h2}>Wallet</h2>
            <p style={s.muted}>
              Fiat-first for now. Wallet section shows balances and (later) deposit/withdraw.
            </p>

            <div style={s.grid}>
              <Stat label="Fiat (NGN/USD)" value="Coming soon" />
              <Stat label="USDT" value={user.usdtBalance} />
              <Stat label="Withdrawal" value={user.isSubscribed ? "Enabled" : "Locked"} />
              <Stat label="KYC" value="Planned" />
            </div>

            {!user.isSubscribed && (
              <div style={s.notice}>
                Withdrawals/Earnings require an active subscription.
              </div>
            )}
          </section>
        )}

        {active === "Blog" && (
          <section style={s.card}>
            <h2 style={s.h2}>Blog</h2>
            {loadingPosts ? (
              <p>Loading posts…</p>
            ) : (
              posts.map((p) => (
                <div key={p.id} style={s.row}>
                  <div>
                    <b>{p.title}</b>
                    <div style={s.muted}>{p.excerpt}</div>
                  </div>
                  <button style={s.btnGhost}>Read</button>
                </div>
              ))
            )}
          </section>
        )}

        {active === "Earnings" && (
          <section style={s.card}>
            <h2 style={s.h2}>Earnings</h2>

            {!user.isSubscribed ? (
              <div style={s.locked}>
                <p style={{ margin: 0 }}>
                  <b>Locked:</b> Earnings are available only to subscribed users.
                </p>
                <Link href="/subscriptions">
                  <button style={{ ...s.btnPrimary, marginTop: 12 }}>Subscribe to Enable Earnings</button>
                </Link>
              </div>
            ) : (
              <>
                <p style={s.muted}>
                  Subscribed users can earn and withdraw (fiat-first). Add your earning logic here.
                </p>
                <div style={s.grid}>
                  <Stat label="Earnings" value="0" />
                  <Stat label="Pending" value="0" />
                  <Stat label="Last payout" value="—" />
                  <Stat label="Withdrawal status" value="Ready" />
                </div>
              </>
            )}
          </section>
        )}
      </main>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div style={s.stat}>
      <div style={s.muted}>{label}</div>
      <div style={s.statValue}>{value}</div>
    </div>
  );
}

const s = {
  page: { minHeight: "100vh", padding: 18, maxWidth: 980, margin: "0 auto" },
  header: { display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start" },
  h1: { margin: 0, fontSize: 28, fontWeight: 800 },
  h2: { margin: 0, fontSize: 18, fontWeight: 800 },
  sub: { margin: "6px 0 0", opacity: 0.75 },
  headerActions: { display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" },
  tabs: { display: "flex", gap: 8, marginTop: 14, overflowX: "auto", paddingBottom: 6 },
  tab: { padding: "10px 12px", borderRadius: 10, border: "1px solid #1e293b", background: "transparent", cursor: "pointer" },
  tabActive: { padding: "10px 12px", borderRadius: 10, border: "1px solid #1e293b", background: "#0b1220", cursor: "pointer" },
  main: { marginTop: 14, display: "flex", flexDirection: "column", gap: 12 },
  card: { border: "1px solid #1e293b", borderRadius: 14, padding: 14 },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 10, marginTop: 12 },
  stat: { border: "1px solid #1e293b", borderRadius: 12, padding: 12 },
  statValue: { marginTop: 6, fontSize: 18, fontWeight: 800 },
  muted: { opacity: 0.75, fontSize: 13 },
  row: { display: "flex", justifyContent: "space-between", gap: 12, padding: "10px 0", borderBottom: "1px solid rgba(30,41,59,0.5)" },
  notice: { marginTop: 12, padding: 12, borderRadius: 12, border: "1px dashed #1e293b", opacity: 0.9 },
  locked: { marginTop: 10, padding: 12, borderRadius: 12, border: "1px solid #1e293b" },
  btnPrimary: { padding: "10px 12px", borderRadius: 10, border: "none", fontWeight: 700, background: "#22d3ee", cursor: "pointer" },
  btnGhost: { padding: "10px 12px", borderRadius: 10, border: "1px solid #1e293b", background: "transparent", cursor: "pointer" },
};
