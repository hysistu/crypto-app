import React, { useEffect, useState, useCallback } from "react";
import { NextPage } from "next";
import Layout from "components/Layout";
import useAuth from "context/useAuth";
import { useRouter } from "next/router";
import SectorForm from "components/Sector/Form";
import { getOneSector, addSector, updateSector } from "requests/sectors";
import { Sector } from "components/Sector/Interface";
import { Zone } from "components/Zone/Interface";
import { getAllZone } from "requests/zones";
import { usersRoles } from "src/utils/usersRoles";

const SectorPage: NextPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [data, setData] = useState<Sector | undefined>(undefined);
  const [zones, setZones] = useState<Array<Zone>>([]);

  const invokeData = useCallback(async (id: string | null) => {
    if (id) {
      const _dep: any = await getOneSector(id);
      if (_dep?.response) {
        setData(_dep.response);
      }
    }
    const _zones = await getAllZone();
    if (_zones) {
      setZones(_zones.Zone.results);
    }
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
    }
    if (!loading && user && user?.role_id.name !== usersRoles.SuperAdmin) {
      router.replace("/dashboard");
    }
  }, [user, loading, router]);

  React.useEffect(() => {
    if (router.isReady) {
      invokeData(router.query?.id as string | "");
    }
  }, [router.isReady, invokeData, router.query?.id]);

  return (
    <Layout title="Sector">
      <SectorForm
        model={data}
        zones={zones}
        addAction={addSector}
        actionUpdate={updateSector}
      />
    </Layout>
  );
};

export default SectorPage;
