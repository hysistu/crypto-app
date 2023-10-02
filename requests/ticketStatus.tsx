import ErrorInterface from "interfaces/error";
import { Response } from "../components/response";
import { BASE_URL_API } from "src/utils/consts";
import { getApi } from "src/utils/api";
import {
  TICKET_STATUSES,
  TicketStatus,
} from "components/TicketStatus/InterfaceStatus";

const api = getApi(BASE_URL_API || "");

export const addTicketStatus = async (params: {
  name: string;
  description: string;
}): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.post(TICKET_STATUSES, params);
    return { response: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const getOneTicketStatus = async (
  params: string
): Promise<{ response: Response } | ErrorInterface | Error> => {
  try {
    const response = await api.get(`${TICKET_STATUSES}/getOne?id=${params}`);
    return { response: response.data.data };
  } catch (e: any) {
    if (e?.response?.data) {
      return e.response.data;
    }
    return new Error("Server is not availabel");
  }
};

export const getAllTicketStatus = async (): Promise<{
  TicketStatus: TicketStatus[];
}> => {
  try {
    const response = await api.get(`${TICKET_STATUSES}`);
    return { TicketStatus: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const updateTicketStatus = async (
  params: TicketStatus
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.patch(
      `${TICKET_STATUSES}/?id=${params._id}`,
      params
    );
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};

export const deleteTicketStatus = async (
  params: string
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.delete(`${TICKET_STATUSES}/?id=${params}`);
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};
