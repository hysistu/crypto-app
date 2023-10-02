import React, { useEffect } from "react";
import { NextPage } from "next";
import Layout from "components/Layout";
import useAuth from "context/useAuth";
import { useRouter } from "next/router";
import DashboardContainer from "containers/DashboardContainer";

const DashboardPage: NextPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
    }
  }, [user, loading]);

  return (
    <Layout title="Dashboard">
      <DashboardContainer />
    </Layout>
  );
};

export default DashboardPage;
