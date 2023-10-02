import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Typography,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import { navbarHeight, rightSidebarWidth } from "src/utils/sidebarController";
import NotificationSidebar from "components/Notificaiton";
import {
  IconDangerNavbarBw,
  IconDangerNavbarColor,
  IconHazard,
} from "components/svg/icons";
import { colors } from "src/utils/colors";
import { getIncidentsGroupedByCategories } from "requests/dashboard";
import { toast } from "react-toastify";
import { has } from "src/utils/helper";
import { useRouter } from "next/router";
import { getApi } from "src/utils/api";
import { BASE_URL_INCIDENT_API } from "src/utils/consts";
import { INCIDENT_REPORT } from "components/Incident/Interface";

interface SidebarProps {
  open: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const api = getApi(BASE_URL_INCIDENT_API || "");
  const { open, setSidebarOpen } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"), {
    // defaultMatches: true,
    // noSsr: false,
  });

  const [incCategories, setIncCategories] = useState<any[]>([]);
  const [incCategLoading, setIncCategLoading] = useState<boolean>(false);
  const [counter, setCounter] = useState();
  const [boxesToShow, setBoxesToShow] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const boxes = [
    {
      showOn: "/dashboard",
      data: [
        {
          subtitle: "Days",
          report: "Incidents Free",
          backgroundColor: "#EBEFFF",
          type: "free",
          for: "freeIncident",
        },
        {
          subtitle: "Days",
          report: "Risks Free",
          backgroundColor: "#EBF9EB;",
          borderColor: "#3CC13B",
          reportColor: "#3CC13B",
          type: "free",
          for: "freeRisk",
        },
      ],
    },
    {
      showOn: "/incident",
      data: [
        {
          borderColor: "#F0F2F4",
          report: "Incidents",
          reportColor: "#F3BB1C",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 10px 30px  rgb(0 0 0 /3%)",
          type: "counter",
          for: "numberOfIncidents",
        },
        {
          report: "Risks",
          backgroundColor: "#f037381a",
          borderColor: "#F03738",
          reportColor: "#F03738",
          type: "counter",
          for: "numberOfRisks",
        },
      ],
    },
  ];

  const getAllIncidentCategory = async () => {
    setLoading(true);
    try {
      const { data } = await api.get(`${INCIDENT_REPORT}/incidentFree`);
      setCounter(data.data);
      setLoading(false);
    } catch (e: any) {
      setLoading(false);
      return e.response;
    }
  };

  const getIncidentsCategories = async () => {
    setIncCategLoading(true);
    const res: any = await getIncidentsGroupedByCategories();
    setIncCategories(res);
    setIncCategLoading(false);
    if ("error" in res) {
      setIncCategLoading(false);
      return toast.error(res.message);
    }
  };

  useEffect(() => {
    getIncidentsCategories();
    getAllIncidentCategory();
    setBoxesToShow(boxes.find((box) => box.showOn === router.pathname));
  }, []);

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          px: 3,
          py: 5,
        }}
      >
        {/* <Box>
          {counter && boxesToShow ? (
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              {boxesToShow &&
                boxesToShow.data.map((box: any, index: number) => {
                  return (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        border: 1,
                        py: 1,
                        width: "45%",
                        alignItems: "center",
                        borderRadius: "10px",
                        mb: 3,
                        backgroundColor: [box.backgroundColor],
                        borderColor: [box.borderColor],
                        boxShadow: [box.boxShadow],
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: colors.dark,
                          fontSize: "36px",
                        }}
                      >
                        {counter[box.for] ? counter[box.for] : "0"}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: colors.dark,
                          fontSize: "14px",
                        }}
                      >
                        {box.subtitle}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: "16px",
                          color: [box.reportColor],
                        }}
                      >
                        {box.report}
                      </Typography>
                    </Box>
                  );
                })}
            </Box>
          ) : (
            ""
          )}
          <Typography
            sx={{
              fontWeight: 500,
              color: colors.dark,
              mb: 2,
            }}
          >
            Type of issues
          </Typography>
          {incCategLoading ? (
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <Box>
              {has(incCategories) &&
                incCategories.map((incCateg, index) => (
                  <Button
                    key={index}
                    sx={{
                      border: "1.5px solid",
                      borderColor: "#F0F2F4",
                      p: 2,
                      mb: 1,
                      width: "100%",
                      cursor: "initial",
                      justifyContent: "space-between",
                      " .danger_iconColored": {
                        display: "none",
                      },
                      ":hover": {
                        borderColor: colors.primary,
                        " .arrow_icon": {
                          opacity: "1",
                        },
                        " .danger_iconBW": {
                          display: "none",
                        },
                        " .danger_iconColored": {
                          display: "initial",
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <IconDangerNavbarBw
                        className="danger_iconBW"
                        fontSize="25px"
                      />
                      <IconDangerNavbarColor
                        className="danger_iconColored"
                        fontSize="25px"
                      />
                      <Typography
                        color={colors.dark}
                        sx={{
                          ml: 2,
                          textTransform: "none",
                          fontWeight: 500,
                          textAlign: "left",
                        }}
                      >
                        {incCateg.thisMonthRisks} {incCateg.name}
                      </Typography>
                    </Box>
                    <Box
                      className="arrow_icon"
                      sx={{
                        opacity: "0",
                        transition:
                          "all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                        " path": {
                          stroke: colors.primary,
                        },
                      }}
                    >
                      <IconHazard fontSize="small" />
                    </Box>
                  </Button>
                ))}
            </Box>
          )}
        </Box>
        <Divider /> */}
        {/* <NotificationSidebar /> */}
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setSidebarOpen(false)}
        variant={open ? "permanent" : "temporary"}
        PaperProps={{
          sx: {
            top: navbarHeight,
            border: 0,
            backgroundColor: "#fff",
            color: "primary.main",
            width: open ? rightSidebarWidth : 0,
          },
        }}
        BackdropProps={{
          sx: {
            display: { lg: "none" },
          },
        }}
        elevation={0}
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="right"
      onClose={() => setSidebarOpen(false)}
      open={open}
      PaperProps={{
        sx: {
          top: navbarHeight,
          backgroundColor: "#fff",
          color: "primary.main",
          width: rightSidebarWidth,
        },
      }}
      BackdropProps={{
        sx: {
          top: navbarHeight,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100, top: navbarHeight }}
      variant="temporary"
      elevation={0}
    >
      {content}
    </Drawer>
  );
};

export default Sidebar;
