# Stage 1 — Notification Priority System Design

## 1. Objective

Design a system to retrieve and maintain the top N most important unread notifications efficiently, based on priority and recency.

---

## 2. Notification Structure

Each notification contains:

* ID: Unique identifier
* Type: Event | Result | Placement
* Message: Notification content
* Timestamp: Time of creation

---

## 3. Priority Logic

Notifications are ranked using two factors:

### 3.1 Type Weight

| Type      | Weight |
| --------- | ------ |
| Placement | 3      |
| Result    | 2      |
| Event     | 1      |

### 3.2 Recency

* More recent notifications are prioritized within the same type.

### 3.3 Priority Score Formula

Each notification is assigned a score:

```
Priority Score = (Type Weight × Large Constant) + Timestamp
```

This ensures:

* Type importance dominates
* Recency is considered within same type

---

## 4. Approach

### 4.1 Initial Implementation

* Fetch notifications (mocked due to protected API)
* Compute priority score
* Sort all notifications
* Extract top N

Time Complexity: **O(n log n)**

---

### 4.2 Optimized Approach (Min Heap)

To efficiently maintain top N notifications:

* Use a Min Heap of size N
* Iterate through all notifications:

  * Insert into heap
  * If heap size exceeds N → remove smallest
* Final heap contains top N highest priority notifications

Time Complexity: **O(n log k)**
Where:

* n = total notifications
* k = top N (e.g., 10)

---

## 5. Handling Continuous Incoming Notifications

In a real-world system:

* New notifications arrive continuously
* Instead of re-sorting all data:

  * Insert new notification into heap
  * If heap exceeds size N → remove lowest priority

This ensures:

* Constant memory usage
* Efficient updates in real-time

---

## 6. Logging Strategy

A custom logging middleware is implemented:

* Located in `/logging_middleware`
* Supports log levels:

  * INFO
  * ERROR
  * DEBUG

Each log includes:

* Level
* Message
* Timestamp
* Data payload

Purpose:

* Debugging
* Monitoring system behavior
* Ensuring traceability

---

## 7. API Handling

* The provided API is protected (401 Unauthorized)
* Mock data is used for implementation and testing
* System is designed to easily switch to real API once authentication is available

---

## 8. Scalability Considerations

* Heap-based approach ensures efficient handling of large datasets
* Avoids full sorting on every update
* Suitable for high-frequency notification systems

---

## 9. Future Improvements

* Integrate real-time streaming (WebSockets)
* Add persistence layer (if required)
* Implement user-specific prioritization
* Add read/unread tracking
* Pagination support

---

## 10. Conclusion

The system efficiently identifies and maintains the top N priority notifications using a scalable and optimized approach, ensuring high performance and real-time adaptability.
