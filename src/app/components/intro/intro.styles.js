import { styled, Box } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "auto",
  width: "100vw",
  paddingLeft: "5%",
  paddingRight: "5%",
  paddingTop: "5%",
  paddingBottom: "5%",
  gap: "30px",
  justifyContent: "flex-start",
}));

export const TextContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  height: "auto",
}));

export const SummaryAndPhotoContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  height: "auto",
  alignItems: "flex-start",
  width: "100vw",
  height: "auto",
  "@media (max-width: 600px)": {
    flexDirection: "column",
    paddingRight: "7%",
    alignItems: "center",
  },
}));

export const PictureContainer = styled(Box)(() => ({
  display: "flex",
  width: "300px",
  position: "relative",
  height: "300px",
  marginRight: "10%",
  "@media (max-width: 600px)": {
    width: "200px",
    height: "200px",
    marginTop: "5%",
  },
}));
