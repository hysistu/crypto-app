import {
  CHECKLIST_TEMPLATE_TYPE_URL,
  CheckListTemplateType,
} from "components/Checklist/ChecklistTemplateType/Interface";
import ErrorInterface from "interfaces/error";
import { getApi } from "src/utils/api";
import { BASE_URL_SCHEDULE_API } from "src/utils/consts";

const api = getApi(BASE_URL_SCHEDULE_API || "");

export const getChecklistTemplateType = async (): Promise<{
  ChecklistTypes: CheckListTemplateType[];
}> => {
  try {
    const response = await api.get(`${CHECKLIST_TEMPLATE_TYPE_URL}`);
    return { ChecklistTypes: response.data.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};
