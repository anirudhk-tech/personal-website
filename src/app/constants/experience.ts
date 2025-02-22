import { Experience } from "../types";
import { Icons } from "./icons";

export const Experiences: Experience[] = [
  {
    title: "Fullstack Developer",
    type: "work",
    company: "Student Affairs of Technology at UIC",
    responsibilities: [
      "Develop robust full-stack websites for college use under UIC’s Student Affairs Web service.",
      "Collaborate in a hybrid environment for quick feedback and deployment cycles.",
      "Work with ASP.NET and C#, along with a range of modern development tools.",
    ],
    location: "Chicago, IL, USA",
    startDate: "Sept. 2, 2024",
    endDate: "Present Day",
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
    ],
  },
  {
    title: "Mobile Developer",
    type: "self-employed",
    company: "Helix (Associated with Coffee Logic LLC)",
    startDate: "Sep. 2024",
    endDate: "Present",
    location: "Remote",
    responsibilities: [
      "Created a full-stack metric tracking app for Coffee Logic LLC, featuring interactive graphs and real-time metric sharing.",
      "Implemented core features, including comparing multiple graphs, connecting users to share metrics, and accurate time zone adaptation.",
      "Leveraged React Native with D3 and Reanimated on the frontend, and Supabase on the backend to securely store user data.",
      "Focused on a clean, user-friendly interface to ensure an effortless experience.",
    ],
    icons: [],
  },
  {
    title: "Co-Founder",
    type: "self-employed",
    company: "Coffee Logic LLC",
    startDate: "Sep. 2024",
    endDate: "Present",
    location: "Remote",
    responsibilities: [
      "Cofounded a software development company with a partner in Georgia.",
      "Oversaw product development lifecycles, from concept to deployment.",
      "Led strategic planning, client outreach, and business development in a fast-paced startup environment.",
    ],
    icons: [],
  },
  {
    title: "ACM Group Founder",
    type: "association",
    company: "Association of Computing Machinery (ACM) @ UIC",
    startDate: "Jun. 2024",
    endDate: "Present",
    location: "University of Illinois Chicago College of Engineering · On-site",
    responsibilities: [
      "Founded and lead the ACM Mobile Development group, uniting students to learn and grow as app developers.",
      "Coordinate workshops, projects, and meetings aimed at rapidly improving coding skills and publishing apps.",
      "Serve as the primary organizer and mentor, fostering a collaborative environment for skill-sharing and peer learning.",
    ],
    icons: [],
  },
  {
    title: "Software Intern",
    type: "work",
    company: "Quad City Tennis Club (Internship)",
    startDate: "May 2023",
    endDate: "Aug 2023",
    location: "Moline, IL, United States · On-site",
    responsibilities: [
      "Assisted in implementing new backend software alongside a team of professionals.",
      "Gained hands-on experience with database organization, testing, and real-time troubleshooting.",
      "Collaborated with international stakeholders in Spain, expanding professional communication skills.",
    ],
    icons: [],
  },
];
