const colors = require('tailwindcss/colors')
  
module.exports = {
  important: true,
  content: ["./docs/**/*.{html,js,md}"],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      usual: ['usual', 'system-ui', 'sans-serif'],
    },
    colors: {
      teal: colors.teal,
      cyan: colors.cyan,
      purple: {
        dark: '#352670',
        lighter: '#544E72',
        light: '#5379DA',
      },
      red: '#F62958',
    },
    extend: {
      spacing: {
        '15': '3.75rem',
      },
      borderRadius: {
        '5': '5px',
        '20': '1.25rem',
      },
      boxShadow: {
        'black': '0 2px 25px rgba(0,0,0,0.1)',
      },
      fontSize: {
        '21': '1.3125rem',
        '38': '2.375rem',
      },
      lineHeight: {
        '61': '3.6875rem',
        '55': '3.3125rem',
      }
    }
  },
  plugins: [
  ]
}