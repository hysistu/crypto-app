import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "components/Layout";
import useAuth from "context/useAuth";
import { withRouter } from "next/router";
import ReusableTable from "components/ReusableTable/ReusableTable";
import { has } from "src/utils/helper";
import getData from "hooks/getData";
import AddAction from "components/actions/AddAction";
import { IconAddnew } from "components/svg/icons";
import { getAllRole } from "requests/role";
import { roleHeader } from "components/Role/HeaderRole";
import { usersRoles } from "src/utils/usersRoles";

const RolesPage: NextPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [_page, setPage] = useState<number>(1);
  const { loader, records, page, reloadData, totalPage, data } = getData(
    getAllRole,
    "Role",
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
    <Layout title="Roles">
      {has(data) && (
        <ReusableTable
          columns={roleHeader(reloadData)}
          data={data}
          totalPage={totalPage}
          page={page}
          setPage={setPage}
          records={records}
          loader={loader}
        >
          <AddAction url={"role"} label={"Add New"} icon={<IconAddnew />} />
        </ReusableTable>
      )}
    </Layout>
  );
};

export default withRouter(RolesPage);
