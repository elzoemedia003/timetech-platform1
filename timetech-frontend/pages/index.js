import Link from "next/link";

export default function Home() {
  return (
    <main style={styles.container}>
      <section style={styles.hero}>
        <h1 style={styles.title}>TimeTech</h1>

        <p style={styles.text}>
          <strong>TimeTech is a Web3-powered business and career hub</strong>{" "}
          built to connect talent, businesses, and capital in one practical
          ecosystem.
        </p>

        <p style={styles.text}>
          We bridge traditional fiat payments with crypto-native infrastructure,
          enabling users to discover opportunities, earn rewards, and scale
          across both worlds—without friction.
        </p>

        <p style={styles.text}>
          Jobs, wallets, dashboards, and earnings unlock after account creation.
          Subscriptions enable earning, while free users can explore the platform
          safely.
        </p>

        <div style={styles.actions}>
          <Link href="/signup">
            <button style={styles.primary}>Create Account</button>
          </Link>

          <Link href="/login">
            <button style={styles.secondary}>Sign In</button>
          </Link>
        </div>

        <p style={styles.note}>
          No public access. Features unlock after login.
        </p>
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
    maxWidth: "720px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  title: {
    fontSize: "42px",
    fontWeight: "800",
    letterSpacing: "-1px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.6",
    opacity: 0.9,
  },
  actions: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginTop: "12px",
  },
  primary: {
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    fontWeight: "700",
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
  },
};
