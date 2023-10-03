import "./globals.css";
import type { Metadata } from "next";
import { Inter, Signika_Negative } from "next/font/google";
import React from "react";
import Navbar from "@/components/Navbar";
import StyledComponentsRegistry from "../../lib/AntdRegistry";
import { ConfigProvider } from "antd";
import theme from "../../theme/themeConfig";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const signika_negative = Signika_Negative({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-signika-negative",
});

export const metadata: Metadata = {
  title: "New Website Next",
  description: "Created by Meriç Lomlu",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${signika_negative.className} dynamic-theme`}
      >
        <ConfigProvider theme={theme}>
          <StyledComponentsRegistry>
            <Navbar />
            {children}
          </StyledComponentsRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}