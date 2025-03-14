import { Project } from "../types";
import { Icons } from "./icons";

export const projects: Project[] = [
  {
    title: "Raydar",
    type: "pc",
    screen: "/raydar.png",
    description:
      "A lost and found ML solution that connects uploaded sketches and descriptions of objects to a database of found items.",
    startDate: "Feb. 9 2025",
    endDate: "Feb. 11 2025",
    points: [
      "A sketch model trained with Pytorch and Sckit-Learn that decodes user drawn sketches.",
      "A text model that uses Levenshtein, Fuzzy, and SpaCy to match metadata with user descriptions.",
      "Beautifully crafted UI with Shadcn UI, Tailwind CSS, and Next.js.",
      "Robust authentication and data flow with Clerk, Prisma, and Supabase.",
    ],
    icons: [
      {
        name: Icons.python.name,
        icon: Icons.python.icon,
        link: Icons.python.link,
      },
      {
        name: Icons.nextjs.name,
        icon: Icons.nextjs.icon,
        link: Icons.nextjs.link,
      },
      {
        name: Icons.spacy.name,
        icon: Icons.spacy.icon,
        link: Icons.spacy.link,
      },
      {
        name: Icons.shadcn.name,
        icon: Icons.shadcn.icon,
        link: Icons.shadcn.link,
      },
      {
        name: Icons.scikit.name,
        icon: Icons.scikit.icon,
        link: Icons.scikit.link,
      },
      {
        name: Icons.clerk.name,
        icon: Icons.clerk.icon,
        link: Icons.clerk.link,
      },
      {
        name: Icons.supabase.name,
        icon: Icons.supabase.icon,
        link: Icons.supabase.link,
      },
      {
        name: Icons.prisma.name,
        icon: Icons.prisma.icon,
        link: Icons.prisma.link,
      },
      {
        name: Icons.tailwind.name,
        icon: Icons.tailwind.icon,
        link: Icons.tailwind.link,
      },
      {
        name: Icons.pytorch.name,
        icon: Icons.pytorch.icon,
        link: Icons.pytorch.link,
      },
    ],
    externalLinks: [
      {
        name: Icons.website.name,
        icon: Icons.website.icon,
        link: "https://raydar.tech/",
      },
    ],
  },
  {
    title: "Guardpup",
    type: "pc",
    screen: "/guardpup.png",
    description:
      "A MadHacks hackathon entry that deters deepfake manipulation by combining AI-driven image search, usage analytics, and screenshot prevention.",
    startDate: "Nov. 2024",
    endDate: "Nov. 2024",
    points: [
      "Built a React JS interface with Bootstrap for smooth user experiences, secured by Auth0.",
      "Used MongoDB to store image data and track user activity for leak forensics.",
      "Leveraged Databricks and pretrained AI models for deepfake detection and image processing.",
      "Provided post, view, and download metrics to identify potential media leak sources.",
    ],
    icons: [
      {
        name: Icons.mongodb.name,
        icon: Icons.mongodb.icon,
        link: Icons.mongodb.link,
      },
      {
        name: Icons.auth0.name,
        icon: Icons.auth0.icon,
        link: Icons.auth0.link,
      },
      {
        name: Icons.react.name,
        icon: Icons.react.icon,
        link: Icons.react.link,
      },
      {
        name: Icons.bootstrap.name,
        icon: Icons.bootstrap.icon,
        link: Icons.bootstrap.link,
      },
      {
        name: Icons.databricks.name,
        icon: Icons.databricks.icon,
        link: Icons.databricks.link,
      },
    ],
    externalLinks: [
      {
        name: Icons.github.name,
        icon: Icons.github.icon,
        link: "https://github.com/ArslanKamchybekov/madhacks-acm",
      },
      {
        name: Icons.video.name,
        icon: Icons.video.icon,
        link: "https://youtu.be/IoqLMKYulzc",
      },
    ],
  },
  {
    title: "ElectroBook",
    type: "pixel",
    screen: "/electrobook.png",
    description:
      "An Android app for storing eBooks locally, built with React Native, SQLite, MMKV, and Filesystem, and managed through Zustand.",
    startDate: "Dec. 2023",
    endDate: "Aug. 2024",
    points: [
      "Implemented a cross-platform user interface with React Native.",
      "Utilized SQLite, MMKV, and Filesystem for robust local storage and offline support.",
      "Employed Git and Expo for version control and deployment.",
      "Published the final product on the Google Play Store with 100+ downloads.",
    ],
    icons: [
      {
        name: Icons.reactnative.name,
        icon: Icons.reactnative.icon,
        link: Icons.reactnative.link,
      },
      {
        name: Icons.sqlite.name,
        icon: Icons.sqlite.icon,
        link: Icons.sqlite.link,
      },
      {
        name: Icons.expo.name,
        icon: Icons.expo.icon,
        link: Icons.expo.link,
      },
      {
        name: Icons.javascript.name,
        icon: Icons.javascript.icon,
        link: Icons.javascript.link,
      },
    ],
    externalLinks: [
      {
        name: Icons.github.name,
        icon: Icons.github.icon,
        link: "https://github.com/anirudhk-tech/ElectroBook",
      },
      {
        name: Icons.playstore.name,
        icon: Icons.playstore.icon,
        link: "https://play.google.com/store/apps/details?id=com.anirudh_k.ElectroBook_Latest&hl=en_US",
      },
    ],
  },
  {
    title: "Crypto Trader",
    type: "pc",
    screen: "/robinhood.png",
    description:
      "A Python-based trading bot leveraging the Robinhood API for automated cryptocurrency trades.",
    startDate: "Sep. 2024",
    endDate: "Oct. 2024",
    points: [
      "Developed Python algorithms for automated crypto trading on Robinhood.",
      "Implemented encryption to secure API credentials and transaction data.",
      "Executed real-time trades and tested performance using backtesting techniques.",
    ],
    icons: [
      {
        name: Icons.python.name,
        icon: Icons.python.icon,
        link: Icons.python.link,
      },
      {
        name: Icons.robinhood.name,
        icon: Icons.robinhood.icon,
        link: Icons.robinhood.link,
      },
      {
        name: Icons.security_and_encryption.name,
        icon: Icons.security_and_encryption.icon,
        link: Icons.security_and_encryption.link,
      },
    ],
    externalLinks: [
      {
        name: Icons.github.name,
        icon: Icons.github.icon,
        link: "https://github.com/anirudhk-tech/Crypto-Trading-Algo",
      },
    ],
  },
  {
    title: "EcoSteps",
    type: "pc",
    screen: "/ecosteps.png",
    description:
      "A NASA Space Apps 2024 project that gamifies eco-friendly actions for the next generation, backed by AI-driven insights from NASA data.",
    startDate: "Oct. 2024",
    endDate: "Oct. 2024",
    points: [
      "Developed a React JS front-end for an engaging user experience.",
      "Combined MongoDB (for AI) and Flask (for RAG + LLM) to summarize NASA's database.",
      "Implemented secure backend systems with Supabase and Express.js/Node.js.",
      "Created original pixel art and assets via Stable Diffusion and Adobe tools.",
      "Built a teacher/student flow with robust authentication for gamified learning.",
      "Led a 5-person team over two days, presenting to judges at NASA Chicago.",
    ],
    icons: [
      {
        name: Icons.rag.name,
        icon: Icons.rag.icon,
        link: Icons.rag.link,
      },
      {
        name: Icons.llm.name,
        icon: Icons.llm.icon,
        link: Icons.llm.link,
      },
      {
        name: Icons.supabase.name,
        icon: Icons.supabase.icon,
        link: Icons.supabase.link,
      },
      {
        name: Icons.react.name,
        icon: Icons.react.icon,
        link: Icons.react.link,
      },
      {
        name: Icons.mongodb.name,
        icon: Icons.mongodb.icon,
        link: Icons.mongodb.link,
      },
      {
        name: Icons.express.name,
        icon: Icons.express.icon,
        link: Icons.express.link,
      },
      {
        name: Icons.node.name,
        icon: Icons.node.icon,
        link: Icons.node.link,
      },
      {
        name: Icons.flask.name,
        icon: Icons.flask.icon,
        link: Icons.flask.link,
      },
      {
        name: Icons.adobe.name,
        icon: Icons.adobe.icon,
        link: Icons.adobe.link,
      },
    ],
    externalLinks: [
      {
        name: Icons.github.name,
        icon: Icons.github.icon,
        link: "https://github.com/anirudhk-tech/EcoSteps",
      },
    ],
  },
  {
    title: "Personal Discord Bot",
    type: "pc",
    screen: "/discord.png",
    description:
      "A Python-powered Discord bot designed for a personal server, featuring a simulated stock market, Reddit integrations, and text encryption.",
    startDate: "Jun. 2020",
    endDate: "Sep. 2020",
    points: [
      "Utilized Python to automate server tasks and manage user interactions.",
      "Implemented a simulated stock market system for buying and selling stocks.",
      "Fetched random posts via a Reddit command for fresh content.",
      "Created a customizable text encryption system that allowed users to create their own secret languages.",
    ],
    icons: [
      {
        name: Icons.python.name,
        icon: Icons.python.icon,
        link: Icons.python.link,
      },
      {
        name: Icons.security_and_encryption.name,
        icon: Icons.security_and_encryption.icon,
        link: Icons.security_and_encryption.link,
      },
      {
        name: Icons.discord.name,
        icon: Icons.discord.icon,
        link: Icons.discord.link,
      },
    ],
    externalLinks: [
      {
        name: Icons.github.name,
        icon: Icons.github.icon,
        link: "https://github.com/anirudhk-tech/Personal-Discord-Bot",
      },
    ],
  },
];
