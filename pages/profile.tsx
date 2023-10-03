import React, { useEffect, useState, useCallback } from "react";
import Layout from "components/Layout";
import useAuth from "context/useAuth";
import { useRouter } from "next/router";
import { User } from "components/User/Interface";
import { getOneUser, updateUser } from "requests/user";
import UpdatePassword from "components/User/UpdatePassword";
import UpdateProfile from "components/User/UpdateProfile";
import UpdatePhotos from "components/User/UpdatePhotos";

import { NextPage } from "next";

const ProfilePage: NextPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [data, setData] = useState<User | undefined>(undefined);

  const invokeData = useCallback(async (id: string | null) => {
    if (id) {
      const _user = await getOneUser(id);
      setData(_user?.response);
    }
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
    }
  }, [user, loading, router]);

  useEffect(() => {
    invokeData(user?.id as string | "");
  }, [invokeData, user?.id]);

  return (
    <Layout title="Profile">
      <UpdateProfile
        model={data}
        actionUpdate={updateUser}
        reloadData={() => invokeData(user?.id as string | "")}
      />

      <UpdatePassword />
      <UpdatePhotos />
    </Layout>
  );
};

export default ProfilePage;
