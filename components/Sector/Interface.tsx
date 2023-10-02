import * as yup from "yup";
import { Zone } from "../Zone/Interface";

export interface Sector {
  _id?: string;
  id?: string;
  name: string;
  description: string;
  zone_id: Zone | string;
  coordinate_x?: number | string;
  coordinate_y?: number | string;
}
export const SECTOR_URL = "sectors";

export const sectorSchema = yup.object({
  name: yup
    .string()
    .min(2, "Name should be of minimum 2 characters length")
    .required("Name is required"),
  // description: yup
  //   .string()
  //   .min(8, "Description should be of minimum 8 characters length")
  //   .required("Description is required"),
});

export const SECTOR_UPDATED = "Sektori eshte azhurnuar";
export const SECTOR_ADD = "Sektori eshte shtuar";
export const SECTOR_REMOVE = "Sektori eshte larguar";
export const SECTOR_SOME_ERROR_ACCURED = "Ka ndodhur nje gabim me te dhena";
