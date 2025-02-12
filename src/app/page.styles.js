import { styled, Box } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  height: "fit-content",
  width: "100vw",
  overflow: "auto",
  background: "linear-gradient(135deg, #ed4264 , #ffedbc)",
  paddingTop: "100px",
}));
