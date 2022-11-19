/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
  
module.exports = {
  important: true,
  content: ['./docs/**/*.{md,html,js}','./build/**/*.{md,html,js}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      usual: ['usual', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        purple: {
          dark: '#352670',
          lighter: '#544E72',
          light: '#5379DA',
          lightest: '#E8E8F9',
          regular: '#787df2',
          tint: '#D8D5EE',
          new: '#413185',
        },
        red: '#F62958',
        gray: '#e5e6f0',
        brand: '#413185',
      },
      fontSize: {
        '1.75': '1.75rem',
        '2' : '2rem',
        '21': '1.3125rem',
        '38': '2.375rem',
      },
      spacing: {
        '15': '3.75rem',
      },
      borderRadius: {
        '5': '5px',
        '20': '1.25rem',
      },
      boxShadow: {
        'custom-black': '0 2px 25px rgba(0,0,0,0.1)',
      },
      lineHeight: {
        '61': '3.6875rem',
        '55': '3.3125rem',
      }
    }
  },
  plugins: [
    require("daisyui"),
  ]
}