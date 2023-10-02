import React from "react";
import { Box, Typography } from "@mui/material";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { has } from "src/utils/helper";

interface Props {
  data: {
    dayOfMonth: number;
    numberOfRisks: number;
  }[];
}

const BarWithBorder = (borderHeight: number, borderColor: string) => {
  return (props: any) => {
    const { fill, x, y, width, height } = props;
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          stroke="none"
          fill={fill}
        />
        <rect
          x={x}
          y={y}
          width={width}
          height={borderHeight}
          stroke="none"
          fill={borderColor}
        />
      </g>
    );
  };
};

const IncidentsHistorygram: React.FC<Props> = (props) => {
  const { data } = props;

  return (
    <>
      <Box mt={{ xs: 0, md: 5 }}>
        <Box
          mb={2}
          p={2}
          height={270}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",

            flexDirection: "column",
            backgroundColor: "#fff",
            borderRadius: "10px",
            border: "1px solid #E4E7EC;",
            boxShadow: "0px 7px 24px rgba(134, 134, 134, 0.07)",
          }}
        >
          <Typography
            fontWeight={500}
            fontSize={16}
            lineHeight={1}
            color="#262B2B"
          >
            Histogram Chart <br />
          </Typography>
          <Typography mb={5} fontSize={13} fontWeight={400} color="#667085">
            Production status
          </Typography>
          {data ? (
            <ResponsiveContainer width="100%" height={150}>
              <BarChart width={150} height={40} data={data}>
                <Tooltip
                  labelFormatter={(dayOfMonth) => `Day` + " " + `${dayOfMonth}`}
                  contentStyle={{
                    backgroundColor: "#04103B",
                    borderRadius: "10px",
                    border: "none",
                  }}
                  itemStyle={{ color: "#fff" }}
                  labelStyle={{ color: "#fff" }}
                />
                <XAxis dataKey="dayOfMonth" axisLine={false} tickLine={false} />
                <Bar
                  dataKey="numberOfRisks"
                  name="Total Risks"
                  barSize={40}
                  fill="#413ea0"
                  shape={BarWithBorder(2, "#3E66FB")}
                >
                  {has(data) &&
                    data.map((entry, index) => (
                      <Cell radius={5} key={`cell-${index}`} fill="#d1dafe" />
                    ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <Box>No Data</Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default IncidentsHistorygram;
