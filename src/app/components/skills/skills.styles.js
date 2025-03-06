import { styled, Box, Chip } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "auto",
  width: "100vw",
  paddingLeft: "5%",
  paddingRight: "5%",
  marginTop: "60px",
}));

export const SubContainer = styled(Box)(() => ({
  height: "auto",
  width: "100%",
  marginTop: "20px",
}));

export const SkillIconsContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: 10,
  marginTop: "10px",
}));

export const IconContainer = styled(Chip)(() => ({
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
