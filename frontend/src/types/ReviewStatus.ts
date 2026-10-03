export const ReviewStatus = ["PENDING","PASSED","REJECTED","NEED_SUPPLEMENT"] as const;
export type ReviewStatus = (typeof ReviewStatus)[number];
export const ReviewStatusText: Record<ReviewStatus, string> = Object.fromEntries(ReviewStatus.map((value) => [value, value.replace(/_/g, " ")])) as Record<ReviewStatus, string>;
