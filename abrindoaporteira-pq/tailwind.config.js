/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../src/**/*.{html,js}",
    "*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#012718',
        'secondary': '#00A91F',
        'tertiary': '#EFFDEBCC',

      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
    },
  },
  },
  plugins: [

    ]
}

