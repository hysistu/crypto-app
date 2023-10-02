import ErrorInterface from "interfaces/error";
import {
  IncidentStatus,
  INCIDENT_STATUS,
} from "components/IncidentStatus/Interface";
import { Response } from "../components/response";
import { BASE_URL_INCIDENT_API } from "src/utils/consts";
import { getApi } from "src/utils/api";

const api = getApi(BASE_URL_INCIDENT_API || "");

export const addIncidentStatus = async (params: {
  name: string;
  description: string;
}): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.post(INCIDENT_STATUS, params);
    return { response: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const getOneIncidentStatus = async (
  params: string
): Promise<{ response: Response } | ErrorInterface | Error> => {
  try {
    const response = await api.get(`${INCIDENT_STATUS}/getOne?id=${params}`);
    return { response: response.data.data };
  } catch (e: any) {
    if(e?.response?.data){
      return e.response.data;   
    }
    return new Error('Server is not availabel');
  }
};

export const getAllIncidentStatus = async (): Promise<{
  IncidentStatus: IncidentStatus[];
}> => {
  try {
    const response = await api.get(`${INCIDENT_STATUS}`);
    return { IncidentStatus: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const updateIncidentStatus = async (
  params: IncidentStatus
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.patch(
      `${INCIDENT_STATUS}/?id=${params._id}`,
      params
    );
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};

export const deleteIncidentStatus = async (
  params: string
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.delete(
      `${INCIDENT_STATUS}/?id=${params}`,
    );
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};