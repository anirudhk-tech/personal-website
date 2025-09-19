import { Box, keyframes, styled } from "@mui/material";

export const AchievementsSectionContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "auto",
  width: "100vw",
  gap: "30px",
  paddingLeft: "5%",
  paddingRight: "5%",
  marginTop: "60px",
}));

export const AchievementsContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  gap: "30px",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  "@media (max-width: 600px)": {
    flexDirection: "column",
    alignItems: "center",
    gap: "40px",
  },
}));

// Shimmer and fade-in keyframes as JS constants
const shineSweep = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%) skewX(-20deg);
  }
  75% {
    opacity: 0.45;
    transform: translateX(60%) skewX(-20deg);
  }
  100% {
    opacity: 0;
    transform: translateX(110%) skewX(-20deg);
  }
`;

const fadeInCard = keyframes`
  to {
    opacity: 1;
    transform: none;
  }
`;

export const AchievementCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "linear-gradient(135deg,#fff 70%,#f8f8f8 100%)",
  borderRadius: "18px",
  padding: "24px 18px 14px 18px",
  boxShadow: "0 6px 32px rgba(40,40,40,0.09), 0 1.5px 8px rgba(0,0,0,0.10)",
  width: "260px",
  gap: "18px",
  position: "relative",
  border: "2px solid #eee",
  overflow: "hidden",
  transition:
    "transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.3s, border 0.3s",
  opacity: 0,
  transform: "translateY(30px)",
  animation: `${fadeInCard} .7s forwards`,
  animationDelay: "0.12s",
  zIndex: 1,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: "24px 0",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    left: "-50%",
    top: "-50%",
    width: "200%",
    height: "200%",
    background:
      "conic-gradient(from 80deg, #ffe082 0%, #ffecb3 15%, #fffde7 30%, #fffbe6 60%, #ffecb3 80%, #ffe082 100%)",
    opacity: 0,
    pointerEvents: "none",
    transition: "opacity .35s",
    zIndex: 0,
  },
  "&:hover": {
    transform: "translateY(-7px) scale(1.038) rotateX(6deg) rotateY(3deg)",
    boxShadow:
      "0 6px 32px rgba(255,193,7,0.18), 0 1.5px 18px rgba(255,193,7,0.18)",
    border: "2.5px solid #ffbb33",
    "&::before": {
      opacity: 0.29,
      animation: `${shineSweep} 1.2s linear 1`,
    },
  },
}));
