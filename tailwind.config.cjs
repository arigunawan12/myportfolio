/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Great Vibes"],
    },
    colors: {
      "san-juan": {
        600: "#2d748d",
        800: "#2C5364",
        900: "#203A43",
        950: "#0F2027",
      },
      white: "#FFF",
    },
  },
  plugins: [],
};
