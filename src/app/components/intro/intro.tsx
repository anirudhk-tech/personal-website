import { Typography } from "@mui/material";
import { Container, TextContainer } from "./intro.styles";
import { FadeInOnScroll } from "@/app/animations/fadeinOnScroll";
import ProfilePicture from "@/../public/carousel/profile_picture.png";
import GuardpupScreen from "@/../public/carousel/guardpup_similarity.png";
import HelixCreation from "@/../public/carousel/helix_creation.png";
import MadhacksTeam from "@/../public/carousel/madhacks_team.png";
import MidasScreen from "@/../public/carousel/midas_screen_graph.png";
import NiagaraFalls from "@/../public/carousel/niagara_falls.png";
import PublicSpeakingNasa from "@/../public/carousel/speaking_public_nasa.png";
import PublicSpeakingWildhacks from "@/../public/carousel/speaking_public_wildhacks.png";
import UncommonHacksTeam from "@/../public/carousel/uncommon_hacks_team.png";
import WaddlScreenCv from "@/../public/carousel/waddl_screen_cv.png";
import EcoStepsVendor from "@/../public/carousel/ecosteps_vendor.png";
import GuardpupFriends from "@/../public/carousel/guardpup_friends.png";
import MidasPretiction from "@/../public/carousel/midas_prediction.png";
import WaddlLanding from "@/../public/carousel/waddl_landing.png";
import WaddlStats from "@/../public/carousel/waddl_stats.png";
import StoryBoardScreen from "@/../public/carousel/storyboardai_screen.png";
import FlamesLanding from "@/../public/carousel/flamesai_landing.png";
import ScrapHuntBrowsing from "@/../public/carousel/scraphunt_browse.png";
import { Carousel } from "./carousel/carousel";

const images = [
  { src: ProfilePicture.src, alt: "Professional Headshot" },
  { src: GuardpupScreen.src, alt: "Guardpup Screen" },
  { src: HelixCreation.src, alt: "Helix Creation" },
  { src: FlamesLanding.src, alt: "FlamesAI Landing" },
  { src: ScrapHuntBrowsing.src, alt: "ScrapHunt Browsing" },
  { src: MadhacksTeam.src, alt: "Madhacks team" },
  { src: StoryBoardScreen.src, alt: "StoryboardAI Board" },
  { src: MidasScreen.src, alt: "Midas Screen" },
  { src: WaddlScreenCv.src, alt: "Waddl Screen" },
  { src: EcoStepsVendor.src, alt: "EcoSteps Vendor" },
  { src: GuardpupFriends.src, alt: "Guardpup Friends" },
  { src: MidasPretiction.src, alt: "Midas Prediction" },
  { src: WaddlLanding.src, alt: "Waddl Landing" },
  { src: WaddlStats.src, alt: "Waddl Stats" },
  { src: NiagaraFalls.src, alt: "Niagara Falls" },
  { src: PublicSpeakingNasa.src, alt: "Public Speaking at NASA" },
  { src: PublicSpeakingWildhacks.src, alt: "Public Speaking at Wildhacks" },
  { src: UncommonHacksTeam.src, alt: "Uncommon Hacks team" },
];

export const Intro = () => {
  return (
    <Container>
      <FadeInOnScroll>
        <Typography variant="h1">Synopsis</Typography>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <TextContainer>
          <FadeInOnScroll>
            <Typography variant="body1">
              {`I'm a fullstack developer working with tech startups while engaging in a fullstack job. I like to build fast and fail faster to ultimately grow and succeed.`}
            </Typography>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <Typography variant="body1">
              {`I specialize in fullstack end to end development, deployment, and scaling. From initial drafts to product launch and expansion.`}
            </Typography>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <Typography variant="body1">
              {`I'm invested in building impactful applications that will change some lives.`}
            </Typography>
          </FadeInOnScroll>
        </TextContainer>
        <Carousel images={images} speed={200} />
      </FadeInOnScroll>
    </Container>
  );
};
