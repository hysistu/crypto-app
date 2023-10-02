import ErrorInterface from "interfaces/error";
import { Response } from "../components/response";
import { BASE_URL_API } from "src/utils/consts";
import { getApi } from "src/utils/api";
import { TicketRating, TICKET_RATING } from "components/TicketRating/Interface";

const api = getApi(BASE_URL_API || "");

export const addTicketRating = async (params: {
  name: string;
  description: string;
}): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.post(TICKET_RATING, params);
    return { response: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const getOneTicketRating = async (
  params: string
): Promise<{ response: Response } | ErrorInterface | Error> => {
  try {
    const response = await api.get(`${TICKET_RATING}/getOne?id=${params}`);
    return { response: response.data.data };
  } catch (e: any) {
    if (e?.response?.data) {
      return e.response.data;
    }
    return new Error("Server is not availabel");
  }
};

export const getAllTicketRating = async (): Promise<{
  TicketRating: TicketRating[];
}> => {
  try {
    const response = await api.get(`${TICKET_RATING}`);
    return { TicketRating: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const updateTicketRating = async (
  params: TicketRating
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.patch(
      `${TICKET_RATING}/?id=${params._id}`,
      params
    );
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};

export const deleteTicketRating = async (
  params: string
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.delete(`${TICKET_RATING}/?id=${params}`);
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};
