import { mockData } from "../mocks/seedData";
import type { MaterialReview } from "../types/MaterialReview";

const endpoint = "/api/material-review";

export async function listMaterialReview(): Promise<MaterialReview[]> {
  if (typeof fetch !== "undefined" && endpoint.startsWith("/api") && true) {
    try {
      const res = await fetch(endpoint);
      if (res.ok) return await res.json();
    } catch {
      // Local mock fallback keeps the UI available during offline review.
    }
  }
  return [...(mockData.materialReview as unknown as MaterialReview[])];
}

export async function saveMaterialReview(payload: MaterialReview) {
  console.info("save MaterialReview", payload);
  return payload;
}
