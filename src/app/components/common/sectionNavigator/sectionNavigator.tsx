import { Tooltip } from "@mui/material";
import {
  NavigatorWrapper,
  NavigatorLineContainer,
  NavigatorLine,
  NavigatorDot,
  DotFill,
} from "./sectionNavigator.styles";

const sections = [
  { label: "Featured", onClick: "handleScrollToFeatured" },
  { label: "Synopsis", onClick: "handleScrollToSynopsis" },
  { label: "Experience", onClick: "handleScrollToExperience" },
  { label: "Achievements", onClick: "handleScrollToAchievements" },
  { label: "Projects", onClick: "handleScrollToProjects" },
  { label: "Skills", onClick: "handleScrollToSkills" },
  { label: "Courses", onClick: "handleScrollToCourses" },
  { label: "Hobbies", onClick: "handleScrollToPersonal" },
  { label: "Contact", onClick: "handleScrollToContact" },
];

export const SectionNavigator = ({
  handleScrollToFeatured,
  handleScrollToSynopsis,
  handleScrollToExperience,
  handleScrollToAchievements,
  handleScrollToProjects,
  handleScrollToSkills,
  handleScrollToCourses,
  handleScrollToPersonal,
  handleScrollToContact,
}: {
  handleScrollToFeatured: () => void;
  handleScrollToSynopsis: () => void;
  handleScrollToExperience: () => void;
  handleScrollToAchievements: () => void;
  handleScrollToProjects: () => void;
  handleScrollToSkills: () => void;
  handleScrollToCourses: () => void;
  handleScrollToPersonal: () => void;
  handleScrollToContact: () => void;
}) => {
  const handlers = {
    handleScrollToFeatured,
    handleScrollToSynopsis,
    handleScrollToExperience,
    handleScrollToAchievements,
    handleScrollToProjects,
    handleScrollToSkills,
    handleScrollToCourses,
    handleScrollToPersonal,
    handleScrollToContact,
  };

  return (
    <NavigatorWrapper>
      <NavigatorLineContainer>
        <NavigatorLine />
        {sections.map((section, idx) => (
          <Tooltip key={section.label} title={section.label} arrow>
            <NavigatorDot
              tabIndex={0}
              onClick={handlers[section.onClick]}
              sx={{ marginLeft: idx === 0 ? 0 : undefined }}
            >
              <DotFill />
            </NavigatorDot>
          </Tooltip>
        ))}
      </NavigatorLineContainer>
    </NavigatorWrapper>
  );
};
