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
import { LazyLoadModel } from "./model/lazyLoadModel";

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
              <LazyLoadModel>
                <Model
                  model={
                    project.type === "pc"
                      ? "/macbook/scene.gltf"
                      : project.type === "pixel"
                      ? "/google_pixel_6_pro/scene.gltf"
                      : "/iphone_12_pro/scene.gltf"
                  }
                  screen={project.screen}
                  screenTexture={
                    project.type === "pc"
                      ? "Object_123"
                      : project.type === "pixel"
                      ? "Screen_Screen_0"
                      : "Screen_Wallpaper_0"
                  }
                  backgroundGradient="linear-gradient(135deg,#f2f2f2 0%,#e2e2e2 100%)"
                  project={project}
                />
              </LazyLoadModel>
              <Desc project={project} />
            </ProjectContainer>
          ))}
        </ProjectsContainer>
      </FadeInOnScroll>
    </Container>
  );
};
