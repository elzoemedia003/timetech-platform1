export default function StatCard({ label, value, hint, tone = "neutral" }) {
  const toneColor =
    tone === "success"
      ? "#4ade80"
      : tone === "danger"
      ? "#f97373"
      : tone === "warning"
      ? "#facc15"
      : "#e5e7eb";

  return (
    <div className="card">
      <p style={{ margin: 0, fontSize: 12, color: "#9ca3af" }}>{label}</p>
      <p
        style={{
          margin: "0.4rem 0 0.35rem",
          fontSize: 20,
          fontWeight: 600,
          color: toneColor
        }}
      >
        {value}
      </p>
      {hint && (
        <p style={{ margin: 0, fontSize: 11, color: "#6b7280" }}>{hint}</p>
      )}
    </div>
  );
}
