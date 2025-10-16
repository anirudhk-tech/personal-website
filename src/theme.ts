import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Montserrat, sans-serif",
      color: "black",
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
      "@media (min-width: 600px)": {
        fontSize: "3rem",
      },
      "@media (min-width: 960px)": {
        fontSize: "3.5rem",
      },
    },
    h2: {
      fontFamily: "Montserrat, sans-serif",
      color: "black",
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: 1.3,
      "@media (min-width: 600px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width: 960px)": {
        fontSize: "3rem",
      },
    },
    h3: {
      fontFamily: "Montserrat, sans-serif",
      color: "black",
      fontSize: "1.75rem",
      fontWeight: 700,
      lineHeight: 1.4,
      "@media (min-width: 600px)": {
        fontSize: "2rem",
      },
      "@media (min-width: 960px)": {
        fontSize: "2.5rem",
      },
    },
    h4: {
      fontFamily: "Montserrat, sans-serif",
      color: "black",
      fontSize: "1.5rem",
      fontWeight: 700,
      lineHeight: 1.4,
      "@media (min-width: 600px)": {
        fontSize: "1.75rem",
      },
      "@media (min-width: 960px)": {
        fontSize: "2rem",
      },
    },
    h5: {
      fontFamily: "Montserrat, sans-serif",
      color: "black",
      fontSize: "1.25rem",
      fontWeight: 700,
      lineHeight: 1.5,
      "@media (min-width: 600px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width: 960px)": {
        fontSize: "1.75rem",
      },
    },
    h6: {
      fontFamily: "Montserrat, sans-serif",
      color: "black",
      fontSize: "1rem",
      fontWeight: 700,
      lineHeight: 1.6,
      "@media (min-width: 600px)": {
        fontSize: "1.25rem",
      },
      "@media (min-width: 960px)": {
        fontSize: "1.5rem",
      },
    },
    body1: {
      fontFamily: "Montserrat, sans-serif",
      color: "black",
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      fontFamily: "Montserrat, sans-serif",
      color: "black",
      fontSize: "0.875rem",
      lineHeight: 1.4,
    },
  },
});
