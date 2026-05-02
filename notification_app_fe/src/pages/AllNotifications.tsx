import NotificationCard from "../components/NotificationCard";
import { mockNotifications } from "../data/mockNotifications";

function AllNotifications() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>All Notifications</h2>

      {mockNotifications.map((notif) => (
        <NotificationCard key={notif.ID} notification={notif} />
      ))}
    </div>
  );
}

export default AllNotifications;