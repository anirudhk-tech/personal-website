import { FadeIn } from "@/app/animations/fadein";
import {
  Container,
  CTAButton,
  GradientTextContainer,
  MenuContainer,
  MenuItemContainer,
  TextContainer,
} from "./landing.styles";
import { Typography, Box } from "@mui/material";
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
  const gradientColors = [
    "#fa8ab2",
    "#f668a5",
    "#fcbedc",
    "#fa8ab2",
    "#ffe0eb",
  ];
  const handleGoToMail = () => {
    window.location.href = `mailto:anirudhkuppili.dev@gmail.com?subject=Work%20with%20Ani&body=Hi%20Ani,%0AI'm%20interested%20in%20working%20with%20you`;
  };

  return (
    <Container>
      <TextContainer>
        <Typography
          variant="h1"
          textAlign="center"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: { xs: "2rem", sm: "3rem", md: "5rem" },
          }}
        >
          {`Oh hi there, I'm Ani`}
        </Typography>
        <FadeIn delay={0.5} duration={1}>
          <Typography variant="body1" sx={{ color: "#fff" }}>
            Looking for something specific?
          </Typography>
        </FadeIn>
        <FadeIn delay={1.0} duration={1}>
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
                    colors={gradientColors}
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
                    colors={gradientColors}
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
                    colors={gradientColors}
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
                    colors={gradientColors}
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
                    colors={gradientColors}
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
                    colors={gradientColors}
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
                    colors={gradientColors}
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
                    colors={gradientColors}
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
                    colors={gradientColors}
                    animationSpeed={3}
                    showBorder={false}
                  >
                    Contact
                  </GradientText>
                </GradientTextContainer>
              )}
            </div>
          </MenuContainer>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <CTAButton onClick={handleGoToMail}>Work with Me</CTAButton>
          </Box>
        </FadeIn>
      </TextContainer>
    </Container>
  );
};
