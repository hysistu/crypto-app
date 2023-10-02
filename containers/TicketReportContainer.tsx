import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { CircularProgress } from "@mui/material";
import RisksCard from "components/Cards/RisksCard";
import HeaderAddAction from "components/HeaderAddAction";
import { has } from "src/utils/helper";
import theme from "src/theme";
import { toast } from "react-toastify";
import {
  getAllIncidentRating,
  getIncidentsGroupedByStatus,
  getIncidentsGroupedByZone,
  getIncidentsActiveClosedMonthly,
} from "requests/dashboard";
import {
  IconChart,
  IconDanger,
  IconNotification,
  IconOverview,
} from "components/svg/icons";

const VISIBLE_FIELDS = ["name", "rating", "country", "dateCreated", "isAdmin"];

export default function QuickFilteringGrid() {
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

  const { data } = useDemoData({
    dataSet: "Employee",
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });

  // Otherwise filter will be applied on fields such as the hidden column id
  const columns = React.useMemo(
    () =>
      data.columns.filter((column) => VISIBLE_FIELDS.includes(column.field)),
    [data.columns]
  );
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
      <Box sx={{ mb: 5 }}>
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
      </Box>
      <Box sx={{ height: 800, width: 1 }}>
        {/* <DataGrid
          {...data}
          // disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
        /> */}
      </Box>
    </>
  );
}
