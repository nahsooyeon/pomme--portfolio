import type { Config } from "tailwindcss";

const SpacingObject = Object.fromEntries(Array.from({ length: 328 }, (_, i) => [`${i}`, `${i * 4}px`]));

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      spacing: SpacingObject,
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
