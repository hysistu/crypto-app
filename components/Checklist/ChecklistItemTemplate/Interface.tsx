import * as yup from "yup";
import { CheckList } from "../Interface";

export interface CheckListItemTemplate {
  _id?: string;
  id?: string;
  name: string;
  description: string;
  checklist_template_id: CheckList | string;
}
export interface CreateCheckListItemTemplate {
  name: string;
  checklist_template_id: CheckList | string;
  description: "pershkrimi";
}
export const CHECKLIST_ITEM_TEMPLATE_URL = "getItemsByChecklistId";

export const cheklistItemTemplateSchema = yup.object({
  name: yup
    .string()
    .min(2, "Name should be of minimum 2 characters length")
    .required("Name is required"),
  description: yup
    .string()
    .min(8, "Description should be of minimum 8 characters length")
    .required("Description is required"),
});

export const CHECKLIST_ITEM_TEMPLATE_UPDATED =
  "Checklist Item Template eshte azhurnuar";
export const CHECKLIST_ITEM_TEMPLATE_ADD =
  "Checklist Item Template eshte shtuar";
export const CHECKLIST_ITEM_TEMPLATE_REMOVE =
  "Checklist Item Template eshte larguar";
export const CHECKLIST_ITEM_TEMPLATE_SOME_ERROR_ACCURED =
  "Ka ndodhur nje gabim me te dhena";
