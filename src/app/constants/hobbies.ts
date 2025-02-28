import { Hobby } from "../types";
import { Icons } from "./icons";

export const hobbies: Hobby[] = [
  {
    name: "Cinema",
    icon: Icons.movie.icon,
    description:
      "Exploring various genres of film, from classics to the latest releases.",
  },
  {
    name: "Reading Nonfiction",
    icon: Icons.nonfiction.icon,
    description: "Studying books on business strategy and self development.",
  },
  {
    name: "Reading Fiction",
    icon: Icons.fiction.icon,
    description:
      "Reading fiction helps me generate ideas and helps me gain an appreciation for the creative mind.",
  },
  {
    name: "Swimming and Running",
    icon: Icons.swimming.icon,
    description: "Staying active and relaxed through regular laps and runs.",
  },
  {
    name: "Writing",
    icon: Icons.writing.icon,
    description:
      "I enjoy the process of generating ideas and crafting storylines. Currently writing a fantasy novel I intend to publish.",
  },
];
