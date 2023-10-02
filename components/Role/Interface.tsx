import * as yup from "yup";

export interface Role {
    _id?: string;
    id?: string;
    name: string;
    description: string;
}
export const ROLE_URL = 'roles'

export const roleSchema = yup.object({
    name: yup
        .string()
        .min(6, "name should be of minimum 8 characters length")
        .required("Name is required"),
    description: yup
        .string()
        .min(6, "Description should be of minimum 8 characters length")
        .required("Description is required"),
});
