// @ts-nocheck
import { Box, Card, IconButton, Typography } from "@mui/material";
import IncidentReportingForm from "components/Incident/Form";
import { incidentHeader } from "components/Incident/HeaderIncident";
import { Incident } from "components/Incident/Interface";
import { IncidentCategory } from "components/IncidentCategory/Interface";
import { IncidentRating } from "components/IncidentRating/Interface";
import { IncidentStatus } from "components/IncidentStatus/Interface";
import { IncidentType } from "components/IncidentType/Interface";
import ZoneSidebar from "components/Layout/components/ZoneSidebar";
import ReusableTable from "components/ReusableTable/ReusableTable";
import { Risk } from "components/Risk/Interface";
import { Sector } from "components/Sector/Interface";
import { IconClose, IconDangerSquared, IconHazard } from "components/svg/icons";
import { User } from "components/User/Interface";
import useAuth from "context/useAuth";
import getData from "hooks/getData";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllIncidentCategory } from "requests/incidentCategory";
import { getAllIncidentNivel } from "requests/incidentNivel";
import { getAllIncidentRating } from "requests/incidentRatings";
import {
  addIncidentReport,
  getAllIncidentReport,
  updateIncidentReport,
} from "requests/incidentReport";
import { getAllIncidentStatus } from "requests/incidentStatus";
import { getAllIncidentType } from "requests/incidentType";
import { getAllSector } from "requests/sectors";
import { getAllEmployees } from "requests/user";
import { has } from "src/utils/helper";
import { INCIDENT_ID } from "src/utils/incidentsConsts";

interface headerCardProps {
  title: string;
  // text: string;
  type: string;
  showFormHandler: any;
  brColor: string;
  bgColor: string;
  icon: any;
}
const HeaderCard: React.FC<headerCardProps> = ({
  title,
  // text,
  showFormHandler,
  brColor,
  bgColor,
  icon,
}) => (
  <Card
    elevation={1}
    sx={{
      width: "48%",
      p: 3,
      display: "flex",
      flexDirection: { xs: "column", md: "initial" },
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
      mb: 3,
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
        sx={{ lineHeight: "31px", fontWeight: 500, fontSize: 26, ml: 1 }}
      >
        {title}
      </Typography>
    </Box>
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

const ReportingContainer = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [risksData, setRisksData] = useState<Risk | Incident | any>(undefined);
  const [employees, setEmployees] = useState<User[] | any>([]);
  const [categories, setCategories] = useState<IncidentCategory[] | any>([]);
  const [sectors, setSectors] = useState<Sector[] | any>([]);
  const [types, setTypes] = useState<IncidentType[] | any>([]);
  const [statuses, setStatuses] = useState<IncidentStatus[] | any>([]);
  const [ratings, setRatings] = useState<IncidentRating[] | any>([]);
  const [levels, setLevels] = useState<any>([]);
  const [formType, setFormType] = useState<string>("");
  const [_page, setPage] = useState<number>(1);
  const [_risksPage, setRisksPage] = useState<number>(1);
  const [incidentCategories, setIncidentCategories] = useState<Incident | any>(
    []
  );

  const [openModal, setOpenModal] = useState<any>("");

  const openModalHandler = (id: any) => {
    setOpenModal(id);
  };

  const { loader, records, page, totalPage, reloadData, data } = getData(
    getAllIncidentReport,
    "Incident",
    _page,
    INCIDENT_ID
  );

  const invokeData = useCallback(async () => {
    const _statuses: any = await getAllIncidentStatus();
    if (_statuses) {
      setStatuses(_statuses.IncidentStatus.results);
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

    const _sectors: any = await getAllSector();
    if (_sectors) {
      setSectors(_sectors.Sector.results);
    }

    const _types: any = await getAllIncidentType();
    if (_types) {
      setTypes(_types.IncidentType.results);
    }

    const _ratings: any = await getAllIncidentRating();
    if (_ratings) {
      setRatings(_ratings.IncidentRating.results);
    }
    const _levels: any = await getAllIncidentNivel();
    if (_levels) {
      setLevels(_levels.IncidentNivel.results);
    }
  }, []);

  const getIncidentsCategories = async () => {
    const res: any = await getAllIncidentCategory();
    if (res.IncidentCategory) {
      setIncidentCategories(res.IncidentCategory.results);
    }
    if ("error" in res) {
      return toast.error(res.message);
    }
  };

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
    }
  }, [user, loading, router]);

  useEffect(() => {
    invokeData();
    getIncidentsCategories();
  }, []);

  const showForm = (type: string) => {
    if (formType === type) {
      setFormType("");
    } else {
      setFormType(type);
    }
  };

  const componentsData: any = [];

  if (incidentCategories) {
    incidentCategories.map((comp: any, i: any) => {
      componentsData.push({
        title: `Add ${comp.display_name}`,
        type: comp.display_name,
        brColor: `rgba(${200 + i * 10}, ${55 + i * 15}, ${56 + i * 30}, 1)`,
        bgColor: `rgba(${200 + i * 10}, ${55 + i * 15}, ${56 + i * 30},0.1)`,
        icon: <IconDangerSquared />,
        form: (
          <IncidentReportingForm
            model={risksData}
            addAction={addIncidentReport}
            actionUpdate={updateIncidentReport}
            types={types}
            employees={employees}
            statuses={statuses}
            categories={categories}
            ratings={ratings}
            sectors={sectors}
            levels={levels}
            category_id={comp._id}
            closeForm={() => setFormType("")}
            reloadData={reloadData}
          />
        ),
      });
    });
  }

  let activeComponent = componentsData.find(
    (component: any) => component.type === formType
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {componentsData?.map((component: any, index: any) => {
          return (
            <HeaderCard
              {...component}
              showFormHandler={() => showForm(component.type)}
            />
          );
        })}
      </Box>
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
        <ReusableTable
          columns={incidentHeader(reloadData, openModalHandler)}
          data={data}
          totalPage={totalPage}
          page={page}
          setPage={setPage}
          records={records}
          loader={loader}
        >
          <Typography
            sx={{
              fontWeight: "500",
            }}
          >
            Incidents
          </Typography>
        </ReusableTable>
      )}
      <ZoneSidebar
        id={openModal}
        reloadData={reloadData}
        close={() => setOpenModal("")}
      />
    </>
  );
};

export default ReportingContainer;
