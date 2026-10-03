import type { QueueTicket } from "../types/QueueTicket";

export const createDefaultQueueTicket = (overrides: Partial<QueueTicket> = {}): QueueTicket => ({
  id: 1 as never,
  appointment_id: 1 as never,
  matter_id: 1 as never,
  window_id: 1 as never,
  ticket_no: "ticket no 1" as never,
  queue_status: "CHECKED_IN" as never,
  called_at: "2026-06-11T09:00:00Z" as never,
  finished_at: "2026-06-11T09:00:00Z" as never,
  ...overrides
});

export const createQueueTicketForm = createDefaultQueueTicket;
export const createQueueTicketResponse = createDefaultQueueTicket;
