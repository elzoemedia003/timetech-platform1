import Link from "next/link";
import { useRouter } from "next/router";

export default function DashboardNav() {
  const router = useRouter();

  function signOut() {
    router.push("/auth/login");
  }

  return (
    <nav style={styles.nav}>
      <Link href="/dashboard">Home</Link>
      <Link href="/dashboard/jobs">Jobs</Link>
      <Link href="/dashboard/plans">Plans</Link>
      <Link href="/dashboard/wallet">Wallet</Link>
      <Link href="/dashboard/referrals">Referrals</Link>

      <button onClick={signOut} style={styles.logout}>
        Sign out
      </button>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "16px",
    padding: "16px",
    borderBottom: "1px solid #1e293b",
  },
  logout: {
    marginLeft: "auto",
    background: "transparent",
    color: "#f87171",
    border: "none",
    cursor: "pointer",
  },
};
