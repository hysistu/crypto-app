import * as yup from "yup";

export interface CheckListTemplate {
  name: string;
  description: string;
}

export const CHECKLIST_TEMPLATE_URL = "checklists";

export const cheklistTemplateSchema = yup.object({
  name: yup
    .string()
    .min(2, "Name should be of minimum 2 characters length")
    .required("Name is required"),
  description: yup
    .string()
    .min(8, "Description should be of minimum 8 characters length")
    .required("Description is required"),
  checklist_type_id: yup.string().required("Checklist Type is required"),
  yes_or_no: yup.string().required("Checklist Answers Type is required"),
});

export const CHECKLIST_TEMPLATE_UPDATED = "Checklist  Template eshte azhurnuar";
export const CHECKLIST_TEMPLATE_ADD = "Checklist  Template eshte shtuar";
export const CHECKLIST_TEMPLATE_REMOVE = "Checklist Template eshte larguar";
export const CHECKLIST_TEMPLATE_SOME_ERROR_OCCURRED =
  "Ka ndodhur nje gabim me te dhena";
