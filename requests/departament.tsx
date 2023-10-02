import { getApi } from "src/utils/api";
import ErrorInterface from "interfaces/error";
import { Department, DEPARTMENT_URL } from "components/Department/Interface";
import { Response } from "../components/response";
import { BASE_URL_API } from "src/utils/consts";
import { Query } from "interfaces/query";

const api = getApi(BASE_URL_API || "");

export const addDepartment = async (params: {
  name: string;
  description: string;
}): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.post(DEPARTMENT_URL, params);
    return { response: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const getOneDepartment = async (
  params: string
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.get(`${DEPARTMENT_URL}/getOne?id=${params}`);
    return { response: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const getAllDepartment = async (
  params: number
): Promise<any | ErrorInterface> => {
  try {
    const response = await api.get(`${DEPARTMENT_URL}/?page=${params}`);

    return { Department: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const updateDepartment = async (
  params: Department
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.patch(
      `${DEPARTMENT_URL}/?id=${params._id}`,
      params
    );
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};

export const deleteDepartmant = async (
  params: string
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.delete(`${DEPARTMENT_URL}/?id=${params}`);
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};
