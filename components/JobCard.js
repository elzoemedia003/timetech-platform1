import Link from "next/link";

export default function JobCard({ job }) {
  return (
    <div className="card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "0.75rem",
          alignItems: "flex-start"
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.55rem" }}>
            <h3 style={{ margin: 0, fontSize: "1rem" }}>{job.title}</h3>
            {job.verified && <span className="chip">Verified</span>}
          </div>
          <p style={{ margin: "0.25rem 0 0.1rem", color: "#9ca3af", fontSize: 13 }}>
            {job.company} • {job.location || "Remote"}
          </p>
          <p style={{ margin: "0.35rem 0 0", fontSize: 12, color: "#6b7280" }}>
            {job.category || "Web3"} • {job.type || "Full-time"}
          </p>
        </div>

        <div style={{ textAlign: "right" }}>
          {job.salary && (
            <p style={{ margin: 0, fontSize: 12, color: "#a5b4fc" }}>{job.salary}</p>
          )}
          <p style={{ margin: "0.35rem 0 0", fontSize: 11, color: "#64748b" }}>
            Source: {job.source || "Unknown"}
          </p>
        </div>
      </div>

      {job.description && (
        <p
          style={{
            marginTop: "0.7rem",
            fontSize: 13,
            color: "#9ca3af",
            lineHeight: 1.5
          }}
        >
          {job.description.slice(0, 220)}
          {job.description.length > 220 ? "…" : ""}
        </p>
      )}

      <div
        style={{
          marginTop: "0.75rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {(job.skills || []).slice(0, 4).map((s) => (
            <span key={s} className="badge-soft">
              {s}
            </span>
          ))}
        </div>
        <Link href={`/jobs/${encodeURIComponent(job.id)}`}>
          <button className="btn-primary" style={{ fontSize: 12 }}>
            View Role
          </button>
        </Link>
      </div>
    </div>
  );
}
