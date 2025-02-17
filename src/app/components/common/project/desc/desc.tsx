import { Typography } from "@mui/material";
import { Container } from "./desc.styles";

export const Desc = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Container>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="body1">{description}</Typography>
    </Container>
  );
};
