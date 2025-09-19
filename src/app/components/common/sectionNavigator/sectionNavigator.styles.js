import { Box, styled, keyframes } from "@mui/material";

// Pulse gold on hover/focus
export const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 #ffd70066; }
  80% { box-shadow: 0 0 0 9px transparent; }
  100% { box-shadow: 0 0 0 0 transparent; }
`;

export const NavigatorWrapper = styled(Box)({
  position: "absolute", // swap to "fixed" if always visible
  bottom: 48,
  left: 0,
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  pointerEvents: "none",
  zIndex: 20,
});

export const NavigatorLineContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  position: "relative",
  width: "min(640px,90vw)",
  height: 44,
  pointerEvents: "auto",
});

export const NavigatorLine = styled(Box)({
  position: "absolute",
  top: "50%",
  left: 0,
  right: 0,
  height: 5,
  transform: "translateY(-50%)",
  background: "linear-gradient(90deg,#eee 0%,#ccc 100%)",
  borderRadius: 3,
  zIndex: 0,
});

export const NavigatorDot = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ active }) => ({
  marginLeft: 0,
  cursor: "pointer",
  zIndex: 1,
  transition: "box-shadow 0.22s,background 0.22s,border 0.18s,transform 0.17s",
  width: 24,
  height: 24,
  background: active
    ? "linear-gradient(145deg,#ffe082,#ffd700 80%,#fffbc2)"
    : "#fff",
  border: `2.5px solid ${active ? "#ffd700" : "#bbb"}`,
  boxShadow: active ? "0 2px 11px #ffd70099" : "0 1px 3px #2221",
  borderRadius: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "clamp(28px,4vw,54px)",
  "&:hover, &:focus": {
    background: "linear-gradient(145deg,#fffde7,#ffe082 90%,#fffbe6)",
    border: "2.5px solid #ffd700",
    boxShadow: "0 3px 13px #ffd70044,0 2px 6px #fffbc255",
    transform: "scale(1.10)",
    animation: `${pulse} 1s`,
  },
}));

export const DotFill = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ active }) => ({
  width: 10,
  height: 10,
  borderRadius: "50%",
  background: active ? "#ffd700" : "#bbb",
  transition: "background 0.18s",
}));
