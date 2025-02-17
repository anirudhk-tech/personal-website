import { styled, Box } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "1000vh",
  width: "100vw",
  overflowY: "scroll",
  overflowX: "hidden",
  backgroundColor: "white",
}));
