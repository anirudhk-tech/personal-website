"use client";

import Link from "next/link";
import Image from "next/image";
import { Typography } from "@mui/material";
import { FadeInOnScroll } from "@/app/animations/fadeinOnScroll";
import { Container, GridContainer, Square, Caption } from "./featured.styles";

import Shiplo from "@/../public/featured/shiplo.png";
import X from "@/../public/featured/x.png";
import Medium from "@/../public/featured/medium.png";

type FeaturedItem = {
  src: string;
  caption: string;
  href: string;
};

const featured: FeaturedItem[] = [
  {
    src: Shiplo.src,
    caption: "Shiplo - Autonomous operators",
    href: "https://tryshiplo.com/",
  },
  {
    src: X.src,
    caption: "X (Twitter) - Live Insights.",
    href: "https://x.com/venkata_ani",
  },
  {
    src: Medium.src,
    caption: "Articles - Building in Words",
    href: "https://medium.com/@anirudhkuppili",
  },
];

export const Featured = () => (
  <Container>
    <FadeInOnScroll>
      <Typography variant="h2">Featured</Typography>
    </FadeInOnScroll>

    <GridContainer>
      {featured.map(({ src, caption, href }) => (
        <FadeInOnScroll key={caption}>
          <Link href={href} passHref legacyBehavior target="_blank">
            <Square>
              <Image
                src={src}
                alt={caption}
                fill
                style={{ objectFit: "cover" }}
              />
              <Caption variant="body1">{caption}</Caption>
            </Square>
          </Link>
        </FadeInOnScroll>
      ))}
    </GridContainer>
  </Container>
);
