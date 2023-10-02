import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "components/Layout";
import useAuth from "context/useAuth";
import { withRouter } from "next/router";
import ReusableTable from "components/ReusableTable/ReusableTable";
import { has } from "src/utils/helper";
import getData from "hooks/getData";
import { departmentHeader } from "components/Department/HeaderDepartment";
import AddAction from "components/actions/AddAction";
import { IconAddnew } from "components/svg/icons";
import { getAllDepartment } from "requests/departament";
import { usersRoles } from "src/utils/usersRoles";

const List: NextPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [_page, setPage] = useState<number>(1);
  const { loader, records, page, totalPage, reloadData, data } = getData(
    getAllDepartment,
    "Department",
    _page
  );

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
    }
    if (!loading && user && user?.role_id.name !== usersRoles.SuperAdmin) {
      router.replace("/dashboard");
    }
  }, [user, router, loading]);

  return (
    <Layout title="Departments">
      {has(data) ? (
        <ReusableTable
          columns={departmentHeader(reloadData)}
          data={data}
          totalPage={totalPage}
          page={page}
          setPage={setPage}
          records={records}
          loader={loader}
        >
          <AddAction
            url={"department"}
            label={"Add New"}
            icon={<IconAddnew />}
          />
        </ReusableTable>
      ) : (
        <AddAction url={"department"} label={"Add New"} icon={<IconAddnew />} />
      )}
    </Layout>
  );
};

export default withRouter(List);
