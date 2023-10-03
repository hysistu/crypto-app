import type { NextPage } from "next";
import { Box, FormLabel, Grid, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useFormik } from "formik";
import * as yup from "yup";
import imgbg from "../src/assets/images/indexbg.png";
import allright from "../src/assets/images/allrights.png";
import { forgotPassword } from "requests/user";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import useAuth from "context/useAuth";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Write your email here"),
});

const ForgotPasswordPage: NextPage = () => {
  const router = useRouter();
  const { user } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (user) {
      router.back();
    }
  }, [user, router]);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      try {
        forgotPassword(values).then((data) => {
          if (data?.result?.status === 1) {
            toast.success(data.result.message);
            router.replace("/");
          } else if (data?.error) {
            toast.error(data.message);
          }
          setLoading(false);
        });
      } catch (e: any) {
        toast.error(e.message);
        setLoading(false);
      }
    },
  });

  return (
    <Box
      component="main"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        height: {
          xs: "100%",
          lg: "100vh",
        },
        p: 0,
      }}
    >
      <Grid container height="100%">
        <Grid
          xs={12}
          sm={12}
          md={12}
          lg={6}
          item
          display="flex"
          alignItems="center"
          sx={{
            justifyContent: {
              xs: "center",
              lg: "center",
            },
            height: {
              xs: "30vh !important",
              lg: "100% !important",
            },
          }}
          style={{
            backgroundImage: `url(${imgbg.src})`,
            position: "relative",
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            objectFit: "cover",
            backgroundColor: "#2B3661",
            backgroundPositionX: "center",
            backgroundPositionY: "bottom",
            mixBlendMode: "multiply",
            backgroundRepeat: "no-repeat",
            zIndex: "99",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "100%",
              content: "",
              height: "100%",
              left: "0",
              top: "0",
              backgroundColor: "#2B3661",
              zIndex: "-10",
              opacity: "0.7",
              mixBlendMode: "multiply",
            }}
          ></div>
          <Box>
            <Box>
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  justifyContent: {
                    xs: "center",
                    lg: "center",
                  },
                  flexDirection: {
                    xs: "column",
                    lg: "inherit",
                  },
                }}
              >
                <Box
                  sx={{
                    width: {
                      xs: 100,
                      md: 150,
                      lg: 200,
                    },
                  }}
                >
                  <img
                    src="/images/logo.png"
                    alt="logo"
                    width="100%"
                    height="100%"
                  />
                </Box>
                <Box>
                  <Typography
                    variant="h1"
                    color="white"
                    fontWeight="bold"
                    sx={{
                      ml: 3,
                      fontSize: {
                        xs: 50,
                        md: 70,
                        lg: 90,
                      },
                    }}
                  >
                    Crypto
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={12}
          lg={6}
          item
          sx={{ mt: { xs: 3, lg: 0 } }}
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            component="div"
            display="flex"
            justifyContent="center"
            sx={{
              mr: {
                lg: "0",
              },
              width: { xs: "100vw", lg: "45vw" },
            }}
          >
            <Box
              sx={{
                borderRadius: "8px",
                background: "#fff",
                py: {
                  xs: 2,
                  lg: "40px",
                },
                px: {
                  xs: 2,
                  md: "80px",
                },
                width: "100%",
              }}
            >
              <Typography
                gutterBottom
                textAlign={"left"}
                variant="h5"
                component="div"
                sx={{
                  display: "block",
                  width: "100%",
                  borderBottom: "1px solid #3E66FB",
                }}
                fontFamily="Inter"
                fontWeight="600"
                fontSize="16px"
                lineHeight="19.2px"
                color="#262B2B"
                marginTop="50px"
                width="50vw"
                paddingBottom="20px"
              >
                Reset your password
                <div
                  className="border50"
                  style={{
                    display: "block",
                    float: "right",
                    width: "50%",
                    paddingTop: "37px",
                    borderBottom: "2px solid #3E66FB",
                  }}
                ></div>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: 4,
                    bgColor: "primary.main",
                    mt: 2,
                  }}
                />
              </Box>

              <Box
                component="form"
                sx={{ mt: "40px" }}
                onSubmit={formik.handleSubmit}
              >
                <Box>
                  <FormLabel
                    sx={{
                      color: "#868B9F",
                      fontWeight: "600",
                      fontFamily: "Inter",
                      fontSize: "16px",
                      lineHeight: "19.2px",
                    }}
                  >
                    Email
                  </FormLabel>
                  <TextField
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Input your email in here"
                    fullWidth
                    margin="dense"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={
                      formik.touched.email && formik.errors.email != null
                        ? formik.errors.email
                        : " "
                    }
                  />
                </Box>
                <Box>
                  <LoadingButton
                    loading={loading}
                    sx={{
                      py: { lg: 1.5 },
                      textTransform: "none",
                      fontFamily: "Inter",
                      fontSize: "16px",
                      lineHeight: "120%",
                      letterSpacing: "0.005em",
                      height: "56px",
                    }}
                    variant="contained"
                    type="submit"
                    fullWidth
                  >
                    Reset
                  </LoadingButton>
                </Box>
                <Typography
                  gutterBottom
                  textAlign={"left"}
                  variant="caption"
                  component="div"
                  sx={{
                    display: "block",
                    position: {
                      xs: "relative",
                      lg: "absolute",
                    },
                    bottom: "5%  ",
                    backgroundImage: `url(${allright.src})`,
                    backgroundPosition: "left center",
                    backgroundRepeat: "no-repeat",
                    paddingLeft: "20px",
                    marginLeft: {
                      xs: "0px",
                      lg: "5px",
                    },
                    marginTop: {
                      xs: "20px",
                      lg: "0px",
                    },
                  }}
                >
                  Prishtina Mall SHA&quot; All Rights Reserved. 2021
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ForgotPasswordPage;
