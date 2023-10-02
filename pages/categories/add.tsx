import React, { useEffect, useState, useCallback } from "react";
import { NextPage } from "next";
import Layout from "components/Layout";
import useAuth from "context/useAuth";
import { useRouter } from "next/router";

import GeneralForm from "components/Form/GeneralForm";
import { IncidentCategory } from "components/IncidentCategory/Interface";
import {
  getOneIncidentCategory,
  updateIncidentCategory,
  addIncidentCategory,
} from "requests/incidentCategory";

const IncidentRatingItem: NextPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [data, setData] = useState<IncidentCategory | undefined>(undefined);

  const invokeData = useCallback(async (id: string) => {
    const _dep: any = await getOneIncidentCategory(id);

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
    <Layout title="Incident Category Item">
      <GeneralForm
        model={data}
        addAction={addIncidentCategory}
        actionUpdate={updateIncidentCategory}
      />
    </Layout>
  );
};

export default IncidentRatingItem;
