import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { GridValueGetterParams, GridRenderCellParams } from "@mui/x-data-grid";
import AddAction from "components/actions/AddAction";
import DeleteAction from "components/actions/DeleteAction";
import { IconEye } from "components/svg/icons";
import { deleteUser } from "requests/user";
import { usersRoles } from "src/utils/usersRoles";

export function useUserColumns<Array>(
  reloadData: () => void,
  hide?: boolean,
  user?: any
) {
  return [
    // { field: "_id", flex: 1, minWidth: 150, headerName: "ID" },
    {
      field: "firstName",
      headerName: "First Name",
      flex: 1,
      minWidth: 150,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ""}`,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      flex: 1,
      minWidth: 150,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.lastName || ""}`,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      minWidth: 150,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.email || ""}`,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
      minWidth: 150,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.role || ""}`,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 1,
      minWidth: 150,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row?.phoneNumber || ""}`,
    },
    //     {
    //   field: "birthdate",
    //   headerName: "Birthdate",
    //   flex: 1,
    //   minWidth: 150,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.row?.birthdate || ""}`,
    // },
        {
      field: "isActive",
      headerName: "Is Active",
      flex: 1,
      minWidth: 150,
      valueGetter: (params: GridValueGetterParams) =>
        // `${params.row?.isActive && "poo"}`,
        params.row?.isActive === true ? 'Active' : 'Inactive',
    },
    {
      field: "action",
      headerName: "Actions",
      flex: 1,
      minWidth: hide ? 100 : 200,
      maxWidth: hide ? 100 : 250,
      renderCell: (params: GridRenderCellParams<Date>) => (
        <div style={{ flex: 1, display: "flex", padding: 3 }}>
          {params.row._id === user?.id ? (
            <Typography sx={{ mx: "auto" }}>You</Typography>
          ) : (
            <>
              <AddAction
                url={`user/${params.row._id as string}`}
                label={"View"}
                icon={<IconEye />}
              />
              {!hide && (
                <>
                  <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
                  <DeleteAction
                    actionDelete={deleteUser}
                    reloadData={reloadData}
                    id={params.row._id as string}
                  />
                </>
              )}
            </>
          )}
        </div>
      ),
    },
    // {
    //   field: "action",
    //   headerName: "Actions",
    //   flex: 1,
    //   minWidth: hide ? 120 : 200,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.row.role_id.name || ""}`,
    //   renderCell: (params: GridRenderCellParams<Date>) => (
    //     <div style={{ flex: 1, display: "flex", padding: 3 }}>
    //       {params.row._id === user?.id ? (
    //         <Typography>You</Typography>
    //       ) : (
    //         !(params.row.role_id.name === usersRoles.SuperAdmin) && (
    //           <>
    //             <AddAction
    //               url={`user/${params.row._id as string}`}
    //               label={"View"}
    //               icon={<IconEye />}
    //             />
    //             {!hide && (
    //               <>
    //                 <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
    //                 <DeleteAction
    //                   actionDelete={deleteUser}
    //                   reloadData={reloadData}
    //                   id={params.row._id as string}
    //                 />
    //               </>
    //             )}
    //           </>
    //         )
    //       )}
    //     </div>
    //   ),
    // },
  ];
}
