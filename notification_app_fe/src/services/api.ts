import axios from "axios";
import type { Notification } from "../types/notification";

const API_URL = "http://20.207.122.201/evaluation-service/notifications";

export const fetchNotifications = async (): Promise<Notification[]> => {
  try {
    const response = await axios.get(API_URL);

    return response.data.notifications;
  } catch (error) {
    throw new Error("Failed to fetch notifications");
  }
};