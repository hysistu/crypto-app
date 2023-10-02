import { Box, Card, IconButton, Typography } from "@mui/material";
import { IconAddTask, IconHazard, IconClose } from "components/svg/icons";
import React, { useCallback, useEffect, useState } from "react";
import { colors } from "src/utils/colors";
import TaskReportingForm from "components/Task/Form";
import { useRouter } from "next/router";
import useAuth from "context/useAuth";
import { User } from "components/User/Interface";
import { IncidentCategory } from "components/IncidentCategory/Interface";
import { IncidentType } from "components/IncidentType/Interface";
import { IncidentStatus } from "components/IncidentStatus/Interface";
import { IncidentRating } from "components/IncidentRating/Interface";
import { getAllEmployees } from "requests/user";
import { getAllIncidentCategory } from "requests/incidentCategory";
import { getAllIncidentType } from "requests/incidentType";
import { getAllIncidentStatus } from "requests/incidentStatus";
import { getAllIncidentRating } from "requests/incidentRatings";
import { Risk } from "components/Risk/Interface";
import {
  addIncidentReport,
  getAllIncidentReport,
  updateIncidentReport,
} from "requests/incidentReport";
import { getAllSector } from "requests/sectors";
import { Sector } from "components/Sector/Interface";
import getData from "hooks/getData";
import { has } from "src/utils/helper";
import ReusableTable from "components/ReusableTable/ReusableTable";
import { Task } from "components/Task/Interface";
import ZoneSidebar from "components/Layout/components/ZoneSidebar";
import { taskHeader } from "components/Task/HeaderTask";
import { TASK_ID } from "src/utils/incidentsConsts";
import HeaderAddAction from "components/HeaderAddAction";
import { Fade } from "react-awesome-reveal";

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

const TaskContainer = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [risksData, setRisksData] = useState<Risk | Task | undefined>(
    undefined
  );
  const [employees, setEmployees] = useState<User[]>([]);
  const [categories, setCategories] = useState<IncidentCategory[]>([]);
  const [sectors, setSectors] = useState<Sector[]>([]);
  const [types, setTypes] = useState<IncidentType[]>([]);
  const [statuses, setStatuses] = useState<IncidentStatus[]>([]);
  const [ratings, setRatings] = useState<IncidentRating[]>([]);
  const [formType, setFormType] = useState<string>("");
  const [_page, setPage] = useState<number>(1);

  const [openSidebarTest, setOpenSidebarTest] = useState<string>("");

  const openZoneSidebarTest = async (id: string) => {
    setOpenSidebarTest(id);
  };

  const { loader, records, page, totalPage, reloadData, data } = getData(
    getAllIncidentReport,
    "Incident",
    _page,
    TASK_ID
  );

  const invokeData = useCallback(async () => {
    const _sectors: any = await getAllSector();
    if (_sectors) {
      setSectors(_sectors.Sector.results);
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

    const _categories: any = await getAllIncidentCategory();
    if (_categories) {
      setCategories(_categories.IncidentCategory.results);
    }
    const _types: any = await getAllIncidentType();
    if (_types) {
      setTypes(_types.IncidentType.results);
    }
    const _statuses: any = await getAllIncidentStatus();
    if (_statuses) {
      setStatuses(_statuses.IncidentStatus.results);
    }

    const _ratings: any = await getAllIncidentRating();
    if (_ratings) {
      setRatings(_ratings.IncidentRating.results);
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

  const showForm = (type: string) => {
    if (formType === type) {
      setFormType("");
    } else {
      setFormType(type);
    }
  };

  const componentsData = [
    {
      title: "Add Task",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      type: "Task",
      brColor: colors.green,
      bgColor: "#EBF9EB",
      icon: <IconAddTask />,
      form: (
        <TaskReportingForm
          model={risksData}
          addAction={addIncidentReport}
          actionUpdate={updateIncidentReport}
          types={types}
          employees={employees}
          statuses={statuses}
          categories={categories}
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
      <HeaderAddAction />
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
      {has(data) && (
        <Fade direction="up" triggerOnce>
          <ReusableTable
            columns={taskHeader(reloadData, openZoneSidebarTest)}
            data={data}
            totalPage={totalPage}
            page={page}
            setPage={setPage}
            records={records}
            loader={loader}
          />
        </Fade>
      )}
      <ZoneSidebar
        id={openSidebarTest}
        open={openZoneSidebarTest}
        reloadData={reloadData}
        close={() => setOpenSidebarTest("")}
      />
    </>
  );
};

export default TaskContainer;
