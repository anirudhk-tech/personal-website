import { FadeIn } from "@/app/animations/fadein";
import { Container, TextContainer } from "./landing.styles";
import { Typography } from "@mui/material";

export const Landing = () => {
  return (
    <Container>
      <TextContainer>
        <FadeIn delay={0.5} duration={1}>
          <Typography variant="h4">{`Oh hi there, I'm Anirudh Kuppili.`}</Typography>
        </FadeIn>
        <FadeIn delay={1.5} duration={1}>
          <Typography variant="h4">Welcome to my corner of the web.</Typography>
        </FadeIn>
      </TextContainer>
    </Container>
  );
};
