import { useScroll, useTransform, motion } from "framer-motion";
import React from "react";

export const ScrollWidth = ({
  target,
  style,
}: {
  target: React.RefObject<HTMLDivElement | null>;
  style?: React.CSSProperties;
}) => {
  const { scrollYProgress } = useScroll({
    target: target,
  });

  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return <motion.div style={{ width: width, ...style }} />;
};
