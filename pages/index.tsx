import type { NextPage } from "next";
import {
  Box,
  FormHelperText,
  FormLabel,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useFormik } from "formik";
import * as yup from "yup";
import useAuth from "context/useAuth";
import imgbg from "../src/assets/images/indexbg.jpg";
import allright from "../src/assets/images/allrights.png";
import Link from "next/link";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const HomePage: NextPage = () => {
  const { loading, login } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      login(values.email, values.password);
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

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
              opacity: "1",
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
              <Box mb={3} sx={{ textAlign: { xs: "left", lg: "left" } }}>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  fontFamily="Inter"
                  fontSize="31px"
                  fontWeight="700"
                  lineHeight="37.2px"
                  color="#262B2B"
                >
                  Welcome to{" "}
                  <Typography
                    variant="h4"
                    component="span"
                    color="primary"
                    fontWeight="700"
                    fontSize="31px"
                    lineHeight="37.2px"
                  >
                    Crypto
                  </Typography>
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  fontFamily="Inter"
                  fontWeight="400"
                  fontSize="16px"
                  lineHeight="19.2px"
                  color="#262B2B"
                >
                  Welcome to best App of Crypto
                </Typography>
              </Box>
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
              >
                Sign In
                <div
                  className="border50"
                  style={{
                    display: "block",
                    width: "50%",
                    paddingTop: "20px",
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
                    width: "80%",
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
                      formik.touched.email && formik.errors.email
                        ? formik.errors.email
                        : " "
                    }
                    FormHelperTextProps={{
                      sx: { mx: 0 },
                    }}
                  />
                </Box>
                <Box mt={2}>
                  <FormLabel
                    sx={{
                      color: "#868B9F",
                      fontWeight: "600",
                      fontFamily: "Inter",
                      fontSize: "16px",
                      lineHeight: "19.2px",
                    }}
                  >
                    Password
                  </FormLabel>
                  <TextField
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Input your password in here"
                    fullWidth
                    margin="dense"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                        ? formik.errors.password
                        : " "
                    }
                    FormHelperTextProps={{
                      sx: { mx: 0 },
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <FormHelperText
                    sx={{
                      textAlign: "left",
                      color: "#868B9F",
                      display: "inline-block",
                      fontSize: "16px",
                      fontWeight: "400",
                    }}
                  >
                    Forgot your passwod?
                  </FormHelperText>

                  <Link href="/forgot-password">
                    <FormHelperText
                      sx={{
                        textAlign: "left",
                        color: "#3E66FB",
                        marginLeft: "10px",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: "400",
                        display: "inline-block",
                      }}
                    >
                      Reset here.
                    </FormHelperText>
                  </Link>
                </Box>
                <Box sx={{ mt: 4 }}>
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
                    Login
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
                  All Rights Reserved by Crypto
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
