import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  { href: "/dashboard", label: "Overview" },
  { href: "/subscriptions", label: "Subscriptions" },
  { href: "/referrals", label: "Referrals" },
  { href: "/wallet", label: "Wallet" },
  { href: "/admin", label: "Admin" }
];

export default function DashboardSidebar() {
  const router = useRouter();
  const isActive = (href) => router.pathname === href;

  return (
    <aside
      style={{
        borderRight: "1px solid #0f172a",
        padding: "1.2rem 1rem",
        background:
          "radial-gradient(circle at top, #02091c 0, rgba(15,23,42,0.98) 45%, #020617 100%)"
      }}
    >
      <p
        style={{
          fontSize: 11,
          letterSpacing: 1.2,
          textTransform: "uppercase",
          color: "#6b7280",
          marginBottom: 10
        }}
      >
        Control Center
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <div
              style={{
                padding: "0.55rem 0.6rem",
                borderRadius: 8,
                fontSize: 13,
                cursor: "pointer",
                color: isActive(link.href) ? "#e5e7eb" : "#9ca3af",
                background: isActive(link.href)
                  ? "linear-gradient(135deg, rgba(34,211,238,0.16), rgba(14,165,233,0.08))"
                  : "transparent"
              }}
            >
              {link.label}
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}
