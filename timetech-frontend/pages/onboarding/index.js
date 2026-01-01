import Link from "next/link";

export default function Home() {
  return (
    <main style={styles.container}>
      <section style={styles.hero}>
        <h1 style={styles.title}>TimeTech</h1>

        <p style={styles.text}>
          TimeTech is a Web3-powered business and career hub built to bridge
          traditional fiat systems with crypto-native infrastructure.
        </p>

        <p style={styles.text}>
          Access structured opportunities, dashboards, wallets, and earning
          tools through subscription tiers designed for real-world adoption.
        </p>

        <div style={styles.actions}>
          <Link href="/subscriptions">
            <button style={styles.primary}>
              View Subscription Packages
            </button>
          </Link>
        </div>

        <p style={styles.note}>
          Choose a plan to continue. Account setup follows plan selection.
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
    justifyContent: "center",
    marginTop: "12px",
  },
  primary: {
    padding: "14px 20px",
    borderRadius: "10px",
    border: "none",
    fontWeight: "700",
    background: "#22d3ee",
    cursor: "pointer",
  },
  note: {
    fontSize: "13px",
    opacity: 0.7,
    marginTop: "8px",
  },
};
