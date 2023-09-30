import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    colors: {
      scarlet: {
        "50": "#fff1f0",
        "100": "#ffe0dd",
        "200": "#ffc5c0",
        "300": "#ff9d94",
        "400": "#ff6557",
        "500": "#ff3523",
        "600": "#ff1500",
        "700": "#d71200",
        "800": "#b11103",
        "900": "#92150a",
        "950": "#500700",
      },
      zinc: {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b",
        "950": "#09090b",
      },
    },
    extend: {},
  },
  plugins: [],
};
export default config;