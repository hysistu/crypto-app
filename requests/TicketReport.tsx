import {
  INCIDENT_REPORT_BY_CATEGORY,
  INCIDENT_REPORT,
  Incident,
} from "components/Incident/Interface";
import { DASHBOARD_URL, Risk } from "components/Risk/Interface";
import { Ticket } from "components/Ticketing/Interface";
import { TICKET_CATEGORY } from "components/TicketsCategory/Interface";
import ErrorInterface from "interfaces/error";
import { getApi } from "src/utils/api";
import { BASE_URL_API } from "src/utils/consts";

const api = getApi(BASE_URL_API || "");

export const getTicketByCategory = async (
  id: string
): Promise<any | ErrorInterface> => {
  try {
    const response = await api.get(`${TICKET_CATEGORY}${id}`);
    return response.data.data;
  } catch (e: any) {
    return {
      error: true,
      message: "Bad Request",
    };
  }
};

export const addTicketReport = async (
  params: Ticket | Risk
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.post(TICKET_CATEGORY, params);
    return { response: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};
export const addTicketReportGuest = async (
  params: any
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.post(`${TICKET_CATEGORY}/guest`, params);
    return { response: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const getOneTicketReport = async (
  params: string
): Promise<{ response: Response } | ErrorInterface | Error> => {
  try {
    const response = await api.get(`${TICKET_CATEGORY}/getOne?id=${params}`);
    return response.data.data;
  } catch (e: any) {
    if (e?.response?.data) {
      return e.response.data;
    }
    return new Error("Server is not availabel");
  }
};

export const getAllTicketReport = async (
  params: number,
  query?: any
): Promise<{
  Incident: Incident[];
}> => {
  try {
    const response = await api.get(
      `${TICKET_CATEGORY}/?page=${params}${query ? `&type_id=${query}` : ""}`
    );
    return { Incident: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const updateTicetReport = async (
  params: Incident | Risk
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

export const deleteTicketReport = async (
  params: string
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.delete(`${TICKET_CATEGORY}/?id=${params}`);
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};

export const getTicketOnSector = async (params: string) => {
  try {
    const response = await api.get(`${TICKET_CATEGORY}/sector/?id=${params}`);
    return response.data.data.reverse();
  } catch (e: any) {
    return e.response.data;
  }
};

export const getSectorsWithTickets = async () => {
  try {
    const response = await api.get(`${DASHBOARD_URL}/getPinsData`);
    return response.data.data;
  } catch (e: any) {
    return {
      error: true,
      message: "Bad Request",
    };
  }
};
