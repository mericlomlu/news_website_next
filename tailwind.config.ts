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
      rose: {
        "50": "#fff3fd",
        "100": "#ffe6fe",
        "200": "#ffccfb",
        "300": "#ffa3f5",
        "400": "#ff6dee",
        "500": "#ff1fec",
        "600": "#e316cd",
        "700": "#bd0ea7",
        "800": "#9a0e87",
        "900": "#7e116d",
        "950": "#550048",
      },
      blueLagoon: {
        "50": "#e8fffd",
        "100": "#c6fffa",
        "200": "#94fff5",
        "300": "#4afff0",
        "400": "#00fff6",
        "500": "#00eafd",
        "600": "#00b8d3",
        "700": "#0092aa",
        "800": "#026e81",
        "900": "#075f72",
        "950": "#003f50",
      },
      pacificBlue: {
        "50": "#ebfffd",
        "100": "#cdfffd",
        "200": "#a1ffff",
        "300": "#60fdff",
        "400": "#18f0f8",
        "500": "#00d3de",
        "600": "#00abbd",
        "700": "#088596",
        "800": "#106a7a",
        "900": "#125867",
        "950": "#053b47",
      },
      cerulean: {
        "50": "#f0f9ff",
        "100": "#e0f3fe",
        "200": "#b9e8fe",
        "300": "#7cd7fd",
        "400": "#36c4fa",
        "500": "#0cadeb",
        "600": "#0099dd",
        "700": "#016ea3",
        "800": "#065d86",
        "900": "#0b4d6f",
        "950": "#07314a",
      },
      neonCarrot: {
        "50": "#fff8ed",
        "100": "#ffefd4",
        "200": "#ffdba8",
        "300": "#ffc171",
        "400": "#ff9933",
        "500": "#fe7e11",
        "600": "#ef6307",
        "700": "#c64808",
        "800": "#9d3a0f",
        "900": "#7e3110",
        "950": "#441606",
      },
      regentBlue: {
        "50": "#f3f7fb",
        "100": "#e3edf6",
        "200": "#cee1ef",
        "300": "#a1c7e0",
        "400": "#85b4d5",
        "500": "#689ac9",
        "600": "#5483bc",
        "700": "#4a70ab",
        "800": "#415c8c",
        "900": "#384d70",
        "950": "#263145",
      },
    },
    extend: {},
  },
  plugins: [],
};
export default config;