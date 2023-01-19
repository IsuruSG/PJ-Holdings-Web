const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        cookie: ['var(--font-cookie)', ...fontFamily.sans],
        righteous: ['var(--font-righteous)', ...fontFamily.sans],
        inter: ['var(--font-inter)', ...fontFamily.sans]
      },
      colors: {
        yellow: {
          450: "#F3A904"
        },
        gray: {
          150: "#C1C1C1",
          350: "#565656",
          850: "#1A1A1A"
        }
      }
    },
  },
  plugins: [],
};
