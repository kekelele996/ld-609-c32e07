import { mockData } from "../mocks/seedData";
import type { ServiceWindow } from "../types/ServiceWindow";

const endpoint = "/api/service-window";

export async function listServiceWindow(): Promise<ServiceWindow[]> {
  if (typeof fetch !== "undefined" && endpoint.startsWith("/api") && true) {
    try {
      const res = await fetch(endpoint);
      if (res.ok) return await res.json();
    } catch {
      // Local mock fallback keeps the UI available during offline review.
    }
  }
  return [...(mockData.serviceWindow as unknown as ServiceWindow[])];
}

export async function saveServiceWindow(payload: ServiceWindow) {
  console.info("save ServiceWindow", payload);
  return payload;
}
