import React, { useEffect, useState, useCallback } from "react";
import Layout from "components/Layout";
import useAuth from "context/useAuth";
import { useRouter } from "next/router";

import UserForm from "components/User/Form";
import { User } from "components/User/Interface";
import { Role } from "components/Role/Interface";
import { Zone } from "components/Zone/Interface";
import { Department } from "components/Department/Interface";

import { getOneUser, updateUser, addUser } from "requests/user";
// import { getAllRole } from "requests/role";
// import { getAllDepartment } from "requests/departament";
// import { getAllZone } from "requests/zones";
import { usersRoles } from "src/utils/usersRoles";

const UserPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [data, setData] = useState<User | undefined>(undefined);
  const [roles, setRoles] = useState<Array<Role>>([]);
  const [departaments, setDepartments] = useState<Array<Department>>([]);
  const [zones, setZones] = useState<Array<Zone>>([]);

  const invokeData = useCallback(async (id: string | null) => {
    if (id) {
      const _user = await getOneUser(id);
      setData(_user.response);
    }

    // const _roles: any = await getAllRole(1);
    // if (_roles) {
    //   setRoles(
    //     user?.role !== usersRoles.admin
    //       ? _roles.Role.results.filter(
    //           (role: any) => role.name !== usersRoles.admin
    //         )
    //       : _roles.Role.results
    //   );
    // }

    // const _deps = await getAllDepartment(1);
    // if (_deps) {
    //   setDepartments(_deps.Department.results);
    // }

    // const _zones = await getAllZone();
    // if (_zones) {
    //   setZones(_zones.Zone.results);
    // }
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
    }
    if (
      !loading &&
      user &&
      user?.role !== usersRoles.SuperAdmin &&
      user?.role !== usersRoles.admin
    ) {
      router.replace("/dashboard");
    }
  }, [user, loading, router]);

  React.useEffect(() => {
    if (router.isReady) {
      invokeData(router.query?.id as string | "");
    }
  }, [router.isReady, invokeData, router.query?.id]);
  console.log(data, 'getaaa')
  return (
    <Layout title="User">
      <UserForm
        model={data}
        addAction={addUser}
        actionUpdate={updateUser}
        roles={roles}
        departments={departaments}
        zones={zones}
        reloadData={() => invokeData(router.query?.id as string | "")}
      />
    </Layout>
  );
};

export default UserPage;
