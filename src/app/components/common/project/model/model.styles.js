import { Box, styled } from "@mui/material";

export const ModelContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "80vh",
  flex: 1,
  borderRadius: 50,
  "@media (max-width: 600px)": { marginTop: "20px" },
}));

export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "80vh",
  flex: 1,
}));

export const PlaceholderContainer = styled(Box)(() => ({
  display: "flex",
  height: "80vh",
  flex: 1,
}));
