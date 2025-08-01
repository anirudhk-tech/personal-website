import {
  FaPython,
  FaReact,
  FaNode,
  FaPhp,
  FaBox,
  FaBomb,
  FaAws,
} from "react-icons/fa";
import {
  RiDraftFill,
  RiGeminiFill,
  RiNextjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiSpacy,
  SiShadcnui,
  SiScikitlearn,
  SiClerk,
  SiPrisma,
  SiPytorch,
  SiAuth0,
  SiReactbootstrap,
  SiExpress,
  SiFlask,
  SiSqlite,
  SiExpo,
  SiD3Dotjs,
  SiMui,
  SiOracle,
  SiAdobe,
  SiFigma,
  SiOpencv,
  SiMediapipe,
  SiTypescript,
  SiRedux,
  SiStyledcomponents,
  SiDocker,
  SiFastapi,
  SiSvelte,
  SiKubernetes,
  SiHelm,
  SiTerraform,
  SiNginx,
  SiTraefikproxy,
  SiRust,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { TbBrandFramerMotion, TbBrandReactNative } from "react-icons/tb";
import {
  IoExtensionPuzzle,
  IoLogoElectron,
  IoLogoJavascript,
} from "react-icons/io5";
import {
  AiOutlineDotNet,
  AiFillExperiment,
  AiOutlineChrome,
  AiFillOpenAI,
} from "react-icons/ai";
import { PiFileCSharpFill, PiFileSql } from "react-icons/pi";
import { MdManageAccounts, MdAddBusiness } from "react-icons/md";
import { GrSystem } from "react-icons/gr";
import { FaFlutter } from "react-icons/fa6";
import { TbCircleDashedLetterC } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { FiFramer } from "react-icons/fi";
import { FaHorse } from "react-icons/fa";
import { CiPaperplane } from "react-icons/ci";
import { FaStripeS } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiGithubactions } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { FaRedhat } from "react-icons/fa";
import { FaCentos } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { SiClaude } from "react-icons/si";
import { BsBrowserChrome } from "react-icons/bs";
import { FaChartLine, FaHandshake } from "react-icons/fa";
import { MdBuild, MdTrendingUp } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";

// Sections: Library, Language, Framework, UI, Database, Auth, Soft Skill, DevOps

