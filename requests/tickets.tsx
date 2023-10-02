import ErrorInterface from "interfaces/error";
import { Response } from "../components/response";
import { BASE_URL_API } from "src/utils/consts";
import { getApi } from "src/utils/api";
import { Tickets, TICKETS } from "components/Tickets/Interface";
import { Ticket } from "components/Ticketing/Interface";

const api = getApi(BASE_URL_API || "");

export const addTickets = async (params: {
  description: string;
  title: string;
  priority: number;
  due_date: string;
  zone_id: string;
  department_id: string;
  user_id: string;
  category_id: string;
  status_id: string;
  level_id: string;
}): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.post(TICKETS, params);

    return { response: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const getOneTicket = async (params: string): Promise<any> => {
  try {
    const response = await api.get(`${TICKETS}/getOne?id=${params}`);
    console.log("responsiiiii", response.data.data);
    return { response: response.data.data };
  } catch (e: any) {
    if (e?.response?.data) {
      return e.response.data;
    }
    return new Error("Server is not availabel");
  }
};

export const updateOneTicket = async (
  params: Ticket
): Promise<{ response: Response } | ErrorInterface | Error> => {
  try {
    const response = await api.patch(`${TICKETS}/?id=${params._id}`, params);

    return response.data.message;
  } catch (e: any) {
    if (e?.response?.data) {
      return e.response.data;
    }
    return new Error("Server is not availabel");
  }
};

export const updateTickets = async (
  params: Ticket
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.patch(`${TICKETS}/?id=${params._id}`, params);
    return response.data;
  } catch (e: any) {
    return e.response?.data;
  }
};
export const reAssignTicket = async (
  params: Ticket
): Promise<{ response: Response } | ErrorInterface> => {
  const body = { to: params.employee_id };
  try {
    const response = await api.post(
      `${TICKETS}/reAssign/${params.response._id}`,
      body
    );
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};

export const deleteTickets = async (
  params: string
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.delete(`${TICKETS}/?id=${params}`);
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};
