import {
  FaCentos,
  FaPython,
  FaRedhat,
  FaShopify,
  FaTerminal,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiDocker,
  SiFastapi,
  SiFigma,
  SiLangchain,
  SiMediapipe,
  SiRedux,
  SiRust,
  SiSpacy,
  SiTypescript,
} from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiClerk } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPytorch } from "react-icons/si";
import { Icon, Link } from "../types";
import { TfiGithub } from "react-icons/tfi";
import { IoLogoElectron, IoRocket } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiAuth0 } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiReactbootstrap } from "react-icons/si";
import { TbBrandDatabricks, TbBrandFramerMotion } from "react-icons/tb";
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
import { BiLogoPlayStore, BiLogoPostgresql } from "react-icons/bi";
import { FaPhp } from "react-icons/fa";
import { AiFillOpenAI, AiOutlineDotNet } from "react-icons/ai";
import { PiFileCSharpFill } from "react-icons/pi";
import { SiD3Dotjs } from "react-icons/si";
import { AiFillExperiment } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import { MdAddBusiness } from "react-icons/md";
import { FaFlutter } from "react-icons/fa6";
import { GrSystem } from "react-icons/gr";
import { MdMovie } from "react-icons/md";
import { FaBookAtlas } from "react-icons/fa6";
import { MdCastle } from "react-icons/md";
import { FaPersonSwimming } from "react-icons/fa6";
import { TbWriting } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { PiFileSql } from "react-icons/pi";
import { SiOracle } from "react-icons/si";
import { CiPaperplane } from "react-icons/ci";
import { SiAdobe } from "react-icons/si";
import { SiDevpost } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { RiGeminiFill } from "react-icons/ri";
import { AiOutlineChrome } from "react-icons/ai";
import { IoExtensionPuzzle } from "react-icons/io5";
import { SiOpencv } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { FaBox } from "react-icons/fa";
import { RiDraftFill } from "react-icons/ri";
import { FaBomb } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import {
  SiSvelte,
  SiKubernetes,
  SiTerraform,
  SiHelm,
  SiNginx,
  SiTraefikproxy,
  SiGithubactions,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiClaude } from "react-icons/si";
