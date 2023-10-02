import React, { useEffect, useState } from "react";
import { Box, FormLabel, TextField } from "@mui/material";
import { useFormik } from "formik";
import { SxProps } from "@mui/system";
import { toast } from "react-toastify";
import { GenralFormInterface, genralSchema } from "./GeneralFormInterface";
import SubmitForm from "components/Form/Button";

export type FormProps = {
  sx?: SxProps;
  model: GenralFormInterface | undefined;
  addAction: any;
  actionUpdate: any;
};

const GeneralForm: React.FC<FormProps> = ({
  sx,
  model,
  addAction,
  actionUpdate,
}) => {
  const [newModel, setNewModel] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const formAction = useFormik<GenralFormInterface>({
    initialValues: {
      id: "",
      name: "",
      description: "",
    },
    validationSchema: genralSchema,
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
        <SubmitForm status={newModel} loading={loading} />
      </Box>
    </>
  );
};

export default GeneralForm;
