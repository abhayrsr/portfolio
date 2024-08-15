/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['"Ubuntu", sans-serif', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

