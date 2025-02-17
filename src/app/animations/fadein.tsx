import { motion } from "framer-motion";
import React from "react";

export const FadeIn = ({
  children,
  delay,
  duration,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  style?: React.CSSProperties;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration }}
      style={style}
    >
      {children}
    </motion.div>
  );
};
