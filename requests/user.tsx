import { getApi } from "src/utils/api";
import ErrorInterface from "interfaces/error";
import { Response } from "../components/response";
import { USER_URL, User } from "components/User/Interface";
import { BASE_URL_API } from "src/utils/consts";

const api = getApi(BASE_URL_API || "");

export const loginUser = async (params: {
  email: string;
  password: string;
}): Promise<{ token: string } | ErrorInterface> => {
  try {
    const response = await api.post("users/login", params);
    console.log(response, 'tttt');

    return { token: response.data.token };
  } catch (e: any) {
    return {
      error: true,
      message: e.response.data.message,
    };
  }
};

export const forgotPassword = async (params: {
  email: string;
}): Promise<any | ErrorInterface> => {
  try {
    const response = await api.post("auth/forgotPassword", params);
    return { result: response.data };
  } catch (e: any) {
    return {
      error: true,
      message: e.response.data.message,
    };
  }
};
export const updatePassword = async (params: {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}): Promise<any | ErrorInterface> => {
  try {
    const response = await api.post("auth/updatePassword", params);
    return { result: response.data };
  } catch (e: any) {
    return {
      error: true,
      message: e.response.data.message,
    };
  }
};

export const resetPassword = async (params: {
  password: string;
  confirmPassword: string;
  token: string | any;
}): Promise<any | ErrorInterface> => {
  try {
    const response = await api.post(`auth/resetPassword/${params.token}`, {
      password: params.password,
      confirmPassword: params.confirmPassword,
    });

    return { result: response.data };
  } catch (e: any) {
    return {
      error: true,
      message: e.response.data.message,
    };
  }
};

export const addUser = async (
  params: User
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.post(`${USER_URL}/signup`, params);
    return { response: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const getOneUser = async (
  params: string
): Promise<any | ErrorInterface> => {
  const response = await api.get(`${USER_URL}/${params}`);
  return { response: response.data.data.data };
};

export const getAllUsers = async (
  params?: number
): Promise<{ User: User[] }> => {
  try {
    const response = await api.get(
      `${USER_URL}${params ? `/?page=${params}&limit=10` : ""}`
    );

    return { User: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const getAllEmployees = async (
  params?: number
): Promise<{ User: User[] }> => {
  try {
    const response = await api.get(
      `${USER_URL}/employees${params ? `/?page=${params}` : ""}`
    );

    return { User: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const updateUser = async (
  params: User
): Promise<{ token: Response } | ErrorInterface> => {
  try {
    const response = await api.patch(
      `${USER_URL}/${params._id || params.id}`,
      params
    );
    return { token: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};
export const updateMe = async (
  params: User
): Promise<{ token: Response } | ErrorInterface> => {
  try {
    const response = await api.patch(
      `${USER_URL}/updateMe`,
      params
    );
    return { token: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};
export const getMe = async (
  params: User
): Promise<{ token: Response } | ErrorInterface> => {
  try {
    const response = await api.patch(
      `${USER_URL}/me`,
      params
    );
    return { token: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const deleteUser = async (
  params: string
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.delete(`${USER_URL}/${params}`);
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};

export const getAllDeactivatedUser = async (
  params: number
): Promise<{ User: User[] }> => {
  try {
    const response = await api.get(`${USER_URL}/deactivated/?page=${params}`);
    return { User: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};