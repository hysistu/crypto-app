import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const CardCrypto = (cardData: any) => {
  return (
    <Box>
      <Grid container spacing={5} mt={3}>
        {cardData.cardData?.map((entry: any, index: any) => (
          <Grid item key={index} xs={12} md={6} lg={4}>
            <Box className="allbox">
              <Box className="header">
                <Box className="text">
                  <Typography variant="h6">{entry.team}</Typography>
                  <Typography variant="h5">{entry.title}</Typography>
                  <Box className="price">
                    <Typography className="blue">
                      $ {entry.bluePrice}
                    </Typography>
                    <Typography> -</Typography>
                    <Typography className="red">$ {entry.redPrice}</Typography>
                  </Box>
                  <Typography>{entry.text}</Typography>
                </Box>
              </Box>
              <Box className="button">
                <Typography className="buttoni">{entry.type}</Typography>
                <Typography className="data">Date: {entry.date}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardCrypto;
