import React, { useEffect, useState, useCallback } from "react";
import { NextPage } from "next";
import Layout from "components/Layout";
import useAuth from "context/useAuth";
import { useRouter } from "next/router";

import GeneralForm from "components/Form/GeneralForm";
import { getOneRole, addRole, updateRole } from "requests/role";
import { Role } from "components/Role/Interface";
import { usersRoles } from "src/utils/usersRoles";

const RolePage: NextPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [data, setData] = useState<Role | undefined>(undefined);

  const invokeData = useCallback(async (id: string) => {
    const _dep: any = await getOneRole(id);

    if (_dep?.response) {
      setData(_dep.response);
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
      if (router.query?.id) {
        invokeData(router.query?.id as string);
      }
    }
  }, [router.isReady, invokeData, router.query?.id]);

  return (
    <Layout title="Role">
      <GeneralForm model={data} addAction={addRole} actionUpdate={updateRole} />
    </Layout>
  );
};

export default RolePage;
