import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const SpacingObject = Object.fromEntries(Array.from({ length: 328 }, (_, i) => [`${i}`, `${i * 4}px`]));
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      spacing: SpacingObject,
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
      backgroundImage: {
        profile: "url('../public/nahsooyeon.jpg')",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          50: "#F8EEEA",
          100: "#EED8CF",
          200: "#E6C4B6",
          300: "#DDB19F",
          400: "#D59E88",
          500: "#CD8A70",
          600: "#C57759",
          700: "#BC6442",
          800: "#A4583A",
          900: "#8D4B31",
        },
        secondary: {
          100: "#EED8CF",
          200: "#EDD2CE",
          300: "#EDCED0",
          400: "#EDCED5",
          500: "#EDCEDB",
          600: "#EDCEE0",
          700: "#EDCEE5",
          800: "#EDCEEB",
        },
        tertiary: {
          100: "#",
          200: "#",
          300: "#",
          400: "#",
          500: "#",
          600: "#",
          700: "#",
          800: "#",
          900: "#",
        },
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
    },
  },
  plugins: [],
};

export default config;
