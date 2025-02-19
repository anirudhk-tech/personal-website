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
