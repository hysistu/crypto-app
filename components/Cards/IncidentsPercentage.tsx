import React from "react";
import { Box, Typography } from "@mui/material";
import { has } from "src/utils/helper";

interface Props {
  data: {
    percentage: number;
    status: any;
  }[];
}
const IncidentsPercentage: React.FC<Props> = (props) => {
  const { data } = props;
  return (
    <>
      {data ? (
        <Box
          sx={{
            pt: { xs: 0, sm: 5 },
            pb: { xs: 0, md: 2 },
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { sm: "column" },
            " div:last-of-type": {
              mb: { sm: 0 },
            },
            " div": {
              width: { xs: "32%", sm: "initial" },
            },
          }}
        >
          {has(data) &&
            data.map((entry, index) => (
              <Box
                mb={{ md: 2 }}
                p={2}
                key={`${index}`}
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
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={500}
                  color="#3CC13B"
                >
                  {entry.percentage}%
                </Typography>
                <Typography
                  fontWeight={500}
                  fontSize={{ xs: 14, sm: 16 }}
                  lineHeight={1}
                  color="#262B2B"
                  textAlign="center"
                >
                  {entry.status.name}
                </Typography>
              </Box>
            ))}
        </Box>
      ) : (
        <Box
          mt={5}
          mb={2}
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
          No Data
        </Box>
      )}
    </>
  );
};

export default IncidentsPercentage;
