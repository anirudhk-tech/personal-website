"use client";

import Link from "next/link";
import Image from "next/image";
import { Typography } from "@mui/material";
import { FadeInOnScroll } from "@/app/animations/fadeinOnScroll";
import { Container, GridContainer, Square, Caption } from "./featured.styles";

import ScrapHunt from "@/../public/project_screens/scraphunt.png";
import Shiplo from "@/../public/project_screens/shiplo.png";

type FeaturedItem = {
  src: string;
  caption: string;
  href: string;
};

const featured: FeaturedItem[] = [
  {
    src: Shiplo.src,
    caption: "Shiplo - An autonomous IT agent for your pc and business",
    href: "https://shiplo.vercel.app/",
  },
  {
    src: ScrapHunt.src,
    caption: "ScrapHunt - Get Paid for Scrapped Projects",
    href: "https://scraphunting.com/",
  },
];

export const Featured = () => (
  <Container>
    <FadeInOnScroll>
      <Typography variant="h2">Featured Work</Typography>
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
