/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
      extend: {
        fontFamily: {
          nunito: ['"Nunito Sans"', 'sans-serif'],
        },
        colors: {
          white: 'hsl(0, 0%, 100%)',
          'background-light-gray': 'hsl(0, 0%, 98%)',
          'background-dark-mode': 'hsl(209, 23%, 22%)',
          'background-dark-blue': 'hsl(207, 26%, 17%)',
          'dark-gray': 'hsl(0, 0%, 52%)',
          'header-border': 'hsl(0, 0%, 86%)',
        },
        fontSize: {
          'very-sm': '14px',
          sm: '16px',
          base: '18px',
          lg: '24px',
          xl: '32px',
        },
      },
    },
    plugins: [],
  } 