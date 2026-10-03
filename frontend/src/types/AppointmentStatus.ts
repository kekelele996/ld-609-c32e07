export const AppointmentStatus = ["BOOKED","CHECKED_IN","CANCELLED","EXPIRED","COMPLETED"] as const;
export type AppointmentStatus = (typeof AppointmentStatus)[number];
export const AppointmentStatusText: Record<AppointmentStatus, string> = Object.fromEntries(AppointmentStatus.map((value) => [value, value.replace(/_/g, " ")])) as Record<AppointmentStatus, string>;
