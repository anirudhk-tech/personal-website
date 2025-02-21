import { FaPython } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiSpacy } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiClerk } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPytorch } from "react-icons/si";
import { Icon, Link } from "../types";
import { TfiGithub } from "react-icons/tfi";
import { IoRocket } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiAuth0 } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiReactbootstrap } from "react-icons/si";
import { TbBrandDatabricks } from "react-icons/tb";
import { SiRobinhood } from "react-icons/si";
import { FaLock } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiSqlite } from "react-icons/si";
import { SiExpo } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPlayStore } from "react-icons/bi";

export const Icons: Record<string, Icon | Link> = {
  python: {
    name: "Python",
    icon: <FaPython color="black" size={24} />,
    link: "https://www.python.org/",
  },
  nextjs: {
    name: "Next.js",
    icon: <RiNextjsFill color="black" size={24} />,
    link: "https://nextjs.org/",
  },
  spacy: {
    name: "SpaCy",
    icon: <SiSpacy color="black" size={24} />,
    link: "https://spacy.io/",
  },
  shadcn: {
    name: "Shadcn UI",
    icon: <SiShadcnui color="black" size={24} />,
    link: "https://shadcn.com/",
  },
  scikit: {
    name: "Scikit-Learn",
    icon: <SiScikitlearn color="black" size={24} />,
    link: "https://scikit-learn.org/",
  },
  clerk: {
    name: "Clerk",
    icon: <SiClerk color="black" size={24} />,
    link: "https://clerk.dev/",
  },
  supabase: {
    name: "Supabase",
    icon: <RiSupabaseFill color="black" size={24} />,
    link: "https://supabase.com/",
  },
  prisma: {
    name: "Prisma",
    icon: <SiPrisma color="black" size={24} />,
    link: "https://www.prisma.io/",
  },
  tailwind: {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill color="black" size={24} />,
    link: "https://tailwindcss.com/",
  },
  pytorch: {
    name: "PyTorch",
    icon: <SiPytorch color="black" size={24} />,
    link: "https://pytorch.org/",
  },
  github: {
    name: "GitHub",
    icon: <TfiGithub color="black" size={24} />,
    link: "https://github.com/",
  },
  website: {
    name: "Website",
    icon: <IoRocket color="black" size={24} />,
    link: "https://google.com/", // Varies based on project
  },
  video: {
    name: "Video",
    icon: <FaYoutube color="black" size={24} />,
    link: "https://youtube.com/", // Varies based on project
  },
  mongodb: {
    name: "MongoDB",
    icon: <DiMongodb color="black" size={24} />,
    link: "https://www.mongodb.com/",
  },
  auth0: {
    name: "Auth0",
    icon: <SiAuth0 color="black" size={24} />,
    link: "https://auth0.com/",
  },
  react: {
    name: "React",
    icon: <FaReact color="black" size={24} />,
    link: "https://react.dev/",
  },
  bootstrap: {
    name: "Bootstrap",
    icon: <SiReactbootstrap color="black" size={24} />,
    link: "https://getbootstrap.com/",
  },
  databricks: {
    name: "Databricks",
    icon: <TbBrandDatabricks color="black" size={24} />,
    link: "https://databricks.com/",
  },
  robinhood: {
    name: "Robinhood",
    icon: <SiRobinhood color="black" size={24} />,
    link: "https://robinhood.com/",
  },
  security_and_encryption: {
    name: "Security & Encryption",
    icon: <FaLock color="black" size={24} />,
    link: null,
  },
  rag: {
    name: "Retrieval-Augumented Generation",
    icon: <GiArtificialIntelligence color="black" size={24} />,
    link: null,
  },
  llm: {
    name: "Large Language Models",
    icon: <GiArtificialIntelligence color="black" size={24} />,
    link: null,
  },
  express: {
    name: "Express.js",
    icon: <SiExpress color="black" size={24} />,
    link: "https://expressjs.com/",
  },
  node: {
    name: "Node.js",
    icon: <FaNode color="black" size={24} />,
    link: "https://nodejs.org/",
  },
  flask: {
    name: "Flask",
    icon: <SiFlask color="black" size={24} />,
    link: "https://flask.palletsprojects.com/en/2.2.x/",
  },
  discord: {
    name: "Discord",
    icon: <FaDiscord color="black" size={24} />,
    link: "https://discord.com/",
  },
  javascript: {
    name: "JavaScript",
    icon: <IoLogoJavascript color="black" size={24} />,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  sqlite: {
    name: "SQLite",
    icon: <SiSqlite color="black" size={24} />,
    link: "https://sqlite.org/",
  },
  expo: {
    name: "Expo",
    icon: <SiExpo color="black" size={24} />,
    link: "https://expo.dev/",
  },
  reactnative: {
    name: "React Native",
    icon: <TbBrandReactNative color="black" size={24} />,
    link: "https://reactnative.dev/",
  },
  playstore: {
    name: "Play Store",
    icon: <BiLogoPlayStore color="black" size={24} />,
    link: "https://play.google.com/",
  },
};
