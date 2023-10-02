import * as React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

const marks = [
  {
    value: 0,
    name: "Low",
  },
  {
    value: 10,
    name: "Medium",
  },
  {
    value: 20,
    name: "High",
  },
];

const PrettoSlider = styled(Slider)({
  color: "#52af77",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

const RatingRisk = () => {
  return (
    <Box
      mt={2}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
      }}
    >
      <Typography fontSize={12} fontWeight={600} color="#262B2B">
        Status
      </Typography>
      <PrettoSlider
        valueLabelDisplay="auto"
        max={30}
        defaultValue={10}
        marks={marks}
      />
    </Box>
  );
};
export default RatingRisk;
