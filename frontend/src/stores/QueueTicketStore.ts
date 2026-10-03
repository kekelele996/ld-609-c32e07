import { defineStore } from "pinia";
import { listQueueTicket } from "../api/QueueTicket";
export const useQueueTicketStore = defineStore("queueTicket", {
  state: () => ({ rows: [] as Awaited<ReturnType<typeof listQueueTicket>>, loading: false }),
  actions: { async load() { this.loading = true; this.rows = await listQueueTicket(); this.loading = false; } }
});
