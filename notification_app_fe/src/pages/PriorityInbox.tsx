import NotificationCard from "../components/NotificationCard";
import { mockNotifications } from "../data/mockNotifications";
import { getTopNotificationsHeap } from "../utils/getTopNotificationsHeap";

function PriorityInbox() {
  const topNotifications = getTopNotificationsHeap(mockNotifications, 10);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Priority Inbox (Top 10)</h2>

      {topNotifications.map((notif) => (
        <NotificationCard key={notif.ID} notification={notif} />
      ))}
    </div>
  );
}

export default PriorityInbox;