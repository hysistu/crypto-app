import { Box, Grid, Typography } from "@mui/material";
import { CalendarIcon } from "@mui/x-date-pickers";
import React from "react";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const dataCase = [
  {
    icon: <CalendarIcon stroke="#fff" fill="white" />,
    type: "Total Case",
    size: "37",
  },
  {
    icon: <BadgeOutlinedIcon stroke="#fff" fill="white" />,
    type: "Open Case",
    size: "30",
  },
  {
    icon: <PersonOutlineOutlinedIcon stroke="#fff" fill="white" />,
    type: "Finnish Case",
    size: "7",
  },
  {
    icon: <EmailOutlinedIcon stroke="#fff" fill="white" />,
    type: "Notification",
    size: "8",
  },
];

const CaseCard = () => {
  return (
    <Box id="case">
      <Grid container spacing={3}>
        {dataCase.map((entry, index) => (
          <Grid item xs={12} md={6} lg={3} key={index} className="allbox">
            <Box className="color">
              <Box className="icon">{entry.icon}</Box>
              <Box className="text">
                <Typography variant="h2">{entry.type}</Typography>
                <Typography variant="h6">{entry.size}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CaseCard;
