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
        darkBg: "#b9ff00",
        darkComponents: "#0a0c01",
        darkHeading: "#5f27bd",
        darkContrastText: "#0a0c01",
      },
      backgroundImage: {
        buttonStyle: "linear-gradient(to right, #0a0c01, #5F27BD)",
        firstGradient: "linear-gradient(to right, #ff00cc, #333399)",
        secondGradient: "linear-gradient(to right, #bdc3c7, #fffc00)",
        thirdGradient: "linear-gradient(to right, #00c9ff, #92fe9d)",
        fourthGradient: "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)",
        fifthGradient: "linear-gradient(to right, #232526, #414345);",
      },
    },
  },
  plugins: [],
};
