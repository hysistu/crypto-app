import { IncidentCategory } from "components/IncidentCategory/Interface";
import { IncidentStatus } from "components/IncidentStatus/Interface";
import { IncidentType } from "components/IncidentType/Interface";
import { Sector } from "components/Sector/Interface";
import { User } from "components/User/Interface";
import * as yup from "yup";

export interface Risk {
  _id?: string;
  id?: string;
  // category_name: string;
  // percentage: number;
  // prevMonthRisks: number;
  // thisMonthRisks: number;
  name: string;
  description: string;
  start: number;
  end: number;
  category_id?: IncidentCategory | string;
  employee_id: User | string;
  sector_id?: Sector | string;
  type_id?: IncidentType | string;
  status_id?: IncidentStatus | string;
  severity: string;
  likelihood: string;
  image?: any;
}

export const DASHBOARD_URL = "/dashboard";
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

export const riskSchema = yup.object({
  name: yup
    .string()
    .min(3, "Name should be of minimum 3 characters length")
    .required("Name is required"),
  employee_id: yup.string().required("Assignment is required"),
  severity: yup.string().required("Severity is required"),
  likelihood: yup.string().required("Likelihood is required"),
  category_id: yup.string().required("Category is required"),
  sector_id: yup.string().required("Sector is required"),
  description: yup
    .string()
    .min(3, "Description should be of minimum 8 characters length")
    .required("Description is required"),
  image: yup
    .mixed()
    .nullable()
    .required("Image required")
    .test(
      "Fichier taille",
      "Image too large",
      (value) => !value || (value && value.size <= 100000000)
    )
    .test(
      "format",
      "Wrong format",
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
    ),
});

export const RISK_UPDATED = "Rrisku eshte azhurnuar";
export const RISK_ADD = "Rrisku eshte shtuar";
export const RISK_REMOVE = "Rrisku eshte larguar";
export const RISK_SOME_ERROR_ACCURED = "Ka ndodhur nje gabim me te dhena";
