import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
          gap: "2rem",
          alignItems: "center",
          marginTop: "2.5rem"
        }}
      >
        <div>
          <div className="chip" style={{ marginBottom: 12 }}>
            Solana • Web3 • Curated jobs
          </div>
          <h1
            style={{
              margin: 0,
              fontSize: 34,
              lineHeight: 1.1
            }}
          >
            Turn{" "}
            <span style={{ color: "#22d3ee" }}>Web3 skills</span> into
            recurring USDT income.
          </h1>
          <p
            style={{
              marginTop: 14,
              color: "#9ca3af",
              fontSize: 14,
              maxWidth: 480,
              lineHeight: 1.6
            }}
          >
            TimeTech scans remote & on-chain jobs, scores them against your
            skills, and splits platform profits with active subscribers.
          </p>

          <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
            <Link href="/subscriptions">
              <button className="btn-primary">View Plans</button>
            </Link>
            <Link href="/jobs">
              <button className="btn-outline">Browse Jobs</button>
            </Link>
          </div>

          <p
            style={{
              marginTop: 14,
              fontSize: 11,
              color: "#6b7280"
            }}
          >
            Built for Web3 builders, analysts, devs, and degen researchers.
          </p>
        </div>

        <div className="card">
          <p
            style={{
              fontSize: 12,
              color: "#9ca3af",
              marginTop: 0,
              marginBottom: 10
            }}
          >
            Live snapshot
          </p>
          <div className="grid-2">
            <div>
              <p style={{ margin: 0, fontSize: 11, color: "#9ca3af" }}>
                Active Web3 roles
              </p>
              <p
                style={{
                  margin: "0.35rem 0",
                  fontSize: 22,
                  fontWeight: 600,
                  color: "#22d3ee"
                }}
              >
                128
              </p>
              <p style={{ margin: 0, fontSize: 11, color: "#6b7280" }}>
                From RemoteOK, Web3.career, and curated feeds.
              </p>
            </div>
            <div>
              <p style={{ margin: 0, fontSize: 11, color: "#9ca3af" }}>
                Avg. payout (monthly)
              </p>
              <p
                style={{
                  margin: "0.35rem 0",
                  fontSize: 22,
                  fontWeight: 600,
                  color: "#4ade80"
                }}
              >
                $2,450
              </p>
              <p style={{ margin: 0, fontSize: 11, color: "#6b7280" }}>
                Across dev, research, growth & community roles.
              </p>
            </div>
          </div>

          <div
            style={{
              marginTop: 20,
              padding: "0.8rem",
              borderRadius: 10,
              border: "1px dashed #1e293b",
              background:
                "radial-gradient(circle at top, rgba(34,211,238,0.09), transparent)"
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 11,
                color: "#9ca3af"
              }}
            >
              New subscribers earn points from every task. Points convert into
              TimeTech tokens at launch.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
