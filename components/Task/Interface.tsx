import { IncidentCategory } from "components/IncidentCategory/Interface";
import { IncidentStatus } from "components/IncidentStatus/Interface";
import { IncidentType } from "components/IncidentType/Interface";
import { Sector } from "components/Sector/Interface";
import { User } from "components/User/Interface";
import * as yup from "yup";

export interface Task {
  _id?: string;
  id?: string;
  name: string;
  description: string;
  category_id?: IncidentCategory | string;
  employee_id: User | string;
  sector_id?: Sector | string;
  type_id?: IncidentType | string;
  status_id?: IncidentStatus | string;
  severity: string;
  likelihood: string;
  image?: any;
}

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

export const taskSchema = yup.object({
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
    .min(8, "Description should be of minimum 8 characters length")
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

export const INCIDENT_REPORT_BY_CATEGORY = "/incidentReport/Category?id=";
export const INCIDENT_REPORT = "incidentReport";
export const TASK_UPDATED = "Tasku eshte azhurnuar";
export const TASK_ADD = "Tasku eshte shtuar";
export const TASK_REMOVE = "Tasku eshte larguar";
export const TASK_SOME_ERROR_ACCURED = "Ka ndodhur nje gabim me te dhena";
