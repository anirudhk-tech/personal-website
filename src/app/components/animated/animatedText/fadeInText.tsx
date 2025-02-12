import { FadeIn } from "@/app/animations/fadein";
import { Text } from "./fadeInText.styles";
import React from "react";

export const FadeInText = ({
  children,
  delay,
  duration,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}) => {
  return (
    <FadeIn delay={delay} duration={duration}>
      <Text>{children}</Text>
    </FadeIn>
  );
};
