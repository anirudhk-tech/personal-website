"use client";

import { useRef } from "react";
import { Landing } from "./components/landing/landing";
import { Container } from "./page.styles";
import { ScrollWidth } from "./animations/scrollWidth";
import { Intro } from "./components/intro/intro";
import { Project } from "./components/project/project";
import { Experience } from "./components/experience/experience";

export default function Home() {
  const containerRef = useRef(null);

  return (
    <Container ref={containerRef}>
      <ScrollWidth
        target={containerRef}
        style={{
          height: 2,
          backgroundColor: "black",
          position: "fixed",
          top: 0,
          zIndex: 10,
        }}
      />
      <Landing />
      <Intro />
      <Project />
      <Experience />
    </Container>
  );
}
