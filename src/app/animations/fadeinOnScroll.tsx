import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const FadeInOnScroll = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-10% 0px -10% 0px" });

  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      setScrollDirection(window.scrollY > lastScrollY ? "down" : "up");
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: scrollDirection === "down" ? 20 : -20 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : scrollDirection === "down" ? 20 : -20,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};
