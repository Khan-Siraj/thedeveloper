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
        "about-pattern":"url('/images/about-me-bg.png')",
        "skills-pattern":"url('/images/skills-bg.png')"
      },
      backgroundColor:{
        "brand-1":"#12F7D6",
        "brand-2":"#98FAEC",
        "c-grey":"#43454D",
        "BG-1":"#292F36",
        "BG-2":"#1A1E23",
        "html":"#E54F26",
        "css":"#0C73B8",
        "js":"#E7A020",
        "react":"#28A9E0"
      },
      colors:{
        "brand-1":"#12F7D6",
        "brand-2":"#98FAEC",
        "c-grey":"#43454D",
        "BG-1":"#292F36",
        "BG-2":"#1A1E23",
        "html":"#E54F26",
        "css":"#0C73B8",
        "js":"#E7A020",
        "react":"#28A9E0"
      },
      borderColor:{
        "brand-1":"#12F7D6",
        "brand-2":"#98FAEC",
        "c-grey":"#43454D",
        "BG-1":"#292F36",
        "BG-2":"#1A1E23",
        "html":"#E54F26",
        "css":"#0C73B8",
        "js":"#E7A020",
        "react":"#28A9E0"
      }
    },
  },
  plugins: [],
};
export default config;
