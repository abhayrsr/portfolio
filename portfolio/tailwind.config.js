/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'sm': '400px',
      'mobile' : '480px',
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

