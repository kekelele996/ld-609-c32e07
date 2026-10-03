import { defineStore } from "pinia";
import { listCitizenAppointment } from "../api/CitizenAppointment";
export const useCitizenAppointmentStore = defineStore("citizenAppointment", {
  state: () => ({ rows: [] as Awaited<ReturnType<typeof listCitizenAppointment>>, loading: false }),
  actions: { async load() { this.loading = true; this.rows = await listCitizenAppointment(); this.loading = false; } }
});
