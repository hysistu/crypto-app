import { CheckList, CHECKLIST_URL } from "components/Checklist/Interface";
import { getApi } from "src/utils/api";
import { BASE_URL_SCHEDULE_API } from "src/utils/consts";

const api = getApi(BASE_URL_SCHEDULE_API || "");

export const getAllChecklist = async (): Promise<{
  Checklist: CheckList[];
}> => {
  try {
    const response = await api.get(`${CHECKLIST_URL}/groupedByType`);
    return { Checklist: response.data.data };
  } catch (e: any) {
    return e.response?.data;
  }
};

export const deleteChecklist = async (
  params: string
): Promise<{
  Checklist: CheckList[];
}> => {
  try {
    const response = await api.delete(`${CHECKLIST_URL}?id=${params}`);
    return response.data.message;
  } catch (e: any) {
    return e.response.data;
  }
};

export const updateChecklist = async (
  params: string,
  body: any
): Promise<{
  Checklist: CheckList[];
}> => {
  try {
    const response = await api.patch(`${CHECKLIST_URL}?id=${params}`, {
      ...body,
    });
    return response.data.message;
  } catch (e: any) {
    return e.response.data;
  }
};

export const checklistStatistic = async (
  params: string
): Promise<{
  Checklist: CheckList[];
}> => {
  try {
    const response = await api.get(`dailyChecklists/stats?id=${params}`);
    return response.data.data;
  } catch (e: any) {
    return e.response.data;
  }
};

export const checklistStatisticRecords = async (
  id: string,
  body?: any
): Promise<{
  Checklist: any;
}> => {
  try {
    const response = await api.get(`dailyChecklists/template?id=${id}`, {
      params: {
        ...body,
      },
    });
    return response.data.data;
  } catch (e: any) {
    return e.response;
  }
};

export const checklistStatisticRecordsAnswer = async (
  params: string
): Promise<{
  Checklist: any;
}> => {
  try {
    const response = await api.get(
      `dailyChecklistItems/getDailyChecklist?id=${params}`
    );
    return response.data.data;
  } catch (e: any) {
    return e.response;
  }
};
