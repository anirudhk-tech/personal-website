import { FadeIn } from "@/app/animations/fadein";
import { Button } from "../../common/button/button";

export const FadeInButton = ({
  text,
  delay,
  duration,
}: {
  text: string;
  delay: number;
  duration: number;
}) => {
  return (
    <FadeIn delay={delay} duration={duration}>
      <Button label={text} />
    </FadeIn>
  );
};
