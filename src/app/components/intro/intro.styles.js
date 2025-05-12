import { styled, Box } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "auto",
  width: "100vw",
  paddingLeft: "5%",
  paddingRight: "5%",
  paddingTop: "5%",
  paddingBottom: "5%",
  gap: "30px",
  justifyContent: "flex-start",
}));

export const TextContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  height: "auto",
}));
