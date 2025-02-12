import { Box, styled } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  width: "100vw",
  overflow: "hidden",
  gap: "60px",
  flex: 1,
}));