import { BsBrowserChrome } from "react-icons/bs";
import { FaChartLine, FaHandshake } from "react-icons/fa";
import { MdBuild, MdTrendingUp } from "react-icons/md";
import { SiDeepgram } from "react-icons/si";
import { SiElevenlabs } from "react-icons/si";
import { RiVoiceAiFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";

export const Icons: Record<string, Icon | Link> = {
  langchain: {
    name: "LangChain",
    icon: <SiLangchain color="black" size={24} />,
    link: "https://langchain.com/",
  },
  shopify: {
    name: "Shopify",
    icon: <FaShopify />,
    link: "https://shopify.com",
  },

  fetchai: {
    name: "Fetch.ai",
    icon: <CgMenuGridR />,
    link: "https://fetch.ai",
  },
  instagram: {
    name: "Instagram",
    icon: <RiInstagramFill color="black" size={24} />,
    link: "https://instagram.com/",
  },
  vapi: {
    name: "Vapi",
    icon: <RiVoiceAiFill color="black" size={24} />,
    link: "https://vapi.ai/",
  },
  elevenlabs: {
    name: "ElevenLabs",
    icon: <SiElevenlabs color="black" size={24} />,
    link: "https://elevenlabs.io/",
  },
  deepgram: {
    name: "Deepgram",
    icon: <SiDeepgram color="black" size={24} />,
    link: "https://deepgram.com/",
  },
  rust: {
    name: "Rust",
    icon: <SiRust color="black" size={24} />,
    link: "https://www.rust-lang.org/",
  },
  terminal: {
    name: "Terminal",
    icon: <FaTerminal color="black" size={24} />,
    link: null,
  },
  linfa: {
    name: "Linfa",
    icon: <GiArtificialIntelligence color="black" size={24} />,
    link: "https://github.com/rust-ml/linfa",
  },
  growth: {
    name: "Growth",
    icon: <FaChartLine color="black" size={24} />,
    link: null,
  },
  ops: {
    name: "Operations",
    icon: <MdBuild color="black" size={24} />,
    link: null,
  },
  sales: {
    name: "Sales",
    icon: <FaHandshake color="black" size={24} />,
    link: null,
  },
  gtm: {
    name: "GTM",
    icon: <MdTrendingUp color="black" size={24} />,
    link: null,
  },
  browserless: {
    name: "Browserless",
    icon: <BsBrowserChrome color="black" size={24} />,
    link: "https://www.browserless.io/",
  },
  browser_use: {
    name: "Browser-Use",
    icon: <BsBrowserChrome color="black" size={24} />,
    link: "https://github.com/browserless/browser_use",
  },
  anthropic: {
    name: "Claude",
    icon: <SiClaude color="black" size={24} />,
    link: "https://www.anthropic.com/",
  },
  twitter: {
    name: "Twitter",
    icon: <FaSquareXTwitter color="black" size={24} />,
    link: "https://x.com/",
  },
  svelte: {
    name: "Svelte",
    icon: <SiSvelte color="black" size={24} />,
    link: "https://svelte.dev/",
  },
  kubernetes: {
    name: "Kubernetes",
    icon: <SiKubernetes color="black" size={24} />,
    link: "https://kubernetes.io/",
  },
  terraform: {
    name: "Terraform",
    icon: <SiTerraform color="black" size={24} />,
    link: "https://developer.hashicorp.com/terraform",
  },
  helm: {
    name: "Helm",
    icon: <SiHelm color="black" size={24} />,
    link: "https://helm.sh/",
  },
  nginx: {
    name: "Nginx",
    icon: <SiNginx color="black" size={24} />,
    link: "https://nginx.org/",
  },
  traefik: {
    name: "Traefik",
    icon: <SiTraefikproxy color="black" size={24} />,
    link: "https://traefik.io/",
  },
  aws_eks: {
    name: "Amazon EKS",
    icon: <FaAws color="black" size={24} />,
    link: "https://aws.amazon.com/eks/",
  },
  githubactions: {
    name: "GitHub Actions",
    icon: <SiGithubactions color="black" size={24} />,
    link: "https://github.com/features/actions",
  },
  centos: {
    name: "CentOS",
    icon: <FaCentos color="black" size={24} />,
    link: "https://www.centos.org/",
  },
  redhat: {
    icon: <FaRedhat color="black" size={24} />,
    name: "Red Hat",
    link: "https://www.redhat.com/en",
  },
  fastapi: {
    name: "FastAPI",
    icon: <SiFastapi color="black" size={24} />,
    link: "https://fastapi.tiangolo.com/",
  },
  gmail: {
    name: "Gmail",
    icon: <MdEmail color="black" size={24} />,
    link: "https://mail.google.com/",
  },
  docker: {
    name: "Docker",
    icon: <SiDocker color="black" size={24} />,
    link: "https://www.docker.com/",
  },
  styled_components: {
    name: "Styled Components",
    icon: <SiStyledcomponents color="black" size={24} />,
    link: "https://styled-components.com/",
  },
  fusejs: {
    name: "Fuse.js",
    icon: <FaBomb color="black" size={24} />,
    link: "https://fusejs.io/",
  },
  draftjs: {
    name: "Draft.js",
    icon: <RiDraftFill color="black" size={24} />,
    link: "https://draftjs.org/",
  },
  dndkit: {
    name: "DndKit",
    icon: <FaBox color="black" size={24} />,
    link: "https://dndkit.com/",
  },
  electron: {
    name: "Electron",
    icon: <IoLogoElectron color="black" size={24} />,
    link: "https://www.electronjs.org/",
  },
  postgresql: {
    name: "PostgreSQL",
    icon: <BiLogoPostgresql color="black" size={24} />,
    link: "https://www.postgresql.org/",
  },
  framer_motion: {
    name: "Framer Motion",
    icon: <TbBrandFramerMotion color="black" size={24} />,
    link: "https://www.framer.com/docs/",
  },
  openai: {
    name: "OpenAI",
    icon: <AiFillOpenAI color="black" size={24} />,
    link: "https://openai.com/",
  },
  redux: {
    name: "Redux",
    icon: <SiRedux color="black" size={24} />,
    link: "https://redux.js.org/",
  },
  typescript: {
    name: "TypeScript",
    icon: <SiTypescript color="black" size={24} />,
    link: "https://www.typescriptlang.org/",
  },
  tensorflow: {
    name: "TensorFlow",
    icon: <SiTensorflow color="black" size={24} />,
    link: "https://www.tensorflow.org/",
  },
  mediapipe: {
    name: "MediaPipe",
    icon: <SiMediapipe color="black" size={24} />,
    link: "https://github.com/google-ai-edge/mediapipe",
  },
  opencv: {
    name: "OpenCV",
    icon: <SiOpencv color="black" size={24} />,
    link: "https://opencv.org/",
  },
  chrome_extension: {
    name: "Chrome Extension",
    icon: <IoExtensionPuzzle color="black" size={24} />,
    link: "https://developer.chrome.com/docs/extensions",
  },
  convex: {
    name: "Convex",
    icon: <AiOutlineChrome color="black" size={24} />,
    link: "https://www.convex.dev/",
  },
  gemini: {
    name: "Gemini",
    icon: <RiGeminiFill color="black" size={24} />,
    link: "https://gemini.com/",
  },
  plaid: {
    name: "Plaid",
    icon: <FaMoneyCheckAlt color="black" size={24} />,
    link: "https://plaid.com/",
  },
  threejs: {
    name: "Three.js",
    icon: <TbBrandThreejs color="black" size={24} />,
    link: "https://threejs.org/",
  },
  devpost: {
    name: "Devpost",
    icon: <SiDevpost color="black" size={24} />,
    link: "https://devpost.com/",
  },
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
  mssql: {
    name: "MS SQL",
    icon: <PiFileSql color="black" size={24} />,
    link: "https://docs.microsoft.com/en-us/sql/",
  },
  oracle: {
    name: "Oracle",
    icon: <SiOracle color="black" size={24} />,
    link: "https://www.oracle.com/database/",
  },
  reactnativepaper: {
    name: "React Native Paper",
    icon: <CiPaperplane color="black" size={24} />,
    link: "https://callstack.github.io/react-native-paper/",
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
  flutter: {
    name: "Flutter",
    icon: <FaFlutter color="black" size={24} />,
    link: "https://flutter.dev/",
  },
  php: {
    name: "PHP",
    icon: <FaPhp color="black" size={24} />,
    link: "https://www.php.net/",
  },
  dot_net: {
    name: ".NET",
    icon: <AiOutlineDotNet color="black" size={24} />,
    link: "https://dotnet.microsoft.com/",
  },
  c_sharp: {
    name: "C#",
    icon: <PiFileCSharpFill color="black" size={24} />,
    link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
  },
  d3: {
    name: "D3",
    icon: <SiD3Dotjs color="black" size={24} />,
    link: "https://d3js.org/",
  },
  startup: {
    name: "Startup",
    icon: <AiFillExperiment color="black" size={24} />,
    link: null,
  },
  management: {
    name: "Management",
    icon: <MdManageAccounts color="black" size={24} />,
    link: null,
  },
  marketing: {
    name: "Marketing",
    icon: <MdAddBusiness color="black" size={24} />,
    link: null,
  },
  systems: {
    name: "Backend systems",
    icon: <GrSystem color="black" size={24} />,
    link: null,
  },
  movie: {
    name: "Movie",
    icon: <MdMovie color="black" size={24} />,
    link: null,
  },
  nonfiction: {
    name: "Nonfiction",
    icon: <FaBookAtlas color="black" size={24} />,
    link: null,
  },
  fiction: {
    name: "Fiction",
    icon: <MdCastle color="black" size={24} />,
    link: null,
  },
  swimming: {
    name: "Swimming",
    icon: <FaPersonSwimming color="black" size={24} />,
    link: null,
  },
  writing: {
    name: "Writing",
    icon: <TbWriting color="black" size={24} />,
    link: null,
  },
  email: {
    name: "Email",
    icon: <MdEmail color="black" size={24} />,
    link: null,
  },
  linkedin: {
    name: "LinkedIn",
    icon: <FaLinkedin color="black" size={24} />,
    link: null,
  },
  adobe: {
    name: "Adobe",
    icon: <SiAdobe color="black" size={24} />,
    link: "https://www.adobe.com/",
  },
  figma: {
    name: "Figma",
    icon: <SiFigma color="black" size={24} />,
    link: "https://www.figma.com/",
  },
};
