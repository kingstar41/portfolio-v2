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
        accent: "#55A0FF",
        darkest: "#1A1D25",
        dark: "#404756",
        mid: "#75819C",
        light: "#D6DCEB",
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
