import Link from "next/link";

export default function Home() {
  return (
    <main style={styles.container}>
      <section style={styles.hero}>
        <h1 style={styles.title}>TimeTech</h1>

        <p style={styles.text}>
          A Web3-powered business and career hub bridging fiat and crypto.
        </p>

        <p style={styles.text}>
          Access jobs, wallets, dashboards, and earning tools through structured
          subscription tiers designed for real adoption.
        </p>

        <div style={styles.actions}>
          <Link href="/subscriptions">
            <button style={styles.primary}>View Subscription Packages</button>
          </Link>

          <p style={styles.note}>
            Choose a plan to continue. Account setup follows plan selection.
          </p
