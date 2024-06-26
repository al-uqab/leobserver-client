import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        md: "960px",
        lg: "960px",
        xl: "960px",
        "2xl": "960px",
      },
    },
    extend: {
      colors: {
        selection: {
          background: "#6ee7b7",
          text: "#000000",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        "444": "1rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        "::selection": {
          "background-color": "var(--tw-selection-background)",
          color: "var(--tw-selection-text)",
        },
      });
    }),
  ],
  variants: {
    extend: {
      translate: ["group-hover", "hover"],
    },
  },
};
export default config;
