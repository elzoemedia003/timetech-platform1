import { useRouter } from "next/router";
import DashboardNav from "./DashboardNav";

export default function Layout({ children }) {
  const router = useRouter();

  const isOnboarding =
    router.pathname.startsWith("/onboarding") ||
    router.pathname.startsWith("/auth");

  return (
    <>
      {!isOnboarding && <DashboardNav />}
      <main>{children}</main>
    </>
  );
}
