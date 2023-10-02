import React, { useEffect, useState, useCallback } from "react";
import { NextPage } from "next";
import Layout from "components/Layout";
import useAuth from "context/useAuth";
import { useRouter } from "next/router";

import ZoneForm from "components/Zone/Form";
import { Zone } from "components/Zone/Interface";
import { getOneZone, updateZone, addZone } from "requests/zones";
import { getAllSector, getSectorsByZoneId } from "requests/sectors";
import { Sector } from "components/Sector/Interface";
import { usersRoles } from "src/utils/usersRoles";

const ZonePage: NextPage = () => {
  const router = useRouter();
  const [loader, setLoader] = useState<boolean>(false);
  const { user, loading } = useAuth();
  const [data, setData] = useState<Zone | undefined>(undefined);
  const [sectorsZones, setZoneSectors] = useState<Sector[]>([]);
  const [sectors, setSectors] = useState<Sector[]>([]);

  const invokeData = useCallback(async (id: string) => {
    setLoader(true);
    const _dep: any = await getOneZone(id);

    if (_dep?.response) {
      setData(_dep.response);
    }

    const _zone_sectors: any = await getSectorsByZoneId(id);

    if (_zone_sectors) {
      setZoneSectors(_zone_sectors.response);
    }

    const _sectors: any = await getAllSector();

    if (_sectors) {
      setSectors(_sectors.Sector.results);
    }

    setLoader(false);
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
      if (router.query?.id) {
        invokeData(router.query?.id as string);
      }
    }
  }, [router.isReady, invokeData, router.query?.id]);

  if (loader) {
    return null;
  }
  return (
    <Layout title="Zone">
      <ZoneForm
        model={data}
        addAction={addZone}
        actionUpdate={updateZone}
        sectors={sectors}
        sectorsZones={sectorsZones}
      />
    </Layout>
  );
};

export default ZonePage;
