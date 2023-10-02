import {
  CheckListTemplate,
  CHECKLIST_TEMPLATE_URL,
} from "components/Checklist/ChecklistTemplate/Interface";
import ErrorInterface from "interfaces/error";
import { getApi } from "src/utils/api";
import { BASE_URL_SCHEDULE_API } from "src/utils/consts";

const api = getApi(BASE_URL_SCHEDULE_API || "");

export const addChecklistTemplate = async (
  params: CheckListTemplate
): Promise<any | ErrorInterface> => {
  try {
    const response = await api.post(`${CHECKLIST_TEMPLATE_URL}`, params);
    return { response: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};
