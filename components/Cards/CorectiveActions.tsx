import { Box, Card, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { Fade } from "react-awesome-reveal";
import {
  Bar,
  Cell,
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import theme from "src/theme";
import { colors } from "src/utils/colors";
import { has } from "src/utils/helper";

const radialBarColor = [
  theme.palette.error.main,
  "#F3BB1C",
  "#3E66FB",
  "#3CC13B",
  "#868B9F",
];

interface Props {
  data: {
    id: string;
    name: string;
    totalRisks: number;
  }[];
  loading?: boolean;
  delay?: number;
}
const CorectiveActions: React.FC<Props> = (props) => {
  const { data, loading, delay } = props;

  return (
    <Fade
      direction="right"
      delay={delay}
      triggerOnce
      style={{ height: "100%" }}
    >
      <Card
        sx={{
          p: 3,
          height: "100%",
          border: `1px solid ${colors.borderColor}`,
        }}
        elevation={0}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography fontWeight={500} fontSize={16} lineHeight={1} mb={4}>
            Corective Actions
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            px: { lg: 2 },
            " g": {
              cursor: "pointer",
              " &:hover": {
                boxShadow: "0px 3.33904px 16.6952px rgba(163, 33, 17, 0.2);",
                transition: "0.3s",
              },
            },
          }}
        >
          {loading ? (
            <CircularProgress size={100} sx={{ mx: "auto", mt: 5 }} />
          ) : data ? (
            <ResponsiveContainer width="100%" height={250}>
              <ComposedChart
                layout="vertical"
                height={250}
                data={data}
                margin={{
                  top: 20,
                  bottom: 20,
                }}
              >
                <XAxis hide type="number" />
                <YAxis
                  orientation="right"
                  dataKey="name"
                  type="category"
                  scale="point"
                  axisLine={false}
                  tickLine={false}
                  reversed
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#04103B",
                    borderRadius: "10px",
                    border: "none",
                  }}
                  itemStyle={{ color: "#fff" }}
                  labelStyle={{ color: "#fff" }}
                />
                <Bar
                  dataKey="totalRisks"
                  name="Total Risks"
                  barSize={40}
                  fill="#413ea0"
                  background={{ fill: "#ecedf0" }}
                >
                  {has(data) &&
                    data.map((entry, index) => (
                      <Cell
                        radius={5}
                        key={`cell-${index}`}
                        fill={radialBarColor[index % radialBarColor.length]}
                      />
                    ))}
                </Bar>
              </ComposedChart>
            </ResponsiveContainer>
          ) : (
            <Box>No Data</Box>
          )}
        </Box>
      </Card>
    </Fade>
  );
};

export default CorectiveActions;
