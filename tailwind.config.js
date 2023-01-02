/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'display': ['Inter'],
    },
    colors: {
      'gray': ['#D1D1D1'],
      'gray-light': ['#EFEFEF'],
      'gray-dark': ['#4D4D4D'],
      'gray-font': ['#707070'],
      'white': ['#FFFFFF'],
      'blue': ['#1D7DEA'],
      'blue-medium': ['#CBE1FF'],
      'blue-lighter': ['#E0EEFF'],
      'blue-light': ['#E0E7ED'],
      'gray-border': '[#DCDCDC]'
    },
    boxShadow: {
      'md': '0px 0px 10px 0px rgba(0, 0, 0, 0.07)'

    },
    extend: {},
  },
  plugins: [],
}
