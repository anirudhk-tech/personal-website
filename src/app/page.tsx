"use client";

import { useEffect, useRef, useState } from "react";
import { Landing } from "./components/landing/landing";
import { Container, LockContainer } from "./page.styles";
import { ScrollWidth } from "./animations/scrollWidth";
import { Intro } from "./components/intro/intro";
import { Project } from "./components/project/project";
import { Experience } from "./components/experience/experience";
import { Skills } from "./components/skills/skills";
import { Courses } from "./components/courses/courses";
import { Personal } from "./components/personal/personal";
import { Contact } from "./components/contact/contact";
import { Fab, Typography } from "@mui/material";
import { Achievements } from "./components/achievements/achievements";
import { Cta } from "./components/common/cta";

export default function Home() {
  const FAB_THRESHOLD = 20;
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);
  const synopsisRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const coursesRef = useRef<HTMLDivElement>(null);
  const personalRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const landingRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);

  const handleGoToMail = () => {
    window.location.href = `mailto:anirudhkuppili.dev@gmail.com?subject=Work%20with%20Ani&body=Hi%20Ani,%0AI'm%20interested%20in%20working%20with%20you`;
  };

  const handleScrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleScrollToSynopsis = () => {
    if (synopsisRef.current) {
      synopsisRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToExperience = () => {
    if (experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToAchievements = () => {
    if (achievementsRef.current) {
      achievementsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToProjects = () => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToSkills = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToCourses = () => {
    if (coursesRef.current) {
      coursesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToPersonal = () => {
    if (personalRef.current) {
      personalRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      setScrollToTopVisible(scrollTop > FAB_THRESHOLD);
    };

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <LockContainer>
      <Container ref={containerRef}>
        {containerRef.current && (
          <ScrollWidth
            target={containerRef}
            style={{
              height: 5,
              backgroundColor: "black",
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
              position: "fixed",
              top: 0,
              zIndex: 10,
            }}
          />
        )}
        {scrollToTopVisible && (
          <Fab
            variant="extended"
            sx={{
              position: "fixed",
              right: 30,
              bottom: 20,
            }}
            onClick={handleScrollToTop}
          >
            Go up
          </Fab>
        )}
        <div ref={landingRef}>
          <Landing
            handleScrollToContact={handleScrollToContact}
            handleScrollToExperience={handleScrollToExperience}
            handleScrollToProjects={handleScrollToProjects}
            handleScrollToSkills={handleScrollToSkills}
            handleScrollToCourses={handleScrollToCourses}
            handleScrollToPersonal={handleScrollToPersonal}
            handleScrollToSynopsis={handleScrollToSynopsis}
            handleScrollToAchievements={handleScrollToAchievements}
          />
        </div>
        <div ref={synopsisRef}>
          <Intro />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>
        <Cta />
        <div ref={achievementsRef}>
          <Achievements />
        </div>
        <div ref={projectRef}>
          <Project standout />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <Cta />
        <div ref={coursesRef}>
          <Courses />
        </div>
        <div ref={personalRef}>
          <Personal />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
        <Cta />
      </Container>
    </LockContainer>
  );
}
