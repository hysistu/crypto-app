import { createTheme } from "@mui/material/styles";
import { colors } from "../utils/colors";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Inter",
      "sans-serif",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          border: "none",
          "&.nav_datepicker": {
            border: "none !important",
          },
          "&:hover": {
            boxShadow: "0px 10.0286px 30.0857px rgba(161, 161, 161, 0.07)",
          },
          "&:focus": {
            boxShadow: "0px 10.0286px 30.0857px rgba(161, 161, 161, 0.07)",
          },
        },
      },
    },
  },

  palette: {
    background: {
      default: colors.white,
    },
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
      dark: colors.lightGray,
    },
    error: {
      main: colors.danger,
    },
    mode: "light",
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
