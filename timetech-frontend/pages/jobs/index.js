import { useEffect, useState } from "react";
import JobCard from "../../components/JobCard";
import { fetchJobs } from "../../lib/api";

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadJobs() {
    try {
      setLoading(true);
      setError("");
      const data = await fetchJobs({
        search: search || undefined,
        category
      });
      setJobs(data.jobs || []);
    } catch (err) {
      console.error(err);
      setError("Unable to load jobs. Check your backend URL.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2 style={{ marginTop: 10, marginBottom: 4 }}>Web3 & Remote Jobs</h2>
      <p style={{ marginTop: 0, fontSize: 13, color: "#9ca3af" }}>
        These roles are fetched from RemoteOK, Web3.career and CryptoJobsList,
        then unified by your backend.
      </p>

      <div
        className="card"
        style={{
          marginTop: 16,
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          alignItems: "center"
        }}
      >
        <input
          placeholder="Search by title or company (e.g. Solidity, Rust, DeFi)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: 1, minWidth: 220 }}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ maxWidth: 160 }}
        >
          <option value="all">All categories</option>
          <option value="engineering">Engineering</option>
          <option value="growth">Growth</option>
          <option value="research">Research</option>
          <option value="design">Design</option>
        </select>
        <button className="btn-primary" onClick={loadJobs}>
          Refresh
        </button>
      </div>

      {error && (
        <p style={{ marginTop: 12, fontSize: 12, color: "#f97373" }}>{error}</p>
      )}

      <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 12 }}>
        {loading ? (
          <p style={{ fontSize: 13, color: "#9ca3af" }}>Loading jobs…</p>
        ) : jobs.length === 0 ? (
          <p style={{ fontSize: 13, color: "#9ca3af" }}>No jobs found.</p>
        ) : (
          jobs.map((job) => <JobCard key={job.id} job={job} />)
        )}
      </div>
    </div>
  );
}
