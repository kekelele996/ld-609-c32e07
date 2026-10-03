export const QueueStatus = ["WAITING","CALLED","SKIPPED","PROCESSING","FINISHED"] as const;
export type QueueStatus = (typeof QueueStatus)[number];
export const QueueStatusText: Record<QueueStatus, string> = Object.fromEntries(QueueStatus.map((value) => [value, value.replace(/_/g, " ")])) as Record<QueueStatus, string>;
