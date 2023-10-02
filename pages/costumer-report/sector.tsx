import { TextField } from "@material-ui/core";
import { UploadFile } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Card,
  FormLabel,
  styled,
  Typography,
} from "@mui/material";
import InputMUI from "components/Form/Input";
import SelectMUI from "components/Form/Select/SelectMUI";
import {
  INCIDENT_ADD,
  INCIDENT_SOME_ERROR_ACCURED,
} from "components/Incident/Interface";
import { IncidentCategory } from "components/IncidentCategory/Interface";
import { useFormik } from "formik";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllIncidentCategory } from "requests/incidentCategory";
import { addIncidentReportGuest } from "requests/incidentReport";
import { getOneSector } from "requests/sectors";
import prishtinaMall from "src/assets/images/prishtinaMall.png";
import { colors } from "src/utils/colors";
import { ACTIVE_INCIDENT_ID, RISK_ID } from "src/utils/incidentsConsts";
import * as yup from "yup";

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const costumerReportSchema = yup.object({
  name: yup
    .string()
    .min(3, "Name should be of minimum 3 characters length")
    .required("Name is required"),
  category_id: yup.string().required("Category is required"),
  description: yup
    .string()
    .min(3, "Description should be of minimum 8 characters length")
    .required("Description is required"),
  image: yup
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

const CostumerPage: NextPage = () => {
  const [filesName, setFilesName] = useState<string>("");
  const [categories, setCategories] = useState<IncidentCategory[] | any>([]);
  const [sectorID, setSectorID] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [reported, setReported] = useState<boolean>(false);
  const [sectorName, setSectorName] = useState<string>("");
  const router = useRouter();

  const formAction = useFormik<any>({
    initialValues: {
      name: "",
      description: "",
      category_id: "",
      severity: 3,
      likelihood: 3,
      type_id: RISK_ID,
      status_id: ACTIVE_INCIDENT_ID,
      image: null,
    },
    validationSchema: costumerReportSchema,
    onSubmit: async (values: any) => {
      const formData = new FormData();
      for (const value in values) {
        formData.append(value, values[value]);
      }
      formData.append("sector_id", sectorID);
      setLoading(true);
      try {
        addIncidentReportGuest(formData).then((data: any) => {
          if (data.status === 0) {
            toast.error(INCIDENT_SOME_ERROR_ACCURED);
          } else {
            toast.success(INCIDENT_ADD);
            setReported(true);
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
    if (router.isReady) {
      if (router.query.id) {
        let id = router.query.id;
        setSectorID(id);
        getSector(id);
      }
    }
  }, [router]);

  const getSector = async (id: any) => {
    const sector: any = await getOneSector(id);
    if (sector) {
      setSectorName(sector.response?.name);
    }
  };

  const Input = styled("input")({
    display: "none",
  });

  const invokeData = useCallback(async () => {
    const _categories: any = await getAllIncidentCategory();
    if (_categories) {
      setCategories(_categories.IncidentCategory.results);
    }
  }, []);

  useEffect(() => {
    invokeData();
  }, []);

  return (
    <Box
      sx={{
        p: { xs: 3, sm: 5 },
        position: "relative",
        pl: { md: "300px" },
        pt: { xs: "140px", md: 5 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: { md: "260px" },
          top: 0,
          left: 0,
          right: { xs: 0, md: "initial" },
          minHeight: { md: "100vh" },
          borderBottom: `1px solid ${colors.borderColor}`,
          borderRight: `1px solid ${colors.borderColor}`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "fit-content",
            mx: "auto",
            mt: 3,
            mb: { xs: 3, md: "initial" },
          }}
        >
          <img src="/images/logo.png" alt="logo" height="60px" />
          <Typography
            variant="h4"
            fontWeight="bold"
            color={colors.primary}
            ml={2}
          >
            Shield
          </Typography>
        </Box>
      </Box>
      <Typography
        sx={{
          textAlign: "center",
          mb: 3,
          fontWeight: 500,
          fontSize: "20px",
          letterSpacing: "2px",
        }}
      >
        You are currently in <br />{" "}
        <span style={{ fontWeight: 700 }}>Sector {sectorName}</span>
      </Typography>
      <Box
        sx={{
          backgroundColor: "#EAEEFF",
          px: { xs: 3, md: 5 },
          py: { xs: 4, md: 7 },
          borderRadius: 1.5,
          display: "flex",
          width: { lg: "65%" },
          mx: "auto",
          backgroundImage: { lg: `url(${prishtinaMall.src})` },
          backgroundSize: "cover",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ maxWidth: { sx: "100%", lg: "50%" } }}>
          <Typography
            sx={{
              textAlign: { xs: "center", md: "initial" },
              fontSize: { sm: "20px", md: "24px" },
              lineHeight: { md: "38.4px" },
            }}
          >
            Thank you for taking your time and helping us securing a better and
            safer environment for everyone
          </Typography>
        </Box>
      </Box>
      <Card
        elevation={0}
        sx={{
          mt: { xs: 5, md: 10 },
          p: { xs: 2, md: 4 },
          border: `1px solid ${colors.borderColor}`,
          maxWidth: { lg: "55%" },
          mx: "auto",
        }}
      >
        {reported ? (
          <Box>
            <Typography sx={{ textAlign: "center", fontSize: "20px" }}>
              Thanks for reporting!
            </Typography>
          </Box>
        ) : (
          <Box component="form" onSubmit={formAction.handleSubmit}>
            <Typography
              sx={{
                mb: 4,
                fontSize: "18px",
                textAlign: "center",
              }}
            >
              Here you can report any incident
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <InputMUI
                label={"Title"}
                name={"name"}
                placeholder="Title of risk"
                fullPlaceholder="Title of risk"
                formAction={formAction}
                sx={{
                  width: { xs: "100%", sm: "48%" },
                  mx: { xs: "auto", md: "initial" },
                }}
              />
              <Box
                sx={{
                  textAlign: "center",
                  width: { xs: "100%", sm: "48%" },
                  mx: { xs: "auto", md: "initial" },
                }}
              >
                <Typography
                  sx={{
                    lineHeight: "1.4375em",
                    textAlign: "left",
                    fontSize: "12px",
                    color: "#868B9F",
                    m: 1,
                  }}
                >
                  Image
                </Typography>
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
                      borderRadius: 0.5,
                      mb: { xs: 1.5, sm: 0 },
                      borderColor:
                        formAction.touched["image"] &&
                        formAction.errors["image"]
                          ? "red"
                          : filesName
                          ? colors.green
                          : "rgba(0, 0, 0, 0.23)",
                      color: filesName ? colors.green : "#868B9F",
                    }}
                    variant="outlined"
                    component="span"
                    color={
                      formAction.touched["image"] && formAction.errors["image"]
                        ? "error"
                        : "primary"
                    }
                    startIcon={<UploadFile />}
                  >
                    {filesName ? filesName : "Upload"}
                  </Button>
                </label>
                {formAction.touched["image"] && formAction.errors["image"] ? (
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      color: colors.danger,
                      mb: "-20px",
                      mt: "2px",
                      ml: 2,
                      textAlign: "left",
                    }}
                  >
                    {formAction.errors.image}
                  </Typography>
                ) : (
                  " "
                )}
              </Box>
              <SelectMUI
                label={"Categories"}
                name={"category_id"}
                options={categories}
                formAction={formAction}
                sx={{
                  width: "100%",
                }}
              />
              <Box sx={{ width: "100%" }}>
                <FormLabel sx={{ color: "#868B9F", ml: 1, fontSize: 12 }}>
                  Description
                </FormLabel>
                <TextField
                  variant="outlined"
                  multiline
                  id="description"
                  name="description"
                  type="text"
                  minRows={5}
                  placeholder="Describe risk"
                  fullWidth
                  margin="dense"
                  value={formAction.values["description"]}
                  onChange={formAction.handleChange}
                  error={
                    formAction.touched["description"] &&
                    Boolean(formAction.errors["description"])
                  }
                  helperText={
                    formAction.touched["description"] &&
                    formAction.errors["description"]
                      ? formAction.errors["description"]
                      : " "
                  }
                />
              </Box>
            </Box>
            <LoadingButton
              type={"submit"}
              variant="contained"
              sx={{
                mt: 5,
                p: 1.5,
                minWidth: "200px",
                display: "flex",
                mx: "auto",
              }}
              loading={loading}
            >
              Report
            </LoadingButton>
          </Box>
        )}
      </Card>
    </Box>
  );
};

export default CostumerPage;
