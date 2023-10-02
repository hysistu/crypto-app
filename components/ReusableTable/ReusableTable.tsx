import { FC, ReactElement } from "react";
import { Box, SxProps } from "@mui/material";
import theme from "src/theme";
import { colors } from "src/utils/colors";
import TablePagination from "@mui/material/TablePagination";

import { DataGrid, GridColDef } from "@mui/x-data-grid";

type ReusableTableProps = {
  columns: GridColDef[];
  data: Array<any>;
  totalPage: number;
  page: number;
  records: number;
  loader: boolean;
  setPage: (data: number) => void;
  children?: ReactElement;
  sx?: SxProps;
};

const ReusableTable: FC<ReusableTableProps> = ({
  columns,
  data,
  totalPage,
  page,
  records,
  loader,
  setPage,
  children,
  sx,
}) => {
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage + 1);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box
      sx={{
        p: 2,
        border: `1px solid ${colors.borderColor}`,
        backgroundColor: "#fff",
        borderRadius: theme.shape,
        pb: "50px",
        ...sx,
      }}
    >
      <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
        {children}
      </Box>

      <Box
        sx={{
          mt: 2,
          height: 400,
          width: "100%",
          background: "#fff",
          flexGrow: 1,
          "& .MuiDataGrid-columnHeader": {
            fontWeight: 600,
          },
          "& .risk_id": {
            color: "primary.main",
            pl: 3,
          },
          "& .MuiDataGrid-row": {
            ":nth-of-type(even)": {
              backgroundColor: "#FBFBFB",
              ":hover": {
                backgroundColor: "#e6e6e6",
              },
            },
          },
        }}
      >
        <DataGrid
          getRowId={(row) => row._id}
          rows={data}
          rowCount={10}
          columns={columns}
          disableSelectionOnClick
          loading={loader}
          rowsPerPageOptions={[]}
          hideFooter={true}
          components={{
            Footer: undefined,
            Pagination: null,
          }}
          paginationMode={"server"}
        />

        <TablePagination
          component="div"
          count={records}
          page={page - 1}
          showFirstButton={false}
          showLastButton={false}
          rowsPerPageOptions={[]}
          onPageChange={handleChangePage}
          rowsPerPage={10}
          style={{
            color: "#000",
          }}
        />
      </Box>
    </Box>
  );
};

export default ReusableTable;
