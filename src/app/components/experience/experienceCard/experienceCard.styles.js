import { Box, styled, Typography } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "auto",
  width: "500px",
  padding: "10px",
  background: "linear-gradient(135deg,#f2f2f2 0%,#e2e2e2 100%)",
  borderRadius: 10,
  "@media (max-width: 600px)": {
    width: "70vw",
  },
}));

export const SubTitleContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: 10,
}));

export const ResponsibilitiesContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  paddingLeft: 20,
  alignItems: "flex-start",
}));

export const ResponsibilityContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: 10,
}));

export const Text = styled(Typography)(() => ({
  textAlign: "left",
}));
