import React, { ReactElement } from "react";
import { Box, Card, CircularProgress, Typography } from "@mui/material";
import { colors } from "src/utils/colors";
import { IconArrowDown, IconHazard } from "components/svg/icons";
import theme from "src/theme";
import Link from "next/link";

interface Props {
  id: string;
  icon: ReactElement;
  color: string;
  name: string;
  prevMonthRisks: number;
  thisMonthRisks: number;
  percentage: number;
  loading: boolean;
}
const RisksCard: React.FC<Props> = (props) => {
  const { icon, color, name, percentage, loading } = props;

  return (
    <Link href={`/incidents`} passHref>
      <Card
        sx={{
          p: 3,
          border: `1px solid ${colors.borderColor}`,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          cursor: "pointer",
          transition: "0.4s",
          "&:hover": {
            backgroundColor: `${color}10`,
            background: { color },
            border: `1px solid ${color}`,
            boxShadow: "0px 27px 43px rgba(161, 161, 161, 0.05)",
            " .arrow_icon": {
              opacity: "1",
            },
          },
        }}
        elevation={0}
      >
        {loading ? (
          <Box
            height={200}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <CircularProgress size={25} />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              columnGap: { sm: "15px", md: "25px", lg: "50px" },
              position: "relative",
              padding: {
                xs: "10px 0px",
                sm: "15px 5px",
                md: "20px 5px",
                lg: "20px 25px",
              },
            }}
          >
            <Box
              sx={{
                fontSize: { xs: "45px" },
                mr: { xs: 1.5, md: 1, lg: "initial" },
                lineHeight: "0",
              }}
            >
              {icon}
            </Box>
            <Box>
              <Typography variant="h6" display="inline">
                {name}
              </Typography>
              <Box
                sx={{ mt: { xs: 0, sm: 1 } }}
                display="flex"
                alignItems="center"
                flexWrap="wrap"
              >
                <IconArrowDown
                  stroke={color}
                  fontSize={20}
                  transform={percentage > 0 ? "rotate(180)" : ""}
                />
                <Typography
                  color={color}
                  fontWeight={500}
                  sx={{ ml: 0.2, mr: 0.8 }}
                >
                  {Math.round((Math.abs(percentage) + Number.EPSILON) * 100) /
                    100}
                  %
                </Typography>
                <Typography
                  color={theme.palette.secondary.main}
                  fontWeight={500}
                >
                  vs last month
                </Typography>
              </Box>
            </Box>
            <Box
              className="arrow_icon"
              sx={{
                opacity: "0",
                position: "absolute",
                transition: "0.5s",
                right: { xs: "0", sm: "5px", md: "5px", lg: "32px" },
                " path": {
                  stroke: ` ${color}`,
                  fill: { color },
                },
              }}
            >
              <IconHazard
                stroke={color}
                fill={color}
                fontSize={29}
                transform={percentage > 0 ? "rotate(0)" : ""}
              />
            </Box>
          </Box>
        )}
      </Card>
    </Link>
  );
};

export default RisksCard;
