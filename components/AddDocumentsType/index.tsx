import { LoadingButton } from "@mui/lab";
import { Box, Dialog, DialogContent, DialogTitle, styled } from "@mui/material";
import InputMUI from "components/Form/Input";
import { useFormik } from "formik";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { addDocumentsType } from "requests/document";
import * as yup from "yup";

interface Props {
  open: boolean;
  onClose: any;
  handleDocumentsType: any;
}
const AddDocumentsType: React.FC<Props> = (props) => {
  const { open, onClose, handleDocumentsType } = props;
  const [loading, setLoading] = useState<boolean>(false);

  const documentTypeSchema = yup.object({
    name: yup
      .string()
      .min(3, "Name should be of minimum 3 characters length")
      .required("Name is required"),
    description: yup
      .string()
      .min(3, "Name should be of minimum 3 characters length")
      .required("Name is required"),
  });

  const formAction = useFormik<any>({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: documentTypeSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        addDocumentsType(values).then((data: any) => {
          if (data.status === 0) {
            toast.error("Something went wrong!");
          } else {
            toast.success("Success!");
            onClose();
            resetForm();
            handleDocumentsType();
          }
          setLoading(false);
        });
      } catch (error: any) {
        toast.error(error.message);
        setLoading(false);
      }
    },
  });

  const Input = styled("input")({
    display: "none",
  });

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={open}
      onClose={onClose}
      keepMounted={true}
    >
      <DialogTitle>Create new document type</DialogTitle>
      <DialogContent>
        <Box component="form" onSubmit={formAction.handleSubmit}>
          <InputMUI
            label={"Name"}
            placeholder={"name"}
            name={"name"}
            formAction={formAction}
          />
          <InputMUI
            label={"Description"}
            placeholder={"description"}
            name={"description"}
            formAction={formAction}
          />
          <LoadingButton
            variant="contained"
            type="submit"
            sx={{ mt: 2 }}
            loading={loading}
          >
            Submmit
          </LoadingButton>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AddDocumentsType;
