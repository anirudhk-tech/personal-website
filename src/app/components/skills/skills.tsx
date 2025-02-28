import { Typography } from "@mui/material";
import {
  Container,
  IconContainer,
  SkillIconsContainer,
  SubContainer,
} from "./skills.styles";
import { skills } from "@/app/constants/skills";
import { FadeInOnScroll } from "@/app/animations/fadeinOnScroll";

export const Skills = () => {
  return (
    <Container>
      <FadeInOnScroll>
        <Typography variant="h1">Skills</Typography>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <SubContainer>
          <Typography variant="h4">Languages</Typography>
          <SkillIconsContainer>
            {skills
              .filter((skill) => skill.type === "Language")
              .map((skill, idx) => (
                <IconContainer key={idx} label={skill.name} icon={skill.icon} />
              ))}
          </SkillIconsContainer>
        </SubContainer>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <SubContainer>
          <Typography variant="h4">Frameworks and Libraries</Typography>
          <SkillIconsContainer>
            {skills
              .filter(
                (skill) =>
                  skill.type === "Framework" || skill.type === "Library"
              )
              .map((skill, idx) => (
                <IconContainer key={idx} label={skill.name} icon={skill.icon} />
              ))}
          </SkillIconsContainer>
        </SubContainer>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <SubContainer>
          <Typography variant="h4">UI and Design</Typography>
          <SkillIconsContainer>
            {skills
              .filter((skill) => skill.type === "UI")
              .map((skill, idx) => (
                <IconContainer key={idx} label={skill.name} icon={skill.icon} />
              ))}
          </SkillIconsContainer>
        </SubContainer>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <SubContainer>
          <Typography variant="h4">Other</Typography>
          <SkillIconsContainer>
            {skills
              .filter((skill) => skill.type === "Soft Skill")
              .map((skill, idx) => (
                <IconContainer key={idx} label={skill.name} icon={skill.icon} />
              ))}
          </SkillIconsContainer>
        </SubContainer>
      </FadeInOnScroll>
    </Container>
  );
};
