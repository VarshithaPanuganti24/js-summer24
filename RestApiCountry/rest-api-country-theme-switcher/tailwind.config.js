/** @type {import('tailwindcss').Config} */
export default {
    
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Optional: Add custom colors here if you want to use class utilities
        lightBg: '#ffffff',
        darkBg: '#1f2937',     // custom dark background
        lightText: '#1f2937',  // gray-800
        darkText: '#f9fafb',   // gray-50
        inputLight: '#f3f4f6', // gray-100
        inputDark: '#374151',  // gray-700
    },
  },
  plugins: [],
};