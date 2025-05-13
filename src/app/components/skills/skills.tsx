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
          <Typography variant="body2">Languages</Typography>
          <SkillIconsContainer>
            {skills
              .filter((skill) => skill.type === "Language")
              .map((skill, idx) => (
                <a key={idx} href={skill.link ? skill.link : undefined}>
                  <IconContainer label={skill.name} icon={skill.icon} />
                </a>
              ))}
          </SkillIconsContainer>
        </SubContainer>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <SubContainer>
          <Typography variant="body2">DevOps</Typography>
          <SkillIconsContainer>
            {skills
              .filter((skill) => skill.type === "DevOps")
              .map((skill, idx) => (
                <a key={idx} href={skill.link ? skill.link : undefined}>
                  <IconContainer label={skill.name} icon={skill.icon} />
                </a>
              ))}
          </SkillIconsContainer>
        </SubContainer>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <SubContainer>
          <Typography variant="body2">Frameworks and Libraries</Typography>
          <SkillIconsContainer>
            {skills
              .filter(
                (skill) =>
                  skill.type === "Framework" || skill.type === "Library"
              )
              .map((skill, idx) => (
                <a key={idx} href={skill.link ? skill.link : undefined}>
                  <IconContainer
                    key={idx}
                    label={skill.name}
                    icon={skill.icon}
                  />
                </a>
              ))}
          </SkillIconsContainer>
        </SubContainer>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <SubContainer>
          <Typography variant="body2">Databases</Typography>
          <SkillIconsContainer>
            {skills
              .filter((skill) => skill.type === "Database")
              .map((skill, idx) => (
                <a
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={skill.link ? skill.link : undefined}
                >
                  <IconContainer
                    key={idx}
                    label={skill.name}
                    icon={skill.icon}
                  />
                </a>
              ))}
          </SkillIconsContainer>
        </SubContainer>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <SubContainer>
          <Typography variant="body2">UI and Design</Typography>
          <SkillIconsContainer>
            {skills
              .filter((skill) => skill.type === "UI")
              .map((skill, idx) => (
                <a key={idx} href={skill.link ? skill.link : undefined}>
                  <IconContainer
                    key={idx}
                    label={skill.name}
                    icon={skill.icon}
                  />
                </a>
              ))}
          </SkillIconsContainer>
        </SubContainer>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <SubContainer>
          <Typography variant="body2">Other</Typography>
          <SkillIconsContainer>
            {skills
              .filter((skill) => skill.type === "Soft Skill")
              .map((skill, idx) => (
                <a
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={skill.link ? skill.link : undefined}
                >
                  <IconContainer
                    key={idx}
                    label={skill.name}
                    icon={skill.icon}
                  />
                </a>
              ))}
          </SkillIconsContainer>
        </SubContainer>
      </FadeInOnScroll>
    </Container>
  );
};
