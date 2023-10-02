import ErrorInterface from "interfaces/error";
import { DEPARTMENT_USER_URL } from "components/DepartmentUser/Interface";
import { Response } from "../components/response";
import { getApi } from "src/utils/api";
import { BASE_URL_API } from "src/utils/consts";

const api = getApi(BASE_URL_API || "");

export const getAllUsersByDepartmentId = async (
  params: string
): Promise<{ response: Response }> => {
  const response = await api.get(
    `${DEPARTMENT_USER_URL}/getAllUsersByDepartmentId?id=${params}`
  );
  return { response: response.data.data };
};

export const addDepartmentUser = async (
  user_id: string | undefined,
  department_id: string
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.post(DEPARTMENT_USER_URL, {
      user_id,
      department_id,
    });
    return { response: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const deleteDepartmentUser = async (
  user_id: string | undefined,
  department_id: string
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.post(
      `${DEPARTMENT_USER_URL}/removeUserFromDepartment`,
      { user_id, department_id }
    );
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};
