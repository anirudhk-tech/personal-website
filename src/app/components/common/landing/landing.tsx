import { FadeInButton } from "../../animated/animatedButton/fadeInButton";
import { FadeInText } from "../../animated/animatedText/fadeInText";
import { Container, TextContainer } from "./landing.styles";

export const Landing = () => {
  return (
    <Container>
      <TextContainer>
        <FadeInText delay={0.5} duration={1}>
          Oh hi there.
        </FadeInText>
        <FadeInText delay={1.5} duration={1}>
          Welcome to my corner of the web.
        </FadeInText>
      </TextContainer>
      <FadeInButton delay={2.5} duration={1} text="Learn More" />
    </Container>
  );
};
