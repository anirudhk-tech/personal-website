import { Box, Chip, styled } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  height: "auto",
}));

export const PointsContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  height: "auto",
  width: "fit-content",
  alignItems: "center",
}));

export const IconContainer = styled(Chip)(() => ({
  height: "5vh",
  // "@supports (height: 5dvh)": { height: "5dvh" },
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
  gap: "5px",
  height: "auto",
  width: "fit-content",
  flexWrap: "wrap",
  marginTop: "10px",
}));

export const ExternalContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "5px",
  marginTop: "20px",
  height: "auto",
  width: "fit-content",
  alignItems: "center",
}));
