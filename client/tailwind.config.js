/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      // Use saffron as the primary color for the website
      primary: {
        50: "#fff8f0",
        100: "#fef3e6",
        200: "#fde0c2",
        300: "#fbcf9f",
        400: "#f9a957",
        500: "#f88310",
        600: "#e0750e",
        700: "#bc610b",
        800: "#974d09",
        900: "#7a3f07",
      },
      // Use white as the secondary color for the website
      secondary: {
        50: "#fdfdfe",
        100: "#fbfcfd",
        200: "#f7f9fb",
        300: "#f2f5f9",
        400: "#e9eff4",
        500: "#e0e8f0",
        600: "#c9d1db",
        700: "#a8aeb7",
        800: "#868b93",
        900: "#6d7179",
      },
      // Use green as the accent color for the website
      accent: {
        50: "#f3faf7",
        100: "#e7f6f0",
        200: "#c3e9d9",
        300: "#9fdcC2",
        400: "#56c194",
        500: "#0ea466",
        600: "#0d945b",
        700: "#0b7a4c",
        800: "#09603d",
        900: "#074f32",
      },
      // Use blue as the contrast color for the website
      contrast: {
        50: "#f4f9fe",
        100: "#e9f4fd",
        200: "#c9e3fa",
        300: "#a8d2f7",
        400: "#66b0f1",
        500: "#2490eb",
        600: "#2081d4",
        700: "#1b6ab0",
        800: "#15538c",
        900: "#114372",
      },
    },
    extend: {},
  },
  plugins: ['react-refresh'],
};
