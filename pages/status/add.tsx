import React, { useEffect, useState, useCallback } from "react";
import { NextPage } from "next";
import Layout from "components/Layout";
import useAuth from "context/useAuth";
import { useRouter } from "next/router";

import GeneralForm from "components/Form/GeneralForm";
import { IncidentStatus } from "components/IncidentStatus/Interface";
import {
  getOneIncidentStatus,
  updateIncidentStatus,
  addIncidentStatus,
} from "requests/incidentStatus";

const IncidentStatusPage: NextPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [data, setData] = useState<IncidentStatus | undefined>(undefined);

  const invokeData = useCallback(async (id: string) => {
    const _dep: any = await getOneIncidentStatus(id);

    if (_dep?.response) {
      setData(_dep.response);
    }
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
    }
  }, [user, loading, router]);

  React.useEffect(() => {
    if (router.isReady) {
      if (router.query?.id) {
        invokeData(router.query?.id as string);
      }
    }
  }, [router.isReady, invokeData, router.query?.id]);

  return (
    <Layout title="Incident Statuses">
      <GeneralForm
        model={data}
        addAction={addIncidentStatus}
        actionUpdate={updateIncidentStatus}
      />
    </Layout>
  );
};

export default IncidentStatusPage;
