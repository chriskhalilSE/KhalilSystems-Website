/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05070f",
      },
      boxShadow: {
        glowBlue: "0 0 0 1px rgba(96,165,250,0.20), 0 10px 30px rgba(59,130,246,0.12)",
        glowAmber: "0 0 0 1px rgba(251,191,36,0.20), 0 10px 30px rgba(245,158,11,0.12)",
      },
    },
  },
  plugins: [],
};
