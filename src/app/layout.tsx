import "./globals.css";
import type { Metadata } from "next";
import { Inter, Signika_Negative } from "next/font/google";
import React from "react";
import { ThemeProvider } from "@/app/theme-provider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "New Website Next",
  description: "Created by Meriç Lomlu",
};

const signika_negative = Signika_Negative({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-signika-negative",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let switchThemeDuration = 1;
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${signika_negative.className} dynamic-theme ${switchThemeDuration}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}