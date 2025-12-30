import Link from "next/link";

export default function Home() {
  return (
    <main style={styles.container}>
      <section style={styles.hero}>
        <h1 style={styles.title}>TimeTech</h1>

        <section style={styles.about}>
          <p style={styles.text}>
            <strong>TimeTech is a Web3-powered business and career hub</strong>{" "}
            designed to connect talent, businesses, and capital in one practical
            system.
          </p>

          <p style={styles.text}>
            It bridges fiat payments with crypto-native infrastructure, letting
            users discover jobs, complete tasks, earn rewards, and access
            opportunities using familiar tools—while benefiting from blockchain
            speed and transparency in the background.
          </p>

          <p style={styles.text}>
            Professionals access verified roles, dashboards, and progression
            tiers. Businesses hire talent, advertise services, and gain
            visibility to partners and investors. Subscriptions unlock higher
            tiers, while free users still participate through points.
          </p>

          <p style={styles.text}>
            TimeTech is built for real-world adoption—using Web3 as
            infrastructure, not hype.
          </p>
        </section>

        <div style={styles.actions}>
          <Link href="/jobs">
            <button style={styles.primary}>Browse Jobs</button>
          </Link>

          <Link href="/blog">
            <button style={styles.secondary}>Read Insights</button>
          </Link>

          <Link href="/explore">
            <button style={styles.secondary}>Explore Platform</button>
          </Link>
        </div>

        <p style={styles.note}>No sign-up required. Free tier access available.</p>
      </section>
    </main>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "24px",
  },
  hero: {
    width: "100%",
    maxWidth: "900px",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  title: {
    fontSize: "40px",
    fontWeight: "800",
    letterSpacing: "-1px",
    margin: 0,
  },
  about: {
    lineHeight: "1.7",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.6",
    opacity: 0.92,
    margin: 0,
  },
  actions: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginTop: "10px",
  },
  primary: {
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    fontWeight: "600",
    background: "#22d3ee",
    cursor: "pointer",
  },
  secondary: {
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #1e293b",
    background: "transparent",
    cursor: "pointer",
  },
  note: {
    fontSize: "13px",
    opacity: 0.7,
    marginTop: "6px",
    marginBottom: 0,
  },
};
<div style={{ display: "flex", gap: "12px", marginTop: "18px" }}>
  <Link href="/auth/login">
    <button style={styles.secondary}>Sign In</button>
  </Link>

  <Link href="/auth/register">
    <button style={styles.primary}>Create Account</button>
  </Link>
</div>
