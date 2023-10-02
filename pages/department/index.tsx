import React, { useEffect, useState, useCallback } from "react";
import { NextPage } from "next";
import Layout from "components/Layout";
import useAuth from "context/useAuth";
import { useRouter } from "next/router";

import DepartmentForm from "components/Department/Form";
import {
  getOneDepartment,
  updateDepartment,
  addDepartment,
} from "requests/departament";
import { Department } from "components/Department/Interface";
import { User } from "components/User/Interface";
import { DepartmentUser } from "components/DepartmentUser/Interface";
import { getAllUsers } from "requests/user";
import { getAllUsersByDepartmentId } from "requests/departamentUser";
import { usersRoles } from "src/utils/usersRoles";

const DepartmentUserPage: NextPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [data, setData] = useState<Department | undefined>(undefined);
  const [users, setUsers] = useState<User[]>([]);
  const [userDepartments, setUserDepartments] = useState<DepartmentUser[]>([]);
  const [loader, setLoader] = useState<boolean>(true);

  const invokeData = useCallback(async (id: string) => {
    setLoader(true);
    if (id) {
      const _dep: any = await getOneDepartment(id);

      if (_dep?.response) {
        setData(_dep.response);
      }

      const _uers_deps: any = await getAllUsersByDepartmentId(id);

      if (_uers_deps) {
        setUserDepartments(_uers_deps.response);
      }
    }

    const _users: any = await getAllUsers(1);
    if (_users.User.results.length) {
      setUsers(_users.User.results);
    }
    router.replace("/departments");
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
      invokeData(router.query?.id as string);
    }
  }, [router.isReady, invokeData, router.query?.id]);

  if (loader) {
    return null;
  }

  return (
    <Layout title="Department">
      <DepartmentForm
        model={data}
        addAction={addDepartment}
        actionUpdate={updateDepartment}
        userDepartments={userDepartments}
        users={users}
      />
    </Layout>
  );
};

export default DepartmentUserPage;
