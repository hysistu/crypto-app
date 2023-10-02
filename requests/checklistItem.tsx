import {
  CheckListItem,
  CHECKLIST_ITEM_URL,
} from "components/Checklist/ChecklistItem/Interface";
import ErrorInterface from "interfaces/error";
import { getApi } from "src/utils/api";
import { BASE_URL_SCHEDULE_API } from "src/utils/consts";

const api = getApi(BASE_URL_SCHEDULE_API || "");

export const addChecklistItem = async (
  params: CheckListItem
): Promise<{ response: Response } | ErrorInterface> => {
  try {
    const response = await api.post(CHECKLIST_ITEM_URL, params);
    return { response: response.data.data };
  } catch (e: any) {
    return e.response.data;
  }
};
