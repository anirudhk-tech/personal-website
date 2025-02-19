import { Model } from "./model/model";
import {
  Container,
  ProjectContainer,
  ProjectsContainer,
} from "./project.styles";
import { Desc } from "./desc/desc";
import { Typography } from "@mui/material";
import { FadeInOnScroll } from "@/app/animations/fadeinOnScroll";
import { projects } from "@/app/constants/projects";

export const Project = () => {
  return (
    <Container>
      <FadeInOnScroll>
        <Typography variant="h1">Projects</Typography>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <ProjectsContainer>
          {projects.map((project, index) => (
            <ProjectContainer key={index}>
              <Model
                model={"/macbook/scene.gltf"}
                screen={project.screen}
                backgroundGradient="linear-gradient(135deg,#f2f2f2 0%,#e2e2e2 100%)"
                project={project}
              />
              <Desc project={project} />
            </ProjectContainer>
          ))}
        </ProjectsContainer>
      </FadeInOnScroll>
    </Container>
  );
};
