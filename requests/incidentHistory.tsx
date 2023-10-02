import ErrorInterface from "interfaces/error";
import { getApi } from "src/utils/api";
import { BASE_URL_INCIDENT_API } from "src/utils/consts";

const api = getApi(BASE_URL_INCIDENT_API || "");

export const getAllIncidentHistory = async (): Promise<
  any | ErrorInterface
> => {
  try {
    const response = await api.get(`/incidentReport`);
    return response.data.data;
  } catch (e: any) {
    return {
      error: true,
      message: "Bad Request",
    };
  }
};
