import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
      screens: {
        "2xl": "1350px",
      },
    },
    extend: {
      colors: {
        foreground: "#1b47fa",
        foregroundDark: "white",
        background: "white",
        secondaryBackground: "#F9FAFF",
        backgroundDark: "#090E34",
        secondaryBackgroundDark: "#0B113A",
        dropMenu: "#E7ECFF",
        dropMenuDark: "#1D2144",
        text: "#090E34",
        textDark: "white",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
