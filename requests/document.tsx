import ErrorInterface from "interfaces/error";
import { getApi } from "src/utils/api";
import { BASE_URL_INCIDENT_API } from "src/utils/consts";
const api = getApi(BASE_URL_INCIDENT_API || "");

export const DOCUMENT_FILE = "documentFile";
export const DOCUMENT_TYPE = "documentType";

export const getAllDocuments = async (): Promise<{
  Documents: any;
}> => {
  try {
    const response = await api.get(`${DOCUMENT_TYPE}`);
    return { Documents: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const addDocumentsType = async (
  params: any
): Promise<{ Documents: any }> => {
  try {
    const response = await api.post(DOCUMENT_TYPE, params);
    return { Documents: response.data.data };
  } catch (error: any) {
    return error.response.data;
  }
};

export const getDocumentsByType = async (
  params: string
): Promise<{
  Document: any;
}> => {
  try {
    const response = await api.get(`${DOCUMENT_FILE}/type?type_id=${params}`);
    return { Document: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const addDocumentsFile = async (
  params: any
): Promise<{ response: any }> => {
  try {
    const response = await api.post(DOCUMENT_FILE, params);
    return { response: response.data.data };
  } catch (error: any) {
    return error.response.data;
  }
};

export const deleteDocumentsFile = async (
  params: string
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.delete(`${DOCUMENT_FILE}/?id=${params}`);
    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
};
