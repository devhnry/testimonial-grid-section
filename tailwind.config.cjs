/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '640px',
      md: '740px',
      lg: '1200px',
      xl: '1400px',
    },
    fontFamily: {
      main: ['Barlow Semi Condensed', 'sans-serif'],
    },

    extend: {
      colors: {
        'primary-900': 'hsl(219, 29%, 14%) ',
        'primary-700': 'hsl(217, 19%, 35%)',
        'primary-400': 'hsl(263, 55%, 52%)',

        'neutral-200': 'hsl(0, 0%, 81%)',
        'neutral-100': 'hsl(210, 46%, 95%) ',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: '13px' },
        'tailwindCSS.rootFontSize':13,
      });
    }),
  ],
};
