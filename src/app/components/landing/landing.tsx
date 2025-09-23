import { FadeIn } from "@/app/animations/fadein";
import {
  Container,
  MenuContainer,
  MenuItemContainer,
  TextContainer,
} from "./landing.styles";
import { Typography } from "@mui/material";

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
    const docUrl = `https://anirudhkuppili.com/docs/resume.docx`;
    window.open(docUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Container>
      <TextContainer>
        <FadeIn delay={0.5} duration={1}>
          <Typography
            variant="h3"
            sx={{ textAlign: "center" }}
          >{`Oh hi there, I'm Anirudh Kuppili.`}</Typography>
        </FadeIn>
        <FadeIn delay={1.5} duration={1}>
          <Typography variant="body1">
            Looking for something specific?
          </Typography>
        </FadeIn>
        <FadeIn delay={2.0} duration={1}>
          <MenuContainer>
            <MenuItemContainer label="Resume" onClick={openDocx} />
            <MenuItemContainer
              label="Synopsis"
              onClick={handleScrollToSynopsis}
            />
            <MenuItemContainer
              label="Experience"
              onClick={handleScrollToExperience}
            />
            <MenuItemContainer
              label="Achievements"
              onClick={handleScrollToAchievements}
            />
            <MenuItemContainer
              label="Projects"
              onClick={handleScrollToProjects}
            />
            <MenuItemContainer label="Skills" onClick={handleScrollToSkills} />
            <MenuItemContainer
              label="Courses"
              onClick={handleScrollToCourses}
            />
            <MenuItemContainer
              label="Hobbies"
              onClick={handleScrollToPersonal}
            />
            <MenuItemContainer
              label="Contact"
              onClick={handleScrollToContact}
            />
          </MenuContainer>
        </FadeIn>
      </TextContainer>
    </Container>
  );
};
