import type { ServiceWindow } from "../types/ServiceWindow";

export const createDefaultServiceWindow = (overrides: Partial<ServiceWindow> = {}): ServiceWindow => ({
  id: 1 as never,
  window_no: "window no 1" as never,
  department: "department 1" as never,
  current_ticket_id: 1 as never,
  operator_id: 1 as never,
  service_status: "CHECKED_IN" as never,
  pause_reason: "pause reason 1" as never,
  ...overrides
});

export const createServiceWindowForm = createDefaultServiceWindow;
export const createServiceWindowResponse = createDefaultServiceWindow;
