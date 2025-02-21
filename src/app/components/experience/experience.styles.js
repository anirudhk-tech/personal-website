import { Box, styled } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  width: "100vw",
  marginTop: "60px",
  gap: "30px",
  paddingLeft: "5%",
  paddingRight: "5%",
  "@media (max-width: 600px)": {
    height: "200vh",
  },
}));
