import * as yup from "yup";

export interface TicketRating {
  _id?: string;
  id?: string;
  name: string;
  description: string;
}
export const TICKET_RATING = "ticket-categories";

export const ticketRatingSchema = yup.object({
  name: yup
    .string()
    .min(6, "name should be of minimum 8 characters length")
    .required("Name is required"),
  description: yup
    .string()
    .min(6, "Description should be of minimum 8 characters length")
    .required("Description is required"),
});
