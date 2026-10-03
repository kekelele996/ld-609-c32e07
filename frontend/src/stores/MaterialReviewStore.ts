import { defineStore } from "pinia";
import { listMaterialReview } from "../api/MaterialReview";
export const useMaterialReviewStore = defineStore("materialReview", {
  state: () => ({ rows: [] as Awaited<ReturnType<typeof listMaterialReview>>, loading: false }),
  actions: { async load() { this.loading = true; this.rows = await listMaterialReview(); this.loading = false; } }
});
