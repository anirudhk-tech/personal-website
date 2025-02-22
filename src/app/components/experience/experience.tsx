import { FadeInOnScroll } from "@/app/animations/fadeinOnScroll";
import {
  Container,
  LegendContainer,
  LegendSubContainer,
  Spacer,
} from "./experience.styles";
import { Typography } from "@mui/material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { ExperienceCard } from "./experienceCard/experienceCard";
import { Experiences } from "@/app/constants/experience";
import { Handshake, Lightbulb, Work } from "@mui/icons-material";

export const Experience = () => {
  return (
    <Container>
      <FadeInOnScroll>
        <Typography variant="h1" sx={{ paddingLeft: "5%" }}>
          Experience and Association
        </Typography>
      </FadeInOnScroll>
      <LegendContainer>
        <LegendSubContainer>
          <Work sx={{ color: "brown" }} />
          <Typography variant="body2">Work</Typography>
        </LegendSubContainer>
        <LegendSubContainer>
          <Lightbulb sx={{ color: "orange" }} />
          <Typography variant="body2">Self-employed</Typography>
        </LegendSubContainer>
        <LegendSubContainer>
          <Handshake sx={{ color: "blue" }} />
          <Typography variant="body2">Association</Typography>
        </LegendSubContainer>
      </LegendContainer>
      <Timeline
        sx={{ width: 0 }} // Left align
      >
        {Experiences.map((exp, idx) => (
          <FadeInOnScroll key={idx}>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot>
                  {exp.type === "work" ? (
                    <Work sx={{ color: "brown" }} />
                  ) : exp.type === "self-employed" ? (
                    <Lightbulb sx={{ color: "orange" }} />
                  ) : (
                    <Handshake sx={{ color: "blue" }} />
                  )}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <ExperienceCard experience={exp} />
              </TimelineContent>
            </TimelineItem>
            <Spacer></Spacer>
          </FadeInOnScroll>
        ))}
      </Timeline>
    </Container>
  );
};
