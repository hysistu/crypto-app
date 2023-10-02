import ErrorInterface from "interfaces/error";
import { getApi } from "src/utils/api";
import { BASE_URL_INCIDENT_API } from "src/utils/consts";

const api = getApi(BASE_URL_INCIDENT_API || "");

export const getAllIncidentNivel = async (): Promise<any | ErrorInterface> => {
  try {
    const response = await api.get(`/incidentNivel`);
    return { IncidentNivel: response.data.data };
  } catch (e: any) {
    return {
      error: true,
      message: "Bad Request",
    };
  }
};

export const addIncidentNivel = async (params: {
  name: string;
  description: string;
}): Promise<any | ErrorInterface> => {
  try {
    const response = await api.post(`/incidentNivel`, params);
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};

export const deleteIncidentNivel = async (
  params: string
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.delete(`/incidentNivel/?id=${params}`);
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};
