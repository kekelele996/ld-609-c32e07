import { defineStore } from "pinia";
import { listServiceMatter } from "../api/ServiceMatter";
export const useServiceMatterStore = defineStore("serviceMatter", {
  state: () => ({ rows: [] as Awaited<ReturnType<typeof listServiceMatter>>, loading: false }),
  actions: { async load() { this.loading = true; this.rows = await listServiceMatter(); this.loading = false; } }
});
