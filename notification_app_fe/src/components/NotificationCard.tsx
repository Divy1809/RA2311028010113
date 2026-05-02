import type { Notification } from "../types/notification";
import { Card, CardContent, Typography, Chip } from "@mui/material";

interface Props {
  notification: Notification;
}

const getColor = (type: string) => {
  if (type === "Placement") return "success";
  if (type === "Result") return "primary";
  return "default";
};

function NotificationCard({ notification }: Props) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">{notification.Message}</Typography>

        <Chip
          label={notification.Type}
          color={getColor(notification.Type) as any}
          sx={{ marginTop: 1 }}
        />

        <Typography variant="body2" sx={{ marginTop: 1 }}>
          {new Date(notification.Timestamp).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NotificationCard;