import { useRouter } from "next/router";

export default function Step3() {
  const router = useRouter();

  return (
    <div style={styles.container}>
      <div>
        <h2 style={styles.title}>Choose a Plan</h2>

        <div style={styles.card}>Starter – Earn points</div>
        <div style={styles.card}>Pro – Earn USDT + points</div>
        <div style={styles.card}>Full – Profit share + bonuses</div>
      </div>

      <button style={styles.button} onClick={() => router.push("/onboarding/step-4")}>
        Continue
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
  card: {
    marginTop: "12px",
    padding: "16px",
    borderRadius: "12px",
    background: "#020617",
    border: "1px solid #1e293b",
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
