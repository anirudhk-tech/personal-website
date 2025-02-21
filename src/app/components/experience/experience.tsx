import { FadeInOnScroll } from "@/app/animations/fadeinOnScroll";
import { Container } from "./experience.styles";
import { Typography } from "@mui/material";

export const Experience = () => {
  return (
    <Container>
      <FadeInOnScroll>
        <Typography variant="h1">Experience</Typography>
      </FadeInOnScroll>
    </Container>
  );
};
