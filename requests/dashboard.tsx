import { DASHBOARD_URL, Risk } from "components/Risk/Interface";
import ErrorInterface from "interfaces/error";
import { getApi } from "src/utils/api";
import { BASE_URL_INCIDENT_API } from "src/utils/consts";

const api = getApi(BASE_URL_INCIDENT_API || "");

export const getAllRisks = async (): Promise<Risk | ErrorInterface> => {
  try {
    const response = await api.get(`${DASHBOARD_URL}`);
    return response.data.data;
  } catch (e: any) {
    return {
      error: true,
      message: "Bad Request",
    };
  }
};

export const getAllIncidentRating = async (): Promise<any | ErrorInterface> => {
  try {
    const response = await api.get(
      `${DASHBOARD_URL}/getIncidentsGroupedByRating`
    );
    return response.data.data;
  } catch (e: any) {
    return {
      error: true,
      message: "Bad Request",
    };
  }
};
export const getIncidentsGroupedByStatus = async (
  zone_id?: string
): Promise<any | ErrorInterface> => {
  try {
    const response = await api.get(
      `${DASHBOARD_URL}/getIncidentsGroupedByStatus${
        zone_id ? `?zone_id=${zone_id}` : ""
      }`
    );
    return response.data.data;
  } catch (e: any) {
    return {
      error: true,
      message: "Bad Request",
    };
  }
};
export const percentageForStatus = async (
  zone_id?: string
): Promise<any | ErrorInterface> => {
  try {
    const response = await api.get(
      `${DASHBOARD_URL}/getLastMonthIncidentsPercetageStatus${
        zone_id ? `?zone_id=${zone_id}` : ""
      }`
    );

    return response.data.data;
  } catch (e: any) {
    return {
      error: true,
      message: "Bad Request",
    };
  }
};
export const getIncidentsGroupedByZone = async (): Promise<
  any | ErrorInterface
> => {
  try {
    const response = await api.get(
      `${DASHBOARD_URL}/getIncidentsGroupedByZone`
    );
    return response.data.data;
  } catch (e: any) {
    return {
      error: true,
      message: "Bad Request",
    };
  }
};

export const getIncidentsGroupedByCategories = async (): Promise<
  any | ErrorInterface
> => {
  try {
    const response = await api.get(
      `${DASHBOARD_URL}/getIncidentsGroupedByCategories`
    );
    return response.data.data;
  } catch (e: any) {
    return {
      error: true,
      message: "Bad Request",
    };
  }
};
export const getLastYearIncidentsMonthly = async (): Promise<
  any | ErrorInterface
> => {
  try {
    const response = await api.get(
      `${DASHBOARD_URL}/getLastYearIncidentsMonthly`
    );
    return response.data.data;
  } catch (e: any) {
    return {
      error: true,
      message: "Bad Request",
    };
  }
};
export const avarageTimeForSolving = async (): Promise<
  any | ErrorInterface
> => {
  try {
    const response = await api.get(`${DASHBOARD_URL}/avarageTimeForSolving`);
    return response.data.data;
  } catch (e: any) {
    return {
      error: true,
      message: "Bad Request",
    };
  }
};
export const getIncidentsActiveClosedMonthly = async (
  zone_id?: string
): Promise<any | ErrorInterface> => {
  try {
    const response = await api.get(
      `${DASHBOARD_URL}/getIncidentsActiveClosedMonthly${
        zone_id ? `?zone_id=${zone_id}` : ""
      }`
    );
    return response.data.data;
  } catch (e: any) {
    return {
      error: true,
      message: "Bad Request",
    };
  }
};
export const incidentsYearlyMonthlyWeekly = async (): Promise<
  any | ErrorInterface
> => {
  try {
    const response = await api.get(
      `${DASHBOARD_URL}/incidentsYearlyMonthlyWeekly`
    );
    return response.data.data;
  } catch (e: any) {
    return {
      error: true,
      message: "Bad Request",
    };
  }
};
export const getLastMonthIncidentsDaily = async (): Promise<
  any | ErrorInterface
> => {
  try {
    const response = await api.get(
      `${DASHBOARD_URL}/getLastMonthIncidentsDaily`
    );
    return response.data.data;
  } catch (e: any) {
    return {
      error: true,
      message: "Bad Request",
    };
  }
};
export const getLastYearIncidentsWeekly = async (): Promise<
  any | ErrorInterface
> => {
  try {
    const response = await api.get(
      `${DASHBOARD_URL}/getLastMonthIncidentsWeekly`
    );
    return response.data.data;
  } catch (e: any) {
    return {
      error: true,
      message: "Bad Request",
    };
  }
};
