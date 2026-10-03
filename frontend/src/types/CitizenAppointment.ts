export interface CitizenAppointment {
  id: number;
  citizen_name: string;
  phone: string;
  matter_id: number;
  appointment_date: string;
  time_slot: string;
  status: string;
  cancel_reason: string;
}
