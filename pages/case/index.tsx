import Layout from "components/Layout";
import CaseContainer from "containers/CaseContainer";
import TicketContainer from "containers/TicketContainer";
import React from "react";

const Ticket = () => {
  return (
    <Layout title="Case ID">
      <CaseContainer />
    </Layout>
  );
};

export default Ticket;
