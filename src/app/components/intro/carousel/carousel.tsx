import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Container } from "../intro.styles";

interface CarouselProps {
  images: { src: string; alt: string }[];
  speed?: number;
  maxHeight?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  images,
  speed = 80,
  maxHeight = 240,
}) => {
  const controls = useAnimation();
  const trackRef = useRef<HTMLDivElement>(null);
  const [, forceRerender] = useState({});

  const handleLoad = () => forceRerender({});

  useEffect(() => {
    if (!trackRef.current) return;

    const oneStripPx = trackRef.current.scrollWidth / 2;
    if (!oneStripPx) return;

    const duration = oneStripPx / speed;

    controls.set({ x: 0 });
    controls.start({
      x: -oneStripPx,
      transition: {
        ease: "linear",
        duration,
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [images, speed, controls]);

  useEffect(() => {
    if (!trackRef.current) return;
    const ro = new ResizeObserver(() => forceRerender({}));
    ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, []);

  const duplicated = [...images, ...images];

  return (
    <Container style={{ overflow: "hidden" }}>
      <motion.div ref={trackRef} style={{ display: "flex" }} animate={controls}>
        {duplicated.map(({ src, alt }, i) => (
          <img
            key={i}
            src={src}
            alt={alt}
            onLoad={handleLoad}
            style={{
              maxHeight,
              height: "100%",
              width: "auto",
              flex: "0 0 auto",
              objectFit: "cover",
              marginRight: i === duplicated.length - 1 ? 0 : 32,
              borderRadius: 8,
            }}
          />
        ))}
      </motion.div>
    </Container>
  );
};
