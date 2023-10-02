import ErrorInterface from "interfaces/error";
import { getApi } from "src/utils/api";
import { BASE_URL_API } from "src/utils/consts";

const api = getApi(BASE_URL_API || "");

export const getAllTicketNivel = async (): Promise<any | ErrorInterface> => {
  try {
    const response = await api.get(`/ticket-statuses`);
    return { TicketNivel: response.data.data };
  } catch (e: any) {
    return {
      error: true,
      message: "Bad Request",
    };
  }
};

export const addTicketNivel = async (params: {
  name: string;
  description: string;
}): Promise<any | ErrorInterface> => {
  try {
    const response = await api.post(`/ticketNivel`, params);
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};

export const deleteTicketNivel = async (
  params: string
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.delete(`/ticketNivel/?id=${params}`);
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};
