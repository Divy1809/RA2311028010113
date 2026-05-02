import type { Notification } from "../types/notification";

const weightMap: Record<string, number> = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export const getPriorityScore = (notification: Notification): number => {
  const weight = weightMap[notification.Type];
  const time = new Date(notification.Timestamp).getTime();

  return weight * 1e13 + time;
};