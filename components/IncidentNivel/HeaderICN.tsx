import { GridValueGetterParams, GridRenderCellParams } from "@mui/x-data-grid";
import DeleteAction from "components/actions/DeleteAction";
import { deleteIncidentNivel } from "requests/incidentNivel";

export function incidentNivelHeader<Array>(reloadData: () => void) {
  return [
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
    // {
    //   field: "action",
    //   headerName: "Actions",
    //   flex: 1,
    //   minWidth: 150,
    //   renderCell: (params: GridRenderCellParams<Date>) => (
    //     <div style={{ flex: 1, display: "flex", padding: 3 }}>
    //       <DeleteAction
    //         actionDelete={deleteIncidentNivel}
    //         reloadData={reloadData}
    //         deleteText="Leveli u fshi me sukses"
    //         id={params.row._id as string}
    //       />
    //     </div>
    //   ),
    // },
  ];
}
