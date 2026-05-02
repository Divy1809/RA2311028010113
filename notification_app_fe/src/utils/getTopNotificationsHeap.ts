import type { Notification } from "../types/notification";
import { MinHeap } from "./minHeap";
import { getPriorityScore } from "./priority";

export const getTopNotificationsHeap = (
  notifications: Notification[],
  n: number
): Notification[] => {
  const heap = new MinHeap();

  for (const notif of notifications) {
    heap.insert(notif);

    if (heap.size() > n) {
      heap.remove(); // remove lowest priority
    }
  }

  return heap
    .getHeap()
    .sort((a, b) => getPriorityScore(b) - getPriorityScore(a));
};