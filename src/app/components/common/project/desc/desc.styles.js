import { Box, styled } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  height: "fit-content",
  "@media (min-width: 600px)": {
    flex: 1,
  },
}));
