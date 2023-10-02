import {
  GridValueGetterParams,
  GridColDef,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import AddAction from "components/actions/AddAction";
import DeleteAction from "components/actions/DeleteAction";
import { deleteDepartmentUser } from "requests/departamentUser";
import { IconAddnew } from "components/svg/icons";

export const userColumns: GridColDef[] = [
  { field: "_id", flex: 1, minWidth: 150, headerName: "ID" },
  {
    field: "department_id.name",
    headerName: "Department Name",
    flex: 1,
    minWidth: 150,
    valueGetter: (params: GridValueGetterParams) => `${params.row.name || ""}`,
  },
  {
    field: "user_id.email",
    headerName: "Email",
    flex: 1,
    minWidth: 150,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.user_id.email || ""}`,
  },
  {
    field: "user_id.first_name",
    headerName: "First Name",
    flex: 1,
    minWidth: 150,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.user_id.first_name || ""}`,
  },
  {
    field: "user_id.last_name",
    headerName: "Last Name",
    flex: 1,
    minWidth: 150,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.user_id.last_name || ""}`,
  },
  {
    field: "user_id.role_id.name",
    headerName: "Role",
    flex: 1,
    minWidth: 150,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.user_id.role_id.name || ""}`,
  },
  {
    field: "action",
    headerName: "Actions",
    flex: 1,
    minWidth: 150,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.user_id.role_id.name || ""}`,
    renderCell: (params: GridRenderCellParams<Date>) => (
      <>
        <AddAction url={"user"} label={"New"} id={params.row._id as string}>
          <IconAddnew />
        </AddAction>
        <DeleteAction
          actionDelete={deleteDepartmentUser}
          id={params.row._id as string}
        />
      </>
    ),
  },
];
