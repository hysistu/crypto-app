import React, { useEffect } from "react";
import { NextPage } from "next";
import Layout from "components/Layout";
import useAuth from "context/useAuth";
import { useRouter } from "next/router";
import KnowledgeGateContainer from "containers/KnowledgeGateContainer";

const KnowledgeGatePage: NextPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
    }
  }, [user, loading]);

  return (
    <Layout title="Knowledge Gate">
      <KnowledgeGateContainer />
    </Layout>
  );
};

export default KnowledgeGatePage;
