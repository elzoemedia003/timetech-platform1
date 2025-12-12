import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchJobs } from "../../lib/api";

export default function JobDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  async function loadJob() {
    if (!id) return;
    setLoading(true);
    try {
      const data = await fetchJobs({ limit: 200 });
      const found = (data.jobs || []).find((j) => String(j.id) === String(id));
      setJob(found || null);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadJob();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading || !id) {
    return <p>Loading role…</p>;
  }

  if (!job) {
    return <p>Job not found. It may have expired.</p>;
  }

  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
        <div>
          <h2 style={{ margin: 0 }}>{job.title}</h2>
          <p style={{ margin: "0.25rem 0", color: "#9ca3af", fontSize: 13 }}>
            {job.company} • {job.location || "Remote"}
          </p>
          <p style={{ margin: 0, fontSize: 12, color: "#6b7280" }}>
            {job.category || "Web3"} • {job.type || "Full-time"}
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          {job.salary && (
            <p style={{ margin: 0, fontSize: 13, color: "#a5b4fc" }}>
              {job.salary}
            </p>
          )}
          <p style={{ margin: "0.3rem 0 0", fontSize: 11, color: "#64748b" }}>
            Source: {job.source || "Unknown"}
          </p>
        </div>
      </div>

      <p
        style={{
          marginTop: "0.9rem",
          fontSize: 13,
          color: "#e5e7eb",
          lineHeight: 1.6
        }}
      >
        {job.description || "No description provided by source."}
      </p>
    </div>
  );
}
