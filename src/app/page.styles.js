import { styled, Box } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "1200vh",
  width: "100vw",
  overflowY: "scroll",
  overflowX: "hidden",
  backgroundColor: "white",
  paddingBottom: "50px",
}));
