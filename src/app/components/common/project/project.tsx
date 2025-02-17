import { Model } from "./model/model";
import { Container, ProjectContainer } from "./project.styles";
import { Desc } from "./desc/desc";
import { Typography } from "@mui/material";
import { FadeInOnScroll } from "@/app/animations/fadeinOnScroll";

export const Project = () => {
  return (
    <Container>
      <FadeInOnScroll>
        <Typography variant="h1">Projects</Typography>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <ProjectContainer>
          <Desc
            title="Raydar"
            description="A lost and found ML solution that boasts two algorithms and a variety of features"
          />
          <Model
            model={"/macbook/scene.gltf"}
            screen="/raydar.png"
            backgroundGradient="linear-gradient(135deg,#f2f2f2 0%,#e2e2e2 100%)"
          />
        </ProjectContainer>
      </FadeInOnScroll>
    </Container>
  );
};
