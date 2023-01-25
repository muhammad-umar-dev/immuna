/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  theme: {
    fontFamily: {
      'display': ['Inter'],
      'table-risk': ['Lato']
    },

    colors: {
      'gray': ['#D1D1D1'],
      'gray-light': ['#EFEFEF'],
      'gray-dark': ['#4D4D4D'],
      'gray-font': ['#707070'],
      'gray-darker': ['#353535'],
      'gray-page': ['#F3F3F3'],
      'background-blue': ['#F7FBFF'],
      'background-gray': ['#F8F8F8'],
      'gray-box': ['#F5F5F5'],
      'icon-gray': ['#4D4D4D'],
      'white': ['#FFFFFF'],
      'blue': ['#1D7DEA'],
      'blue-medium': ['#CBE1FF'],
      'blue-lighter': ['#E0EEFF'],
      'blue-light': ['#E0E7ED'],
      'blue-table': ['#F4F9FF'],
      'gray-border': ['#DCDCDC'],
      'green-btn': ['#28CA0D26'],
      'green-text': ['#18A002'],
      'red-btn': ['#CA0D0D33'],
      'red-text': ['#C92A2A'],
      'yellow-btn': ['#F8FFA880'],
      'yellow-text': ['#C7B40E'],
      'shadow': ['#4A4A4A12']
    },
    extend: {
      dropShadow: {
        'md': '0px 1px 10px 0px rgba(74, 74, 74, 0.07)',
        'lg': '0px 2px 10px 0px rgba(132,132,132,0.07)',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '7': 'repeat(3, 1fr) 3fr repeat(2, 1fr) 2fr',
      }

    },
  },
  plugins: [],
}
