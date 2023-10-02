import * as yup from "yup";

export interface Zone {
    _id?: string;
    id?: string;
    name: string;
    description: string;
}
export const ZONE_URL = 'zones'

export const zoneSchema = yup.object({
    name: yup
        .string()
        .min(6, "name should be of minimum 8 characters length")
        .required("Name is required"),
    description: yup
        .string()
        .min(6, "Description should be of minimum 8 characters length")
        .required("Description is required"),
});
