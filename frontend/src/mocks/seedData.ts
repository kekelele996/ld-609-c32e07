export const mockData = {
  "serviceMatter": [
    {
      "id": 1,
      "matter_code": "matter code 1",
      "name": "name 1",
      "department": "department 1",
      "required_materials": "required materials 1",
      "average_minutes": "average minutes 1",
      "enabled": false,
      "risk_level": "LOW"
    },
    {
      "id": 2,
      "matter_code": "matter code 2",
      "name": "name 2",
      "department": "department 2",
      "required_materials": "required materials 2",
      "average_minutes": "average minutes 2",
      "enabled": true,
      "risk_level": "MEDIUM"
    },
    {
      "id": 3,
      "matter_code": "matter code 3",
      "name": "name 3",
      "department": "department 3",
      "required_materials": "required materials 3",
      "average_minutes": "average minutes 3",
      "enabled": false,
      "risk_level": "HIGH"
    }
  ],
  "citizenAppointment": [
    {
      "id": 1,
      "citizen_name": "citizen name 1",
      "phone": "13800000001",
      "matter_id": 1,
      "appointment_date": "2026-06-11T09:00:00Z",
      "time_slot": "time slot 1",
      "status": "CHECKED_IN",
      "cancel_reason": "cancel reason 1"
    },
    {
      "id": 2,
      "citizen_name": "citizen name 2",
      "phone": "13800000002",
      "matter_id": 2,
      "appointment_date": "2026-06-12T09:00:00Z",
      "time_slot": "time slot 2",
      "status": "CANCELLED",
      "cancel_reason": "cancel reason 2"
    },
    {
      "id": 3,
      "citizen_name": "citizen name 3",
      "phone": "13800000003",
      "matter_id": 3,
      "appointment_date": "2026-06-13T09:00:00Z",
      "time_slot": "time slot 3",
      "status": "BOOKED",
      "cancel_reason": "cancel reason 3"
    }
  ],
  "queueTicket": [
    {
      "id": 1,
      "appointment_id": 1,
      "matter_id": 1,
      "window_id": 1,
      "ticket_no": "ticket no 1",
      "queue_status": "CHECKED_IN",
      "called_at": "2026-06-11T09:00:00Z",
      "finished_at": "2026-06-11T09:00:00Z"
    },
    {
      "id": 2,
      "appointment_id": 2,
      "matter_id": 2,
      "window_id": 2,
      "ticket_no": "ticket no 2",
      "queue_status": "CANCELLED",
      "called_at": "2026-06-12T09:00:00Z",
      "finished_at": "2026-06-12T09:00:00Z"
    },
    {
      "id": 3,
      "appointment_id": 3,
      "matter_id": 3,
      "window_id": 3,
      "ticket_no": "ticket no 3",
      "queue_status": "BOOKED",
      "called_at": "2026-06-13T09:00:00Z",
      "finished_at": "2026-06-13T09:00:00Z"
    }
  ],
  "materialReview": [
    {
      "id": 1,
      "appointment_id": 1,
      "reviewer_id": 1,
      "review_status": "CHECKED_IN",
      "missing_items": "missing items 1",
      "comment": "comment 1",
      "reviewed_at": "2026-06-11T09:00:00Z"
    },
    {
      "id": 2,
      "appointment_id": 2,
      "reviewer_id": 2,
      "review_status": "CANCELLED",
      "missing_items": "missing items 2",
      "comment": "comment 2",
      "reviewed_at": "2026-06-12T09:00:00Z"
    },
    {
      "id": 3,
      "appointment_id": 3,
      "reviewer_id": 3,
      "review_status": "BOOKED",
      "missing_items": "missing items 3",
      "comment": "comment 3",
      "reviewed_at": "2026-06-13T09:00:00Z"
    }
  ],
  "serviceWindow": [
    {
      "id": 1,
      "window_no": "window no 1",
      "department": "department 1",
      "current_ticket_id": 1,
      "operator_id": 1,
      "service_status": "CHECKED_IN",
      "pause_reason": "pause reason 1"
    },
    {
      "id": 2,
      "window_no": "window no 2",
      "department": "department 2",
      "current_ticket_id": 2,
      "operator_id": 2,
      "service_status": "CANCELLED",
      "pause_reason": "pause reason 2"
    },
    {
      "id": 3,
      "window_no": "window no 3",
      "department": "department 3",
      "current_ticket_id": 3,
      "operator_id": 3,
      "service_status": "BOOKED",
      "pause_reason": "pause reason 3"
    }
  ]
} as const;
