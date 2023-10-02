import Layout from "components/Layout";
import ComplianceRecordsContainer from "containers/ComplianceRecordsContainer";
import useAuth from "context/useAuth";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const ComplianceRecordsPage: NextPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
    }
  }, [user, loading]);

  return (
    <Layout title="Compliance Records">
      <ComplianceRecordsContainer />
    </Layout>
  );
};

export default ComplianceRecordsPage;
