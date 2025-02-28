import { useRenderThree } from "@/app/hooks/useRenderThree";
import { Container, ModelContainer } from "./model.styles";
import { Typography, useMediaQuery } from "@mui/material";
import { Project } from "@/app/types";

export const Model = ({
  model,
  screen,
  backgroundGradient,
  project,
  screenTexture,
}: {
  model: string;
  screen: string;
  backgroundGradient?: string;
  project: Project;
  screenTexture: string;
}) => {
  const { setContainer } = useRenderThree(model, screen, screenTexture);
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Container>
      {isMobile && (
        <>
          <Typography variant="h4">{project.title}</Typography>
          <Typography variant="body1">
            {project.startDate} - {project.endDate}
          </Typography>
          <Typography variant="body2">{project.description}</Typography>
        </>
      )}
      <ModelContainer
        sx={{ background: backgroundGradient ? backgroundGradient : "" }}
        ref={setContainer}
      ></ModelContainer>
    </Container>
  );
};
