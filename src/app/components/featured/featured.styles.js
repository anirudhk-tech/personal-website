import { styled, Box, Typography } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  padding: "5%",
  gap: "30px",
}));

export const GridContainer = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "20px",
}));

export const Square = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  paddingTop: "100%", // 1:1 aspect ratio
  borderRadius: "12px",
  overflow: "hidden",
  cursor: "pointer",
  "&:hover img": {
    transform: "scale(1.08)",
    transition: "transform 0.4s ease",
  },
}));

export const Caption = styled(Typography)(() => ({
  position: "absolute",
  left: 0,
  bottom: 0,
  width: "100%",
  padding: "8px 12px",
  background: "rgba(0,0,0,0.45)",
  color: "#fff",
  fontWeight: 600,
  backdropFilter: "blur(4px)",
}));
