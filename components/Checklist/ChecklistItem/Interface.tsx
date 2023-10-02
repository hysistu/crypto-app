import { CheckListItemTemplate } from "../ChecklistItemTemplate/Interface";
import { CheckList } from "../Interface";
import * as yup from "yup";

export interface CheckListItem {
  _id?: string;
  id?: string;
  result: string;
  description: string;
  checklist_item_template_id: CheckListItemTemplate | string;
  daily_checklist_id: CheckList | string;
}

export const CHECKLIST_ITEM_URL = "dailyChecklistItems";

export const cheklistItemSchema = yup.object({
  result: yup.string().required("Name is required"),
});

export const CHECKLIST_ITEM_UPDATED = "Checklist Item eshte azhurnuar";
export const CHECKLIST_ITEM_ADD = "Checklist Item eshte shtuar";
export const CHECKLIST_ITEM_REMOVE = "Checklist Item eshte larguar";
export const CHECKLIST_ITEM_SOME_ERROR_ACCURED =
  "Ka ndodhur nje gabim me te dhena";
