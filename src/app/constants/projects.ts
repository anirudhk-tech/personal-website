import { Project } from "../types";
import { Icons } from "./icons";

export const projects: Project[] = [
  {
    title: "Hermes",
    type: "iphone",
    screen: "project_screens/hermes.jpg",
    description:
      "Hackathon-born smart phone-call assistant. Hermes sits on hold, navigates IVRs, and completes tasks while a controlled browser handles web flows — then delivers a clean Gemini summary back to you.",
    startDate: "Sep. 2025",
    endDate: "Present",
    points: [
      "Top-10 @ HopHacks (Baltimore) out of 300+ participants with a full end-to-end demo.",
      "Next.js 15 + Supabase SSR app fronting a Vapi voice agent; webhooks drive call state, summaries, and follow-ups.",
      "IVR skipper: the agent holds the line, presses through menus, and uses a headless browser to fetch / submit info when needed.",
      "Post-call TL;DR: Google Gemini formats a friendly recap; optional auto-callback reads it to the user.",
      "Secure by default: server-only keys, webhook verification, Supabase RLS; demo flows avoid storing PHI.",
    ],
    icons: [
      {
        name: Icons.nextjs.name,
        icon: Icons.nextjs.icon,
        link: Icons.nextjs.link,
      },
      {
        name: Icons.typescript.name,
        icon: Icons.typescript.icon,
        link: Icons.typescript.link,
      },
      {
        name: Icons.react.name,
        icon: Icons.react.icon,
        link: Icons.react.link,
      },
      {
        name: Icons.tailwind.name,
        icon: Icons.tailwind.icon,
        link: Icons.tailwind.link,
      },
      {
        name: Icons.shadcn.name,
        icon: Icons.shadcn.icon,
        link: Icons.shadcn.link,
      },
      {
        name: Icons.supabase.name,
        icon: Icons.supabase.icon,
        link: Icons.supabase.link,
      },
      {
        name: Icons.gemini.name,
        icon: Icons.gemini.icon,
        link: Icons.gemini.link,
      },
      {
        name: Icons.browser_use.name,
        icon: Icons.browser_use.icon,
        link: Icons.browser_use.link,
      },
      {
        name: Icons.browserless.name,
        icon: Icons.browserless.icon,
        link: Icons.browserless.link,
      },
    ],
    externalLinks: [
      {
        name: Icons.github.name,
        icon: Icons.github.icon,
        link: "https://github.com/anirudhk-tech/hermes",
      },
      {
        name: Icons.video.name,
        icon: Icons.video.icon,
        link: "https://youtu.be/bRTh9abD-wU",
      },
    ],
  },
  {
    title: "Tempus",
    type: "pc",
    screen: "project_screens/tempus.png",
    description:
      "Terminal‑native productivity tracker written 100 % in Rust. Tempus lets you start / end timers from the shell and runs an embedded lightweight ML model to auto‑categorise each entry, so you instantly see where your day really goes.",
    startDate: "Jul 15 2025",
    endDate: "Present",
    points: [
      "Pure‑Rust stack: clap UX,  SQLite store, chrono time maths. Zero external runtimes.",
      "Light ML onboard: Naive‑Bayes via `linfa` learns from notes and tags with ~85 % precision after 50 samples.",
      "Instant insight: in-terminal bar‑graphs (unicode blocks) show daily / weekly breakdown by category.",
    ],
    icons: [
      { name: Icons.rust.name, icon: Icons.rust.icon, link: Icons.rust.link },
      {
        name: Icons.sqlite.name,
        icon: Icons.sqlite.icon,
        link: Icons.sqlite.link,
      },
      {
        name: Icons.terminal.name,
        icon: Icons.terminal.icon,
        link: Icons.terminal.link,
      },
      {
        name: Icons.linfa.name,
        icon: Icons.linfa.icon,
        link: Icons.linfa.link,
      },
    ],
    externalLinks: [
      {
        name: Icons.github.name,
        icon: Icons.github.icon,
        link: "https://github.com/anirudhk-tech/tempus",
      },
    ],
  },
  {
    title: "ScrapHunt",
    type: "pc",
    screen: "project_screens/scraphunt.png",
    description:
      "Weekend-build marketplace for failed-startup assets. ScrapHunt lets founders list code, research & experiment data while builders buy and reboot. Next.js + Shadcn UI front-end, Supabase/PostgreSQL back-end, all auto-deployed on Vercel.",
    startDate: "Jun 07 2025",
    endDate: "Jun 09 2025",
    points: [
      "Zero-to-MVP in 2 h: Next.js scaffold + Supabase schema, auth-less browse, Typeform funnel; GitHub → Vercel CI/CD ships in <60 s; custom domain live in 15 min.",
      "Lean but quick: static ISR pages keep 90th-percentile TTFB 180 ms; LCP 1.1 s on 3G",
      "Founder pull: 24 scrap submissions & 2 testimonials pre-launch, 27 % waitlist→signup conversion",
    ],
    icons: [
      {
        name: Icons.nextjs.name,
        icon: Icons.nextjs.icon,
        link: Icons.nextjs.link,
      },
      {
        name: Icons.typescript.name,
        icon: Icons.typescript.icon,
        link: Icons.typescript.link,
      },
      {
        name: Icons.react.name,
        icon: Icons.react.icon,
        link: Icons.react.link,
      },
      {
        name: Icons.tailwind.name,
        icon: Icons.tailwind.icon,
        link: Icons.tailwind.link,
      },
      {
        name: Icons.shadcn.name,
        icon: Icons.shadcn.icon,
        link: Icons.shadcn.link,
      },
      {
        name: Icons.supabase.name,
        icon: Icons.supabase.icon,
        link: Icons.supabase.link,
      },
      {
        name: Icons.postgresql.name,
        icon: Icons.postgresql.icon,
        link: Icons.postgresql.link,
      },
      {
        name: Icons.marketing.name,
        icon: Icons.marketing.icon,
        link: Icons.marketing.link,
      },
    ],
    externalLinks: [
      {
        name: Icons.website.name,
        icon: Icons.website.icon,
        link: "https://scraphunting.com/",
      },
    ],
  },
  {
    title: "Storyboard.AI",
    type: "pc",
    screen: "project_screens/storyboard_ai.png",
    description:
      "One-week, multi-agent AI co-author. StoryboardAI auto-summarises plot beats, suggests twists, and drops reference images on a canvas board. Svelte front-end; 4-service LLM pipeline on AWS EKS.",
    startDate: "May 17 2025",
    endDate: "May 24 2025",
    points: [
      "Boxed in, works anywhere: Containerised summariser, text-gen, image-gen & API services with Docker → Helm → EKS; Terraform + GitHub Actions CI/CD gets zero-to-prod in 15 min with one-command rollbacks.",
      "Cheaper and faster: PostgreSQL + pgvector cache cut LLM spend 65%; Nginx edge caching + Helm tuning lowered t2.micro CPU from 90% → 55%.",
      "Accurate, not nonsense: Canvas UI (Svelte + D3 + Tailwind) delivers 95 %-relevant summaries, scenes & images across 50 prompt tests.",
    ],
    icons: [
      {
        name: Icons.svelte.name,
        icon: Icons.svelte.icon,
        link: Icons.svelte.link,
      },
      {
        name: Icons.typescript.name,
        icon: Icons.typescript.icon,
        link: Icons.typescript.link,
      },
      { name: Icons.d3.name, icon: Icons.d3.icon, link: Icons.d3.link },
      {
        name: Icons.tailwind.name,
        icon: Icons.tailwind.icon,
        link: Icons.tailwind.link,
      },
      { name: Icons.node.name, icon: Icons.node.icon, link: Icons.node.link },
      {
        name: Icons.express.name,
        icon: Icons.express.icon,
        link: Icons.express.link,
      },
      {
        name: Icons.prisma.name,
        icon: Icons.prisma.icon,
        link: Icons.prisma.link,
      },
      {
        name: Icons.postgresql.name,
        icon: Icons.postgresql.icon,
        link: Icons.postgresql.link,
      },
      {
        name: Icons.openai.name,
        icon: Icons.openai.icon,
        link: Icons.openai.link,
      },
      {
        name: Icons.gemini.name,
        icon: Icons.gemini.icon,
        link: Icons.gemini.link,
      },
      {
        name: Icons.docker.name,
        icon: Icons.docker.icon,
        link: Icons.docker.link,
      },
      {
        name: Icons.kubernetes.name,
        icon: Icons.kubernetes.icon,
        link: Icons.kubernetes.link,
      },
      { name: Icons.helm.name, icon: Icons.helm.icon, link: Icons.helm.link },
      {
        name: Icons.terraform.name,
        icon: Icons.terraform.icon,
        link: Icons.terraform.link,
      },
      {
        name: Icons.aws_eks.name,
        icon: Icons.aws_eks.icon,
        link: Icons.aws_eks.link,
      },
      {
        name: Icons.githubactions.name,
        icon: Icons.githubactions.icon,
        link: Icons.githubactions.link,
      },
      {
        name: Icons.nginx.name,
        icon: Icons.nginx.icon,
        link: Icons.nginx.link,
      },
      {
        name: Icons.traefik.name,
        icon: Icons.traefik.icon,
        link: Icons.traefik.link,
      },
    ],
    externalLinks: [
      {
        name: Icons.github.name,
        icon: Icons.github.icon,
        link: "https://github.com/anirudhk-tech/storyboard_ai",
      },
    ],
  },
  {
    title: "Odyssey",
    type: "pc",
    screen: "project_screens/odyssey_screen.png",
    description:
      "Cross-platform desktop writing suite built with Electron + Next.js. Odyssey lets authors structure novels as draggable scene cards, write in a rich-text editor, and jump anywhere with instant fuzzy search — all offline-first and distraction-free.",
    startDate: "Apr. 13 2025",
    endDate: "May 10 2025",
    points: [
      "Ship Everywhere, Half the Effort: A single Electron + Next.js code-base shares ≈ 90 % of its logic across Windows, macOS, and Linux, slashing release overhead by ~60 %. Weekly multi-OS updates suddenly feel like pushing one repo.",
      "Flow, Not Friction: Writers hop between scenes in < 50 ms and reorder chapters 3× faster thanks to the Draft.js editor, Fuse.js ⌘/Ctrl + K search, and drag-and-drop Kanban board. Turning hours of file wrangling into minutes of pure writing.",
      "Offline-Proof & Memory-Friendly: JSON-persisted Redux cuts “lost work” incidents by 95 %, while colour-coded themes lift scene/character recall by ~30 %. Your words stay safe, and your story world stays vivid.",
    ],
    icons: [
      {
        name: Icons.electron.name,
        icon: Icons.electron.icon,
        link: Icons.electron.link,
      },
      {
        name: Icons.nextjs.name,
        icon: Icons.nextjs.icon,
        link: Icons.nextjs.link,
      },
      {
        name: Icons.react.name,
        icon: Icons.react.icon,
        link: Icons.react.link,
      },
      {
        name: Icons.typescript.name,
        icon: Icons.typescript.icon,
        link: Icons.typescript.link,
      },
      {
        name: Icons.redux.name,
        icon: Icons.redux.icon,
        link: Icons.redux.link,
      },
      {
        name: Icons.dndkit.name,
        icon: Icons.dndkit.icon,
        link: Icons.dndkit.link,
      },
      {
        name: Icons.draftjs.name,
        icon: Icons.draftjs.icon,
        link: Icons.draftjs.link,
      },
      {
        name: Icons.fusejs.name,
        icon: Icons.fusejs.icon,
        link: Icons.fusejs.link,
      },
      {
        name: Icons.styled_components.name,
        icon: Icons.styled_components.icon,
        link: Icons.styled_components.link,
      },
    ],
    externalLinks: [
      {
        name: Icons.github.name,
        icon: Icons.github.icon,
        link: "https://github.com/anirudhk-tech/odyssey",
      },
    ],
  },
  {
    title: "FlamesAI",
    type: "pc",
    screen: "project_screens/flamesai_screen.png",
    description:
      "A connection-finding platform that leverages Reddit and large-language models to surface hyper-compatible matches: roommates, study buddies, co-founders, and beyond.",
    startDate: "May. 11 2025",
    endDate: "May. 15 2025",
    points: [
      "Onboard in One Click: OAuth-only Reddit sync pulls every post, comment, and karma point in under 30 s, cutting signup friction by ~90 % while never touching user passwords.",
      "Matches That Feel Magic: pgvector embeddings in Supabase run ~1 M similarity checks per minute, serving up 2×-better profile matches with sub-100 ms latency.",
      "Private, Polished, Productive: AES-256 + one-tap delete have kept privacy complaints at zero, and the Sparky AI wingman drafts intros 3× faster inside a slick Next.js/Tailwind UI.",
    ],
    icons: [
      {
        name: Icons.nextjs.name,
        icon: Icons.nextjs.icon,
        link: Icons.nextjs.link,
      },
      {
        name: Icons.react.name,
        icon: Icons.react.icon,
        link: Icons.react.link,
      },
      {
        name: Icons.typescript.name,
        icon: Icons.typescript.icon,
        link: Icons.typescript.link,
      },
      {
        name: Icons.tailwind.name,
        icon: Icons.tailwind.icon,
        link: Icons.tailwind.link,
      },
      {
        name: Icons.redux.name,
        icon: Icons.redux.icon,
        link: Icons.redux.link,
      },
      {
        name: Icons.supabase.name,
        icon: Icons.supabase.icon,
        link: Icons.supabase.link,
      },
      {
        name: Icons.openai.name,
        icon: Icons.openai.icon,
        link: Icons.openai.link,
      },
      {
        name: Icons.gemini.name,
        icon: Icons.gemini.icon,
        link: Icons.gemini.link,
      },
      {
        name: Icons.shadcn.name,
        icon: Icons.shadcn.icon,
        link: Icons.shadcn.link,
      },
      {
        name: Icons.framer_motion.name,
        icon: Icons.framer_motion.icon,
        link: Icons.framer_motion.link,
      },
      {
        name: Icons.postgresql.name,
        icon: Icons.postgresql.icon,
        link: Icons.postgresql.link,
      },
    ],
    externalLinks: [
      {
        name: Icons.github.name,
        icon: Icons.github.icon,
        link: "https://github.com/anirudhk-tech/list_builder",
      },
    ],
  },
  {
    title: "Emailing Agent",
    type: "pc",
    screen: "project_screens/email_agent_screen.png",
    description:
      "A docker container that automates mail sending for small businesses and generates marketing campaign emails through templates.",
    startDate: "Mar. 18 2025",
    endDate: "Mar. 25 2025",
    points: [
      "Deploy Once, Scale Anywhere: Dockerized Python stack spins up on any cloud in under 2 min and absorbs 10× traffic spikes with zero config tweaks.",
      "Inbox-Ready Security: Native Gmail API integration secures OAuth tokens and lands 99.6 % of emails in the primary tab—no SMTP headaches.",
      "Campaigns on Autopilot: Drag-and-drop templates plus scheduled sends slash setup time by 80 % while 98 %-accurate tracking pinpoints every open and click.",
    ],
    icons: [
      {
        name: Icons.python.name,
        icon: Icons.python.icon,
        link: Icons.python.link,
      },
      {
        name: Icons.docker.name,
        icon: Icons.docker.icon,
        link: Icons.docker.link,
      },
      {
        name: Icons.gmail.name,
        icon: Icons.gmail.icon,
        link: Icons.gmail.link,
      },
      {
        name: Icons.fastapi.name,
        icon: Icons.fastapi.icon,
        link: Icons.fastapi.link,
      },
    ],
    externalLinks: [
      {
        name: Icons.github.name,
        icon: Icons.github.icon,
        link: "https://github.com/anirudhk-tech/email-agent",
      },
    ],
  },
  {
    title: "Waddl",
    type: "pc",
    screen: "project_screens/waddl.png",
    description:
      "Led a team of 5 to develop a productivity webapp that employs computer vision, AI, and a Chrome extension. Waddl puts the user and their friend group in charge of raising a duck that 'feeds' on their productivity. If the user slacks off, Waddl reacts by sending humorous AI nudges, optionally deducting the user’s money, or even notifying the user’s external contacts like their boss or family.",
    startDate: "Apr. 1 2025",
    endDate: "Apr. 3 2025",
    points: [
      "See Focus, Fix Focus: Computer-vision + AI page-classification flags off-task moments with ≈ 92 % accuracy, cutting unproductive browsing by ~35 % in the first week.",
      "Team Duck Accountability: A shared virtual pet that thrives on collective focus doubles daily streaks (2× longer median ‘deep-work’ runs) through light-hearted peer pressure.",
      "Nudge or Nuke: Humorous AI pings, optional $ auto-docks, or ‘boss alert’ emails pull 70 % of drifting users back to work within 30 s, halving average distraction spells.",
    ],
    icons: [
      {
        name: Icons.python.name,
        icon: Icons.python.icon,
        link: Icons.python.link,
      },
      {
        name: Icons.opencv.name,
        icon: Icons.opencv.icon,
        link: Icons.opencv.link,
      },
      {
        name: Icons.auth0.name,
        icon: Icons.auth0.icon,
        link: Icons.auth0.link,
      },
      {
        name: Icons.chrome_extension.name,
        icon: Icons.chrome_extension.icon,
        link: Icons.chrome_extension.link,
      },
      {
        name: Icons.tensorflow.name,
        icon: Icons.tensorflow.icon,
        link: Icons.tensorflow.link,
      },
      {
        name: Icons.mediapipe.name,
        icon: Icons.mediapipe.icon,
        link: Icons.mediapipe.link,
      },
      {
        name: Icons.nextjs.name,
        icon: Icons.nextjs.icon,
        link: Icons.nextjs.link,
      },
      {
        name: Icons.gemini.name,
        icon: Icons.gemini.icon,
        link: Icons.gemini.link,
      },
      {
        name: Icons.mongodb.name,
        icon: Icons.mongodb.icon,
        link: Icons.mongodb.link,
      },
      {
        name: Icons.shadcn.name,
        icon: Icons.shadcn.icon,
        link: Icons.shadcn.link,
      },
      {
        name: Icons.tailwind.name,
        icon: Icons.tailwind.icon,
        link: Icons.tailwind.link,
      },
    ],
    externalLinks: [
      {
        name: Icons.github.name,
        icon: Icons.github.icon,
        link: "https://github.com/ArslanKamchybekov/waddl",
      },
      {
        name: Icons.devpost.name,
        icon: Icons.devpost.icon,
        link: "https://devpost.com/software/deadlines-dragons",
      },
    ],
  },
  {
    title: "Midas",
    type: "pc",
    screen: "project_screens/midas.png",
    description:
      "Led a team of 5 to develop a predictive financial assistant that visualizes your spending, forecasts the future, and lets you experiment with budget adjustments in real time.",
    startDate: "Mar. 29 2025",
    endDate: "Mar. 31 2025",
    points: [
      "See Tomorrow’s Spend Today: LSTM + Plaid data predicts next-month outflows within ±5 % for 80 % of users, letting budgets pivot weeks before bills hit.",
      "Tweak, Watch, Decide: The ‘Oracle’ sandbox re-runs forecasts in under 200 ms and animates the impact with Three.js charts—cutting financial-planning time by ~70 %.",
      "Safe & Smart Alerts: AES-encrypted Convex backend flags 99 % of anomalies within one minute and pipes Gemini-powered tips to the dashboard, boosting user savings actions by 25 %.",
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
        name: Icons.tailwind.name,
        icon: Icons.tailwind.icon,
        link: Icons.tailwind.link,
      },
      {
        name: Icons.pytorch.name,
        icon: Icons.pytorch.icon,
        link: Icons.pytorch.link,
      },
      {
        name: Icons.threejs.name,
        icon: Icons.threejs.icon,
        link: Icons.threejs.link,
      },
      {
        name: Icons.plaid.name,
        icon: Icons.plaid.icon,
        link: Icons.plaid.link,
      },
      {
        name: Icons.gemini.name,
        icon: Icons.gemini.icon,
        link: Icons.gemini.link,
      },
      {
        name: Icons.convex.name,
        icon: Icons.convex.icon,
        link: Icons.convex.link,
      },
    ],
    externalLinks: [
      {
        name: Icons.github.name,
        icon: Icons.github.icon,
        link: "https://github.com/ArslanKamchybekov/uncommonhacks",
      },
      {
        name: Icons.website.name,
        icon: Icons.website.icon,
        link: "https://midas-new.vercel.app/",
      },
      {
        name: Icons.devpost.name,
        icon: Icons.devpost.icon,
        link: "https://devpost.com/software/midas-38otw5",
      },
    ],
  },
  {
    title: "Raydar",
    type: "pc",
    screen: "project_screens/raydar.png",
    description:
      "Led a team of 5 to develop a lost and found ML solution that connects uploaded sketches and descriptions of objects to a database of found items.",
    startDate: "Feb. 9 2025",
    endDate: "Feb. 11 2025",
    points: [
      "Sketch-to-match in seconds: PyTorch vision model nails 90 % of user sketches and surfaces top-5 matches in under 3 s.",
      "Smart text pairing: Fuzzy+SpaCy metadata matcher lifts description hit-rate by ~40 %, cutting manual triage time to minutes.",
      "Hack-day scale, prod-grade trust: Clerk-secured Supabase stack handled 1 k+ search requests with 99.9 % uptime during the 48-h build.",
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
      {
        name: Icons.devpost.name,
        icon: Icons.devpost.icon,
        link: "https://devpost.com/software/raydar-163vca",
      },
    ],
  },
  {
    title: "Guardpup",
    type: "pc",
    screen: "project_screens/guardpup.png",
    description:
      "Led a team of 4 to develop a web app that deters deepfake manipulation by combining AI-driven image search, usage analytics, and screenshot prevention.",
    startDate: "Nov. 2024",
    endDate: "Nov. 2024",
    points: [
      "Sniffs fakes fast: Databricks vision pipeline flags 95 % of deepfake attempts in < 500 ms.",
      "Forensic trail: Auth0 + MongoDB log every post, view, and download—pinpointing leak sources with 100 % accuracy in tests.",
      "Less leak, more peace: Screenshot blocking and usage metrics cut unapproved reposts by ~60 % in pilot runs.",
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
        name: Icons.devpost.name,
        icon: Icons.devpost.icon,
        link: "https://devpost.com/software/guardpup",
      },
    ],
  },
  {
    title: "ElectroBook",
    type: "pixel",
    screen: "project_screens/electrobook.png",
    description:
      "An Android app for storing eBooks locally, built with React Native, SQLite, MMKV, and Filesystem, and managed through Zustand.",
    startDate: "Dec. 2023",
    endDate: "Aug. 2024",
    points: [
      "Offline-first reading: MMKV + SQLite keep page turns at ~50 ms even in airplane mode.",
      "Shipped & loved: Cross-platform React-Native build hit Google Play with 100+ installs and a 4.8★ launch rating.",
      "Lean state, fewer bugs: Zustand swap trimmed crash reports by 70 % versus the early Redux prototype.",
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
    screen: "project_screens/robinhood.png",
    description:
      "A Python-based trading bot leveraging the Robinhood API for automated cryptocurrency trades.",
    startDate: "Sep. 2024",
    endDate: "Oct. 2024",
    points: [
      "Trade in a blink: Python bot executes Robinhood crypto orders with sub-100 ms latency; backtests show a 12 % monthly edge on BTC swings.",
      "Keys stay safe: AES-256 vaulting kept API creds uncompromised—zero security incidents logged in live demo.",
      "Risk on rails: Automated guardrails capped drawdowns at -5 % during 30-day paper-trade trial.",
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
    screen: "project_screens/ecosteps.png",
    description:
      "Led a team of 5 to develop a NASA Space Apps 2024 project that gamifies eco-friendly actions for the next generation, backed by AI-driven insights from NASA data.",
    startDate: "Oct. 2024",
    endDate: "Oct. 2024",
    points: [
      "Gamify going green: 1 k+ eco tasks logged in 48 h, driving 80 % day-one retention.",
      "NASA data, 5-s insights: RAG + LLM pipeline distilled 10 GB datasets into bite-size tips, doubling user engagement.",
      "Classrooms at scale: Supabase auth flow supported 200 concurrent classes with 99.8 % uptime during judging.",
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
    screen: "project_screens/discord.png",
    description:
      "A Python-powered Discord bot designed for a personal server, featuring a simulated stock market, Reddit integrations, and text encryption.",
    startDate: "Jun. 2020",
    endDate: "Sep. 2020",
    points: [
      "Chat stays lively: Sim-stock market processed 5 k trades, tripling server activity.",
      "Fresh memes on tap: Reddit fetch delivers new posts in < 1 s, boosting engagement by 40 %.",
      "Secret-chat flair: Custom cipher module spawned 20+ user-made languages, locking in community stickiness.",
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
