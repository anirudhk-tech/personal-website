import {
  Container,
  ResponsibilitiesContainer,
  ResponsibilityContainer,
  SubTitleContainer,
  Text,
} from "./experienceCard.styles";
import { Experience } from "@/app/types";
import {
  CalendarMonth,
  DoneAll,
  HomeWork,
  LocationOn,
} from "@mui/icons-material";

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <Container>
      <Text variant="h6" sx={{ textAlign: "left" }}>
        {experience.title}
      </Text>
      <SubTitleContainer>
        <HomeWork />
        <Text variant="body2" sx={{ textAlign: "left" }}>
          {experience.company}
        </Text>
      </SubTitleContainer>
      <SubTitleContainer>
        <CalendarMonth />
        <Text variant="body2" sx={{ textAlign: "left" }}>
          {experience.startDate} - {experience.endDate}
        </Text>
      </SubTitleContainer>
      <SubTitleContainer>
        <LocationOn />
        <Text variant="body2" sx={{ textAlign: "left" }}>
          {experience.location}
        </Text>
      </SubTitleContainer>
      <ResponsibilitiesContainer>
        {experience.responsibilities.map((resp, idx) => (
          <ResponsibilityContainer key={idx}>
            <DoneAll />
            <Text variant="body2" sx={{ textAlign: "left" }}>
              {resp}
            </Text>
          </ResponsibilityContainer>
        ))}
      </ResponsibilitiesContainer>
    </Container>
  );
};
