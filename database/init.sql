CREATE TABLE IF NOT EXISTS service_matter (
  id INTEGER PRIMARY KEY,
  matter_code TEXT,
  name TEXT,
  department TEXT,
  required_materials TEXT,
  average_minutes TEXT,
  enabled TEXT,
  risk_level TEXT
);

CREATE TABLE IF NOT EXISTS citizen_appointment (
  id INTEGER PRIMARY KEY,
  citizen_name TEXT,
  phone TEXT,
  matter_id TEXT,
  appointment_date TEXT,
  time_slot TEXT,
  status TEXT,
  cancel_reason TEXT
);

CREATE TABLE IF NOT EXISTS queue_ticket (
  id INTEGER PRIMARY KEY,
  appointment_id TEXT,
  matter_id TEXT,
  window_id TEXT,
  ticket_no TEXT,
  queue_status TEXT,
  called_at TEXT,
  finished_at TEXT
);

CREATE TABLE IF NOT EXISTS material_review (
  id INTEGER PRIMARY KEY,
  appointment_id TEXT,
  reviewer_id TEXT,
  review_status TEXT,
  missing_items TEXT,
  comment TEXT,
  reviewed_at TEXT
);

CREATE TABLE IF NOT EXISTS service_window (
  id INTEGER PRIMARY KEY,
  window_no TEXT,
  department TEXT,
  current_ticket_id TEXT,
  operator_id TEXT,
  service_status TEXT,
  pause_reason TEXT
);

CREATE TABLE IF NOT EXISTS audit_log (
  id INTEGER PRIMARY KEY,
  actor TEXT,
  action TEXT,
  target_type TEXT,
  target_id TEXT,
  created_at TEXT
);
