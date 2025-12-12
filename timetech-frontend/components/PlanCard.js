export default function PlanCard({ name, price, tag, features, onSelect }) {
  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h3 style={{ margin: 0, fontSize: "1rem" }}>{name}</h3>
          <p style={{ margin: "0.25rem 0", fontSize: 12, color: "#9ca3af" }}>
            {tag}
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <span style={{ fontSize: 11, color: "#6b7280" }}>from</span>
          <p
            style={{
              margin: 0,
              fontSize: 18,
              fontWeight: 600,
              color: "#22d3ee"
            }}
          >
            {price}
          </p>
          <p style={{ margin: 0, fontSize: 11, color: "#6b7280" }}>/month</p>
        </div>
      </div>

      <ul
        style={{
          margin: "0.75rem 0 0.9rem",
          paddingLeft: "1rem",
          fontSize: 12,
          color: "#9ca3af"
        }}
      >
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <button className="btn-primary" style={{ width: "100%" }} onClick={onSelect}>
        Subscribe
      </button>
    </div>
  );
}
