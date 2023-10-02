import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Grid } from "@mui/material";
import {
  IconDanger,
  IconNotification,
  IconChart,
  IconOverview,
} from "components/svg/icons";
import RisksCard from "components/Cards/RisksCard";

import HeaderAddAction from "components/HeaderAddAction";
import CaseCard from "components/Cards/CaseCard";

interface Props {}
const DashboardContainer: React.FC<Props> = (props) => {
  return (
    <>
      <Box>
        <HeaderAddAction />
        <CaseCard />
      </Box>
    </>
  );
};

export default DashboardContainer;
