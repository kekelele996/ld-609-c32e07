import type { CitizenAppointment } from "../types/CitizenAppointment";

export const createDefaultCitizenAppointment = (overrides: Partial<CitizenAppointment> = {}): CitizenAppointment => ({
  id: 1 as never,
  citizen_name: "citizen name 1" as never,
  phone: "13800000001" as never,
  matter_id: 1 as never,
  appointment_date: "2026-06-11T09:00:00Z" as never,
  time_slot: "time slot 1" as never,
  status: "CHECKED_IN" as never,
  cancel_reason: "cancel reason 1" as never,
  ...overrides
});

export const createCitizenAppointmentForm = createDefaultCitizenAppointment;
export const createCitizenAppointmentResponse = createDefaultCitizenAppointment;
