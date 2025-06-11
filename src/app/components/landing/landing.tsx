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
  handleScrollToFeatured,
  handleScrollToSynopsis,
}: {
  handleScrollToExperience: () => void;
  handleScrollToProjects: () => void;
  handleScrollToSkills: () => void;
  handleScrollToCourses: () => void;
  handleScrollToPersonal: () => void;
  handleScrollToContact: () => void;
  handleScrollToFeatured: () => void;
  handleScrollToSynopsis: () => void;
}) => {
  const LINKEDIN_RESUME =
    "https://www.linkedin.com/in/akuppili/details/featured/1748056382789/single-media-viewer/?profileId=ACoAAEjoBksB2AUh9__CRRQxCAzswBb5L1hvrAE";

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
            <a target="_blank" rel="noopener noreferrer" href={LINKEDIN_RESUME}>
              <MenuItemContainer label="Resume" />
            </a>
            <MenuItemContainer
              label="Featured"
              onClick={handleScrollToFeatured}
            />
            <MenuItemContainer
              label="Synopsis"
              onClick={handleScrollToSynopsis}
            />
            <MenuItemContainer
              label="Experience"
              onClick={handleScrollToExperience}
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
