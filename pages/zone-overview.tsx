import React, { useEffect } from "react";
import { NextPage } from "next";
import Layout from "components/Layout";
import useAuth from "context/useAuth";
import { useRouter } from "next/router";
import ZoneContainer from "containers/ZoneContainer";

const ZoneOverviewPage: NextPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
    }
  }, [user, loading]);

  return (
    <Layout title="Zone Overview">
      <ZoneContainer />
    </Layout>
  );
};

export default ZoneOverviewPage;
