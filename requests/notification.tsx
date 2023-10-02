import { getApi } from "src/utils/api";
import ErrorInterface from "interfaces/error";
import { Response } from "../components/response";
import {
  NOTIFCATION_USER_URL,
  NOTIFICATION_URL,
  Notification,
} from "components/Notificaiton/Interface";
import { BASE_URL_API } from "src/utils/consts";

const api = getApi(BASE_URL_API || "");

export const getNotifiations = async (
  params: number
): Promise<{ Notification: Notification[] } | ErrorInterface> => {
  try {
    const response = await api.get(`${NOTIFICATION_URL}/?page=${params}`);
    return { Notification: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const getNotifiationUser = async (): Promise<
  { response: Response } | ErrorInterface
> => {
  try {
    const response = await api.get(NOTIFCATION_USER_URL);
    return { response: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};
