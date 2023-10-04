import { Box, Button, Grid, Typography } from "@mui/material";
import React, {useEffect, useState} from "react";
import CardCrypto from "./CardCrypto";
import { toast } from "react-toastify";

import {
  Case,
  CASE_SOME_ERROR_ACCURED,
} from "./Interface";
import { getAllCase } from "requests/case";


const dataButtons = [
  { butonHref: "", buttonText: "Bank" },
  { butonHref: "", buttonText: "Crypto" },
  { butonHref: "", buttonText: "Card" },
];

const dataCards1 = [
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
  const [data, setData] = useState<any | undefined>(undefined);
  useEffect(() => {
      try {
          getAllCase().then((data: any) => {
            if (data.status === 0) {
              toast.error(CASE_SOME_ERROR_ACCURED);
            } else {
              setData(data.Case); 
            }
            console.log(data.Case, 'allCase')
          });
        } catch (e: any) {
          toast.error(e.message);
        }
    }, []);

      if (!data) {
    return <div>Loading...</div>; // Replace this with a loading indicator or message
  }

  const dataCards = data.map((item: any) => ({
    team: "Crypto Team",
    title: item.caseName,
    priceFrom: item.priceFrom,
    priceTo: item.priceTo,
    text:
      item.description,
    type: item.caseMethod.methodName,
    date: new Intl.DateTimeFormat("en-GB").format(new Date(item.createdAt)),
  }));
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
