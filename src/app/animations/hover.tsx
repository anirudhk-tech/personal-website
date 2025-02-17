import { motion } from "framer-motion";
import React from "react";

export const Hover = ({
  children,
  distance,
  delay,
  duration,
  style,
}: {
  children: React.ReactNode;
  distance?: number;
  delay?: number;
  duration?: number;
  style?: React.CSSProperties;
}) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: distance ? distance : 5 }}
      transition={{ delay, duration, repeat: Infinity, repeatType: "reverse" }}
      style={style}
    >
      {children}
    </motion.div>
  );
};
