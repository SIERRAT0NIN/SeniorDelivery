// /** @type {import('tailwindcss').Config} */
// const { nextui } = require("@nextui-org/react");

// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#FF8343",
//         secondary: "#F1DEC6",
//         accent: "#179BAE",
//         neutral: "#4158A6",
//       },
//       backgroundImage: {
//         "gradient-primary": "linear-gradient(135deg, #FF8343, #F1DEC6)  ",
//         "gradient-primary-horizontal":
//           "background-image: linear-gradient(to bottom, #ffffff, #fefcfe, #fff9fb, #fff6f6, #fff3ef, #fee2d6, #fbd2bb, #f4c3a0, #eb9f71, #e07a48, #d44f23, #c70000)",
//         "gradient-accent": "linear-gradient(135deg, #179BAE, #4158A6)",
//       },
//     },
//     fontFamily: {
//       Lobster: ["Lobster"],
//       PlayfairDisplay: ["Playfair Display"],
//       sans: ["Roboto", "sans-serif"], // Add your Google font here
//       custom: ["CustomFont", "sans-serif"], // Add your local custom font here
//     },
//   },

//   darkMode: "class",
//   plugins: [nextui()],
// };
/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  layout: {
    dividerWeight: "1px", // h-divider the default height applied to the divider component
    disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
    fontSize: {
      tiny: "0.75rem", // text-tiny
      small: "0.875rem", // text-small
      medium: "1rem", // text-medium
      large: "1.125rem", // text-large
    },
    lineHeight: {
      tiny: "1rem", // text-tiny
      small: "1.25rem", // text-small
      medium: "1.5rem", // text-medium
      large: "1.75rem", // text-large
    },
    radius: {
      small: "8px", // rounded-small
      medium: "12px", // rounded-medium
      large: "14px", // rounded-large
    },
    borderWidth: {
      small: "1px", // border-small
      medium: "2px", // border-medium (default)
      large: "3px", // border-large
    },
  },
  theme: {
    light: {
      layout: {
        hoverOpacity: 0.8, //  this value is applied as opacity-[value] when the component is hovered
        boxShadow: {
          // shadow-small
          small:
            "0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
          // shadow-medium
          medium:
            "0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
          // shadow-large
          large:
            "0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
        },
      },
    },
    dark: {
      layout: {
        hoverOpacity: 0.9, //  this value is applied as opacity-[value] when the component is hovered
        boxShadow: {
          // shadow-small
          small:
            "0px 0px 5px 0px rgb(0 0 0 / 0.05), 0px 2px 10px 0px rgb(0 0 0 / 0.2), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
          // shadow-medium
          medium:
            "0px 0px 15px 0px rgb(0 0 0 / 0.06), 0px 2px 30px 0px rgb(0 0 0 / 0.22), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
          // shadow-large
          large:
            "0px 0px 30px 0px rgb(0 0 0 / 0.07), 0px 30px 60px 0px rgb(0 0 0 / 0.26), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
        },
      },
    },
    extend: {
      colors: {
        primary: "#FF8343",
        secondary: "#F1DEC6",
        accent: "#179BAE",
        neutral: "#4158A6",
        error: "#FF0000",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #FF8343, #F1DEC6)",
        "gradient-primary-horizontal":
          "linear-gradient(to right, #FF8343, #F1DEC6)",
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
