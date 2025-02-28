import { FadeInOnScroll } from "@/app/animations/fadeinOnScroll";
import { courses } from "@/app/constants/courses";
import { Typography } from "@mui/material";
import { Container, CoursesContainer, CoursesTitle } from "./courses.styles";

export const Courses = () => {
  return (
    <Container>
      <FadeInOnScroll>
        <Typography variant="h1">Courses</Typography>
        <CoursesTitle variant="h3">Major</CoursesTitle>
        <CoursesContainer>
          {courses
            .filter((course) => course.type === "major")
            .map((course, idx) => (
              <FadeInOnScroll key={idx}>
                <Typography variant="body1">
                  {course.short} - {course.long}
                </Typography>
                <Typography variant="body2">{course.description}</Typography>
              </FadeInOnScroll>
            ))}
        </CoursesContainer>
        <CoursesTitle variant="h3">General Education</CoursesTitle>
        <CoursesContainer>
          {courses
            .filter((course) => course.type === "gened")
            .map((course, idx) => (
              <FadeInOnScroll key={idx}>
                <Typography variant="body1">
                  {course.short} - {course.long}
                </Typography>
                <Typography variant="body2">{course.description}</Typography>
              </FadeInOnScroll>
            ))}
        </CoursesContainer>
      </FadeInOnScroll>
    </Container>
  );
};
