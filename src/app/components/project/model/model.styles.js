import { Box, styled } from "@mui/material";

export const ModelContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "80vh",
  borderRadius: 50,
  "@media (max-width: 600px)": { marginTop: "20px" },
  "@media (min-width: 600px)": { flex: 1 },
}));

export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  height: "80vh",
}));

export const PlaceholderContainer = styled(Box)(() => ({
  display: "flex",
  height: "80vh",
  flex: 1,
}));
