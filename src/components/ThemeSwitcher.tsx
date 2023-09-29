"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";


export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    setTheme('dark')
  }, []);

  if (!mounted) {
    return null;
  }

  return (
      <div className = "toggle-switch" >
        <label className="toggle-label">
          <input type = 'checkbox' className="toggle-input"/>
            <span className = 'slider'  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}></span>
        </label>
      </div>
  );
};