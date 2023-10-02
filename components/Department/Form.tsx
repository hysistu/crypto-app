import { FC, useEffect, useState } from "react";
import { SxProps } from "@mui/system";
import { Box, FormLabel, TextField } from "@mui/material";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { Department, departmentSchema } from "./Interface";
import { DepartmentUser } from "components/DepartmentUser/Interface";
import { User } from "components/User/Interface";
import DepartmentUsersList from "./DepartmentUsersList";
import SubmitForm from "components/Form/Button";

export type FormProps = {
  sx?: SxProps;
  model: Department | undefined;
  addAction: any;
  actionUpdate: any;
  userDepartments: DepartmentUser[];
  users: User[];
};

const Form: FC<FormProps> = ({
  sx,
  model,
  addAction,
  actionUpdate,
  userDepartments,
  users,
}) => {
  const [newModel, setNewModel] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const formAction = useFormik<Department>({
    initialValues: {
      id: "",
      name: "",
      description: "",
    },
    validationSchema: departmentSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        if (!newModel) {
          actionUpdate(values).then((data: any) => {
            if (data.status === 0) {
              toast.error("Ka ndodhur nje problem");
            } else {
              toast.success("Azhurnuar me sukses");
            }
            setLoading(false);
          });
        } else {
          addAction(values).then((data: any) => {
            if (data.status === 0) {
              toast.error("Ka ndodhur nje problem");
            } else {
              toast.success("Eshte shtuar me sukes");
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
      <Box component="form" sx={sx} onSubmit={formAction.handleSubmit}>
        <FormLabel sx={{ color: "#323232", ml: 1, fontWeight: "bold" }}>
          Name
        </FormLabel>
        <TextField
          id="name"
          name="name"
          placeholder="Input your name in here"
          fullWidth
          margin="dense"
          value={formAction.values.name}
          onChange={formAction.handleChange}
          error={formAction.touched.name && Boolean(formAction.errors.name)}
          helperText={
            formAction.touched.name || formAction.errors.name
              ? formAction.errors.name
              : ""
          }
        />

        <FormLabel sx={{ color: "#323232", ml: 1, fontWeight: "bold" }}>
          Description
        </FormLabel>
        <TextField
          multiline
          id="description"
          name="description"
          placeholder="Input your description in here"
          fullWidth
          margin="dense"
          value={formAction.values.description}
          onChange={formAction.handleChange}
          error={
            formAction.touched.description &&
            Boolean(formAction.errors.description)
          }
          helperText={
            formAction.touched.description || formAction.errors.description
              ? formAction.errors.description
              : ""
          }
        />
        {!newModel && (
          <DepartmentUsersList
            users={users}
            userDepartments={userDepartments}
            department_id={model?._id}
          />
        )}

        <SubmitForm status={newModel} loading={loading} />
      </Box>
    </>
  );
};

export default Form;
