import { Box, styled } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "auto",
  width: "100vw",
  paddingLeft: "5%",
  paddingRight: "5%",
  marginTop: "60px",
}));

export const HobbiesContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "auto",
  width: "100%",
  gap: "30px",
}));

export const HobbyContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  height: "auto",
  width: "100%",
  gap: "10px",
}));
