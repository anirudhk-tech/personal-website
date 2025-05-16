import { Experience } from "../types";
import { Icons } from "./icons";

export const Experiences: Experience[] = [
  {
    title: "Fullstack Developer",
    type: "work",
    company: "Student Affairs of Technology at UIC",
    responsibilities: [
      "Develop robust full-stack websites for college use with React and Node.js.",
      "Maintain and deploy on CentOS and Red Hat VMs.",
      "Work with ASP.NET, C#, PHP backends along with MSSQL and Oracle databases.",
    ],
    location: "Chicago, IL, USA",
    startDate: "Sept. 2, 2024",
    endDate: "Present Day",
    icons: [
      {
        name: Icons.react.name,
        icon: Icons.react.icon,
        link: Icons.react.link,
      },
      {
        name: Icons.redhat.name,
        icon: Icons.redhat.icon,
        link: Icons.redhat.link,
      },
      {
        name: Icons.centos.name,
        icon: Icons.centos.icon,
        link: Icons.centos.link,
      },
      {
        name: Icons.node.name,
        icon: Icons.node.icon,
        link: Icons.node.link,
      },
      {
        name: Icons.c_sharp.name,
        icon: Icons.c_sharp.icon,
        link: Icons.c_sharp.link,
      },
      {
        name: Icons.dot_net.name,
        icon: Icons.dot_net.icon,
        link: Icons.dot_net.link,
      },
      {
        name: Icons.php.name,
        icon: Icons.php.icon,
        link: Icons.php.link,
      },
      {
        name: Icons.mssql.name,
        icon: Icons.mssql.icon,
        link: Icons.mssql.link,
      },
      {
        name: Icons.oracle.name,
        icon: Icons.oracle.icon,
        link: Icons.oracle.link,
      },
    ],
    externalLinks: null,
  },
  {
    title: "Mobile Developer",
    type: "self-employed",
    company: "Helix (Associated with Coffee Logic LLC)",
    startDate: "Sep. 2024",
    endDate: "Oct. 2024",
    location: "Remote",
    responsibilities: [
      "Created a full-stack metric tracking app for Coffee Logic LLC.",
      "Implemented low level graphs with D3, attractive UI with React Native Paper, and real-time data with Supabase.",
      "Developed metric sharing through real time updates and push notifications.",
      "Focused on a clean, user-friendly interface to ensure an effortless experience.",
    ],
    icons: [
      {
        name: Icons.reactnative.name,
        icon: Icons.reactnative.icon,
        link: Icons.reactnative.link,
      },
      {
        name: Icons.d3.name,
        icon: Icons.d3.icon,
        link: Icons.d3.link,
      },
      {
        name: Icons.supabase.name,
        icon: Icons.supabase.icon,
        link: Icons.supabase.link,
      },
      {
        name: Icons.reactnativepaper.name,
        icon: Icons.reactnativepaper.icon,
        link: Icons.reactnativepaper.link,
      },
      {
        name: Icons.expo.name,
        icon: Icons.expo.icon,
        link: Icons.expo.link,
      },
      {
        name: Icons.figma.name,
        icon: Icons.figma.icon,
        link: Icons.figma.link,
      },
    ],
    externalLinks: null,
  },
  {
    title: "Co-Founder",
    type: "self-employed",
    company: "Coffee Logic LLC",
    startDate: "Sep. 2024",
    endDate: "Apr. 2025",
    location: "Remote",
    responsibilities: [
      "Cofounded a software development company with a partner in Georgia.",
      "Oversaw and implemented product development lifecycle, from concept to deployment.",
      "Led strategic planning, client outreach, and business development in a fast-paced startup environment.",
    ],
    icons: [
      {
        name: Icons.startup.name,
        icon: Icons.startup.icon,
        link: Icons.startup.link,
      },
      {
        name: Icons.marketing.name,
        icon: Icons.marketing.icon,
        link: Icons.marketing.link,
      },
      {
        name: Icons.management.name,
        icon: Icons.management.icon,
        link: Icons.management.link,
      },
    ],
    externalLinks: null,
  },
  {
    title: "ACM Group Founder and Lead",
    type: "association",
    company: "Association of Computing Machinery (ACM) @ UIC",
    startDate: "Jun. 2024",
    endDate: "Present Day",
    location: "University of Illinois Chicago College of Engineering · On-site",
    responsibilities: [
      "Founded and led the ACM Mobile Development group, uniting students to learn and grow as app developers.",
      "Coordinated workshops, projects, and meetings aimed at publishing apps.",
      "Served as the primary organizer and mentor, fostering a collaborative environment.",
    ],
    icons: [
      {
        name: Icons.management.name,
        icon: Icons.management.icon,
        link: Icons.management.link,
      },
      {
        name: Icons.flutter.name,
        icon: Icons.flutter.icon,
        link: Icons.flutter.link,
      },
      {
        name: Icons.reactnative.name,
        icon: Icons.reactnative.icon,
        link: Icons.reactnative.link,
      },
    ],
    externalLinks: null,
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
    icons: [
      {
        name: Icons.systems.name,
        icon: Icons.systems.icon,
        link: Icons.systems.link,
      },
    ],
    externalLinks: null,
  },
];
