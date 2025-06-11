/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#16733E", // Primary Brand Color
        secondary: "#364CA1", // Secondary Brand Color
      },
    },
  },
  plugins: [],
};
