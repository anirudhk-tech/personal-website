import { Typography } from "@mui/material";
import {
  Container,
  NavigationAndPhotoContainer,
  NavigationContainer,
  PictureContainer,
  TextContainer,
} from "./intro.styles";
import { FadeInOnScroll } from "@/app/animations/fadeinOnScroll";
import Image from "next/image";
import ProfilePicture from "@/../public/profile_picture.png";

export const Intro = () => {
  return (
    <Container>
      <FadeInOnScroll>
        <Typography variant="h1">Synopsis</Typography>
      </FadeInOnScroll>
      <TextContainer>
        <FadeInOnScroll>
          <Typography variant="body1">
            {`I'm a fullstack developer working and studying at the University of Illinois Chicago while running a tech startup.`}
          </Typography>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <Typography variant="body1">
            {`I specialize in web and mobile end to end development, from initial drafts to deployment. I'm invested in building impactful applications that will change some lives.`}
          </Typography>
        </FadeInOnScroll>
      </TextContainer>
      <FadeInOnScroll>
        <NavigationAndPhotoContainer>
          <NavigationContainer></NavigationContainer>
          <PictureContainer>
            <Image
              src={ProfilePicture}
              alt="Profile picture"
              fill
              style={{ objectFit: "cover", borderRadius: 50 }}
            />
          </PictureContainer>
        </NavigationAndPhotoContainer>
      </FadeInOnScroll>
    </Container>
  );
};
