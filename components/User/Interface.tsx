import * as yup from "yup";
import { Department } from "../Department/Interface";
import { Role } from "../Role/Interface";
import { Zone } from "../Zone/Interface";

export interface User {
  _id?: string;
  id?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  birthdate?: string;
  phoneNumber?: string;
  password?: string;
  passwordConfirm?: string;
  // department_id?: Department | string;
  // role_id?: Role | string;
  role?: Role | string;
  // zone_id?: Zone | string;
  isActive?: boolean | undefined;
  // first_source?: any;
  // primary_email?: any;
  // primary_phone?: any;
}
export const USER_URL = "users";

export const userSchema = yup.object({
  firstName: yup
    .string()
    .min(2, "First Name should be of minimum 2 characters length")
    .required("First Name is required")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  lastName: yup
    .string()
    .min(2, "Last Name should be of minimum 2 characters length")
    .required("Last Name is required")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  email: yup
    .string()
    .email("Should be an valid email")
    .required("Email is required"),
  // zone_id: yup.string().required("Zone is required"),
  // department_id: yup.string().required("Department is required"),
  // role_id: yup.string().required("Role is required"),
  role: yup.string().required("Role is required"),

});

export const USER_UPDATED = "Perdoruesi eshte azhurnuar";
export const PASSWORD_UPDATED = "Passwordi eshte ripertrire me sukses";
export const USER_ADD = "Perdoruesi eshte shtuar";
export const USER_REMOVE = "Perdoruesi eshte larguar";
export const USER_SOME_ERROR_ACCURED = "Ka ndodhur nje gabim me te dhena";
