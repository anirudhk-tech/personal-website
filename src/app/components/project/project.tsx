import { Model } from "./model/model";
import {
  Container,
  ProjectContainer,
  ProjectsContainer,
} from "./project.styles";
import { Desc } from "./desc/desc";
import { Typography, Button } from "@mui/material";
import { FadeInOnScroll } from "@/app/animations/fadeinOnScroll";
import { projects, standoutProjects } from "@/app/constants/projects";
import { LazyLoadModel } from "./model/lazyLoadModel";
import {
  StandoutGrid,
  StandoutCard,
  TextSection,
  ModelWrapper,
  MetricText,
  ContentOverlay,
} from "./standoutProject.styles";
import { useRouter } from "next/navigation";

export const Project = ({ standout }: { standout: boolean }) => {
  const router = useRouter();

  if (!standout) {
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
  } else {
    return (
      <FadeInOnScroll>
        <Container>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              marginBottom: "40px",
            }}
          >
            Standout Projects
          </Typography>

          <StandoutGrid>
            {standoutProjects.map((project, index) => (
              <StandoutCard key={index}>
                <ProjectContainer>
                  <ModelWrapper>
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
                        backgroundGradient="linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0f0f23 100%)"
                      />
                    </LazyLoadModel>
                  </ModelWrapper>

                  <ContentOverlay>
                    <TextSection>
                      <Typography variant="h2" sx={{ textAlign: "center" }}>
                        {project.name}
                      </Typography>
                      <Typography variant="body1">{project.tagline}</Typography>
                      <MetricText>{project.metric}</MetricText>

                      <Button
                        onClick={() => router.push("/projects")}
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          borderRadius: "12px",
                          mt: 1,
                          background:
                            "linear-gradient(180deg, #2a2a2a 0%, #141414 95%)",
                          color: "#fff",
                          boxShadow:
                            "0 2px 12px 0 rgba(0,0,0,0.28), 0 1.5px 1.5px 0 rgba(255,255,255,0.13) inset",
                          border: "1.5px solid rgba(60, 60, 60, 0.28)",
                          position: "relative",
                          overflow: "hidden",
                          "&:before": {
                            content: '""',
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "100%",
                            height: "100%",
                            pointerEvents: "none",
                            borderRadius: "12px",
                            background:
                              "linear-gradient(90deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 60%)",
                            opacity: 0.4,
                            zIndex: 1,
                          },
                          "&:hover": {
                            background:
                              "linear-gradient(180deg, #1e1e1e 0%, #353535 90%)",
                            boxShadow: "0 5px 18px 0 rgba(0,0,0,0.32)",
                          },
                        }}
                      >
                        Learn More
                      </Button>
                    </TextSection>
                  </ContentOverlay>
                </ProjectContainer>
              </StandoutCard>
            ))}
          </StandoutGrid>
          <Typography
            variant="h6"
            sx={{ textDecorationLine: "underline", cursor: "pointer" }}
            onClick={() => router.push("/projects")}
          >
            View {projects.length} other projects →
          </Typography>
        </Container>
      </FadeInOnScroll>
    );
  }
};
