import React, { useEffect, useState, useCallback } from "react";
import { NextPage } from "next";
import Layout from "components/Layout";
import useAuth from "context/useAuth";
import { useRouter } from "next/router";

import UserForm from "components/User/Form";
import { User } from "components/User/Interface";
import { Role } from "components/Role/Interface";
import { Zone } from "components/Zone/Interface";
import { Department } from "components/Department/Interface";

import { getOneUser, updateUser, addUser } from "requests/user";
import { getAllRole } from "requests/role";
import { getAllDepartment } from "requests/departament";
import { getAllZone } from "requests/zones";
import { usersRoles } from "src/utils/usersRoles";

interface CreateUserProps {
  reloadData: any;
}
const CreateUser: React.FC<CreateUserProps> = (props) => {
  const { reloadData } = props;
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

    const _roles = await getAllRole(1);
    if (_roles) {
      setRoles(_roles.Role)
      // if (user.role_id.name !== usersRoles.SuperAdmin) {
      //   setRoles(
      //     _roles.Role.results.filter(
      //       (res: Role) => res.name !== usersRoles.SuperAdmin
      //     )
      //   );
      // } else setRoles(_roles.Role.results);
    }

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
  }, [user, loading, router]);

  React.useEffect(() => {
    if (router.isReady) {
      invokeData(router.query?.id as string | "");
    }
  }, [router.isReady, invokeData, router.query?.id]);

  return (
    <UserForm
      model={data}
      addAction={addUser}
      actionUpdate={updateUser}
      roles={roles}
      departments={departaments}
      zones={zones}
      reloadData={reloadData}
    />
  );
};

export default CreateUser;
