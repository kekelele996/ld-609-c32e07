export interface MaterialReview {
  id: number;
  appointment_id: number;
  reviewer_id: number;
  review_status: string;
  missing_items: string;
  comment: string;
  reviewed_at: string;
}
