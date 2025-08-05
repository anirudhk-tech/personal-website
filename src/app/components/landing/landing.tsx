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
  const openDocx = () => {
    const src = encodeURIComponent(
      "https://anirudhkuppili.com/docs/resume.docx"
    );
    const viewerUrl = `https://view.officeapps.live.com/op/view.aspx?src=${src}`;
    window.open(viewerUrl, "_blank", "noopener,noreferrer");
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
