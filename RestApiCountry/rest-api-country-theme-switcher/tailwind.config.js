/** @type {import('tailwindcss').Config} */
export default {
  
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
          white: "hsl(var(--white))",
          backgroundLightGray: "hsl(var(--background-light-gray))",
          darkGray: "hsl(var(--dark-gray))",
          backgroundDarkBlue: "hsl(var(--background-dark-blue))",
          backgroundDarkMode: "hsl(var(--background-dark-mode))",
          headerBorder: "hsl(var(--header-border))",
  
          // Defaults that might change based on theme
          background: "hsl(var(--background))",
          text: "hsl(var(--text))",
        },
        fontSize: {
          verySmall: "var(--very-small)",
          small: "var(--small)",
          medium: "var(--medium)",
          large: "var(--large)",
          veryLarge: "var(--very-large)",
        },
       
      },
    },
    plugins: [],
  } 