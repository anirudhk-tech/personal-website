import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/montserrat";
import "@fontsource/orbitron";
import { ThemeWrapper } from "@/themeWrapper";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Kuppili",
  description: "My corner of the web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeWrapper>
      <html lang="en">
        <body>{children}</body>
        <GoogleAnalytics gaId="G-GW2X2VVGD6" />
      </html>
    </ThemeWrapper>
  );
}
