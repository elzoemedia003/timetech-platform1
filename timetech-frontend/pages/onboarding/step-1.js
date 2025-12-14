import { useRouter } from "next/router";

export default function Step1() {
  const router = useRouter();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Turn Web3 skills into <span style={styles.accent}>recurring USDT</span>
      </h1>

      <p style={styles.text}>
        TimeTech scans Web3 jobs, matches your skills, and rewards active users.
      </p>

      <button style={styles.button} onClick={() => router.push("/onboarding/step-2")}>
        Next
      </button>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    maxWidth: "420px",
    margin: "0 auto",
  },
  title: { fontSize: "28px", fontWeight: "700" },
  accent: { color: "#22d3ee" },
  text: { marginTop: "16px", color: "#94a3b8" },
  button: {
    padding: "14px",
    borderRadius: "10px",
    background: "#22d3ee",
    border: "none",
    fontSize: "16px",
    fontWeight: "600",
  },
};
