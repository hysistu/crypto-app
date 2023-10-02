import ErrorInterface from "interfaces/error";
import { Zone, ZONE_URL } from "components/Zone/Interface";
import { Response } from "../components/response";
import { getApi } from "src/utils/api";
import { BASE_URL_API } from "src/utils/consts";
const api = getApi(BASE_URL_API || "");

export const addZone = async (params: {
  name: string;
  description: string;
}): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.post(ZONE_URL, params);
    return { response: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const getOneZone = async (
  params: string
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.get(`${ZONE_URL}/getOne?id=${params}`);
    return { response: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const getAllZone = async (): Promise<any | ErrorInterface> => {
  try {
    const response = await api.get(`${ZONE_URL}`);
    return { Zone: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const updateZone = async (
  params: Zone
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.patch(`${ZONE_URL}/?id=${params._id}`, params);
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};

export const deleteZone = async (
  params: string
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.delete(`${ZONE_URL}/?id=${params}`);
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};
