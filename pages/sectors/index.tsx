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
import { getAllSector } from "requests/sectors";
import { sectorHeader } from "components/Sector/HeaderSector";
import { usersRoles } from "src/utils/usersRoles";

const SectorsPage: NextPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [_page, setPage] = useState<number>(1);
  const { loader, records, page, reloadData, totalPage, data } = getData(
    getAllSector,
    "Sector",
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
    <Layout title="Sectors">
      {has(data) && (
        <ReusableTable
          columns={sectorHeader(reloadData)}
          data={data}
          totalPage={totalPage}
          page={page}
          setPage={setPage}
          records={records}
          loader={loader}
        />
      )}
    </Layout>
  );
};

export default withRouter(SectorsPage);
