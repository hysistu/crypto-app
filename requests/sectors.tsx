import ErrorInterface from "interfaces/error";
import { Sector, SECTOR_URL } from "components/Sector/Interface";
import { Response } from "../components/response";
import { getApi } from "src/utils/api";
import { BASE_URL_API } from "src/utils/consts";

const api = getApi(BASE_URL_API || "");

export const addSector = async (params: {
  name: string;
  description: string;
}): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.post(SECTOR_URL, params);
    return { response: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const getOneSector = async (
  params: string | string[]
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.get(`${SECTOR_URL}/getOne?id=${params}`);
    return { response: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const getSectorsByZoneId = async (
  params: string
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.get(
      `${SECTOR_URL}/getSectorByZoneId?id=${params}`
    );
    return { response: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const getAllSector = async (
  params?: number
): Promise<{ Sector: Sector[] }> => {
  try {
    const response = await api.get(
      `${SECTOR_URL}${params ? `/?page=${params}` : ""}`
    );
    return { Sector: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const updateSector = async (
  params: Sector
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.patch(`${SECTOR_URL}/?id=${params._id}`, params);
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};

export const deleteSector = async (
  params: string
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.delete(`${SECTOR_URL}/?id=${params}`);
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};

export const addSectorToZone = async (
  sector_id: string | undefined,
  zone_id: string
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.post(`${SECTOR_URL}/addSectorToZone`, {
      sector_id,
      zone_id,
    });
    return { response: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const removeSectorFromZone = async (
  sector_id: string | undefined,
  zone_id: string
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.post(`${SECTOR_URL}/removeSectorFromZone`, {
      sector_id,
      zone_id,
    });
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};
