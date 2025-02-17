import { useRenderThree } from "@/app/hooks/useRenderThree";
import { Container } from "./model.styles";

export const Model = ({
  model,
  screen,
  backgroundGradient,
}: {
  model: string;
  screen: string;
  backgroundGradient?: string;
}) => {
  const { containerRef } = useRenderThree(model, screen);

  return (
    <Container
      sx={{ background: backgroundGradient ? backgroundGradient : "" }}
      ref={containerRef}
    ></Container>
  );
};
