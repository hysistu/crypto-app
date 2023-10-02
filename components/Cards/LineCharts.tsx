import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { Box, Card, Typography } from "@mui/material";
import { colors } from "src/utils/colors";

interface Props {
  data: {
    week: number;
    numberOfRisks: number;
  }[];
}
const LineCharts: React.FC<Props> = (props) => {
  const { data } = props;
  return (
    <Card
      elevation={0}
      sx={{
        mt: { xs: 0, md: 2 },
        height: "270px",
        border: `1px solid ${colors.borderColor}`,
      }}
    >
      <Typography
        textAlign={{ xs: "center", md: "left" }}
        fontWeight={500}
        fontSize={16}
        px={3}
        py={2}
      >
        Weekly
      </Typography>
      {data ? (
        <Box
          sx={{
            mt: 1,
            width: "100%",
            overflowX: "auto",
            overflowY: "hidden",
          }}
        >
          <LineChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 10,
              right: 30,
            }}
          >
            <XAxis tickLine={false} dataKey="week" />
            <YAxis type="number" tickLine={false} dataKey="numberOfRisks" />
            <Tooltip
              labelFormatter={(week) => `Week` + " " + `${week}`}
              contentStyle={{
                backgroundColor: "#04103B",
                borderRadius: "10px",
                border: "none",
              }}
              itemStyle={{ color: "#fff" }}
              labelStyle={{ color: "#fff" }}
            />
            <Line
              connectNulls
              dataKey="numberOfRisks"
              name="Risks"
              stroke="#DCDEDF"
              fill="#9DC3FD"
              strokeWidth={5}
              dot={{
                stroke: "#E9E9E9",
                strokeWidth: 2,
                r: 6,
              }}
            />
          </LineChart>
        </Box>
      ) : (
        <Box>No Data</Box>
      )}
    </Card>
  );
};

export default LineCharts;
