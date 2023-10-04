import * as yup from "yup";

export interface Case {
  _id?: string;
  id?: string;
  caseName: string;
  caseMethod: string;
  priceFrom: string;
  priceTo: string;
  description: string;
  // finishedCase: string;
  closeCase: boolean;
  isActive: boolean;

}

export const CASE_URL = "case";

export const checklistSchema = yup.object({
  caseName: yup
    .string()
    .min(2, "Name should be of minimum 2 characters length")
    .required("Name is required"),
  description: yup
    .string()
    .min(8, "Description should be of minimum 8 characters length")
    .required("Description is required"),
});

export const CASE_UPDATED = "Case eshte azhurnuar";
export const CASE_ADD = "Case eshte shtuar";
export const CASE_REMOVE = "Case eshte larguar";
export const CASE_SOME_ERROR_ACCURED = "Ka ndodhur nje gabim me te dhena";
