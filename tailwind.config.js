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
        // darkBg: "#0a0c01",
        darkBg: "#131313",
        darkComponents: "#1913a6",
        darkHeading: "#D8FFF7",
        darkContrastText: "#ffffff",
        lightBg: "#3cd4fa",
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
