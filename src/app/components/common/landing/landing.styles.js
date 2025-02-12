import { Box, styled } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "fit-content",
  width: "100vw",
  overflow: "hidden",
  paddingLeft: "1rem",
  gap: "60px",
  flex: 1,
}));

export const TextContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "fit-content",
  paddingRight: "1rem",
  width: "100vw",
  gap: "10px",
}));
