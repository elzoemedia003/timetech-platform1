import axios from "axios";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "";

if (!API_BASE) {
  console.warn(
    "NEXT_PUBLIC_API_URL is not set. Backend calls will fail until you configure it."
  );
}

const api = axios.create({
  baseURL: API_BASE,
  timeout: 15000
});

export async function fetchJobs(params = {}) {
  const res = await api.get("/api/jobs", { params });
  return res.data;
}

export async function fetchUser(userId) {
  const res = await api.get(`/api/users/${userId}`);
  return res.data;
}

export async function awardPoints(userId, payload) {
  const res = await api.post(`/api/users/${userId}/points`, payload);
  return res.data;
}

export async function startSubscription(payload) {
  const res = await api.post("/api/payments/subscribe", payload);
  return res.data;
}

export async function triggerJobSync() {
  const res = await api.post("/api/admin/sync-jobs");
  return res.data;
}
