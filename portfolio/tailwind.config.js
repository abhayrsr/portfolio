/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'mobile' : '360px',
      'tablets' : '768px',
      'laptop' : '1024px',
    },
    extend: {
      fontFamily: {
        ubuntu: ['"Ubuntu", sans-serif', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

