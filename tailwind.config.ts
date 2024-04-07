import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        accent: "#0968c6",
        darkest: "#303440",
        dark: "#4A536D",
        mid: "#7A87AB",
        light: "#D4D4D8",
        lightest: "#FFFFFF",
      },
      fontFamily: {
        display: ["articulat-heavy-cf", "sans-serif"],
        body: ["articulat-cf", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
