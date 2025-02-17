import { Box, styled } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  width: "100vw",
  gap: "30px",
  paddingLeft: "5%",
  paddingRight: "5%",
}));

export const ProjectContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "80vh",
  width: "100%",
  gap: "30px",
  flexDirection: "row",
  "@media (max-width: 600px)": {
    flexDirection: "column",
  },
}));
