import ErrorInterface from "interfaces/error";
import { Response } from "../components/response";
import { BASE_URL_API } from "src/utils/consts";
import { getApi } from "src/utils/api";
import { TicketType, TICKET_TYPE } from "components/TicketType/Interface";

const api = getApi(BASE_URL_API || "");

export const addTicketType = async (params: {
  name: string;
  description: string;
}): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.post(TICKET_TYPE, params);
    return { response: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const getOneTicketType = async (
  params: string
): Promise<{ response: Response } | ErrorInterface | Error> => {
  try {
    const response = await api.get(`${TICKET_TYPE}/getOne?id=${params}`);
    return { response: response.data.data };
  } catch (e: any) {
    if (e?.response?.data) {
      return e.response.data;
    }
    return new Error("Server is not availabel");
  }
};

export const getAllTicketType = async (): Promise<{
  TicketType: TicketType[];
}> => {
  try {
    const response = await api.get(`${TICKET_TYPE}`);
    return { TicketType: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const updateTicketType = async (
  params: TicketType
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.patch(
      `${TICKET_TYPE}/?id=${params._id}`,
      params
    );
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};

export const deleteTicketType = async (
  params: string
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.delete(`${TICKET_TYPE}/?id=${params}`);
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};
