import { useRouter } from "next/router";
import DashboardNav from "./DashboardNav";

export default function Layout({ children }) {
  const router = useRouter();

  const hideNav =
    router.pathname.startsWith("/onboarding") ||
    router.pathname.startsWith("/auth");

  return (
    <>
      {!hideNav && <DashboardNav />}
      <main>{children}</main>
    </>
  );
}
