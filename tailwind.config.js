/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#f7f4ef",
        secondary: "#3464ec",
        accent: "#1DD2FF",
        navActive: "#1DD2FF",
        "accent-dark": "#1AB4DB", // Added accent-dark color
        footer: "#F8F8F8", // Added accent-dark color
      },
      screens: {
        xs: "360px",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
};
