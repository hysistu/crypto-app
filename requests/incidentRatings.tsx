import ErrorInterface from "interfaces/error";
import {
  IncidentRating,
  INCIDENT_RATTING,
} from "components/IncidentRating/Interface";
import { Response } from "../components/response";
import { BASE_URL_INCIDENT_API } from "src/utils/consts";
import { getApi } from "src/utils/api";

const api = getApi(BASE_URL_INCIDENT_API || "");

export const addIncidentRating = async (params: {
  name: string;
  description: string;
}): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.post(INCIDENT_RATTING, params);
    return { response: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const getOneIncidentRating = async (
  params: string
): Promise<{ response: Response } | ErrorInterface | Error> => {
  try {
    const response = await api.get(`${INCIDENT_RATTING}/getOne?id=${params}`);
    return { response: response.data.data };
  } catch (e: any) {
    if(e?.response?.data){
      return e.response.data;   
    }
    return new Error('Server is not availabel');
  }
};

export const getAllIncidentRating = async (): Promise<{
  IncidentRating: IncidentRating[];
}> => {
  try {
    const response = await api.get(`${INCIDENT_RATTING}`);
    return { IncidentRating: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const updateIncidentRating = async (
  params: IncidentRating
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.patch(
      `${INCIDENT_RATTING}/?id=${params._id}`,
      params
    );
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};

export const deleteIncidentRating = async (
  params: string
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.delete(
      `${INCIDENT_RATTING}/?id=${params}`,
    );
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};