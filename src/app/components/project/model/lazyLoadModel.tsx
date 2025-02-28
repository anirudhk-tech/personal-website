import { useEffect, useRef, useState } from "react";
import { Container, PlaceholderContainer } from "./model.styles";

const Placeholder = () => <PlaceholderContainer />;

export const LazyLoadModel = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.0, rootMargin: "0px 0px -500px 0px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Container ref={containerRef}>
      {isVisible ? children : <Placeholder />}
    </Container>
  );
};
