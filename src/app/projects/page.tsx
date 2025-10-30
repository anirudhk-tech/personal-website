"use client";

import { useRef } from "react";
import { LockContainer, Container } from "../page.styles";
import { ScrollWidth } from "../animations/scrollWidth";
import { Project } from "../components/project/project";
import { Cta } from "../components/common/cta";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

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
        <Project standout={false} />
        <Cta />
      </Container>
    </LockContainer>
  );
}
