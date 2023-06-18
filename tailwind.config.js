/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f7f4ef",
        secondary: "#040d34",
        accent: "#409fbf",
        "accent-dark": "#4092bf", // Added accent-dark color
      },
    },
  },
  plugins: [],
};
