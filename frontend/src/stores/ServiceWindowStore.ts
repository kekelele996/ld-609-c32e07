import { defineStore } from "pinia";
import { listServiceWindow } from "../api/ServiceWindow";
export const useServiceWindowStore = defineStore("serviceWindow", {
  state: () => ({ rows: [] as Awaited<ReturnType<typeof listServiceWindow>>, loading: false }),
  actions: { async load() { this.loading = true; this.rows = await listServiceWindow(); this.loading = false; } }
});
