import { Typography } from "@mui/material";
import { ContactContainer, Container, IconContainer } from "./contact.styles";
import { contact } from "@/app/constants/contact";

export const Contact = () => {
  return (
    <Container>
      <Typography variant="h1">Contact</Typography>
      <Typography variant="body1">Have an oppurtunity? Reach out!</Typography>
      <ContactContainer>
        {contact.map((contact) => (
          <a
            href={contact.link ? contact.link : undefined}
            key={contact.content}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconContainer
              key={contact.content}
              label={contact.content}
              icon={contact.icon}
            />
          </a>
        ))}
      </ContactContainer>
    </Container>
  );
};
