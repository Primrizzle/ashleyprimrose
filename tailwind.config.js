/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        leckerli: ['"Leckerli One"', "cursive"],
        spectral: ['"Spectral"', "serif"],
      },
    },
  },
  plugins: [],
};
