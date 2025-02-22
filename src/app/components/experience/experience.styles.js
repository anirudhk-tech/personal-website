import { Box, styled } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "fit-content",
  width: "100%",
  marginTop: "60px",
  gap: "30px",
  paddingRight: "10%",
}));

export const Spacer = styled(Box)(() => ({
  display: "flex",
  height: "20px",
  width: "100%",
}));

export const LegendContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  height: "fit-content",
  width: "100%",
  paddingLeft: "5%",
}));

export const LegendSubContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "5px",
  height: "fit-content",
  width: "fit-content",
  alignItems: "center",
}));
