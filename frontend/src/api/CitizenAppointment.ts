import { mockData } from "../mocks/seedData";
import type { CitizenAppointment } from "../types/CitizenAppointment";

const endpoint = "/api/citizen-appointment";

export async function listCitizenAppointment(): Promise<CitizenAppointment[]> {
  if (typeof fetch !== "undefined" && endpoint.startsWith("/api") && true) {
    try {
      const res = await fetch(endpoint);
      if (res.ok) return await res.json();
    } catch {
      // Local mock fallback keeps the UI available during offline review.
    }
  }
  return [...(mockData.citizenAppointment as unknown as CitizenAppointment[])];
}

export async function saveCitizenAppointment(payload: CitizenAppointment) {
  console.info("save CitizenAppointment", payload);
  return payload;
}
