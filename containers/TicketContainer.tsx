import {
  Box,
  Button,
  Card,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { IconHazard, IconClose } from "components/svg/icons";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import React, { useCallback, useEffect, useState } from "react";
import { colors } from "src/utils/colors";
import { useRouter } from "next/router";
import useAuth from "context/useAuth";
import { User } from "components/User/Interface";
import { getAllEmployees } from "requests/user";
import { getAllSector } from "requests/sectors";
import { Sector } from "components/Sector/Interface";
import getData from "hooks/getData";
import { has } from "src/utils/helper";
import ReusableTable from "components/ReusableTable/ReusableTable";
import { Fade } from "react-awesome-reveal";
import { addTickets, getOneTicket, updateOneTicket } from "requests/tickets";
import { getAllTicketCategory } from "requests/ticketCategory copy";
import { TicketCategory } from "components/TicketsCategory/Interface";
import { TicketType } from "components/TicketType/Interface";
import { TicketStatus } from "components/TicketStatus/InterfaceStatus";
import { TicketRating } from "components/TicketRating/Interface";
import { ticketingHeader } from "components/Ticketing/HeaderTicketing";
import TicketSidebar from "components/TicketSidebar";
import { getAllTicketStatus } from "requests/ticketStatus";
import TicketForm from "components/Ticketing/Form";
import { getAllZone } from "requests/zones";
import { getAllDepartment } from "requests/departament";
import { TICKETS, Tickets } from "components/Tickets/Interface";
import { getApi } from "src/utils/api";
import { BASE_URL_API } from "src/utils/consts";
import { Zone } from "components/Zone/Interface";
import { Department } from "components/Department/Interface";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const api = getApi(BASE_URL_API || "");
import FilterListIcon from "@mui/icons-material/FilterList";
import Modal from "@mui/material/Modal";
import { getAllIncidentNivel } from "requests/incidentNivel";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "12px",
};

interface headerCardProps {
  title: string;
  text: string;
  type: string;
  showFormHandler: any;
  brColor: string;
  bgColor: string;
  icon: any;
}
const HeaderCard: React.FC<headerCardProps> = ({
  title,
  text,
  showFormHandler,
  brColor,
  bgColor,
  icon,
}) => (
  <Card
    elevation={0}
    sx={{
      p: 3,
      display: "flex",
      flexDirection: { xs: "column", md: "initial" },
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
      my: 3,
      border: "1px solid #fff",
      ":hover": {
        borderColor: brColor,
        backgroundColor: bgColor,
      },
    }}
    onClick={showFormHandler}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mb: { xs: 1, md: "initial" },
      }}
    >
      <Box
        sx={{
          " path": {
            stroke: brColor,
          },
          " svg": {
            width: "2em",
            height: "2em",
          },
          display: "flex",
        }}
      >
        {icon}
      </Box>
      <Typography
        sx={{
          lineHeight: "31px",
          fontWeight: 500,
          fontSize: 26,
          ml: 1,
        }}
      >
        {title}
      </Typography>
    </Box>
    <Typography textAlign="center">{text}</Typography>
    <Box
      sx={{
        display: { xs: "none", md: "initial" },
        " path": {
          stroke: brColor,
        },
      }}
    >
      <IconHazard fontSize="large" />
    </Box>
  </Card>
);

