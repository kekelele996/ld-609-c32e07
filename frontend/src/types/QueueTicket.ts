export interface QueueTicket {
  id: number;
  appointment_id: number;
  matter_id: number;
  window_id: number;
  ticket_no: string;
  queue_status: string;
  called_at: string;
  finished_at: string;
}
