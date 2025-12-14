import { useRouter } from "next/router";

export default function Step2() {
  const router = useRouter();

  return (
    <div style={styles.container}>
      <div>
        <h2 style={styles.title}>How TimeTech Works</h2>

        <ul style={styles.list}>
          <li>🔍 Scan Web3 & Remote jobs</li>
          <li>🧠 Match against your skills</li>
          <li>💰 Earn USDT + points</li>
        </ul>
      </div>

      <button style={styles.button} onClick={() => router.push("/onboarding/step-3")}>
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
  title: { fontSize: "24px", fontWeight: "700" },
  list: {
    marginTop: "20px",
    color: "#cbd5f5",
    lineHeight: "2",
  },
  button: {
    padding: "14px",
    borderRadius: "10px",
    background: "#22d3ee",
    border: "none",
    fontSize: "16px",
    fontWeight: "600",
  },
};
