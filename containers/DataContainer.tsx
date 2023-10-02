import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import ComplianceObligations from "components/Cards/ComplianceObligations";
import CorectiveActions from "components/Cards/CorectiveActions";
import DataActions from "components/Cards/DataActions";
import RecentReceived from "components/Cards/RecentReceived";
import TotalRisk from "components/Cards/TotalRisk";
import HeaderAddAction from "components/HeaderAddAction";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { toast } from "react-toastify";
import {
  getIncidentsActiveClosedMonthly,
  getIncidentsGroupedByStatus,
  getIncidentsGroupedByZone,
  percentageForStatus,
} from "requests/dashboard";
import { getAllZone } from "requests/zones";

const DataContainer = () => {
  const [complience, setComplience] = useState<any[]>([]);
  const [corective, setCorective] = useState<any[]>([]);
  const [allZones, setAllZones] = useState<any[]>([]);
  const [monthlyrisk, setMonthlyRisk] = useState<any[]>([]);
  const [actionRisks, setActionRisks] = useState<any[]>([]);
  const [loading, setLoading] = useState<any>({
    actionRisks: false,
    complience: false,
    monthlyrisk: false,
    corective: false,
  });

  useEffect(() => {
    getIncidents();
    getIncidentsZone();
    getMonthlyRisk();
    getZones();
    getPercentage();
  }, []);

  const getAllDatas = async (id?: string) => {
    await getPercentage(id);
    await getIncidents(id);
    await getMonthlyRisk(id);
  };

  const getIncidents = async (id?: string) => {
    setLoading({ ...loading, complience: true });
    const res: any = await getIncidentsGroupedByStatus(id);
    setComplience(res);
    setLoading({ ...loading, complience: false });
    if ("error" in res) {
      setLoading({ ...loading, complience: false });
      return toast.error(res.message);
    }
  };

  const getMonthlyRisk = async (id?: string) => {
    setLoading({ ...loading, monthlyrisk: true });
    const res: any = await getIncidentsActiveClosedMonthly(id);
    setMonthlyRisk(res);
    if ("error" in res) {
      setLoading({ ...loading, monthlyrisk: false });
      return toast.error(res.message);
    }
    setLoading({ ...loading, monthlyrisk: false });
  };

  const getPercentage = async (id?: string) => {
    setLoading({ ...loading, actionRisks: true });
    const res: any = await percentageForStatus(id);
    setActionRisks(res);
    if ("error" in res) {
      setLoading({ ...loading, actionRisks: false });
      return toast.error(res.message);
    }
    setLoading({ ...loading, actionRisks: false });
  };

  const getIncidentsZone = async () => {
    setLoading({ ...loading, corective: true });
    const res: any = await getIncidentsGroupedByZone();
    setCorective(res);
    setLoading({ ...loading, corective: false });
    if ("error" in res) {
      setLoading({ ...loading, corective: false });
      return toast.error(res.message);
    }
  };

  const getZones = async () => {
    const res: any = await getAllZone();
    setAllZones(res.Zone.results);
    if ("error" in res) {
      return toast.error(res.message);
    }
  };

  return (
    <>
      <HeaderAddAction />
      <Box my={4}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl sx={{ border: "none !important" }} fullWidth>
            <InputLabel>Location</InputLabel>
            <Select
              sx={{ background: "#fff", border: "1px solid #F0F2F4" }}
              label="Location"
              variant="outlined"
              onChange={(e: any) => getAllDatas(e.target.value)}
            >
              {allZones.map((item: any, index: number) => {
                return (
                  <MenuItem key={index} value={item._id as string}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box>
        <DataActions data={actionRisks} loading={loading.actionRisks} />
      </Box>
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={5} md={6}>
            <ComplianceObligations
              loading={loading.complience}
              data={complience}
              delay={200}
            />
          </Grid>
          <Grid item xs={12} sm={7} md={6}>
            <CorectiveActions
              data={corective}
              loading={loading.corective}
              delay={200}
            />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Box sx={{ my: 4 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={12}>
              <TotalRisk
                data={monthlyrisk}
                loading={loading.monthlyrisk}
                delay={400}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* <Box>
        <Box sx={{ my: 4 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={12}>
              <Fade direction="up" delay={500} triggerOnce>
                <RecentReceived data={corective} />
              </Fade>
            </Grid>
          </Grid>
        </Box>
      </Box> */}
    </>
  );
};

export default DataContainer;
