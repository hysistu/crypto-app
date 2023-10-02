import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Divider,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import axios from "axios";
import SubmitForm from "components/Form/Button";
import SelectMUI from "components/Form/Select/SelectMUI";
import {
  INCIDENT_SOME_ERROR_ACCURED,
  INCIDENT_UPDATED,
} from "components/Incident/Interface";
import { IconArrowHorizontally } from "components/svg/icons";
import { User } from "components/User/Interface";
import { useFormik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  getIncidentsOnSector,
  getOneIncidentReport,
  updateIncidentReport,
} from "requests/incidentReport";
import { getAllEmployees } from "requests/user";
import { colors } from "src/utils/colors";
import { BASE_URL_INCIDENT_API } from "src/utils/consts";
import { has } from "src/utils/helper";
interface CustomTextProps {
  title?: string;
  text?: string;
  style?: any;
}
const CustomText: React.FC<CustomTextProps> = ({ title, text, style }) => (
  <Typography sx={{ fontWeight: "500", fontSize: "large", ...style }}>
    {title} -{" "}
    <span
      style={{
        fontWeight: "initial",
        fontSize: "initial",
        wordBreak: "break-word",
      }}
    >
      {text}
    </span>
  </Typography>
);
interface OneIncidentProps {
  data: any;
  employees: any;
  reData: any;
}
const OneIncident: React.FC<OneIncidentProps> = (props) => {
  const { data, employees, reData } = props;
  const [editable, setEditable] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [newModel, setNewModel] = useState<boolean>(false);
  const [showImg, setShowImg] = useState<boolean>(false);

  const formAction = useFormik({
    initialValues: {
      employee_id: {
        _id: "",
      },
    },
    onSubmit: async (values: any) => {
      setLoading(true);
      try {
        if (!newModel) {
          updateIncidentReport(values).then((data: any) => {
            if (data.status === 0) {
              toast.error(INCIDENT_SOME_ERROR_ACCURED);
            } else {
              toast.success(INCIDENT_UPDATED);
              setEditable("");
              reData();
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
    if (data) {
      formAction.setValues(data);
      setNewModel(false);
    } else {
      setNewModel(true);
    }
  }, [data]);

  const getImg = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL_INCIDENT_API}/incidentReport/image/${data?._id}`
      );
      setShowImg(true);
    } catch (error) {
      setShowImg(false);
    }
  };

  useEffect(() => {
    getImg();
  }, []);

  return (
    <Box
      key={data?._id}
      sx={{
        px: { xs: 3, md: 5 },
        pt: 4,
        pb: 2,
        borderBottom: `1.5px solid ${colors.borderColor}`,
      }}
      component="form"
      onSubmit={formAction.handleSubmit}
    >
      <Box
        mt={2}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "end",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Typography fontSize={14} fontWeight={500}>
          Assign to
        </Typography>
        <Avatar
          sx={{
            height: { xs: 35 },
            width: { xs: 35 },
          }}
        >
          AA
        </Avatar>
        {editable === data?._id ? (
          <SelectMUI
            sx={{ width: "250px" }}
            label={"Employees"}
            name={"employee_id"}
            options={employees}
            formAction={formAction}
          />
        ) : (
          <Typography fontSize={14} fontWeight={500}>
            {data?.employee_id?.first_name && data?.employee_id?.last_name
              ? data.employee_id.first_name + " " + data.employee_id.last_name
              : "Not assigned yet"}
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          background: "#F9F9F9",
          borderRadius: "8px",
        }}
        p={2}
        mt={{ xs: 2, md: 4 }}
      >
        <Box
          sx={{
            maxWidth: { md: "60%" },
          }}
        >
          <CustomText title="Name" text={data?.name} />
          <CustomText title="Category" text={data?.category_id.name} />
          <CustomText
            title="Reported By"
            text={`${data?.reporter_id.first_name} ${data?.reporter_id.last_name}`}
          />
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box sx={{ pl: { md: 1 } }}>
          <CustomText title="Rating" text={data?.rating_id?.name} />
          <CustomText
            title="Weather"
            text={`${data?.weather_temperature}° ${data?.weather_description}`}
          />
          <CustomText
            title="Reported On"
            text={data?.createdAt.substring(0, 10).replace(/-/g, "/")}
          />
        </Box>
      </Box>
      <Box
        my={{ xs: 2, md: 4 }}
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <CustomText
          title="Description"
          text={data?.description}
          style={{
            width: "70%",
            background: "#F9F9F9",
            borderRadius: "8px",
            py: 2,
            px: 3,
          }}
        />
        <Box
          sx={{
            height: "fit-content",
            background: "#F9F9F9",
            borderRadius: "8px",
            py: 2,
            px: 3,
          }}
        >
          <CustomText title="Zone" text={data?.sector_id.zone_id.name} />
          <CustomText title="Sector" text={data?.sector_id.name} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          justifyContent: "space-between",
        }}
      >
        {showImg ? (
          <Box
            sx={{
              mt: { xs: 2, md: 0 },
              minHeight: { md: "310px" },
            }}
          >
            <img
              width="100%"
              height="auto"
              alt={data?.description}
              crossOrigin="anonymous"
              src={`${BASE_URL_INCIDENT_API}/incidentReport/image/${data?._id}`}
            />
          </Box>
        ) : (
          <Typography sx={{ textAlign: "center", mt: { xs: 2 } }}>
            This incident do not have any image or some error occurred.
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          mt: { xs: 3, md: 4 },
          textAlign: { xs: "center", md: "initial" },
        }}
      >
        {editable !== data?._id ? (
          <Button variant="contained" onClick={() => setEditable(data?._id)}>
            Change assignment
          </Button>
        ) : (
          <SubmitForm status={newModel} loading={loading} />
        )}
      </Box>
    </Box>
  );
};
interface Props {
  id: any;
  open?: any;
  close?: any;
  sector?: boolean;
  reloadData?: any;
}
const ZoneSidebar: React.FC<Props> = (props) => {
  const { id, close, sector, reloadData } = props;
  const [employees, setEmployees] = useState<User | undefined | any>(undefined);
  const [datas, setDatas] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const invokeData = useCallback(async () => {
    const _employees: any = await getAllEmployees();
    if (_employees) {
      setEmployees(
        _employees.User.results.map((user: any) => {
          user.name = user.first_name + " " + user.last_name;
          return user;
        })
      );
    }
  }, []);

  let oneIncident;
  const getData = async () => {
    setLoading(true);
    if (sector) {
      oneIncident = await getIncidentsOnSector(id);
    } else {
      oneIncident = await getOneIncidentReport(id);
    }
    if (oneIncident) {
      setLoading(false);
      setDatas(oneIncident);
    }
  };

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  useEffect(() => {
    invokeData();
  }, []);

  return (
    <Drawer
      anchor="right"
      open={id ? true : false}
      onClose={close}
      sx={{
        zIndex: (theme) => theme.zIndex.appBar + 101,
        "> ::-webkit-scrollbar": {
          display: "none",
        },
      }}
      PaperProps={{
        sx: {
          pt: 5,
          width: {
            lg: "45vw",
            md: "65vw",
            sm: "65vw",
            xs: "90vw",
          },
        },
      }}
    >
      <Box
        py={2}
        px={{ xs: 3, md: 5 }}
        sx={{
          top: 0,
          width: {
            lg: "45vw",
            md: "65vw",
            sm: "65vw",
            xs: "90vw",
          },
          position: "fixed",
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: `1.5px solid ${colors.borderColor}`,
          zIndex: (theme) => theme.zIndex.appBar + 104,
        }}
      >
        <Typography fontSize={24} fontWeight={500}>
          Reports
        </Typography>

        <IconButton
          sx={{
            width: { xs: "35px", md: "40px" },
            height: { xs: "35px", md: "40px" },
            backgroundColor: "#fff",
            border: `1px solid ${colors.borderColor}`,
            transform: "rotate(180deg)",
          }}
          onClick={close}
        >
          <IconArrowHorizontally fontSize="small" />
        </IconButton>
      </Box>
      {loading ? (
        <CircularProgress sx={{ m: "auto" }} />
      ) : has(datas) && sector ? (
        datas.map((data: any, index: any) => {
          return (
            <OneIncident
              key={index}
              data={data}
              employees={employees}
              reData={() => {
                getData();
                reloadData();
              }}
            />
          );
        })
      ) : (
        <OneIncident
          data={datas}
          employees={employees}
          reData={() => {
            getData();
            reloadData();
          }}
        />
      )}
    </Drawer>
  );
};

export default ZoneSidebar;
