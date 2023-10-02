import {
  CheckListItemTemplate,
  CHECKLIST_ITEM_TEMPLATE_URL,
} from "components/Checklist/ChecklistItemTemplate/Interface";
import { getApi } from "src/utils/api";
import { BASE_URL_SCHEDULE_API } from "src/utils/consts";
import ErrorInterface from "interfaces/error";

const api = getApi(BASE_URL_SCHEDULE_API || "");
const url = "checklistItems";

export const getChecklistItemTemplate = async (
  params: string
): Promise<{
  ChecklistItemTemplate: CheckListItemTemplate[];
}> => {
  try {
    const response = await api.get(
      `${url}/${CHECKLIST_ITEM_TEMPLATE_URL}?id=${params}`
    );
    return { ChecklistItemTemplate: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const createChecklistItemTemplate = async (
  params: string
): Promise<any | ErrorInterface> => {
  try {
    const response = await api.post(`${url}`, params);
    return { response: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};

export const updateChecklistItemTemplate = async (
  params: string,
  body: any
): Promise<any | ErrorInterface> => {
  try {
    const response = await api.patch(`${url}?id=${params}`, { ...body });
    return response.data.message;
  } catch (e: any) {
    return e.response.data;
  }
};

export const deleteChecklistItemTemplate = async (
  params: string
): Promise<{
  ChecklistItemTemplate: CheckListItemTemplate[];
}> => {
  try {
    const response = await api.delete(`${url}?id=${params}`);
    return response.data.message;
  } catch (e: any) {
    return e.response.data;
  }
};
