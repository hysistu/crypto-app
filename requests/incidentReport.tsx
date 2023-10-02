import {
  INCIDENT_REPORT_BY_CATEGORY,
  INCIDENT_REPORT,
  Incident,
} from "components/Incident/Interface";
import { DASHBOARD_URL, Risk } from "components/Risk/Interface";
import ErrorInterface from "interfaces/error";
import { getApi } from "src/utils/api";
import { BASE_URL_INCIDENT_API } from "src/utils/consts";

const api = getApi(BASE_URL_INCIDENT_API || "");

export const getIncidentsByCategory = async (
  id: string
): Promise<any | ErrorInterface> => {
  try {
    const response = await api.get(`${INCIDENT_REPORT_BY_CATEGORY}${id}`);
    return response.data.data;
  } catch (e: any) {
    return {
      error: true,
      message: "Bad Request",
    };
  }
};

export const addIncidentReport = async (
  params: Incident | Risk
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.post(INCIDENT_REPORT, params);
    return { response: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};
export const addIncidentReportGuest = async (
  params: any
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.post(`${INCIDENT_REPORT}/guest`, params);
    return { response: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const getOneIncidentReport = async (
  params: string
): Promise<{ response: Response } | ErrorInterface | Error> => {
  try {
    const response = await api.get(`${INCIDENT_REPORT}/getOne?id=${params}`);
    return response.data.data;
  } catch (e: any) {
    if (e?.response?.data) {
      return e.response.data;
    }
    return new Error("Server is not availabel");
  }
};

export const getAllIncidentReport = async (
  params: number,
  query?: any
): Promise<{
  Incident: Incident[];
}> => {
  try {
    const response = await api.get(
      `${INCIDENT_REPORT}/?page=${params}${query ? `&type_id=${query}` : ""}`
    );
    return { Incident: response?.data.data };
  } catch (e: any) {
    return e.response?.data;
  }
};

export const updateIncidentReport = async (
  params: Incident | Risk
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.patch(
      `${INCIDENT_REPORT}/?id=${params._id}`,
      params
    );
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};

export const deleteIncidentReport = async (
  params: string
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.delete(`${INCIDENT_REPORT}/?id=${params}`);
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};

export const getIncidentsOnSector = async (params: string) => {
  try {
    const response = await api.get(`${INCIDENT_REPORT}/sector/?id=${params}`);
    return response.data.data.reverse();
  } catch (e: any) {
    return e.response.data;
  }
};

export const getSectorsWithIncident = async () => {
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
