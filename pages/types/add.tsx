import React, { useEffect, useState, useCallback } from "react";
import { NextPage } from "next";
import Layout from "components/Layout";
import useAuth from "context/useAuth";
import { useRouter } from "next/router";

import GeneralForm from "components/Form/GeneralForm";
import { IncidentType } from "components/IncidentType/Interface";
import {
  getOneIncidentType,
  updateIncidentType,
  addIncidentType,
} from "requests/incidentType";

const IncidentTypePage: NextPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [data, setData] = useState<IncidentType | undefined>(undefined);

  const invokeData = useCallback(async (id: string) => {
    const _dep: any = await getOneIncidentType(id);

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
    <Layout title="Incident Type Item">
      <GeneralForm
        model={data}
        addAction={addIncidentType}
        actionUpdate={updateIncidentType}
      />
    </Layout>
  );
};

export default IncidentTypePage;
