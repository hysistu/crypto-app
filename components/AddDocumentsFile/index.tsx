import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  styled,
  Typography,
} from "@mui/material";
import InputMUI from "components/Form/Input";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { UploadFile } from "@mui/icons-material";
import { colors } from "src/utils/colors";
import * as yup from "yup";
import { addDocumentsFile } from "requests/document";
import { toast } from "react-toastify";
import { LoadingButton } from "@mui/lab";

interface Props {
  documentsTypeName: string;
  open: boolean;
  onClose: any;
  document_type_id: string;
  handleDocuments: any;
}
const AddDocumentsForm: React.FC<Props> = (props) => {
  const {
    documentsTypeName,
    open,
    onClose,
    document_type_id,
    handleDocuments,
  } = props;
  const [filesName, setFilesName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const SUPPORTED_FORMATS = ["application/pdf"];

  const documentFileSchema = yup.object({
    name: yup
      .string()
      .min(3, "Name should be of minimum 3 characters length")
      .required("Name is required"),
    file: yup
      .mixed()
      .nullable()
      .required("Image required")
      .test(
        "Fichier taille",
        "Image too large",
        (value) => !value || (value && value.size <= 100000000)
      )
      .test(
        "format",
        "Wrong format",
        (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
      ),
  });

  const formAction = useFormik<any>({
    initialValues: {
      name: "",
      file: null,
      document_type_id: document_type_id,
    },
    validationSchema: documentFileSchema,
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      for (const value in values) {
        formData.append(value, values[value]);
      }
      setLoading(true);
      try {
        addDocumentsFile(formData).then((data: any) => {
          if (data.status === 0) {
            toast.error("Something went wrong!");
          } else {
            toast.success("Success!");
            onClose();
            setFilesName("");
            resetForm();
            handleDocuments();
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
      <DialogTitle>Add new file for {documentsTypeName}</DialogTitle>
      <DialogContent>
        <Box component="form" onSubmit={formAction.handleSubmit}>
          <InputMUI
            label={"Name"}
            placeholder={"name"}
            name={"name"}
            formAction={formAction}
          />
          <label style={{ width: "100%", minHeight: "55px" }}>
            <Input
              accept="application/pdf"
              name="file"
              type="file"
              onChange={(e: any) => {
                formAction.setFieldValue(
                  "file",
                  e?.currentTarget?.files[0] || null
                );
                setFilesName(e?.currentTarget?.files[0].name);
              }}
            />
            <Button
              sx={{
                width: "100%",
                minHeight: "55px",
                mb: { xs: 1.5, sm: 0 },
                borderColor: filesName ? colors.green : colors.primary,
                color: filesName ? colors.green : colors.primary,
              }}
              variant="outlined"
              component="span"
              color={
                formAction.touched.image && formAction.errors.image
                  ? "error"
                  : "primary"
              }
              startIcon={<UploadFile />}
            >
              {filesName
                ? filesName.slice(0, 4) +
                  filesName.substring(filesName.lastIndexOf("."))
                : "Upload"}
            </Button>
            <Typography fontSize="small">Upload only PDF files</Typography>
          </label>
          {formAction.touched.image && formAction.errors.image ? (
            <Typography
              sx={{
                fontSize: "0.75rem",
                color: colors.danger,
                mb: "-20px",
                mt: "2px",
              }}
            >
              {formAction.errors.image}
            </Typography>
          ) : (
            " "
          )}
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

export default AddDocumentsForm;
