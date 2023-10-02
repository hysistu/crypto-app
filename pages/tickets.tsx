import React, { useEffect } from "react";
import { NextPage } from "next";
import Layout from "components/Layout";
import useAuth from "context/useAuth";
import { useRouter } from "next/router";
import TicketContainer from "containers/TicketContainer";

const TicketPage: NextPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
    }
  }, [user, loading]);

  return (
    <Layout title="Tickets">
      <TicketContainer />
    </Layout>
  );
};

export default TicketPage;
