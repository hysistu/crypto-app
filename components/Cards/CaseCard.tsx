import { Box, Grid, Typography } from "@mui/material";
import { CalendarIcon } from "@mui/x-date-pickers";
import React, { useState, useEffect, useMemo} from "react";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { CaseStatistic } from "requests/case";
import { toast } from "react-toastify";

const CaseCard = () => {
  const [caseStats, setCaseStats] = useState<any | undefined>(undefined);
    useEffect(() => {
    try {
        CaseStatistic().then((data: any) => {
          setCaseStats(data) 
        });
      } catch (e: any) {
        toast.error(e.message);
      }
    },[]);

  const dataCase = useMemo(() => {
  if (caseStats) {
    return [
      {
        icon: <CalendarIcon stroke="#fff" fill="white" />,
        type: "Total Case",
        size: caseStats.totalCase,
      },
      {
        icon: <BadgeOutlinedIcon stroke="#fff" fill="white" />,
        type: "Case in Progress",
        size: caseStats.inProgres,
      },
      {
        icon: <PersonOutlineOutlinedIcon stroke="#fff" fill="white" />,
        type: "Case in Review",
        size: caseStats.review,
      },
      {
        icon: <EmailOutlinedIcon stroke="#fff" fill="white" />,
        type: "Finished Case",
        size: caseStats.finished,
      },
    ];
  }
  // Return a default value if caseStats is undefined
  return [];
}, [caseStats]);

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
