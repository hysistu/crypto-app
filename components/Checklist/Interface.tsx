import * as yup from "yup";

export interface CheckList {
  _id?: string;
  id?: string;
  name: string;
  description: string;
}

export const CHECKLIST_URL = "checklists";

export const checklistSchema = yup.object({
  name: yup
    .string()
    .min(2, "Name should be of minimum 2 characters length")
    .required("Name is required"),
  description: yup
    .string()
    .min(8, "Description should be of minimum 8 characters length")
    .required("Description is required"),
});

export const CHECKLIST_UPDATED = "Checklist eshte azhurnuar";
export const CHECKLIST_ADD = "Checklist eshte shtuar";
export const CHECKLIST_REMOVE = "Checklist eshte larguar";
export const CHECKLIST_SOME_ERROR_ACCURED = "Ka ndodhur nje gabim me te dhena";
