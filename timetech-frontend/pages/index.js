import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "24px", maxWidth: "900px", margin: "0 auto" }}>
      
      <h1 style={{ fontSize: "36px", fontWeight: "800" }}>TimeTech</h1>

      <section style={{ marginTop: "20px", lineHeight: "1.7" }}>
        <p>
          <strong>TimeTech is a Web3-powered business and career hub</strong>
          designed to connect talent, businesses, and capital in one practical
          system.
        </p>

        <p>
          It bridges traditional fiat payments with crypto-native infrastructure,
          allowing users to discover jobs, complete tasks, earn rewards, and
          access opportunities using familiar tools—while benefiting from
          blockchain speed and transparency in the background.
        </p>

        <p>
          Professionals access verified roles, dashboards, and progression tiers.
          Businesses hire talent, advertise services, and gain visibility to
          partners and investors. Subscriptions unlock higher tiers, while free
          users remain active through point-based participation.
        </p>

        <p>
          TimeTech is built for real-world adoption—using Web3 as infrastructure,
          not hype.
        </p>
      </section>

      <section style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
        <Link href="/jobs"><button>Browse Jobs</button></Link>
        <Link href="/blog"><button>Read Insights</button></Link>
        <Link href="/explore"><button>Explore Platform</button></Link>
      </section>

    </main>
  );
}


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
