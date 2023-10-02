import { Box, Card, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { Fade } from "react-awesome-reveal";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { colors } from "src/utils/colors";

interface Props {
  data: {
    month: number;
    created: number;
    closed: number;
  }[];
  loading?: boolean;
  delay?: number;
}

const TotalRisk: React.FC<Props> = (props) => {
  const { data, loading, delay } = props;

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
      <Fade direction="up" delay={delay} triggerOnce>
        <Card
          sx={{ p: 2, pl: 0, border: `1px solid ${colors.borderColor}` }}
          elevation={0}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pl: 3,
              mb: 3,
            }}
          >
            <Typography fontSize={18} fontWeight={500}>
              Safety / Exposure Graph
            </Typography>
          </Box>
          <Box sx={{ textAlign: loading ? "center" : "initial" }}>
            {loading ? (
              <CircularProgress size={100} />
            ) : (
              <Box
                sx={{
                  maxWidth: "980px",
                  minHeight: "200px",
                  overflowX: "auto",
                  overflowY: "hidden",
                }}
              >
                <AreaChart data={data} width={980} height={220}>
                  <defs>
                    <linearGradient id="colorNew" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F03738" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#F03738" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                      id="colorClosed"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#3E66FB" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3E66FB" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    fontSize={12}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(label) => `${months[label]}`}
                    type="category"
                  />
                  <YAxis
                    tick={{ display: "none" }}
                    width={20}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    labelFormatter={(label) => `${months[label]}`}
                    contentStyle={{
                      backgroundColor: "#04103B",
                      borderRadius: "10px",
                      border: "none",
                      color: "#fff",
                    }}
                    labelStyle={{ color: "#fff" }}
                    itemStyle={{ color: "#fff" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="created"
                    name="New Incidents"
                    stackId="1"
                    strokeWidth={2}
                    fill="url(#colorNew)"
                    stroke="#F03738"
                  />
                  <Area
                    type="monotone"
                    dataKey="closed"
                    name="Closed Incidents"
                    stackId="2"
                    strokeWidth={2}
                    fill="url(#colorClosed)"
                    stroke="#3E66FB"
                  />
                </AreaChart>
              </Box>
            )}
          </Box>
        </Card>
      </Fade>
    </>
  );
};

export default TotalRisk;
