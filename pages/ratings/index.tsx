import { Typography } from "@mui/material";
import { incidentRatingHeader } from "components/IncidentRating/HeaderICR";
import Layout from "components/Layout";
import ReusableTable from "components/ReusableTable/ReusableTable";
import useAuth from "context/useAuth";
import getData from "hooks/getData";
import { NextPage } from "next";
import { useRouter, withRouter } from "next/router";
import { useEffect, useState } from "react";
import { getAllIncidentRating } from "requests/incidentRatings";
import { has } from "src/utils/helper";

const List: NextPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [_page, setPage] = useState<number>(1);
  const { loader, records, page, totalPage, reloadData, data } = getData(
    getAllIncidentRating,
    "IncidentRating",
    _page
  );

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
    }
  }, [user, router, loading]);

  return (
    <Layout title="Ratings">
      {has(data) && (
        <ReusableTable
          columns={incidentRatingHeader(reloadData)}
          data={data}
          totalPage={totalPage}
          page={page}
          setPage={setPage}
          records={records}
          loader={loader}
        >
          <Typography
            sx={{
              fontWeight: "500",
            }}
          >
            Ratings
          </Typography>
        </ReusableTable>
      )}
    </Layout>
  );
};

export default withRouter(List);
