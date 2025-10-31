import { Box, styled, Chip, Button } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  height: "100vh",
  width: "100vw",
  overflow: "hidden",
  background: "linear-gradient(135deg, #18181c 0%, #232526 70%, #fa8ab2 100%)",
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
  fontSize: "70px",
  fontFamily: "Montserrat, sans-serif",
  color: "black",
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
  fontSize: "0.8rem",
  color: "#fff",
}));

export const GradientTextContainer = styled(Box)(() => ({
  height: "auto",
  width: "fit-content",
  display: "flex",
  padding: 5,
  paddingLeft: 14,
  paddingRight: 14,
  cursor: "pointer",
  fontSize: "0.8rem",
  borderRadius: "16px",
  backgroundColor: "black",
}));

export const CTAButton = styled(Button)(() => ({
  alignSelf: "center",
  marginTop: "60px",
  marginBottom: "12px",
  justifyContent: "center",
  minWidth: "210px",
  borderRadius: "4px",
  color: "#fff",
  fontWeight: 800,
  fontSize: "1.15rem",
  letterSpacing: 1,
  backgroundColor: "#fa8ab2",
  position: "relative",
  overflow: "hidden",
  zIndex: 0,
}));
