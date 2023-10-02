import { FC, useEffect, useState } from "react";
import { Box, Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import {
  User,
  USER_SOME_ERROR_ACCURED,
  USER_ADD,
  userSchema,
  USER_UPDATED,
} from "./Interface";
import { SxProps } from "@mui/system";
import { Department } from "components/Department/Interface";
import { Role } from "components/Role/Interface";
import { Zone } from "components/Zone/Interface";
import SelectMUI from "components/Form/Select/SelectMUI";
import InputMUI from "components/Form/Input";
import SubmitForm from "components/Form/Button";
import { colors } from "src/utils/colors";
import useAuth from "context/useAuth";
import { useRouter } from "next/router";

export type FormProps = {
  sx?: SxProps;
  model: User | undefined;
  addAction: any;
  actionUpdate: any;
  roles: Role[];
  departments: Department[];
  zones: Zone[];
  reloadData: any;
};

const Form: FC<FormProps> = ({
  model,
  addAction,
  actionUpdate,
  roles,
  departments,
  zones,
  reloadData,
}) => {
  const { user, setUserAfterUpdate } = useAuth();
  const router = useRouter();
  const [newModel, setNewModel] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const formAction = useFormik<User>({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      birthdate: "",
      email: "",
      password: "",
      department_id: "",
      role: "",
      zone_id: "",
      isActive: true,
    },
    validationSchema: userSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        if (!newModel) {
          actionUpdate(values).then((data: any) => {
            if (data.status === 0) {
              toast.error(USER_SOME_ERROR_ACCURED);
            } else {
              toast.success(USER_UPDATED);
              reloadData();
              if (user.id === router.query.id) {
                setUserAfterUpdate(data.token);
              }
              router.push("/users");
            }
            setLoading(false);
          });
        } else {
          addAction(values).then((data: any) => {
            if (data.status === 0) {
              toast.error(USER_SOME_ERROR_ACCURED);
            } else {
              toast.success(USER_ADD);
              reloadData();
              resetForm();
            }

            setLoading(false);
          });
        }
      } catch (e: any) {
        toast.error(e.message);
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    if (model) {
      formAction.setValues(model);
      setNewModel(false);
    } else {
      setNewModel(true);
    }
  }, [model]);
  return (
    <>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: "8px",
          py: 5,
          px: { xs: 1.5, md: 3 },
          ">div": {
            flex: "45%",
            mx: 2,
          },
          mt: 4,
          border: `1px solid ${colors.borderColor}`,
        }}
        onSubmit={formAction.handleSubmit}
      >
        <InputMUI
          label={"First Name"}
          placeholder={"first name"}
          name={"firstName"}
          formAction={formAction}
        />
        <InputMUI
          label={"Last Name"}
          placeholder={"last name"}
          name={"lastName"}
          formAction={formAction}
        />
        <InputMUI
          label={"E-mail"}
          type={"email"}
          placeholder={"email"}
          name={"email"}
          formAction={formAction}
        />
        <InputMUI
          label={"BirthDate"}
          type={"date"}
          placeholder={"birth date"}
          name={"bithdate"}
          formAction={formAction}
        />
        <InputMUI
          label={"Phone Number"}
          placeholder={"phone number"}
          name={"phoneNumber"}
          formAction={formAction}
        />
        <SelectMUI
          label={"Role"}
          name={"role"}
          options={roles}
          formAction={formAction}
        />
        <FormGroup sx={{}}>
          <FormControlLabel
            value={true}
            control={
              <Checkbox
                checked={formAction.values.isActive}
                onChange={() => {
                  formAction.setFieldValue("status", !formAction.values.isActive);
                }}
              />
            }
            label="Active"
          />
        </FormGroup>
        <SubmitForm
          status={newModel}
          loading={loading}
          sx={{ mt: 5, mx: 2, px: 5, ml: "auto" }}
        />
      </Box>
    </>
  );
};

export default Form;