export const skills = [
  {
    name: "Linfa",
    icon: <GiArtificialIntelligence color="black" size={24} />,
    link: "https://github.com/rust-ml/linfa",
    type: "Library",
  },
  {
    icon: <SiRust color="black" size={24} />,
    type: "Language",
    name: "Rust",
    link: "https://www.rust-lang.org/",
  },
  {
    icon: <FaChartLine color="black" size={24} />,
    type: "Soft Skill",
    name: "Growth",
    link: null,
  },
  {
    icon: <MdBuild color="black" size={24} />,
    type: "Soft Skill",
    name: "Operations",
    link: null,
  },
  {
    icon: <FaHandshake color="black" size={24} />,
    type: "Soft Skill",
    name: "Sales",
    link: null,
  },
  {
    icon: <MdTrendingUp color="black" size={24} />,
    type: "Soft Skill",
    name: "GTM",
    link: null,
  },
  {
    icon: <BsBrowserChrome color="black" size={24} />,
    type: "Library",
    name: "Browserless",
    link: "https://www.browserless.io/",
  },
  {
    icon: <BsBrowserChrome color="black" size={24} />,
    type: "Library",
    name: "Browser-Use",
    link: "https://github.com/browserless/browser_use",
  },
  {
    icon: <SiClaude color="black" size={24} />,
    type: "Library",
    name: "Claude",
    link: "https://www.anthropic.com/",
  },
  {
    icon: <SiSvelte color="black" size={24} />,
    type: "Framework",
    name: "Svelte",
    link: "https://svelte.dev/",
  },
  {
    icon: <SiKubernetes color="black" size={24} />,
    type: "DevOps",
    name: "Kubernetes",
    link: "https://kubernetes.io/",
  },
  {
    icon: <SiHelm color="black" size={24} />,
    type: "DevOps",
    name: "Helm",
    link: "https://helm.sh/",
  },
  {
    icon: <SiTerraform color="black" size={24} />,
    type: "DevOps",
    name: "Terraform",
    link: "https://developer.hashicorp.com/terraform",
  },
  {
    icon: <SiNginx color="black" size={24} />,
    type: "DevOps",
    name: "Nginx",
    link: "https://nginx.org/",
  },
  {
    icon: <SiTraefikproxy color="black" size={24} />,
    type: "DevOps",
    name: "Traefik",
    link: "https://traefik.io/",
  },
  {
    icon: <FaAws color="black" size={24} />,
    type: "DevOps",
    name: "Amazon EKS",
    link: "https://aws.amazon.com/eks/",
  },
  {
    icon: <SiGooglecloud color="black" size={24} />,
    type: "DevOps",
    name: "Google Cloud Platform",
    link: "https://cloud.google.com/",
  },
  {
    icon: <FaCentos color="black" size={24} />,
    type: "DevOps",
    name: "CentOS",
    link: "https://www.centos.org/",
  },
  {
    icon: <FaRedhat color="black" size={24} />,
    type: "DevOps",
    name: "Red Hat",
    link: "https://www.redhat.com/en",
  },
  {
    icon: <SiVercel color="black" size={24} />,
    type: "DevOps",
    name: "Vercel",
    link: "https://vercel.com/",
  },
  {
    icon: <SiGithubactions color="black" size={24} />,
    type: "DevOps",
    name: "GitHub Actions",
    link: "https://github.com/features/actions",
  },
  {
    icon: <SiFastapi color="black" size={24} />,
    type: "Framework",
    name: "FastAPI",
    link: "https://fastapi.tiangolo.com/",
  },
  {
    icon: <SiDocker color="black" size={24} />,
    type: "DevOps",
    name: "Docker",
  },
  {
    icon: <SiStyledcomponents color="black" size={24} />,
    type: "UI",
    name: "Styled Components",
    link: "https://styled-components.com/",
  },
  {
    icon: <FaBomb color="black" size={24} />,
    type: "Library",
    name: "Fuse.js",
    link: "https://fusejs.io/",
  },
  {
    icon: <RiDraftFill color="black" size={24} />,
    type: "Library",
    name: "Draft.js",
    link: "https://draftjs.org/",
  },
  {
    icon: <FaBox color="black" size={24} />,
    type: "Library",
    name: "Dnd Kit",
    link: "https://dndkit.com/",
  },
  {
    icon: <IoLogoElectron color="black" size={24} />,
    type: "Framework",
    name: "Electron",
    link: "https://www.electronjs.org/",
  },
  {
    icon: <RiGeminiFill color="black" size={24} />,
    type: "Library",
    name: "Gemini",
    link: "https://www.gemini.com/",
  },
  {
    icon: <BiLogoPostgresql color="black" size={24} />,
    type: "Database",
    name: "PostgreSQL",
    link: "https://www.postgresql.org/",
  },
  {
    icon: <TbBrandFramerMotion color="black" size={24} />,
    type: "UI",
    name: "Framer Motion",
    link: "https://www.framer.com/motion/",
  },
  {
    icon: <AiFillOpenAI color="black" size={24} />,
    type: "Library",
    name: "OpenAI",
    link: "https://openai.com/",
  },
  {
    icon: <SiRedux color="black" size={24} />,
    type: "Library",
    name: "Redux",
    link: "https://redux.js.org/",
  },
  {
    icon: <SiTensorflow color="black" size={24} />,
    type: "Library",
    name: "TensorFlow",
    link: "https://www.tensorflow.org/",
  },
  {
    icon: <FaStripeS color="black" size={24} />,
    type: "Library",
    name: "Stripe",
    link: "https://stripe.com/",
  },
  {
    icon: <SiTypescript color="black" size={24} />,
    type: "Language",
    name: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
  {
    icon: <FaPython color="black" size={24} />,
    type: "Language",
    name: "Python",
    link: "https://www.python.org/",
  },
  {
    icon: <IoLogoJavascript color="black" size={24} />,
    type: "Language",
    name: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: <FaPhp color="black" size={24} />,
    type: "Language",
    name: "PHP",
    link: "https://www.php.net/",
  },
  {
    icon: <PiFileCSharpFill color="black" size={24} />,
    type: "Language",
    name: "C#",
    link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    icon: <RiNextjsFill color="black" size={24} />,
    type: "Framework",
    name: "Next.js",
    link: "https://nextjs.org/",
  },
  {
    icon: <FaReact color="black" size={24} />,
    type: "Framework",
    name: "React",
    link: "https://react.dev/",
  },
  {
    icon: <FaNode color="black" size={24} />,
    type: "Framework",
    name: "Node.js",
    link: "https://nodejs.org/",
  },
  {
    icon: <SiExpress color="black" size={24} />,
    type: "Framework",
    name: "Express.js",
    link: "https://expressjs.com/",
  },
  {
    icon: <SiFlask color="black" size={24} />,
    type: "Framework",
    name: "Flask",
    link: "https://flask.palletsprojects.com/en/2.2.x/",
  },
  {
    icon: <AiOutlineDotNet color="black" size={24} />,
    type: "Framework",
    name: ".NET",
    link: "https://dotnet.microsoft.com/",
  },
  {
    icon: <TbBrandReactNative color="black" size={24} />,
    type: "Framework",
    name: "React Native",
    link: "https://reactnative.dev/",
  },
  {
    icon: <SiExpo color="black" size={24} />,
    type: "Framework",
    name: "Expo",
    link: "https://expo.dev/",
  },
  {
    icon: <FaFlutter color="black" size={24} />,
    type: "Framework",
    name: "Flutter",
    link: "https://flutter.dev/",
  },
  {
    icon: <SiShadcnui color="black" size={24} />,
    type: "UI",
    name: "Shadcn UI",
    link: "https://shadcn.com/",
  },
  {
    icon: <RiTailwindCssFill color="black" size={24} />,
    type: "UI",
    name: "Tailwind CSS",
    link: "https://tailwindcss.com/",
  },
  {
    icon: <SiReactbootstrap color="black" size={24} />,
    type: "UI",
    name: "Bootstrap",
    link: "https://getbootstrap.com/",
  },
  {
    icon: <SiSpacy color="black" size={24} />,
    type: "Library",
    name: "SpaCy",
    link: "https://spacy.io/",
  },
  {
    icon: <SiScikitlearn color="black" size={24} />,
    type: "Library",
    name: "Scikit-Learn",
    link: "https://scikit-learn.org/",
  },
  {
    icon: <SiPytorch color="black" size={24} />,
    type: "Library",
    name: "PyTorch",
    link: "https://pytorch.org/",
  },
  {
    icon: <SiD3Dotjs color="black" size={24} />,
    type: "Library",
    name: "D3",
    link: "https://d3js.org/",
  },
  {
    icon: <RiSupabaseFill color="black" size={24} />,
    type: "Database",
    name: "Supabase",
    link: "https://supabase.com/",
  },
  {
    icon: <SiPrisma color="black" size={24} />,
    type: "Database",
    name: "Prisma",
    link: "https://www.prisma.io/",
  },
  {
    icon: <DiMongodb color="black" size={24} />,
    type: "Database",
    name: "MongoDB",
    link: "https://www.mongodb.com/",
  },
  {
    icon: <SiSqlite color="black" size={24} />,
    type: "Database",
    name: "SQLite",
    link: "https://sqlite.org/",
  },
  {
    icon: <SiClerk color="black" size={24} />,
    type: "Auth",
    name: "Clerk",
    link: "https://clerk.dev/",
  },
  {
    icon: <SiAuth0 color="black" size={24} />,
    type: "Auth",
    name: "Auth0",
    link: "https://auth0.com/",
  },
  {
    icon: <AiFillExperiment color="black" size={24} />,
    type: "Soft Skill",
    name: "Startup",
    link: null,
  },
  {
    icon: <MdManageAccounts color="black" size={24} />,
    type: "Soft Skill",
    name: "Management",
    link: null,
  },
  {
    icon: <MdAddBusiness color="black" size={24} />,
    type: "Soft Skill",
    name: "Marketing",
    link: null,
  },
  {
    icon: <GrSystem color="black" size={24} />,
    type: null,
    name: "Backend systems",
    link: null,
  },
  {
    icon: <SiMui color="black" size={24} />,
    type: "UI",
    name: "MUI",
    link: "https://mui.com/",
  },
  {
    icon: <TbCircleDashedLetterC color="black" size={24} />,
    type: "Language",
    name: "C",
    link: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
  {
    icon: <FaPlus color="black" size={24} />,
    type: "Language",
    name: "C++",
    link: "https://cplusplus.com/",
  },
  {
    icon: <SiChakraui color="black" size={24} />,
    type: "UI",
    name: "Chakra UI",
    link: "https://chakra-ui.com/",
  },
  {
    icon: <FiFramer color="black" size={24} />,
    type: "UI",
    name: "Framer Motion",
    link: "https://www.framer.com/motion/",
  },
  {
    icon: <TbBrandThreejs color="black" size={24} />,
    type: "Library",
    name: "Three.js",
    link: "https://threejs.org/",
  },
  {
    icon: <FaHorse color="black" size={24} />,
    type: "UI",
    name: "Reanimated",
    link: "http://docs.swmansion.com/react-native-reanimated/",
  },
  {
    icon: <CiPaperplane color="black" size={24} />,
    type: "UI",
    name: "React Native Paper",
    link: "https://callstack.github.io/react-native-paper/",
  },
  {
    icon: <SiOracle color="black" size={24} />,
    type: "Database",
    name: "Oracle",
    link: "https://www.oracle.com/database/",
  },
  {
    icon: <PiFileSql color="black" size={24} />,
    type: "Database",
    name: "MS SQL",
    link: "https://docs.microsoft.com/en-us/sql/",
  },
  {
    icon: <SiAdobe color="black" size={24} />,
    type: "UI",
    name: "Adobe",
    link: "https://www.adobe.com/",
  },
  {
    icon: <SiFigma color="black" size={24} />,
    type: "UI",
    name: "Figma",
    link: "https://www.figma.com/",
  },
  {
    icon: <AiOutlineChrome color="black" size={24} />,
    type: "Database",
    name: "Convex",
    link: "https://www.convex.dev/",
  },
  {
    name: "OpenCV",
    icon: <SiOpencv color="black" size={24} />,
    link: "https://opencv.org/",
    type: "Library",
  },
  {
    name: "Chrome Extension",
    icon: <IoExtensionPuzzle color="black" size={24} />,
    link: "https://developer.chrome.com/docs/extensions",
    type: "Library",
  },
  {
    name: "Mediapipe",
    icon: <SiMediapipe color="black" size={24} />,
    link: "https://github.com/google-ai-edge/mediapipe",
    type: "Library",
  },
];
