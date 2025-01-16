/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../src/**/*.{html,js}",
    "../abrindoaporteira-obg/**/*.{html,js}",
    "../abrindoaporteira-v1/**/*.{html,js}",
    "../abrindoaporteira-v2/**/*.{html,js}",
    "../abrindoaporteira-org/**/*.{html,js}",
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
        'roboto': ['Roboto',  'system-ui', 'sans-serif', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Open Sans', 'Helvetica Neue', 'Arial',],
    },
  },
  },
  plugins: [

    ]
}

