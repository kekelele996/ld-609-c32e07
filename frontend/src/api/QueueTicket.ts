import { mockData } from "../mocks/seedData";
import type { QueueTicket } from "../types/QueueTicket";

const endpoint = "/api/queue-ticket";

export async function listQueueTicket(): Promise<QueueTicket[]> {
  if (typeof fetch !== "undefined" && endpoint.startsWith("/api") && true) {
    try {
      const res = await fetch(endpoint);
      if (res.ok) return await res.json();
    } catch {
      // Local mock fallback keeps the UI available during offline review.
    }
  }
  return [...(mockData.queueTicket as unknown as QueueTicket[])];
}

export async function saveQueueTicket(payload: QueueTicket) {
  console.info("save QueueTicket", payload);
  return payload;
}
