import { styled, Box } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100vw",
  overflowY: "scroll",
  overflowX: "hidden",
  backgroundColor: "white",
  paddingBottom: "50px",
}));

export const LockContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  width: "100%",
}));
