import type { Notification } from "../types/notification";
import { getPriorityScore } from "./priority";

export class MinHeap {
  private heap: Notification[] = [];

  private compare(a: Notification, b: Notification): boolean {
    return getPriorityScore(a) < getPriorityScore(b);
  }

  private swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  private bubbleUp(index: number) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (!this.compare(this.heap[index], this.heap[parent])) break;

      this.swap(index, parent);
      index = parent;
    }
  }

  private bubbleDown(index: number) {
    const length = this.heap.length;

    while (true) {
      let smallest = index;
      let left = 2 * index + 1;
      let right = 2 * index + 2;

      if (
        left < length &&
        this.compare(this.heap[left], this.heap[smallest])
      ) {
        smallest = left;
      }

      if (
        right < length &&
        this.compare(this.heap[right], this.heap[smallest])
      ) {
        smallest = right;
      }

      if (smallest === index) break;

      this.swap(index, smallest);
      index = smallest;
    }
  }

  insert(item: Notification) {
    this.heap.push(item);
    this.bubbleUp(this.heap.length - 1);
  }

  remove(): Notification | undefined {
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.bubbleDown(0);

    return root;
  }

  size() {
    return this.heap.length;
  }

  getHeap() {
    return this.heap;
  }
}