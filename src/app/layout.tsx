"use client";
import "./globals.css";
import { Inter, Signika_Negative } from "next/font/google";
import React, { Suspense } from "react";
import { ThemeProvider } from "@/app/theme-provider";
import Navbar from "@/components/Navbar";
import { Provider } from "react-redux";
import { store } from "@/redux/store/store";
import Loading from "@/app/loading";

const inter = Inter({ subsets: ["latin"] });

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
        <Provider store={store}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Suspense fallback={<Loading />}>
              <Navbar />
              {children}
            </Suspense>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}