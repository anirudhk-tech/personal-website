import { Typography, useMediaQuery } from "@mui/material";
import {
  Container,
  ExternalContainer,
  IconContainer,
  IconsContainer,
  PointsContainer,
} from "./desc.styles";
import { Project } from "@/app/types";
import { MyLocation } from "@mui/icons-material";
import { FadeInOnScroll } from "@/app/animations/fadeinOnScroll";

export const Desc = ({ project }: { project: Project }) => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Container>
      {!isMobile && (
        <>
          <Typography variant="h4">{project.title}</Typography>
          <Typography variant="body1">
            {project.startDate} - {project.endDate}
          </Typography>
          <Typography variant="body2">{project.description}</Typography>
        </>
      )}
      {project.points.map((point, idx) => (
        <FadeInOnScroll key={idx}>
          <PointsContainer>
            <MyLocation sx={{ color: "black" }} />
            <Typography variant="body2">{point}</Typography>
          </PointsContainer>
        </FadeInOnScroll>
      ))}
      <FadeInOnScroll>
        <IconsContainer>
          {project.icons.map((icon, idx) => (
            <a
              href={icon.link}
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconContainer
                key={idx}
                label={icon.name}
                icon={icon.icon}
                clickable
              />
            </a>
          ))}
        </IconsContainer>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <ExternalContainer>
          <Typography variant="body2">External Links: </Typography>
          {project.externalLinks.map((link, idx) => (
            <a
              href={link.link}
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconContainer
                key={idx}
                label={link.name}
                icon={link.icon}
                clickable
              />
            </a>
          ))}
        </ExternalContainer>
      </FadeInOnScroll>
    </Container>
  );
};
