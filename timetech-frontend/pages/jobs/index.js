import { useEffect, useState } from "react";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      try {
        // TEMP placeholder – backend URL comes later
        // const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/jobs");
        // const data = await res.json();
        // setJobs(data);

        setJobs([]); // keeps UI working for now
      } catch (err) {
        console.error("Failed to fetch jobs", err);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Jobs</h1>

      {loading && <p>Loading jobs...</p>}

      {!loading && jobs.length === 0 && (
        <p>Free-tier Web3 & remote jobs available here.</p>
      )}

      {jobs.map((job) => (
        <div key={job.id} style={{ marginBottom: 12 }}>
          <strong>{job.title}</strong>
          <p>{job.company}</p>
        </div>
      ))}
    </div>
  );
}
