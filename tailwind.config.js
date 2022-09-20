/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0a0c01",
        darkComponents: "#5F27BD",
        darkHeading: "#D8FFF7",
        darkContrastText: "#ffffff",
        lightBg: "#ffd96b",
        lightComponents: "#0a0c01",
        lightHeading: "#5f27bd",
        lightContrastText: "#0a0c01",
      },
      backgroundImage: {
        buttonStyle: "linear-gradient(to right, #0a0c01, #5F27BD)",
      },
    },
  },
  plugins: [],
};
