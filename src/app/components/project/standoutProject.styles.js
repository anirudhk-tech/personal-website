import { Box, styled } from "@mui/material";

export const StandoutGrid = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "60px",
  width: "100%",
  paddingBottom: "80px",
}));

export const StandoutCard = styled(Box)(() => ({
  flex: "1",
  width: "70%",
  minWidth: "350px",
  minHeight: "70vh",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, #181818 0%, #222 100%)",
  borderRadius: "20px",
  boxShadow: "0 10px 50px rgba(0,0,0,0.5), 0 0 100px rgba(100,100,255,0.1)",
  overflow: "hidden",
  padding: "5%",
  transition: "transform 0.4s ease, box-shadow 0.4s ease",
  position: "relative",
  "&:hover": {
    transform: "translateY(-10px) scale(1.02)",
    boxShadow: "0 15px 60px rgba(0,0,0,0.6), 0 0 120px rgba(100,100,255,0.15)",
  },
  "@media (max-width: 900px)": {
    flex: "1",
    minWidth: "100%",
    minHeight: "70vh", // ADD THIS LINE
  },
}));

export const ModelWrapper = styled(Box)(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  minHeight: "50vh",
  perspective: "1000px",
  opacity: 0.4,
  animation: "spin 20s linear infinite",
  "@keyframes spin": {
    "0%": {
      transform: "translate(-50%, -50%) rotateY(0deg)",
    },
    "100%": {
      transform: "translate(-50%, -50%) rotateY(360deg)",
    },
  },
  "&:hover": {
    animationPlayState: "paused",
  },
}));

export const ContentOverlay = styled(Box)(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 10,
  width: "85%",
  padding: "2rem",
  borderRadius: "16px",
  backdropFilter: "blur(22px) saturate(200%)",
  background:
    "linear-gradient(120deg, rgba(255,255,255,0.48) 70%, rgba(245,245,245,0.23) 100%)",
  boxShadow:
    "0 8px 32px 0 rgba(31, 38, 135, 0.09), 0 2px 8px 0 rgba(255,255,255,0.13) inset",
  border: "1.5px solid rgba(255,255,255,0.28)",
  borderRadius: "20px",
  "@media (max-width: 900px)": {
    width: "90%",
    padding: "1.5rem",
  },
}));

export const TextSection = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "1.2rem",
  "& h2": {
    fontWeight: 700,
    fontSize: "1.8rem",
    color: "#111",
  },
  "& p": {
    fontSize: "1rem",
    color: "#333",
    textAlign: "center",
  },
}));

export const MetricText = styled("div")(() => ({
  fontSize: "0.95rem",
  fontWeight: 600,
  color: "#111",
  opacity: 0.9,
  textAlign: "center",
}));
