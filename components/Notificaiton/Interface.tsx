import { Incident } from "components/Incident/Interface";
import { User } from "../User/Interface";

export interface Notification {
  _id?: string;
  id?: string;
  name: string;
  description: string;
  incident_report_id: Incident;
  status: boolean,
  createdAt: Date
}

export interface UserNotification {
  _id?: string;
  id?: string;
  department_id: Incident | string;
  user_id: User | string;
  notification_id: Notification | string;
}
export const NOTIFICATION_URL = "notifications";
export const NOTIFCATION_USER_URL = "notificationUser";