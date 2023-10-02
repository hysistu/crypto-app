import React from "react";
import {
  BarChart,
  Bar,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  XAxis,
} from "recharts";
import { Box, Card, Typography } from "@mui/material";
import { has } from "src/utils/helper";
import { colors } from "src/utils/colors";

interface Props {
  data: {
    month: number;
    created: number;
    closed: number;
  }[];
}
const SimpleBarChart: React.FC<Props> = (props) => {
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
    <Card
      elevation={0}
      sx={{
        mt: { xs: 0, md: 2 },
        height: "270px",
        border: `1px solid ${colors.borderColor}`,
      }}
    >
      <Typography
        fontWeight={500}
        fontSize={16}
        px={3}
        py={2}
        sx={{ color: "#000" }}
      >
        Monthly
      </Typography>
      {data ? (
        <ResponsiveContainer width="100%" height={200}>
          <BarChart width={150} height={40} data={data}>
            <Tooltip
              labelFormatter={(label) => `${months[label]}`}
              contentStyle={{
                backgroundColor: "#04103B",
                borderRadius: "10px",
                border: "none",
              }}
              itemStyle={{ color: "#fff" }}
              labelStyle={{ color: "#fff" }}
            />
            <Bar radius={2} dataKey="created" fill="#dcdedf" name="Risks">
              <XAxis
                fontSize={10}
                axisLine={false}
                tickLine={false}
                tickFormatter={(label) => `${months[label]}`}
                type="category"
              />
              {has(data) &&
                data.map((entry, index) => (
                  <LabelList
                    radius={5}
                    key={index}
                    fontSize={12}
                    fontWeight={400}
                    color="#ccc"
                    dataKey="created"
                    name="Risks"
                    position="insideBottom"
                  />
                ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <Box>No Data</Box>
      )}
    </Card>
  );
};

export default SimpleBarChart;
