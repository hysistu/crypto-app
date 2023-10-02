import ErrorInterface from "interfaces/error";
import { ROLE_URL, Role } from "components/Role/Interface";
import { Response } from "../components/response";
import { getApi } from "src/utils/api";
import { BASE_URL_API } from "src/utils/consts";

const api = getApi(BASE_URL_API || "");

export const addRole = async (params: {
  name: string;
  description: string;
}): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.post(ROLE_URL, params);
    return { response: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const getOneRole = async (
  params: string
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.get(`${ROLE_URL}/getOne?id=${params}`);
    return { response: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const getAllRole = async (
  params: number
): Promise<any | ErrorInterface> => {
  try {
    const response = await api.get(`${ROLE_URL}/?page=${params}`);
    return { Role: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const updateRole = async (
  params: Role
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.patch(`${ROLE_URL}/?id=${params._id}`, params);
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};

export const deleteRole = async (
  params: string
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.delete(`${ROLE_URL}/?id=${params}`);
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};
