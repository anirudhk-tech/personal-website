import { Typography } from "@mui/material";
import { Container, HobbiesContainer, HobbyContainer } from "./personal.styles";
import { hobbies } from "@/app/constants/hobbies";
import { FadeInOnScroll } from "@/app/animations/fadeinOnScroll";
export const Personal = () => {
  return (
    <Container>
      <Typography variant="h1">Hobbies</Typography>
      <HobbiesContainer>
        {hobbies.map((hobby, idx) => (
          <FadeInOnScroll key={idx}>
            <HobbyContainer>
              {hobby.icon}
              <Typography variant="body1">{hobby.name}</Typography>
            </HobbyContainer>
            <Typography variant="body2">{hobby.description}</Typography>
          </FadeInOnScroll>
        ))}
      </HobbiesContainer>
    </Container>
  );
};
