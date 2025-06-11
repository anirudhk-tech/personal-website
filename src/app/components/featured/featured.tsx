"use client";

import Link from "next/link";
import Image from "next/image";
import { Typography } from "@mui/material";
import { FadeInOnScroll } from "@/app/animations/fadeinOnScroll";
import { Container, GridContainer, Square, Caption } from "./featured.styles";

import ScrapHunt from "@/../public/project_screens/scraphunt.png";
import Shiplo from "@/../public/project_screens/shiplo.png";
import X from "@/../public/featured/x.png";
import Medium from "@/../public/featured/medium.png";
import Cards from "@/../public/featured/cards.png";

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
  {
    src: X.src,
    caption: "X (Twitter) - Live Insights on What I Read, Write, and Ship.",
    href: "https://x.com/venkata_ani",
  },
  {
    src: Medium.src,
    caption: "Articles - Building in Words",
    href: "https://medium.com/@anirudhkuppili",
  },
  {
    src: Cards.src,
    caption: "Cards: Chapter 1 - Draft from a post-WW3 mutation world.",
    href: "https://docs.google.com/document/d/1hWAmz4iyu4an5E-6L19MkDMV5wk10nXMaUbCoaf_Mjk/edit?usp=sharing",
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
