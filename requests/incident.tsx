import ErrorInterface from "interfaces/error";
import {
  IncidentCategory,
  INCIDENT_CATEGORY,
} from "components/IncidentCategory/Interface";
import { Response } from "../components/response";
import { BASE_URL_INCIDENT_API } from "src/utils/consts";
import { getApi } from "src/utils/api";

const api = getApi(BASE_URL_INCIDENT_API || "");

export const addIncidentCategory = async (params: {
  name: string;
  description: string;
}): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.post(INCIDENT_CATEGORY, params);
    return { response: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const getOneIncidentCategory = async (
  params: string
): Promise<{ response: Response } | ErrorInterface | Error> => {
  try {
    const response = await api.get(`${INCIDENT_CATEGORY}/getOne?id=${params}`);
    return { response: response.data.data };
  } catch (e: any) {
    if(e?.response?.data){
      return e.response.data;   
    }
    return new Error('Server is not availabel');
  }
};

export const getAllIncidentCategory = async (): Promise<{
  IncidentCategory: IncidentCategory[];
}> => {
  try {
    const response = await api.get(`${INCIDENT_CATEGORY}`);
    return { IncidentCategory: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const updateIncidentCategory = async (
  params: IncidentCategory
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.patch(
      `${INCIDENT_CATEGORY}/?id=${params._id}`,
      params
    );
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};

export const deleteIncidentCategory = async (
  params: string
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.delete(
      `${INCIDENT_CATEGORY}/?id=${params}`,
    );
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};
