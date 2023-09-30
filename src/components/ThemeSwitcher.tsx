"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Sun = require("react-feather/dist/icons/sun").default;
const Moon = require("react-feather/dist/icons/moon").default;
export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="rose-default-gradient absolute right-5 top-2 w-fit rounded-md border-2 p-2 duration-200 hover:scale-100 active:scale-100"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
};