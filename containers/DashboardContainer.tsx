import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Grid } from "@mui/material";
import {
  IconDanger,
  IconNotification,
  IconChart,
  IconOverview,
} from "components/svg/icons";
import RisksCard from "components/Cards/RisksCard";
import RecentReceived from "components/Cards/RecentReceived";
import theme from "src/theme";
import {
  getAllIncidentRating,
  getIncidentsGroupedByZone,
  getIncidentsGroupedByStatus,
  getIncidentsActiveClosedMonthly,
} from "requests/dashboard";
import { toast } from "react-toastify";
import { has } from "src/utils/helper";
import ComplianceObligations from "components/Cards/ComplianceObligations";
import CorectiveActions from "components/Cards/CorectiveActions";
import TotalRisk from "components/Cards/TotalRisk";
import HeaderAddAction from "components/HeaderAddAction";
import { Fade } from "react-awesome-reveal";

interface Props {}
const DashboardContainer: React.FC<Props> = (props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [risksCardsData, setRisksCardsData] = useState<any[]>([]);
  const [complience, setComplience] = useState<any[]>([]);
  const [corective, setCorective] = useState<any[]>([]);
  const [monthlyrisk, setMonthlyRisk] = useState<any[]>([]);

  useEffect(() => {
    getRisks();
    getIncidents();
    getIncidentsZone();
    getMonthlyRisk();
  }, []);

  const getRisks = async () => {
    setLoading(true);
    const res: any = await getAllIncidentRating();
    setRisksCardsData(res);
    setLoading(false);
    if ("error" in res) {
      setLoading(false);
      return toast.error(res.message);
    }
  };
  const getIncidents = async () => {
    const res: any = await getIncidentsGroupedByStatus();
    setComplience(res);
    if ("error" in res) {
      return toast.error(res.message);
    }
  };
  const getIncidentsZone = async () => {
    const res: any = await getIncidentsGroupedByZone();
    setCorective(res);
    if ("error" in res) {
      return toast.error(res.message);
    }
  };
  const getMonthlyRisk = async () => {
    const res: any = await getIncidentsActiveClosedMonthly();

    if ("error" in res) {
      return toast.error(res.message);
    }
    setMonthlyRisk(res);
  };

  const icons = [
    {
      color: theme.palette.error.main,
      icon: <IconDanger />,
    },
    {
      color: "#F3BB1C",
      icon: <IconNotification />,
    },
    {
      color: "#3CC13B",
      icon: <IconChart />,
    },
    {
      color: "#3E66FB",
      icon: <IconOverview />,
    },
  ];

  return (
    <>
      <Box>
        <HeaderAddAction />
        <Box sx={{ mt: { xs: 2, sm: 5 } }}>
          {loading ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ height: "220px" }}
            >
              <CircularProgress size={25} />
            </Box>
          ) : (
            <Grid
              container
              spacing={{ xs: 2, md: 4 }}
              display="flex"
              alignItems="stretch"
            >
              {has(risksCardsData) &&
                risksCardsData.map((risksCard, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <RisksCard
                      id={risksCard.id}
                      name={risksCard.name}
                      percentage={risksCard.percentage}
                      prevMonthRisks={risksCard.prevMonthRisks}
                      thisMonthRisks={risksCard.thisMonthRisks}
                      loading={loading}
                      icon={icons[index].icon}
                      color={icons[index].color}
                    />
                  </Grid>
                ))}
            </Grid>
          )}
        </Box>
        {/* <Box sx={{ my: 4 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={12}>
              <Fade direction="up" triggerOnce>
                <RecentReceived data={corective} />
              </Fade>
            </Grid>
          </Grid>
        </Box> */}
      </Box>
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={5} md={6}>
            {/* <ComplianceObligations data={complience} /> */}
          </Grid>
          <Grid item xs={12} sm={7} md={6}>
            {/* <CorectiveActions data={corective} /> */}
          </Grid>
          <Grid item xs={12} md={12}>
            <Fade direction="up" triggerOnce>
              <TotalRisk data={monthlyrisk} />
            </Fade>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DashboardContainer;
