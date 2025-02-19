import { Box, styled } from "@mui/material";

export const ModelContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  flex: 1,
  borderRadius: 50,
  "@media (max-width: 600px)": { marginTop: "20px" },
}));

export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  flex: 1,
}));
