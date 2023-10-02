import { Button, Divider, Typography } from "@mui/material";
import { GridValueGetterParams, GridRenderCellParams } from "@mui/x-data-grid";
import DeleteAction from "components/actions/DeleteAction";
import { IconEye } from "components/svg/icons";
import { deleteIncidentReport } from "requests/incidentReport";
import { colors } from "src/utils/colors";
import { RISK_REMOVE } from "./Interface";

export function risksHeader<Array>(
  reloadData: () => void,
  openZoneSidebarTest: (id: string) => void
) {
  return [
    {
      field: "type",
      flex: 1,
      minWidth: 100,
      headerName: "Type",
      renderCell: () => (
        <Typography
          sx={{
            px: 1.2,
            borderRadius: "20px",
            backgroundColor: colors.borderColor,
          }}
        >
          Risk
        </Typography>
      ),
    },
    {
      field: "updatedAt",
      flex: 1,
      minWidth: 150,
      headerName: "Updated Date",
      valueGetter: (params: GridValueGetterParams) => {
        let date = new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        }).format(new Date(params.row.updatedAt));
        return date;
      },
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      minWidth: 130,
      renderCell: (params: GridValueGetterParams) => (
        <Typography
          sx={{
            px: 1.2,
            borderRadius: "20px",
            backgroundColor:
              params.row.status_id?.name === "Active"
                ? "#F03660"
                : params.row.status_id?.name === "Done"
                ? "#3CC13B"
                : "#F3BB1C",
          }}
        >
          {params.row.status_id?.name || ""}
        </Typography>
      ),
    },
    {
      field: "name",
      headerName: "Title",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "reporter_id",
      headerName: "Reporter",
      flex: 1,
      minWidth: 150,
      valueGetter: (params: GridValueGetterParams) =>
        `${
          (params.row.reporter_id?.first_name || "") +
          " " +
          (params.row.reporter_id?.last_name || "")
        }`,
    },
    {
      field: "employee",
      headerName: "Employeer",
      flex: 1,
      minWidth: 150,
      valueGetter: (params: GridValueGetterParams) =>
        `${
          (params.row.employee_id?.first_name || "") +
          " " +
          (params.row.employee_id?.last_name || "")
        }`,
    },
    {
      field: "location",
      headerName: "Location",
      flex: 1,
      minWidth: 100,
      valueGetter: (params: GridValueGetterParams) =>
        `${
          (params.row.sector_id?.name || "") +
          "/" +
          (params.row.sector_id?.zone_id.name || "")
        }`,
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
      field: "weather",
      headerName: "Weather",
      flex: 1,
      minWidth: 120,
      valueGetter: (params: GridValueGetterParams) =>
        `${
          (params.row.weather_temperature + "℃" || "") +
          " " +
          (params.row.weather_description || "")
        }`,
    },
    {
      field: "action",
      headerName: "Actions",
      flex: 1,
      minWidth: 200,
      sortable: false,
      renderCell: (params: GridRenderCellParams<Date>) => (
        <div style={{ flex: 1, display: "flex", padding: 3 }}>
          <Button
            startIcon={<IconEye />}
            sx={{
              background: "transparent",
              borderRadius: "10px",
              color: "#262B2B",
              textTransform: "capitalize",
              border: "1px solid",
              borderColor: "transparent",
              "&:hover": {
                color: "#3E66FB",
                borderColor: colors.primary,
                svg: {
                  stroke: "#3E66FB",
                  " path": {
                    stroke: "#3E66FB",
                  },
                  " circle": {
                    stroke: "#3E66FB",
                  },
                },
              },
            }}
            variant="text"
            color="primary"
            onClick={() => openZoneSidebarTest(params.row._id)}
          >
            View
          </Button>
          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
          <DeleteAction
            actionDelete={deleteIncidentReport}
            reloadData={reloadData}
            id={params.row._id as string}
            deleteText={RISK_REMOVE}
          />
        </div>
      ),
    },
  ];
}
