import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const isActive = (path) => router.pathname === path;

  return (
    <header
      style={{
        borderBottom: "1px solid #111827",
        background:
          "radial-gradient(circle at top, #02091c 0, rgba(2,6,23,0.96) 40%, #020617 100%)",
        backdropFilter: "blur(16px)"
      }}
    >
      <div
        className="page-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBlock: "0.9rem"
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: "999px",
              background:
                "conic-gradient(from 180deg, #22d3ee, #0ea5e9, #22c55e, #22d3ee)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 25px rgba(56,189,248,0.6)"
            }}
          >
            <span
              style={{
                fontSize: 14,
                fontWeight: 800,
                color: "#020617"
              }}
            >
              T
            </span>
          </div>

          <span style={{ fontWeight: 600, letterSpacing: 0.5 }}>
            TimeTech<span style={{ color: "#22d3ee" }}>.jobs</span>
          </span>

          <span
            className="badge-soft"
            style={{ marginLeft: 6, fontSize: 10, textTransform: "uppercase" }}
          >
            Web3 • Solana • Remote
          </span>
        </div>

        {/* Navigation */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            fontSize: "0.86rem"
          }}
        >
          <Link href="/">
            <span
              style={{
                color: isActive("/") ? "#e5e7eb" : "#9ca3af",
                fontWeight: isActive("/") ? 600 : 400,
                cursor: "pointer"
              }}
            >
              Home
            </span>
          </Link>

          <Link href="/auth/login">
            <button className="btn-outline">Sign in</button>
          </Link>

          <Link href="/auth/register">
            <button className="btn-primary">Get Started</button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
