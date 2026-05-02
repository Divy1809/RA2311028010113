import type { Notification } from "../types/notification";
import { getPriorityScore } from "./priority";

export const getTopNotifications = (
  notifications: Notification[],
  n: number
): Notification[] => {
  return notifications
    .sort((a, b) => getPriorityScore(b) - getPriorityScore(a))
    .slice(0, n);
};