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