const TicketContainer = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [risksData, setRisksData] = useState<any>(undefined);
  const [employees, setEmployees] = useState<User[]>([]);
  const [categories, setCategories] = useState<TicketCategory[]>([]);
  const [sectors, setSectors] = useState<Sector[]>([]);
  const [types, setTypes] = useState<TicketType[]>([]);
  const [statuses, setStatuses] = useState<TicketStatus[]>([]);
  const [ratings, setRatings] = useState<TicketRating[]>([]);
  const [formType, setFormType] = useState<string>("");
  const [_page, setPage] = useState<number>(1);
  const [department, setDepartment] = useState<Department[]>([]);
  const [zoneId, setZoneId] = useState<Zone[]>([]);
  const [levelId, setLevelId] = useState<string>();
  const [filterStatus, setFilterStatus] = useState<any>("");
  const [filterCategory, setfilterCategory] = useState<any>("");
  const [filterPriority, setfilterPriority] = useState<any>("");
  const [filterZone, setFilterZone] = useState<any>("");
  const [filterUser, setFilterUser] = useState<any>("");
  const [filterDepartment, setfilterDepartment] = useState<any>("");
  const [openSidebarTest, setOpenSidebarTest] = useState<string>("");
  const [value, setValue] = React.useState<Dayjs | null>();
  const [value1, setValue1] = React.useState<Dayjs | null>();
  const [firstDateValue, setFirstDateValue] = useState<any>();
  const [gtValue, setGtValue] = useState<any>();
  const [ltValue, setLtValue] = useState<any>();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [allfilter, setAllfilter] = useState<any>([
    filterStatus,
    filterCategory,
    filterPriority,
    filterZone,
    filterDepartment,
    filterUser,
    gtValue,
    ltValue,
  ]);

  const priorities = [
    {
      name: "All",
      _id: ``,
    },
    {
      name: "High",
      _id: `&priority=${1}`,
    },
    {
      name: "Moderate",
      _id: `&priority=${2}`,
    },
    {
      name: "Low",
      _id: `&priority=${3}`,
    },
  ];

  const openUpdateForm = async (id: string) => {
    const oneTicket = await getOneTicket(id);
    showForm(componentsData[0].type);
    setRisksData(oneTicket?.response);
  };

  const openZoneSidebarTest = async (id: string) => {
    setOpenSidebarTest(id);
  };

  const getAllTickets = async (): Promise<{
    Tickets: Tickets[];
  }> => {
    try {
      const response = await api.get(
        `${TICKETS}?status_id=${filterStatus}&category_id=${filterCategory}&zone_id=${filterZone}${filterPriority}&user_id=${filterUser}&department_id=${filterDepartment}&gt=${gtValue}&lt=${ltValue}`
      );

      return { Tickets: response.data.data };
    } catch (e: any) {
      return e.response.data;
    }
  };
  const { loader, records, page, totalPage, reloadData, data } = getData(
    getAllTickets,
    "Tickets",
    _page
  );
  console.log("dataaaaaaaa", data);

  const invokeData = useCallback(async () => {
    const _statuses: any = await getAllTicketStatus();
    if (_statuses) {
      setStatuses(_statuses.TicketStatus.results);
    }
    const _sectors: any = await getAllSector();
    if (_sectors) {
      setSectors(_sectors.Sector.results);
    }
    const _categories: any = await getAllTicketCategory();
    if (_categories) {
      setCategories(_categories.TicketCategory.results);
    }

    const _zones = await getAllZone();
    if (_zones) {
      setZoneId(_zones.Zone.results);
    }
    const _levels: any = await getAllIncidentNivel();
    if (_levels) {
      setLevelId(_levels.IncidentNivel.results);
    }

    const _deps = await getAllDepartment(1);
    if (_deps) {
      setDepartment(_deps.Department.results);
    }

    const _users: any = await getAllEmployees();
    if (_users) {
      setEmployees(
        _users.User.results.map((user: any) => {
          user.name = user.first_name + " " + user.last_name;
          return user;
        })
      );
    }
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
    }
  }, [user, loading, router]);

  useEffect(() => {
    invokeData();
  }, []);
  useEffect(() => {
    getAllTickets();
    reloadData();
  }, [allfilter]);

  const showForm = (type: string) => {
    if (formType === type) {
      setFormType("");
    } else {
      setFormType(type);
    }
  };

  const componentsData = [
    {
      title: "Add Ticket",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      type: "Ticket",
      brColor: colors.green,
      bgColor: "#EBF9EB",
      icon: <PlaylistAddCheckIcon />,
      form: (
        <TicketForm
          model={risksData}
          addAction={addTickets}
          actionUpdate={updateOneTicket}
          types={types}
          zone={zoneId}
          levels={levelId}
          employees={employees}
          statuses={statuses}
          categories={categories}
          department={department}
          ratings={ratings}
          sectors={sectors}
          closeForm={() => setFormType("")}
          reloadData={reloadData}
        />
      ),
    },
  ];

  let activeComponent = componentsData.find(
    (component) => component.type === formType
  );

  return (
    <>
      {/* <HeaderAddAction /> */}

      {componentsData.map((component, index) => {
        return (
          <Fade direction="up" key={index} triggerOnce>
            <HeaderCard
              {...component}
              showFormHandler={() => showForm(component.type)}
            />
          </Fade>
        );
      })}
      {activeComponent && (
        <Card
          sx={{
            width: "100%",
            px: { xs: 3, md: 7 },
            py: { xs: 3, md: 6 },
            mb: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              mb: 3,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Typography fontWeight={600} fontSize="22px">
                Add New
              </Typography>
              <Box
                sx={{
                  backgroundColor: activeComponent.bgColor,
                  width: "fit-content",
                  px: 1,
                  ml: 2,
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid",
                  borderColor: activeComponent.brColor,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    " svg": {
                      width: "1.5em",
                      height: "1.5em",
                    },
                    " path": {
                      stroke: activeComponent.brColor,
                    },
                  }}
                >
                  {activeComponent.icon}
                </Box>
                <Typography
                  sx={{
                    ml: 1,
                    color: activeComponent.brColor,
                  }}
                >
                  {activeComponent.type}
                </Typography>
              </Box>
            </Box>
            <IconButton onClick={() => setFormType("")}>
              <IconClose />
            </IconButton>
          </Box>
          {activeComponent.form}
        </Card>
      )}
      <Divider />
      <Box sx={{ padding: "10px 0 10px 0" }}>
        <Button onClick={handleOpen}>
          <FilterListIcon /> Filter Tickets
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: "15px" }}
          >
            Filter Data
          </Typography>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <FormControl sx={{ padding: "20px 0", width: "100%" }}>
              <InputLabel id="status">Filter by Status</InputLabel>
              <Select
                labelId="status-label"
                id="status"
                label="Status"
                value={filterStatus}
                onChange={(e) => {
                  setFilterStatus(e.target.value);
                }}
              >
                <MenuItem value={""}>All</MenuItem>
                {statuses?.map((entry: any, index: any) => (
                  <MenuItem value={entry._id} key={index}>
                    {entry.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ padding: "20px 0", width: "100%" }}>
              <InputLabel id="status-label">Filter by Categories</InputLabel>
              <Select
                labelId="status-label"
                id="status"
                label="Status"
                value={filterCategory}
                onChange={(e: any) => {
                  setfilterCategory(e.target.value);
                }}
              >
                <MenuItem value={""}>All</MenuItem>
                {categories?.map((entry: any, index: any) => (
                  <MenuItem value={entry._id} key={index}>
                    {entry.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ padding: "20px 0", width: "100%" }}>
              <InputLabel id="status-label">Filter by Priority</InputLabel>
              <Select
                labelId="status-label"
                id="status"
                label="Status"
                value={filterPriority}
                onChange={(e: any) => {
                  setfilterPriority(e.target.value);
                }}
              >
                {priorities?.map((entry: any, index: any) => (
                  <MenuItem value={entry._id} key={index}>
                    {entry.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <FormControl sx={{ padding: "20px 0", width: "100%" }}>
              <InputLabel id="status-label">Filter by Zones</InputLabel>
              <Select
                labelId="status-label"
                id="status"
                label="Status"
                value={filterZone}
                onChange={(e: any) => {
                  setFilterZone(e.target.value);
                }}
              >
                <MenuItem value={""}>All</MenuItem>
                {zoneId?.map((entry: any, index: any) => (
                  <MenuItem value={entry._id} key={index}>
                    {entry.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ padding: "20px 0", width: "100%" }}>
              <InputLabel id="status-label">Filter by User</InputLabel>
              <Select
                labelId="status-label"
                id="status"
                label="Status"
                value={filterUser}
                onChange={(e: any) => {
                  setFilterUser(e.target.value);
                }}
              >
                <MenuItem value={""}>All</MenuItem>
                {employees?.map((entry: any, index: any) => (
                  <MenuItem value={entry._id} key={index}>
                    {entry.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ padding: "20px 0", width: "100%" }}>
              <InputLabel id="status-label">Filter by Department</InputLabel>
              <Select
                labelId="status-label"
                id="status"
                label="Status"
                value={filterDepartment}
                onChange={(e: any) => {
                  setfilterDepartment(e.target.value);
                }}
              >
                <MenuItem value={""}>All</MenuItem>
                {department?.map((entry: any, index: any) => (
                  <MenuItem value={entry._id} key={index}>
                    {entry.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", gap: "20px", mb: 3 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Filter From"
                format="YYYY/MM/DD"
                maxDate={value1}
                value={value}
                onChange={(newValue) => {
                  setValue(newValue),
                    setFirstDateValue(newValue),
                    setGtValue(dayjs(newValue).format("YYYY/MM/DD"));
                }}
              />
              <DatePicker
                label="Filter To"
                value={value1}
                minDate={firstDateValue}
                format="YYYY/MM/DD"
                onChange={(newValue) => {
                  setValue1(newValue),
                    setLtValue(dayjs(newValue).format("YYYY/MM/DD"));
                }}
              />
            </LocalizationProvider>
            <Button
              onClick={() => {
                setLtValue(null);
                setGtValue(null);
                setValue(null);
                setValue1(null);
              }}
            >
              Reset Date
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Button
              onClick={(e: any) => {
                setAllfilter(e), handleClose();
              }}
            >
              Filter
            </Button>
            <Button
              onClick={(e: any) => {
                setLtValue(null);
                setGtValue(null);
                setValue(null);
                setValue1(null);
                setFilterStatus("");
                setFilterUser("");
                setFilterZone("");
                setfilterCategory("");
                setfilterDepartment("");
                setfilterPriority("");
                setAllfilter("");
              }}
            >
              Reset
            </Button>
          </Box>
          <Box sx={{ position: "absolute", right: "30px", bottom: "30px" }}>
            <Button
              onClick={(e) => {
                setAllfilter(e), handleClose();
              }}
            >
              Close
            </Button>
          </Box>
        </Box>
      </Modal>

      {data.length >= 1 ? "" : "Nuk ka te dhena"}
      {has(data) && (
        <Fade direction="up" triggerOnce>
          <ReusableTable
            columns={ticketingHeader(
              reloadData,
              openZoneSidebarTest,
              openUpdateForm
            )}
            data={data}
            totalPage={totalPage}
            page={page}
            setPage={setPage}
            records={records}
            loader={loader}
          />
        </Fade>
      )}
      <TicketSidebar
        id={openSidebarTest}
        status={statuses}
        open={openZoneSidebarTest}
        reloadData={reloadData}
        close={() => setOpenSidebarTest("")}
      />
    </>
  );
};

export default TicketContainer;
