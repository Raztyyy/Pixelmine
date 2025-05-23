/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#629D71", // Primary Brand Color
        secondary: "#364CA1", // Secondary Brand Color
      },
    },
  },
  plugins: [],
};
