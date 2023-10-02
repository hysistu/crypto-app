import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import IconBuildingMap from "src/assets/IconBuildingMap";
import { keyframes } from "@mui/system";
import { getSectorsWithIncident } from "requests/incidentReport";
import theme from "src/theme";
import { INCIDENT_REPORT } from "components/Incident/Interface";
import { getApi } from "src/utils/api";
import { BASE_URL_INCIDENT_API } from "src/utils/consts";
import { IconDot } from "components/svg/icons";
import { toast } from "react-toastify";
interface Props {
  data: {
    id: string;
    name: string;
    totalRisks: number;
  }[];
}

const RecentReceived: React.FC<Props> = (props) => {
  const api = getApi(BASE_URL_INCIDENT_API || "");
  const [sectorsWithIncident, setSectorsWithIncident] = useState<any | []>([]);
  const [allIncidents, setAllIncidents] = useState<number | string>(0);

  const getSectors = async () => {
    const sectors: any = await getSectorsWithIncident();
    if ("error" in sectors) {
      toast.error(sectors.message);
    } else {
      setSectorsWithIncident(
        sectors.map((sector: any) => {
          return {
            ...sector.sector,
            incidents: sector.incidentsNumber,
          };
        })
      );
    }
  };

  const getAllIncidents = async () => {
    try {
      const { data } = await api.get(`${INCIDENT_REPORT}/incidentFree`);
      setAllIncidents(data.data.numberOfIncidents + data.data.numberOfRisks);
    } catch (e: any) {
      return e.response;
    }
  };

  useEffect(() => {
    getSectors();
    getAllIncidents();
  }, []);

  const blink = keyframes`
  from { opacity: 1; }
  to { opacity: 0.5; }
`;

  return (
    <Box
      sx={{
        borderRadius: 1,
        backgroundColor: "#fff",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        flexDirection: { xs: "column", sm: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "40%" },
          textAlign: { xs: "center", md: "initial" },
          p: 3,
        }}
      >
        <Typography variant="h5" fontWeight={700}>
          Zone Overview
        </Typography>
        <Typography fontSize={14} color="#667085" mt={1} mb={{ xs: 3, md: 6 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae purus
          ultrices faucibus leo dolor.
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "initial" },
          }}
        >
          <Button
            variant="contained"
            sx={{ textTransform: "none", mr: { xs: 1, md: 5 } }}
            href={`/zone-overview/`}
          >
            Check
          </Button>
          <Typography fontSize={14} color="#505454">
            Number of incidents
          </Typography>
          <Typography mx={0.5}>|</Typography>
          <Typography fontWeight={700}>{allIncidents}</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "60%" },
          backgroundColor: "#fff",
          backgroundSize: "cover",
          borderRadius: theme.shape,
          p: 2,
          position: "relative",
          "> svg": { width: "100%", height: "100%" },
        }}
      >
        <IconBuildingMap />

        {sectorsWithIncident &&
          sectorsWithIncident.map((sector: any) => {
            return (
              <Box
                sx={{
                  position: "absolute",
                  left: `${sector.coordinate_x}%`,
                  bottom: `${sector.coordinate_y}%`,
                }}
                key={sector._id}
              >
                <IconButton
                  sx={{
                    animation: `${blink} 1s linear infinite`,
                    animationDuration: "500ms",
                    animationIterationCount: "infinite",
                    animationDirection: "alternate",
                    animationTimingFunction: "ease-in-out",
                    p: { xs: 0.5, sm: 1, lg: 1 },
                    backgroundColor: "rgba(159, 159, 159, 0.5)",
                    cursor: "initial",
                    ":hover": {
                      animation: "none",
                      backgroundColor: "rgba(0, 0, 0, 0.08)",
                    },
                    "> svg": {
                      width: { xs: "0.2em", sm: "0.4em", lg: "0.4em" },
                      height: { xs: "0.2em", sm: "0.4em", lg: "0.4em" },
                      "> circle": {
                        fill:
                          sector.incidents > 10
                            ? "#F03738"
                            : sector.incidents > 5
                            ? "#F3BB1C"
                            : "#3CC13B",
                      },
                    },
                  }}
                >
                  <IconDot />
                </IconButton>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};

export default RecentReceived;
