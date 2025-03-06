import { styled, Box } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "auto",
  width: "100vw",
  overflowY: "scroll",
  overflowX: "hidden",
  backgroundColor: "white",
  paddingBottom: "50px",
}));
