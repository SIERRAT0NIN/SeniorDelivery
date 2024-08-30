/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF8343",
        secondary: "#F1DEC6",
        accent: "#179BAE",
        neutral: "#4158A6",
      },
    },
  },

  darkMode: "class",
  plugins: [nextui()],
};
