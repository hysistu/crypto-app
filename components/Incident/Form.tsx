import { FC, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Box, Button, styled, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import { useFormik } from "formik";
import { IncidentCategory } from "components/IncidentCategory/Interface";
import { IncidentRating } from "components/IncidentRating/Interface";
import { IncidentStatus } from "components/IncidentStatus/Interface";
import { IncidentType } from "components/IncidentType/Interface";
import { User } from "components/User/Interface";
import SelectMUI from "components/Form/Select/SelectMUI";
import InputMUI from "components/Form/Input";
import {
  Incident,
  incidentSchema,
  INCIDENT_ADD,
  INCIDENT_SOME_ERROR_ACCURED,
  INCIDENT_UPDATED,
} from "./Interface";
import SubmitForm from "components/Form/Button";
import { Sector } from "components/Sector/Interface";
import { UploadFile } from "@mui/icons-material";
import { colors } from "src/utils/colors";
import { ACTIVE_INCIDENT_ID, INCIDENT_ID } from "src/utils/incidentsConsts";

export type FormProps = {
  sx?: SxProps;
  model: Incident | undefined;
  addAction: any;
  actionUpdate: any;
  categories: IncidentCategory[];
  sectors: Sector[];
  types: IncidentType[];
  statuses: IncidentStatus[];
  ratings: IncidentRating[];
  employees: User[];
  closeForm?: any;
  reloadData?: any;
  category_id?: any;
  levels: any;
};

const Form: FC<FormProps> = ({
  sx,
  model,
  addAction,
  actionUpdate,
  sectors,
  employees,
  closeForm,
  reloadData,
  category_id,
  levels,
}) => {
  const [newModel, setNewModel] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [filesName, setFilesName] = useState<string>("");
  const formAction = useFormik<Incident>({
    initialValues: {
      name: "",
      description: "",
      category_id: category_id,
      employee_id: "",
      sector_id: "",
      type_id: INCIDENT_ID,
      status_id: ACTIVE_INCIDENT_ID,
      severity: "",
      likelihood: "3",
      image: null,
      nivel_id: "",
    },
    validationSchema: incidentSchema,
    onSubmit: async (values: any) => {
      const formData = new FormData();
      for (const value in values) {
        formData.append(value, values[value]);
      }
      setLoading(true);
      try {
        if (!newModel) {
          actionUpdate(formData).then((data: any) => {
            if (data.status === 0) {
              toast.error(INCIDENT_SOME_ERROR_ACCURED);
            } else {
              toast.success(INCIDENT_UPDATED);
              closeForm();
              reloadData();
            }
            setLoading(false);
          });
        } else {
          addAction(formData).then((data: any) => {
            if (data.status === 0) {
              toast.error(INCIDENT_SOME_ERROR_ACCURED);
            } else {
              toast.success(INCIDENT_ADD);
              closeForm();
              reloadData();
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

  const selectStyle = {
    width: { xs: "100%", sm: "48%", md: "24%" },
  };

  const severities = [
    {
      name: "Minor",
      _id: 2,
    },
    {
      name: "Moderate",
      _id: 3,
    },
    {
      name: "Major",
      _id: 4,
    },
    {
      name: "Catastrophic",
      _id: 4,
    },
  ];

  useEffect(() => {
    if (model) {
      formAction.setValues(model);
      setNewModel(false);
    } else {
      setNewModel(true);
    }
  }, [model]);

  const Input = styled("input")({
    display: "none",
  });

  return (
    <>
      <Box component="form" sx={sx} onSubmit={formAction.handleSubmit}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <InputMUI
            label={"Title"}
            placeholder={"Title of incident"}
            fullPlaceholder={"Title of incident"}
            name={"name"}
            formAction={formAction}
            sx={{ width: { xs: "100%", md: "60%" } }}
          />
          <SelectMUI
            label={"Assign to"}
            name={"employee_id"}
            options={employees}
            formAction={formAction}
            sx={selectStyle}
          />
          <Box
            sx={{
              textAlign: "center",
              width: { xs: "100%", sm: "48%", md: "initial" },
            }}
          >
            <label style={{ width: "100%", minHeight: "55px" }}>
              <Input
                accept="image/*"
                name="image"
                type="file"
                onChange={(e: any) => {
                  formAction.setFieldValue(
                    "image",
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
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <SelectMUI
            label={"Severity"}
            name={"severity"}
            options={severities}
            formAction={formAction}
            sx={selectStyle}
          />
          <SelectMUI
            label={"Level"}
            name={"nivel_id"}
            options={levels}
            formAction={formAction}
            sx={selectStyle}
          />
          <SelectMUI
            label={"Sectors"}
            name={"sector_id"}
            options={sectors}
            formAction={formAction}
            sx={selectStyle}
          />
        </Box>
        <InputMUI
          label={"Description"}
          placeholder={"Description"}
          name={"description"}
          formAction={formAction}
        />
        <SubmitForm status={newModel} loading={loading} />
      </Box>
    </>
  );
};

export default Form;
