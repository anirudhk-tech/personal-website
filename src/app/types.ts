import React from "react";

export interface Project {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  points: string[];
  icons: Icon[];
  externalLinks: Link[];
  screen: string;
  type: "pixel" | "iphone" | "pc";
}

export interface Experience {
  title: string;
  responsibilities: string[];
  startDate: string;
  endDate: string;
  company: string;
  location: string;
  icons: Icon[];
  type: "work" | "self-employed" | "association";
  externalLinks: Link[] | null;
}

export interface Icon {
  name: string;
  icon: React.ReactElement;
  link: string | null;
}

export interface Link {
  name: string;
  icon: React.ReactElement;
  link: string | null;
}

export interface Skill {
  icon: React.ReactElement;
  type: string;
  name: string;
  link: string | null;
}

export interface Course {
  short: string;
  long: string;
  description: string;
  type: string;
}

export interface Hobby {
  name: string;
  icon: React.ReactElement;
  description: string;
  other?: string;
}

export interface Contact {
  content: string;
  icon: React.ReactElement;
  link: string | null;
}
