import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Divider,
  Drawer,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import SubmitForm from "components/Form/Button";
import SelectMUI from "components/Form/Select/SelectMUI";
import { IconArrowHorizontally } from "components/svg/icons";
import { User } from "components/User/Interface";
import { useFormik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { getOneTicket, reAssignTicket, updateTickets } from "requests/tickets";
import { getAllEmployees } from "requests/user";
import { colors } from "src/utils/colors";
import { has } from "src/utils/helper";
import {
  TICKET_SOME_ERROR_ACCURED,
  TICKTE_UPDATED,
} from "./Ticketing/Interface";
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
          reAssignTicket(values).then((data: any) => {
            if (data === 0) {
              toast.error(TICKET_SOME_ERROR_ACCURED);
            } else {
              toast.success(TICKTE_UPDATED);
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
          {/* {Array.from(data?.response?.user_id.first_name)[0]} */}
        </Avatar>
        {editable === data?.response?.user_id._id ? (
          <SelectMUI
            sx={{ width: "250px" }}
            label={"Employees"}
            name={"employee_id"}
            options={employees}
            formAction={formAction}
          />
        ) : (
          <Typography fontSize={14} fontWeight={500}>
            {data?.response?.user_id?.first_name &&
            data?.response?.user_id?.last_name
              ? data.response?.user_id.first_name +
                " " +
                data.response?.user_id.last_name
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
          <CustomText title="Name" text={data?.response?.title} />
          <CustomText
            title="Category"
            text={data?.response?.category_id?.name}
          />
          <CustomText
            title="Reported By"
            text={`${data?.response?.user_id.first_name} ${data?.response?.user_id.last_name}`}
          />
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box sx={{ pl: { md: 1 } }}>
          <CustomText
            title="Rating"
            text={`${
              (data?.response?.priority == 1
                ? "High"
                : "" || data?.response?.priority == 2
                ? "Moderate"
                : "" || data?.response?.priority == 3
                ? "Low"
                : "" || "") + " "
            }`}
          />
          <CustomText
            title="Status"
            text={`${data?.response?.status_id?.name}`}
          />
          <CustomText
            title="Reported On"
            text={data?.response?.createdAt.substring(0, 10).replace(/-/g, "/")}
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
          text={data?.response?.description}
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
          <CustomText title="Zone" text={data?.response?.zone_id.name} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          justifyContent: "space-between",
        }}
      ></Box>
      <Box
        sx={{
          mt: { xs: 3, md: 4 },
          textAlign: { xs: "center", md: "initial" },
        }}
      >
        {editable !== data?.response.user_id._id ? (
          <Button
            variant="contained"
            onClick={() => setEditable(data?.response.user_id._id)}
          >
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
  status?: any;
}
const TicketSidebar: React.FC<Props> = (props) => {
  const { id, close, sector, reloadData, status } = props;
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

  let oneTicket;
  const getData = async () => {
    setLoading(true);
    if (sector) {
      oneTicket = await getOneTicket(id);
    } else {
      oneTicket = await getOneTicket(id);
    }
    if (oneTicket) {
      setLoading(false);
      setDatas(oneTicket);
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
          Ticket History
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
            <>
              <OneIncident
                key={index}
                data={data}
                employees={employees}
                reData={() => {
                  getData();
                  reloadData();
                }}
              />
            </>
          );
        })
      ) : (
        <>
          <OneIncident
            data={datas}
            employees={employees}
            reData={() => {
              getData();
              reloadData();
            }}
          />
        </>
      )}
      <Box sx={{ padding: "0 40px", marginTop: "20px" }}>
        {/* <FormControl fullWidth sx={{ padding: "20px 0" }}>
          <InputLabel id="demo-simple-select-label">Change Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            onChange={(e) => {
              e.target.value;
            }}
          >
            {status?.map((entry: any, index: any) => (
              <MenuItem value={entry.name} key={index}>
                {entry.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl> */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Created At </TableCell>
                <TableCell>Changed by </TableCell>
                <TableCell align="right">Assigned From</TableCell>
                <TableCell align="right">Assigned To</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {datas?.response?.history.length >= 1 ? (
                <>
                  {datas?.response?.history.map((row: any, index: any) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.createdAt.substring(0, 10).replace(/-/g, "/")}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.by.first_name} {row.by.last_name}
                      </TableCell>
                      <TableCell align="right">
                        {row.from.first_name} {row.from.last_name}
                      </TableCell>
                      <TableCell align="right">
                        {row.to.first_name} {row.to.last_name}
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              ) : (
                <Typography>Nuk ka te dhena</Typography>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Drawer>
  );
};

export default TicketSidebar;
