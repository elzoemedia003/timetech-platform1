import { useRouter } from "next/router";

export default function Step4() {
  const router = useRouter();

  return (
    <div style={styles.container}>
      <div>
        <h2 style={styles.title}>Create your account</h2>
        <input style={styles.input} placeholder="Email address" />
      </div>

      <button style={styles.button} onClick={() => router.push("/dashboard")}>
        Get Started
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
  input: {
    marginTop: "20px",
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #1e293b",
    background: "#020617",
    color: "#fff",
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
