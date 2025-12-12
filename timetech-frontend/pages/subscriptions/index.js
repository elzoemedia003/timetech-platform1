import { useState } from "react";
import DashboardSidebar from "../../components/DashboardSidebar";
import PlanCard from "../../components/PlanCard";
import { startSubscription } from "../../lib/api";

const PLANS = [
  {
    id: 1,
    name: "Basic",
    price: "$20",
    tag: "New builders",
    backendId: 1,
    features: [
      "Job feed preview (10 roles/day)",
      "Points only (no USDT share)",
      "Longer withdrawal cycle: 45 days"
    ]
  },
  {
    id: 2,
    name: "Starter",
    price: "$50",
    tag: "Serious hunters",
    backendId: 2,
    features: [
      "Full job feed",
      "USDT + points",
      "10% referral commission"
    ]
  },
  {
    id: 3,
    name: "Pro",
    price: "$200",
    tag: "Full-time on-chain",
    backendId: 3,
    features: [
      "Priority roles & private calls",
      "Higher USDT share",
      "13.5% referral commission"
    ]
  },
  {
    id: 4,
    name: "Alpha",
    price: "$500",
    tag: "High conviction",
    backendId: 4,
    features: [
      "Premium job flow",
      "15% referral commission",
      "Priority support & intros"
    ]
  }
];

function getLocalUser() {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem("timetech_user");
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export default function SubscriptionsPage() {
  const [loadingPlan, setLoadingPlan] = useState(null);
  const [message, setMessage] = useState("");

  async function handleSubscribe(plan) {
    const user = getLocalUser();
    if (!user) {
      alert("Sign in first. Then wire login to backend when ready.");
      return;
    }
    setMessage("");
    setLoadingPlan(plan.id);
    try {
      const data = await startSubscription({
        userId: user.id,
        planId: plan.backendId,
        method: "paystack"
      });

      if (data.authorization_url) {
        window.location.href = data.authorization_url;
      } else {
        setMessage("Subscription initialized. Complete on Paystack.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Subscription failed. Check backend config.");
    } finally {
      setLoadingPlan(null);
    }
  }

  return (
    <div className="dashboard-layout">
      <DashboardSidebar />
      <div style={{ padding: "1.5rem 1.5rem 2.5rem" }}>
        <h2 style={{ marginTop: 0, marginBottom: 6 }}>Plans & subscriptions</h2>
        <p style={{ marginTop: 0, fontSize: 13, color: "#9ca3af" }}>
          Upgrade to unlock more jobs, profit share, and referral levels.
        </p>

        {message && (
          <p style={{ marginTop: 10, fontSize: 12, color: "#f97373" }}>{message}</p>
        )}

        <div className="grid-3" style={{ marginTop: 18 }}>
          {PLANS.map((plan) => (
            <PlanCard
              key={plan.id}
              name={plan.name}
              price={plan.price}
              tag={plan.tag}
              features={plan.features}
              onSelect={() => handleSubscribe(plan)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
