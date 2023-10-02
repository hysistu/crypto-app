import ErrorInterface from "interfaces/error";
import {
  IncidentType,
  INCIDENT_TYPE,
} from "components/IncidentType/Interface";
import { Response } from "../components/response";
import { BASE_URL_INCIDENT_API } from "src/utils/consts";
import { getApi } from "src/utils/api";

const api = getApi(BASE_URL_INCIDENT_API || "");

export const addIncidentType = async (params: {
  name: string;
  description: string;
}): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.post(INCIDENT_TYPE, params);
    return { response: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const getOneIncidentType = async (
  params: string
): Promise<{ response: Response } | ErrorInterface | Error> => {
  try {
    const response = await api.get(`${INCIDENT_TYPE}/getOne?id=${params}`);
    return { response: response.data.data };
  } catch (e: any) {
    if(e?.response?.data){
      return e.response.data;   
    }
    return new Error('Server is not availabel');
  }
};

export const getAllIncidentType = async (): Promise<{
  IncidentType: IncidentType[];
}> => {
  try {
    const response = await api.get(`${INCIDENT_TYPE}`);
    return { IncidentType: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const updateIncidentType = async (
  params: IncidentType
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.patch(
      `${INCIDENT_TYPE}/?id=${params._id}`,
      params
    );
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};

export const deleteIncidentType = async (
  params: string
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.delete(
      `${INCIDENT_TYPE}/?id=${params}`,
    );
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};