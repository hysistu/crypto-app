import * as yup from "yup";
import {Department} from "../Department/Interface";
import {User} from "../User/Interface";

export interface DepartmentUser {
    _id?: string;
    id?: string;
    department_id: Department | string;
    user_id: User | string;
}
export const DEPARTMENT_USER_URL = 'departmentUser'

export const departmentUserSchema = yup.object({
    department_id: yup
        .string()
        .min(10, "Select One Department")
        .required("Department is required"),
    user_id: yup
        .string()
        .min(10, "Select One User")
        .required("User is required"),
});
