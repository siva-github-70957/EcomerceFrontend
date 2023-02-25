/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],

  theme: {
    extend: {
      colors: {
        primary: '#8CD0E3',
        secondary: '#F5EA77',
      },
      screens: {
        'xs': '300px', // min-width
      },
      boxShadow: {
        'below': '5px 5px 1px rgb(240,240,8)',
      }
    },
  },

  plugins: [],
}
