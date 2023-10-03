import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import CardCrypto from "./CardCrypto";

const dataButtons = [
  { butonHref: "", buttonText: "Bank" },
  { butonHref: "", buttonText: "Crypto" },
  { butonHref: "", buttonText: "Card" },
];

const dataCards = [
  {
    team: "Maximoz Team",
    title: "Forex Finance BANK",
    bluePrice: "15,000",
    redPrice: "9,000",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellat debitis voluptatibus! Aperiam voluptates pariatur magnam illo blanditiis quasi eius beatae ex aut? Dolorum totam, commodi dignissimos provident unde tenetur.",
    type: "Bank",
    date: new Intl.DateTimeFormat("en-GB").format(new Date()),
  },
  {
    team: "Maximoz Team",
    title: "Forex Finance BANK",
    bluePrice: "15,000",
    redPrice: "9,000",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellat debitis voluptatibus! Aperiam voluptates pariatur magnam illo blanditiis quasi eius beatae ex aut? Dolorum totam, commodi dignissimos provident unde tenetur.",
    type: "Bank",
    date: new Intl.DateTimeFormat("en-GB").format(new Date()),
  },
  {
    team: "Maximoz Team",
    title: "Forex Finance BANK",
    bluePrice: "15,000",
    redPrice: "9,000",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellat debitis voluptatibus! Aperiam voluptates pariatur magnam illo blanditiis quasi eius beatae ex aut? Dolorum totam, commodi dignissimos provident unde tenetur.",
    type: "Bank",
    date: new Intl.DateTimeFormat("en-GB").format(new Date()),
  },
  {
    team: "Maximoz Team",
    title: "Forex Finance BANK",
    bluePrice: "15,000",
    redPrice: "9,000",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellat debitis voluptatibus! Aperiam voluptates pariatur magnam illo blanditiis quasi eius beatae ex aut? Dolorum totam, commodi dignissimos provident unde tenetur.",
    type: "Bank",
    date: new Intl.DateTimeFormat("en-GB").format(new Date()),
  },
  {
    team: "Maximoz Team",
    title: "Forex Finance BANK",
    bluePrice: "15,000",
    redPrice: "9,000",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellat debitis voluptatibus! Aperiam voluptates pariatur magnam illo blanditiis quasi eius beatae ex aut? Dolorum totam, commodi dignissimos provident unde tenetur.",
    type: "Bank",
    date: new Intl.DateTimeFormat("en-GB").format(new Date()),
  },
  {
    team: "Maximoz Team",
    title: "Forex Finance BANK",
    bluePrice: "15,000",
    redPrice: "9,000",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellat debitis voluptatibus! Aperiam voluptates pariatur magnam illo blanditiis quasi eius beatae ex aut? Dolorum totam, commodi dignissimos provident unde tenetur.",
    type: "Bank",
    date: new Intl.DateTimeFormat("en-GB").format(new Date()),
  },
  {
    team: "Maximoz Team",
    title: "Forex Finance BANK",
    bluePrice: "15,000",
    redPrice: "9,000",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellat debitis voluptatibus! Aperiam voluptates pariatur magnam illo blanditiis quasi eius beatae ex aut? Dolorum totam, commodi dignissimos provident unde tenetur.",
    type: "Bank",
    date: new Intl.DateTimeFormat("en-GB").format(new Date()),
  },
  {
    team: "Maximoz Team",
    title: "Forex Finance BANK",
    bluePrice: "15,000",
    redPrice: "9,000",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellat debitis voluptatibus! Aperiam voluptates pariatur magnam illo blanditiis quasi eius beatae ex aut? Dolorum totam, commodi dignissimos provident unde tenetur.",
    type: "Bank",
    date: new Intl.DateTimeFormat("en-GB").format(new Date()),
  },
  {
    team: "Maximoz Team",
    title: "Forex Finance BANK",
    bluePrice: "15,000",
    redPrice: "9,000",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellat debitis voluptatibus! Aperiam voluptates pariatur magnam illo blanditiis quasi eius beatae ex aut? Dolorum totam, commodi dignissimos provident unde tenetur.",
    type: "Bank",
    date: new Intl.DateTimeFormat("en-GB").format(new Date()),
  },
];

const CaseAll = () => {
  return (
    <>
      <Box id="case">
        <Grid container spacing={5}>
          <Grid item xs={4} md={3} lg={2}>
            <Typography variant="h6">Case Details</Typography>
          </Grid>

          {dataButtons.map((ent, idx) => (
            <Grid item xs={4} md={3} lg={2} key={idx}>
              <Button
                sx={{ borderRadius: "10px", width: "100%" }}
                variant="contained"
              >
                {ent.buttonText}
              </Button>
            </Grid>
          ))}
        </Grid>
        <CardCrypto cardData={dataCards} />
      </Box>
    </>
  );
};

export default CaseAll;
