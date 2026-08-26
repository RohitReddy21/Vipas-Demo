/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#1ABC9C',
        'primary-dark': '#17a589',
        'primary-light': '#48c9b0',
        'secondary': '#003F5C',
        'secondary-dark': '#00304d',
        'secondary-light': '#104e6b',
        'accent': '#00A176',
        'accent-dark': '#008c65',
        'accent-light': '#0fb687',
        'gray-custom': '#4A4A4A',
        'gray-light': '#7A7A7A',
        'gray-lighter': '#ACACAC',
        'mint': '#E6F4F1',
        'success': '#34D399',
        'warning': '#FBBF24',
        'error': '#F87171',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};