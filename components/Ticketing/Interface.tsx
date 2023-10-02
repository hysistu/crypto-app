import { TicketCategory } from "components/TicketsCategory/Interface";
import { TicketStatus } from "components/TicketStatus/InterfaceStatus";
import { User } from "components/User/Interface";
import * as yup from "yup";

export interface Ticket {
  response: any;
  _id?: string;
  id?: string;
  title: string;
  description: string;
  category_id?: TicketCategory | string;
  user_id: User | string;
  status_id?: TicketStatus | string;
  priority?: any;
  department_id?: any;
  zone_id?: any;
  employee_id?: any;
  level_id?: any;
}

export const ticketSchema = yup.object({
  title: yup
    .string()
    .min(3, "Title should be of minimum 3 characters length")
    .required("Title is required"),
  user_id: yup.string().required("Assignment is required"),
  category_id: yup.string().required("Category is required"),
  level_id: yup.string().required("Level is required"),
  department_id: yup.string().required("Department is required"),
  zone_id: yup.string().required("Zone is required"),
  priority: yup.string().required("Priority is required"),
  status_id: yup.string().required("Status is required"),
  description: yup
    .string()
    .min(3, "Description should be of minimum 8 characters length")
    .required("Description is required"),
});

export const TICKET_REPORT_CATEGORY = "/ticketReport/Category?id=";
export const TICKTE_REPORT = "ticketReport";

export const TICKTE_UPDATED = "Tiketa eshte azhurnuar";
export const TICKET_ADD = "Tiketa eshte shtuar";
export const TICKET_REMOVE = "Tiketa eshte larguar";
export const TICKET_SOME_ERROR_ACCURED = "Ka ndodhur nje gabim me te dhena";
