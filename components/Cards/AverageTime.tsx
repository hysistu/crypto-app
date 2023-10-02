// @ts-nocheck
import React from "react";
import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";

const ReactSpeedometer = dynamic(import("react-d3-speedometer"), {
  ssr: false,
});

interface Props {
  data: any;
}

const AverageTime: React.FC<Props> = (props) => {
  const { averageHour, totalHours } = props.data;

  return (
    <>
      <Box
        mt={{ xs: 3, md: 5 }}
        height={270}
        p={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#fff",
          borderRadius: "10px",
          border: "1px solid #E4E7EC;",
          boxShadow: "0px 7px 24px rgba(134, 134, 134, 0.07)",
        }}
      >
        <Box>
          <Typography fontWeight={500} fontSize={16} lineHeight={1}>
            Average Time to Resolution
          </Typography>
        </Box>
        <Box>
          {averageHour && totalHours ? (
            <ReactSpeedometer
              forceRender={true}
              width={200}
              height={130}
              customSegmentStops={[0, averageHour, totalHours]}
              maxSegmentLabels={0}
              needleHeightRatio={0.7}
              ringWidth={20}
              segments={2}
              value={averageHour}
              currentValueText={`${averageHour} Hrs`}
              maxValue={totalHours}
              minValue={0}
              segmentColors={["#3CC13B", "#EDEDED"]}
              needleColor="#C4C4C4"
            />
          ) : (
            <Box>No Data</Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default AverageTime;
