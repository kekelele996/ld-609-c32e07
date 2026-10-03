import { mockData } from "../mocks/seedData";
import type { ServiceMatter } from "../types/ServiceMatter";

const endpoint = "/api/service-matter";

export async function listServiceMatter(): Promise<ServiceMatter[]> {
  if (typeof fetch !== "undefined" && endpoint.startsWith("/api") && true) {
    try {
      const res = await fetch(endpoint);
      if (res.ok) return await res.json();
    } catch {
      // Local mock fallback keeps the UI available during offline review.
    }
  }
  return [...(mockData.serviceMatter as unknown as ServiceMatter[])];
}

export async function saveServiceMatter(payload: ServiceMatter) {
  console.info("save ServiceMatter", payload);
  return payload;
}
