import * as yup from "yup";

export interface IncidentRating {
    _id?: string;
    id?: string;
    name: string;
    description: string;
}
export const INCIDENT_RATTING = 'incidentRating'

export const incidentRatingSchema = yup.object({
    name: yup
        .string()
        .min(6, "name should be of minimum 8 characters length")
        .required("Name is required"),
    description: yup
        .string()
        .min(6, "Description should be of minimum 8 characters length")
        .required("Description is required"),
});
