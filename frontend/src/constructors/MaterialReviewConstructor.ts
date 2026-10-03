import type { MaterialReview } from "../types/MaterialReview";

export const createDefaultMaterialReview = (overrides: Partial<MaterialReview> = {}): MaterialReview => ({
  id: 1 as never,
  appointment_id: 1 as never,
  reviewer_id: 1 as never,
  review_status: "CHECKED_IN" as never,
  missing_items: "missing items 1" as never,
  comment: "comment 1" as never,
  reviewed_at: "2026-06-11T09:00:00Z" as never,
  ...overrides
});

export const createMaterialReviewForm = createDefaultMaterialReview;
export const createMaterialReviewResponse = createDefaultMaterialReview;
