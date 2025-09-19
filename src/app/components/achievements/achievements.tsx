import { AchievementsData } from "@/app/constants/achievements";
import {
  AchievementCard,
  AchievementsContainer,
  AchievementsSectionContainer,
} from "./achievements.styles";
import { Typography } from "@mui/material";

export const Achievements = () => {
  return (
    <AchievementsSectionContainer>
      <Typography variant="h1">Achievements</Typography>
      <AchievementsContainer>
        {AchievementsData.map((a, i) => (
          <AchievementCard key={i}>
            <img
              src={a.img}
              alt={a.title}
              style={{
                width: 90,
                height: 90,
                objectFit: "cover",
                borderRadius: "50%",
                border: "2.5px solid #aeefff55",
                boxShadow: "0 0 22px #aeefff55, 0 .5px 2.5px #22b8ff33",
                background: "linear-gradient(145deg,#e2f7ff 0%,#fff 100%)",
                position: "relative",
                zIndex: 2,
              }}
            />
            <Typography variant="h6" align="center">
              {a.title}
            </Typography>
            <Typography variant="body2" align="center" color="#555">
              {a.description}
            </Typography>
          </AchievementCard>
        ))}
      </AchievementsContainer>
    </AchievementsSectionContainer>
  );
};
