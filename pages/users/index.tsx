import { Button, Typography } from "@mui/material";
import CreateUser from "components/CreateUser/CreateUser";
import Layout from "components/Layout";
import ReusableTable from "components/ReusableTable/ReusableTable";
import { IconAddnew } from "components/svg/icons";
import { useUserColumns } from "components/User/HeaderUser";
import useAuth from "context/useAuth";
import getData from "hooks/getData";
import { NextPage } from "next";
import { useState } from "react";
import { getAllDeactivatedUser, getAllUsers } from "requests/user";
import { usersRoles } from "src/utils/usersRoles";

const UsersPage: NextPage = () => {
  const { user, loading } = useAuth();
  const [form, setForm] = useState<boolean>(false);
  const [_page, setPage] = useState<number>(1);
  const [_deactivatedPage, setDeactivatedPage] = useState<number>(1);
  const { loader, records, page, totalPage, reloadData, data } = getData(
    getAllUsers,
    "User",
    _page
  );

  return (
    <Layout title="Users">
      <ReusableTable
        columns={useUserColumns(
          () => {
            reloadData();
          },
          false,
          user
        )}
        data={
          user?.role !== usersRoles.admin
            ? data.filter((dat: any) => dat.role !== usersRoles.admin)
            : data
        }
        totalPage={totalPage}
        page={page}
        setPage={setPage}
        records={records}
        loader={loader}
      >
        <Button
          sx={{
            textTransform: "capitalize",
            background: "transparent",
            borderRadius: "10px",
            color: "#262B2B",
            "&:hover": {
              color: "#3E66FB",
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
          startIcon={<IconAddnew />}
          onClick={() => setForm(!form)}
        >
          Add New
        </Button>
      </ReusableTable>
      {form && <CreateUser reloadData={reloadData} />}
    </Layout>
  );
};

export default UsersPage;
