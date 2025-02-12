"use client";

import { ThemeProvider } from "@mui/material";
import { theme } from "@/theme";
import React from "react";

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
