import { Box, Button, Typography } from "@mui/material";
import Layout from "components/Layout";
import useAuth from "context/useAuth";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const ErrorPage: NextPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
    }
  }, [user, loading]);

  return (
    <Layout title="Under Construction">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 20,
        }}
      >
        <Typography sx={{ fontSize: "18px", fontWeight: "500" }}>
          Sorry, but
        </Typography>
        <Typography sx={{ fontSize: "24px", fontWeight: "500" }}>
          Some parts of our application are still under construction
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 8 }}
          onClick={() => router.back()}
        >
          Go Back
        </Button>
      </Box>
    </Layout>
  );
};

export default ErrorPage;
