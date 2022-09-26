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
        lightBg: "#131313",
        lightComponents: "#5f27bd",
        lightHeading: "#D8FFF7",
        lightContrastText: "#ffffff",
        darkBg: "#3cd4fa",
        darkComponents: "#0a0c01",
        darkHeading: "#5f27bd",
        darkContrastText: "#0a0c01",
      },
      backgroundImage: {
        buttonStyle: "linear-gradient(to right, #0a0c01, #5F27BD)",
      },
    },
  },
  plugins: [],
};
