import { Box, Divider, Typography } from "@mui/material";
import { IconClosedIncidents, IconNewIncidents } from "components/svg/icons";
import React from "react";
import { Bar, BarChart, LabelList, Tooltip, XAxis } from "recharts";

interface Props {
  data: {
    month: number;
    created: number;
    closed: number;
  }[];
}

const CreatedClosedIncitents: React.FC<Props> = (props) => {
  const { data } = props;

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <>
      <Box
        height={380}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#fff",
          borderRadius: "10px",
          border: "1px solid #E4E7EC;",
          boxShadow: "0px 7px 24px rgba(34, 134, 134, 0.07)",
          pt: 2,
          pb: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            width: { xs: "fit-content", md: "100%" },
            px: 3,
          }}
        >
          <Typography fontWeight={500} fontSize={16}>
            Created / Closed Incidents
          </Typography>
          <Divider
            orientation="horizontal"
            flexItem
            sx={{ display: { md: "none" }, my: 0.8 }}
          />
          <Divider
            orientation="vertical"
            sx={{ display: { xs: "none", md: "initial" } }}
          />
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconNewIncidents />
              <Typography sx={{ ml: 1.5 }}>New Incidents</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconClosedIncidents />
              <Typography sx={{ ml: 1.5 }}>Closed Incidents</Typography>
            </Box>
          </Box>
        </Box>
        {data ? (
          <Box
            sx={{
              width: "100%",
              overflowX: "auto",
              overflowY: "hidden",
            }}
          >
            <BarChart
              width={500}
              height={220}
              data={data}
              margin={{
                top: 20,
                right: 20,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis
                fontSize={12}
                axisLine={false}
                tickLine={false}
                tickFormatter={(label) => `${months[label]}`}
                type="category"
              />
              <Tooltip
                labelFormatter={(label) => `${months[label]}`}
                contentStyle={{
                  backgroundColor: "#04103B",
                  borderRadius: "10px",
                  border: "none",
                }}
                labelStyle={{ color: "#fff" }}
              />
              <Bar
                radius={5}
                barSize={15}
                dataKey="closed"
                name="Closed Incidents"
                fill="#c5ecc4"
              >
                <LabelList
                  radius={5}
                  fontSize={12}
                  fontWeight={400}
                  color="#ccc"
                  dataKey="closed"
                  position="top"
                  offset={10}
                />
              </Bar>
              <Bar
                radius={5}
                barSize={15}
                dataKey="created"
                name="New Incidents"
                fill="#3E66FB"
              >
                <LabelList
                  radius={5}
                  fontSize={12}
                  fontWeight={400}
                  color="#ccc"
                  dataKey="created"
                  position="top"
                  offset={10}
                />
              </Bar>
            </BarChart>
          </Box>
        ) : (
          <Box>No Data</Box>
        )}
      </Box>
    </>
  );
};

export default CreatedClosedIncitents;
