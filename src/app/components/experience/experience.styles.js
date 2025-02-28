import { Box, styled, Chip } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "fit-content",
  width: "100%",
  marginTop: "60px",
  gap: "30px",
  paddingRight: "10%",
}));

export const Spacer = styled(Box)(() => ({
  display: "flex",
  height: "20px",
  width: "100%",
}));

export const LegendContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  height: "fit-content",
  width: "100%",
  paddingLeft: "5%",
}));

export const LegendSubContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "5px",
  height: "fit-content",
  width: "fit-content",
  alignItems: "center",
}));

export const IconContainer = styled(Chip)(() => ({
  height: "fit-content",
  width: "fit-content",
  display: "flex",
  padding: 5,
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
  },
}));

export const IconsContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "5px",
  height: "fit-content",
  width: "fit-content",
  marginTop: "10px",
}));
