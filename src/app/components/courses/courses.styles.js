import { Box, styled, Typography } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "auto",
  width: "100vw",
  paddingLeft: "5%",
  paddingRight: "5%",
  marginTop: "60px",
}));

export const CoursesContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "auto",
  width: "100%",
  gap: "30px",
}));

export const CoursesTitle = styled(Typography)(() => ({
  marginTop: "20px",
  textDecoration: "underline",
  fontWeight: "bold",
}));
