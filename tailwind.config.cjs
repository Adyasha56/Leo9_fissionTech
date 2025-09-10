/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", 
  theme: {
    extend: {
      colors: {
        primary: "#0f172a", // dark navy
        accent: "#7c3aed",  // violet
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"], 
      },
    },
  },
  plugins: [],
};
