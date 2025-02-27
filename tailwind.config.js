/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
          palanquin: ['Palanquin', 'sans-serif'],
          montserrat: ['Montserrat', 'sans-serif'],
      },
      
      colors: {
        'primary-orange': '#FF5722',
      }
    },
  },
  plugins: [
    
  ],
}

