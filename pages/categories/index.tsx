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
import { incidentCategoryHeader } from "components/IncidentCategory/HeaderIC";
import { getAllIncidentCategory } from "requests/incidentCategory";

const List: NextPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [_page, setPage] = useState<number>(1);
  const { loader, records, page, totalPage, reloadData, data } = getData(
    getAllIncidentCategory,
    "IncidentCategory",
    _page
  );

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
    }
  }, [user, router, loading]);

  return (
    <Layout title="Categories">
      {has(data) ? (
        <ReusableTable
          columns={incidentCategoryHeader(reloadData)}
          data={data}
          totalPage={totalPage}
          page={page}
          setPage={setPage}
          records={records}
          loader={loader}
        >
          <AddAction
            url={"categories/add"}
            label={"Add New"}
            icon={<IconAddnew />}
          />
        </ReusableTable>
      ) : (
        <AddAction
          url={"categories/add"}
          label={"Add New"}
          icon={<IconAddnew />}
        />
      )}
    </Layout>
  );
};

export default withRouter(List);
