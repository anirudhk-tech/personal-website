import { FadeIn } from "@/app/animations/fadein";
import {
  Container,
  GradientTextContainer,
  MenuContainer,
  MenuItemContainer,
  TextContainer,
} from "./landing.styles";
import { Typography } from "@mui/material";
import SplitText from "@/app/components/common/react-bits/SplitText/SplitText";
import { useState } from "react";
import GradientText from "@/app/components/common/react-bits/GradientText/GradientText";

export const Landing = ({
  handleScrollToExperience,
  handleScrollToProjects,
  handleScrollToSkills,
  handleScrollToCourses,
  handleScrollToPersonal,
  handleScrollToContact,
  handleScrollToSynopsis,
  handleScrollToAchievements,
}: {
  handleScrollToExperience: () => void;
  handleScrollToProjects: () => void;
  handleScrollToSkills: () => void;
  handleScrollToCourses: () => void;
  handleScrollToPersonal: () => void;
  handleScrollToContact: () => void;
  handleScrollToSynopsis: () => void;
  handleScrollToAchievements: () => void;
}) => {
  const openDocx = () => {
    const docUrl = `https://anirudhkuppili.com/docs/resume.pdf`;
    window.open(docUrl, "_blank", "noopener,noreferrer");
  };
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <Container>
      <TextContainer>
        <SplitText
          text="Oh hi there, I'm Ani."
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          textAlign="center"
        />
        <FadeIn delay={1.5} duration={1}>
          <Typography variant="body1">
            Looking for something specific?
          </Typography>
        </FadeIn>
        <FadeIn delay={2.0} duration={1}>
          <MenuContainer>
            <div
              onMouseEnter={() => setHovered("resume")}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered !== "resume" ? (
                <MenuItemContainer label="Resume" />
              ) : (
                <GradientTextContainer onClick={openDocx}>
                  <GradientText
                    colors={[
                      "#ed4264",
                      "#ffedbc",
                      "#ed4264",
                      "#ffedbc",
                      "#ed4264",
                    ]}
                    animationSpeed={3}
                    showBorder={false}
                  >
                    Resume
                  </GradientText>
                </GradientTextContainer>
              )}
            </div>
            <div
              onMouseEnter={() => setHovered("synopsis")}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered !== "synopsis" ? (
                <MenuItemContainer label="Synopsis" />
              ) : (
                <GradientTextContainer onClick={handleScrollToSynopsis}>
                  <GradientText
                    colors={[
                      "#ed4264",
                      "#ffedbc",
                      "#ed4264",
                      "#ffedbc",
                      "#ed4264",
                    ]}
                    animationSpeed={3}
                    showBorder={false}
                  >
                    Synopsis
                  </GradientText>
                </GradientTextContainer>
              )}
            </div>
            <div
              onMouseEnter={() => setHovered("experience")}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered !== "experience" ? (
                <MenuItemContainer label="Experience" />
              ) : (
                <GradientTextContainer onClick={handleScrollToExperience}>
                  <GradientText
                    colors={[
                      "#ed4264",
                      "#ffedbc",
                      "#ed4264",
                      "#ffedbc",
                      "#ed4264",
                    ]}
                    animationSpeed={3}
                    showBorder={false}
                  >
                    Experience
                  </GradientText>
                </GradientTextContainer>
              )}
            </div>
            <div
              onMouseEnter={() => setHovered("achievements")}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered !== "achievements" ? (
                <MenuItemContainer label="Achievements" />
              ) : (
                <GradientTextContainer onClick={handleScrollToAchievements}>
                  <GradientText
                    colors={[
                      "#ed4264",
                      "#ffedbc",
                      "#ed4264",
                      "#ffedbc",
                      "#ed4264",
                    ]}
                    animationSpeed={3}
                    showBorder={false}
                  >
                    Achievements
                  </GradientText>
                </GradientTextContainer>
              )}
            </div>
            <div
              onMouseEnter={() => setHovered("projects")}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered !== "projects" ? (
                <MenuItemContainer label="Projects" />
              ) : (
                <GradientTextContainer onClick={handleScrollToProjects}>
                  <GradientText
                    colors={[
                      "#ed4264",
                      "#ffedbc",
                      "#ed4264",
                      "#ffedbc",
                      "#ed4264",
                    ]}
                    animationSpeed={3}
                    showBorder={false}
                  >
                    Projects
                  </GradientText>
                </GradientTextContainer>
              )}
            </div>
            <div
              onMouseEnter={() => setHovered("skills")}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered !== "skills" ? (
                <MenuItemContainer label="Skills" />
              ) : (
                <GradientTextContainer onClick={handleScrollToSkills}>
                  <GradientText
                    colors={[
                      "#ed4264",
                      "#ffedbc",
                      "#ed4264",
                      "#ffedbc",
                      "#ed4264",
                    ]}
                    animationSpeed={3}
                    showBorder={false}
                  >
                    Skills
                  </GradientText>
                </GradientTextContainer>
              )}
            </div>
            <div
              onMouseEnter={() => setHovered("courses")}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered !== "courses" ? (
                <MenuItemContainer label="Courses" />
              ) : (
                <GradientTextContainer onClick={handleScrollToCourses}>
                  <GradientText
                    colors={[
                      "#ed4264",
                      "#ffedbc",
                      "#ed4264",
                      "#ffedbc",
                      "#ed4264",
                    ]}
                    animationSpeed={3}
                    showBorder={false}
                  >
                    Courses
                  </GradientText>
                </GradientTextContainer>
              )}
            </div>
            <div
              onMouseEnter={() => setHovered("personal")}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered !== "personal" ? (
                <MenuItemContainer label="Hobbies" />
              ) : (
                <GradientTextContainer onClick={handleScrollToPersonal}>
                  <GradientText
                    colors={[
                      "#ed4264",
                      "#ffedbc",
                      "#ed4264",
                      "#ffedbc",
                      "#ed4264",
                    ]}
                    animationSpeed={3}
                    showBorder={false}
                  >
                    Hobbies
                  </GradientText>
                </GradientTextContainer>
              )}
            </div>
            <div
              onMouseEnter={() => setHovered("contact")}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered !== "contact" ? (
                <MenuItemContainer label="Contact" />
              ) : (
                <GradientTextContainer onClick={handleScrollToContact}>
                  <GradientText
                    colors={[
                      "#ed4264",
                      "#ffedbc",
                      "#ed4264",
                      "#ffedbc",
                      "#ed4264",
                    ]}
                    animationSpeed={3}
                    showBorder={false}
                  >
                    Contact
                  </GradientText>
                </GradientTextContainer>
              )}
            </div>
          </MenuContainer>
        </FadeIn>
      </TextContainer>
    </Container>
  );
};
