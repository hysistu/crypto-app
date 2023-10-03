import { FC, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import {
  User,
  USER_SOME_ERROR_ACCURED,
  userSchema,
  USER_UPDATED,
} from "./Interface";
import InputMUI from "components/Form/Input";
import SubmitForm from "components/Form/Button";
import { getMe, updateMe, updateMyPassword } from "requests/user";

import { colors } from "src/utils/colors";
import useAuth from "context/useAuth";

export type FormProps = {
  model: User | undefined;
  actionUpdate: any;
  reloadData: any;
};

const UpdatePhotos: FC<any> = ({ model, actionUpdate, reloadData }) => {
  // const { setUserAfterUpdateWithoutToken } = useAuth();
  const [newModel, setNewModel] = useState<boolean>(false);
  const [data, setData] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const formAction = useFormik<any>({
    initialValues: {
      idCardPhoto: "",
      passportPhoto: "",
      selfPhoto: "",
    },

    validationSchema: userSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        updateMe(values).then((data: any) => {
          if (data.status === 0) {
            toast.error(USER_SOME_ERROR_ACCURED);
          } else {
            toast.success(USER_UPDATED);
            // setUserAfterUpdateWithoutToken(data.User);
            reloadData();
          }
          setLoading(false); 
        });
      } catch (e: any) {
        toast.error(e.message);
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    try {
        getMe().then((data: any) => {
          if (data.status === 0) {
            toast.error(USER_SOME_ERROR_ACCURED);
          } else {
            setData(data.data); 
          }
          setLoading(false);
        });
      } catch (e: any) {
        toast.error(e.message);
        setLoading(false);
      }
    if (data) {
      formAction.setValues(data);
      setNewModel(false);
    } else {
      setNewModel(true);
    }
  }, [data?.idCardPhoto, data?.passportPhoto, data?.selfPhoto]);
  return (
    <>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          borderRadius: "8px",
          px: 3,
          pb: 6,
          pt: 4,
          mt: 2,
          border: `1px solid ${colors.borderColor}`,
        }}
        onSubmit={formAction.handleSubmit}
      >
        <Typography sx={{ fontSize: "24px", fontWeight: "500", mb: 3 }}>
          Update Documents
        </Typography>
        <InputMUI
          label={"Id Card"}
          type={"file"}
          placeholder={"Id Card"}
          name={"idCardPhoto"}
          formAction={formAction}
        />
        <InputMUI
          label={"Passport"}
          type={"file"}
          placeholder={"Passport"}
          name={"passportPhoto"}
          formAction={formAction}
        />
        <InputMUI
          label={"Self Photo"}
          type={"file"}
          placeholder={"Self Photo"}
          name={"selfPhoto"}
          formAction={formAction}
        />
        <SubmitForm
          status={newModel}
          loading={loading}
          sx={{ mt: 5, mx: 2, px: 5, ml: "auto" }}
        />
      </Box>
    </>
  );
};

export default UpdatePhotos;
