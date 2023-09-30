import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { ThemeProvider } from "@/app/theme-provider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "New Website Next",
  description: "Created by Meriç Lomlu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let switchThemeDuration = 1;
  return (
    <html lang="en">
      <body
        className={`${inter.className} dynamic-theme ${switchThemeDuration}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main>
            <Navbar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}