import React, { useEffect } from "react";
import { NextPage } from "next";
import Layout from "components/Layout";
import useAuth from "context/useAuth";
import { useRouter } from "next/router";
import IncidentsContainer from "containers/IncidentsContainer";
import TaskBoardContainer from "containers/TaskBoardContainer";

const IncidentsPage: NextPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
    }
  }, [user, loading]);

  return (
    <Layout title="Track Status">
      <TaskBoardContainer />
    </Layout>
  );
};

export default IncidentsPage;
