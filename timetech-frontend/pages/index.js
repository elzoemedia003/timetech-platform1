import Link from "next/link";

export default function Home() {
  return (
    <main style={styles.container}>
      <section style={styles.hero}>
        <h1 style={styles.title}>TimeTech</h1>

        <p style={styles.text}>
          I’m Daniel, a full-stack developer building at the intersection of
          modern web platforms and Web3 infrastructure. Through TimeTech, I’m
          creating a system that bridges fiat and crypto using intuitive design,
          scalable APIs, and secure third-party integrations.
        </p>

        <p style={styles.text}>
          TimeTech is designed to feel familiar to everyday users while enabling
          access to Web3 opportunities—starting free, with optional upgrades as
          users grow.
        </p>

        <div style={styles.actions}>
          <Link href="/jobs">
            <button style={styles.primary}>Browse Jobs</button>
          </Link>

          <Link href="/blog">
            <button style={styles.secondary}>Read Blog</button>
          </Link>

          <Link href="/explore">
            <button style={styles.secondary}>Explore Platform</button>
          </Link>
        </div>

        <p style={styles.note}>
          No sign-up required. Free tier access available.
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
    fontSize: "40px",
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
  },
};
