import { motion } from "framer-motion";

export const FadeIn = ({
  children,
  delay,
  duration,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration }}
    >
      {children}
    </motion.div>
  );
};
