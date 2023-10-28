/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EF2E1F",
        secondary: "#0053A5",
      },
      fontSize: {
        veryBig: "5rem",
        likeBig: "3.5rem",
        big: "3rem",
        medium: "2.5rem",
        small: "2rem",
        tiny: "1.5rem",
      },
    },
  },
  plugins: [],
};
