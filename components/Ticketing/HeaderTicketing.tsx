import { Button, Divider, Typography } from "@mui/material";
import { GridRenderCellParams, GridValueGetterParams } from "@mui/x-data-grid";
import DeleteAction from "components/actions/DeleteAction";
import { IconEye } from "components/svg/icons";
import { deleteIncidentReport } from "requests/incidentReport";
import { deleteTickets } from "requests/tickets";
import theme from "src/theme";
import { colors } from "src/utils/colors";
import { TICKET_REMOVE } from "./Interface";

export function ticketingHeader<Array>(
  reloadData: () => void,
  openZoneSidebarTest: (id: string) => void,
  openUpdateForm: (id: string) => void
) {
  return [
    {
      field: "type",
      flex: 1,
      minWidth: 150,
      headerName: "Category",
      renderCell: (params: GridRenderCellParams<any>) => (
        <Typography
          sx={{
            px: 1.2,
            borderRadius: "20px",
            backgroundColor: colors.borderColor,
          }}
        >
          {params?.row?.category_id?.name}
        </Typography>
      ),
    },
    {
      field: "updatedAt",
      flex: 1,
      minWidth: 150,
      headerName: "Created Date",
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
      field: "department",
      flex: 1,
      minWidth: 250,
      headerName: "Department",
      renderCell: (params: GridRenderCellParams<any>) => (
        <Typography
          sx={{
            px: 1.2,
            borderRadius: "20px",
            backgroundColor: colors.borderColor,
          }}
        >
          {params.row.department_id.name}
        </Typography>
      ),
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      minWidth: 130,
      renderCell: (params: GridRenderCellParams<any>) => (
        <Typography
          sx={{
            px: 1.2,
            borderRadius: "20px",
            backgroundColor:
              params.row.status_id?.name === "To Do"
                ? "#F03660"
                : "" || params.row.status_id?.name === "In Progress"
                ? "#F3BB1C"
                : "" || params.row.status_id?.name === "Done"
                ? "#4cd964"
                : "",
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
      valueGetter: (params: GridValueGetterParams) =>
        `${(params.row.title || "") + " "}`,
    },
    {
      field: "reporter_id",
      headerName: "Employee",
      flex: 1,
      minWidth: 150,
      valueGetter: (params: GridValueGetterParams) =>
        `${
          (params.row.user_id?.first_name || "") +
          " " +
          (params.row.user_id?.last_name || "")
        }`,
    },
    {
      field: "priority",
      headerName: "Priority",
      flex: 1,
      minWidth: 150,
      valueGetter: (params: GridValueGetterParams) =>
        `${
          (params.row.priority == 1
            ? "High"
            : "" || params.row.priority == 2
            ? "Moderate"
            : "" || params.row.priority == 3
            ? "Low"
            : "" || "") + " "
        }`,
    },
    {
      field: "location",
      headerName: "Location",
      flex: 1,
      minWidth: 100,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.zone_id?.name || ""}`,
    },

    {
      field: "action",
      headerName: "Actions",
      flex: 1,
      minWidth: 300,
      sortable: false,
      renderCell: (params: GridRenderCellParams<Date>) => {
        return (
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
              onClick={() => {
                openUpdateForm(params.row._id), console.log("butoniii", params);
              }}
            >
              Update
            </Button>
            <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
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
              actionDelete={deleteTickets}
              reloadData={reloadData}
              id={params.row._id as string}
              deleteText={TICKET_REMOVE}
            />
          </div>
        );
      },
    },
  ];
}
