import { styled, Box } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  "@media (min-width: 600px)": {
    height: "130vh",
  },
  width: "100vw",
  paddingLeft: "5%",
  paddingRight: "5%",
  paddingTop: "5%",
  paddingBottom: "5%",
  gap: "30px",
}));

export const TextContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  height: "fit-content",
}));

export const NavigationAndPhotoContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  height: "fit-content",
  width: "100vw",
  height: "100vh",
}));

export const NavigationContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  flexGrow: 1,
  height: "100%",
}));

export const PictureContainer = styled(Box)(() => ({
  display: "flex",
  width: "200px",
  position: "relative",
  height: "300px",
  marginRight: "10%",
}));
