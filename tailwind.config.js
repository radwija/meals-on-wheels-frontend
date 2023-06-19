/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f7f4ef",
        secondary: "#040d34",
        accent: "#1DD2FF",
        "accent-dark": "#1AB4DB", // Added accent-dark color
      },
    },
  },
  plugins: [],
};
