import { Box, Typography } from "@mui/material";
import SubmitForm from "components/Form/Button";
import InputMUI from "components/Form/Input";
import { useFormik } from "formik";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { updatePassword } from "requests/user";
import { colors } from "src/utils/colors";
import useAuth from "context/useAuth";

import * as yup from "yup";

const validationSchema = yup.object({
  passwordCurrent: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  password: yup
    .string()
    .min(8, "New password should be of minimum 8 characters length")
    .required("New password is required"),
  passwordConfirm: yup
    .string()
    .min(8, "Confirm new password should be of minimum 8 characters length")
    .required("Confirm new password is required"),
});

const UpdatePassword = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setUserAfterUpdate } = useAuth();

  const formAction = useFormik<any>({
    initialValues: {
      passwordCurrent: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      setLoading(true);
      try {
        updatePassword(values).then((data) => {
          if (data?.token?.status === 'success') {
            toast.success('Passwordi u ndryshua me sukses');
            setUserAfterUpdate(data.token.token)
            resetForm();
          } else if (data?.error) {
            toast.error(data.message);
          }
          setLoading(false);
        });
      } catch (e: any) {
        toast.error(e.message);
        setLoading(false);
      }
    },
  });

  return (
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
        mt: 4,
        border: `1px solid ${colors.borderColor}`,
      }}
      onSubmit={formAction.handleSubmit}
    >
      <Typography sx={{ fontSize: "24px", fontWeight: "500", mb: 3 }}>
        Update Password
      </Typography>
      <InputMUI
        label={"Old Password"}
        type={"password"}
        placeholder={"Old Password"}
        name={"passwordCurrent"}
        formAction={formAction}
      />
      <InputMUI
        label={"New Password"}
        type={"password"}
        placeholder={"New Password"}
        name={"password"}
        formAction={formAction}
      />
      <InputMUI
        label={"Confirm New Password"}
        type={"password"}
        placeholder={"Confirm New Password"}
        name={"passwordConfirm"}
        formAction={formAction}
      />
      <SubmitForm
        status={false}
        loading={loading}
        sx={{ mt: 5, mx: 2, px: 5, ml: "auto" }}
      />
    </Box>
  );
};

export default UpdatePassword;
