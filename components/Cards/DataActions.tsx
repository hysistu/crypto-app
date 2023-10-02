import React from "react";
import { Box, Grid, Typography, Button, CircularProgress } from "@mui/material";
import { IconHazard } from "components/svg/icons";
import { has } from "src/utils/helper";
import { Fade } from "react-awesome-reveal";

const actions = [
  {
    type: "Opened",
    size: "5",
  },
  {
    type: "Closed",
    size: "8",
  },
];
interface Props {
  data: {
    percentage: number;
    status: any;
    numberOfRisks: number;
  }[];
  loading?: boolean;
}

const DataActions: React.FC<Props> = (props) => {
  const { data, loading } = props;
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={6} sm={6} md={6}>
          <Fade direction="left" triggerOnce>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "10px",
                background: "#fff",
                borderRadius: "10px",
                cursor: "pointer",
                border: "1px solid #F0F2F4",
                transition: "0.4s",
                position: "relative",
                flexDirection: { xs: "column", md: "initial" },
                p: { xs: 2, md: 4 },
                "&:hover": {
                  boxShadow: "0px 27px 43px rgba(161, 161, 161, 0.05)",
                  backgroundColor: "#ff2d5510",
                  border: `1px solid #ff2d55`,
                  " .arrow_icon": {
                    opacity: "1",
                  },
                },
              }}
            >
              {loading ? (
                <CircularProgress sx={{ mx: "auto" }} />
              ) : (
                <>
                  <Typography fontSize={16} fontWeight={500} color="#000">
                    {data[0]?.numberOfRisks}
                  </Typography>
                  <Typography
                    fontSize={16}
                    fontWeight={500}
                    color="#000"
                    textAlign="center"
                  >
                    Actions opened this month
                  </Typography>
                  <Box
                    className="arrow_icon"
                    sx={{
                      display: { xs: "none", md: "initial" },
                      opacity: "0",
                      position: "absolute",
                      transition: "0.5s",
                      right: { xs: "0", sm: "5px", md: "5px", lg: "32px" },
                      " path": {
                        stroke: "#ff2d55",
                      },
                    }}
                  >
                    <IconHazard fontSize={20} />
                  </Box>
                </>
              )}
            </Box>
          </Fade>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <Fade direction="right" triggerOnce>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "10px",
                background: "#fff",
                borderRadius: "10px",
                cursor: "pointer",
                border: "1px solid #F0F2F4",
                transition: "0.4s",
                position: "relative",
                flexDirection: { xs: "column", md: "initial" },
                p: { xs: 2, md: 4 },
                "&:hover": {
                  boxShadow: "0px 27px 43px rgba(161, 161, 161, 0.05)",
                  backgroundColor: "#3E66FB10",
                  border: `1px solid #3E66FB`,
                  " .arrow_icon": {
                    opacity: "1",
                  },
                },
              }}
            >
              {loading ? (
                <CircularProgress sx={{ mx: "auto" }} />
              ) : (
                <>
                  <Typography fontSize={16} fontWeight={500} color="#000">
                    {data[2]?.numberOfRisks}
                  </Typography>
                  <Typography
                    fontSize={16}
                    fontWeight={500}
                    color="#000"
                    textAlign="center"
                  >
                    Actions closed this month
                  </Typography>
                  <Box
                    className="arrow_icon"
                    sx={{
                      display: { xs: "none", md: "initial" },
                      opacity: "0",
                      position: "absolute",
                      transition: "0.5s",
                      right: { xs: "0", sm: "5px", md: "5px", lg: "32px" },
                      " path": {
                        stroke: "#3E66FB",
                      },
                    }}
                  >
                    <IconHazard fontSize={20} />
                  </Box>
                </>
              )}
            </Box>
          </Fade>
        </Grid>
      </Grid>
    </>
  );
};

export default DataActions;
