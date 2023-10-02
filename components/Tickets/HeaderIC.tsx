import Divider from "@mui/material/Divider";
import { GridValueGetterParams, GridRenderCellParams } from "@mui/x-data-grid";
import AddAction from "components/actions/AddAction";
import DeleteAction from "components/actions/DeleteAction";
import { IconEye } from "components/svg/icons";
import { deleteTickets } from "requests/tickets";

export function ticketsHeader<Array>(reloadData: () => void) {
  return [
    // { field: "_id", flex: 1, minWidth: 150, headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.name || ""}`,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
      minWidth: 150,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.description || ""}`,
    },
    {
      field: "action",
      headerName: "Actions",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams<Date>) => (
        <div style={{ flex: 1, display: "flex", padding: 3 }}>
          <AddAction
            url={"ticket/add"}
            label={"View"}
            id={params.row._id as string}
            icon={<IconEye />}
          />
          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
          <DeleteAction
            actionDelete={deleteTickets}
            reloadData={reloadData}
            id={params.row._id as string}
          />
        </div>
      ),
    },
  ];
}
