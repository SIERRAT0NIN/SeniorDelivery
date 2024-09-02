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
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #FF8343, #F1DEC6)  ",
        "gradient-primary-horizontal":
          "background-image: linear-gradient(to bottom, #ffffff, #fefcfe, #fff9fb, #fff6f6, #fff3ef, #fee2d6, #fbd2bb, #f4c3a0, #eb9f71, #e07a48, #d44f23, #c70000)",
        "gradient-accent": "linear-gradient(135deg, #179BAE, #4158A6)",
      },
    },
    fontFamily: {
      Lobster: ["Lobster"],
      PlayfairDisplay: ["Playfair Display"],
      sans: ["Roboto", "sans-serif"], // Add your Google font here
      custom: ["CustomFont", "sans-serif"], // Add your local custom font here
    },
  },

  darkMode: "class",
  plugins: [nextui()],
};
