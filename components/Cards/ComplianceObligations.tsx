import React, { useEffect, useState } from "react";
import { Box, Card, Typography, CircularProgress } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { colors } from "src/utils/colors";
import theme from "src/theme";
import { has } from "src/utils/helper";
import { Fade } from "react-awesome-reveal";

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
    percentage: number;
    prevMonthRisks: number;
    thisMonthRisks: number;
  }[];
  loading?: boolean;
  delay?: number;
}
const ComplianceObligations: React.FC<Props> = (props) => {
  const { data, loading, delay } = props;
  const [hasThisMonth, setHasThisMonth] = useState<boolean>(false);

  useEffect(() => {
    if (data.length) {
      setHasThisMonth(data.some((oneData) => oneData.thisMonthRisks > 0));
    }
  }, [data]);

  return (
    <Fade direction="left" delay={delay} triggerOnce style={{ height: "100%" }}>
      <Card
        elevation={0}
        sx={{
          p: 3,
          height: "100%",
          border: `1px solid ${colors.borderColor}`,
          " g": {
            cursor: "pointer",
          },
        }}
      >
        <Typography
          textAlign={{ xs: "center", md: "left" }}
          fontWeight={500}
          fontSize={16}
          lineHeight={1}
        >
          Complience Obligations
        </Typography>

        {loading ? (
          <CircularProgress size={100} sx={{ mx: "auto", mt: 5 }} />
        ) : hasThisMonth ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-around",
              mt: { xs: 4, md: 8 },
            }}
          >
            <PieChart width={162} height={180}>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#04103B",
                  borderRadius: "10px",
                  border: "none",
                }}
                labelStyle={{ color: "#fff" }}
                itemStyle={{ color: "#fff" }}
              />
              <Pie
                data={data}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={3}
                dataKey="thisMonthRisks"
              >
                {has(data) &&
                  data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={radialBarColor[index % radialBarColor.length]}
                    />
                  ))}
              </Pie>
            </PieChart>
            <Box>
              {has(data) &&
                data.map((entry, index) => {
                  return (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 0.5,
                      }}
                    >
                      <Box
                        sx={{
                          mr: 1,
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          backgroundColor:
                            radialBarColor[index % radialBarColor.length],
                        }}
                      />
                      <Typography fontSize={18} fontWeight={500}>
                        {entry.thisMonthRisks} {entry.name}
                      </Typography>
                    </Box>
                  );
                })}
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Typography fontWeight={500} fontSize="26px">
              No data for this month
            </Typography>
          </Box>
        )}
      </Card>
    </Fade>
  );
};

export default ComplianceObligations;
