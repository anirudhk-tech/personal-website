import { Box, styled, Chip } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  height: "100vh",
  width: "100vw",
  overflow: "hidden",
  background: "linear-gradient(135deg, #ed4264 , #ffedbc)",
  paddingTop: "10%",
  paddingBottom: "10%",
  paddingLeft: "5%",
  paddingRight: "5%",
  justifyContent: "center",
  alignItems: "center",
}));

export const TextContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "auto",
  paddingRight: "1rem",
  width: "100%",
  gap: "10px",
  alignItems: "center",
  justifyContent: "center",
}));

export const MenuContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  height: "auto",
  width: "100%",
  gap: "10px",
  justifyContent: "center",
  alignItems: "center",
}));

export const MenuItemContainer = styled(Chip)(() => ({
  height: "auto",
  width: "fit-content",
  display: "flex",
  padding: 5,
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
  },
}));
