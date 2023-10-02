import ErrorInterface from "interfaces/error";
import { Response } from "../components/response";
import { BASE_URL_API } from "src/utils/consts";
import { getApi } from "src/utils/api";
import {
  TICKET_CATEGORY,
  TicketCategory,
} from "components/TicketsCategory/Interface";

const api = getApi(BASE_URL_API || "");

export const addTicketCategory = async (params: {
  name: string;
  description: string;
}): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.post(TICKET_CATEGORY, params);
    return { response: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const getOneTicketCategory = async (
  params: string
): Promise<{ response: Response } | ErrorInterface | Error> => {
  try {
    const response = await api.get(`${TICKET_CATEGORY}/getOne?id=${params}`);
    return { response: response.data.data };
  } catch (e: any) {
    if (e?.response?.data) {
      return e.response.data;
    }
    return new Error("Server is not availabel");
  }
};

export const getAllTicketCategory = async (): Promise<{
  TicketCategory: TicketCategory[];
}> => {
  try {
    const response = await api.get(`${TICKET_CATEGORY}`);
    return { TicketCategory: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const updateITicketCategory = async (
  params: TicketCategory
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.patch(
      `${TICKET_CATEGORY}/?id=${params._id}`,
      params
    );
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};

export const deleteTicketCategory = async (
  params: string
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.delete(`${TICKET_CATEGORY}/?id=${params}`);
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};
