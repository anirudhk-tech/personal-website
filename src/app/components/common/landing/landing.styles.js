import { Box, styled } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  height: "100vh",
  width: "100vw",
  overflow: "hidden",
  background: "linear-gradient(135deg, #ed4264 , #ffedbc)",
  paddingTop: "10%",
  paddingBottom: "10%",
  paddingLeft: "5%",
  paddingRight: "5%",
}));

export const TextContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "fit-content",
  paddingRight: "1rem",
  width: "100%",
  gap: "10px",
}));
