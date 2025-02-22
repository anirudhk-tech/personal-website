import { Box, styled } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "fit-content",
  width: "100vw",
  gap: "30px",
  paddingLeft: "5%",
  paddingRight: "5%",
  "@media (max-width: 600px)": {
    height: "200vh",
  },
  marginTop: "60px",
}));

export const ProjectContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "fit-content",
  width: "100%",
  gap: "30px",
  flexDirection: "row",
  "@media (max-width: 600px)": {
    flexDirection: "column",
    height: "120vh",
  },
}));

export const ProjectsContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "fit-content",
  width: "100%",
  gap: "50px",
}));
