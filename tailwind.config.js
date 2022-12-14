/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'visby-400': ['VisbyCF400', 'sans-serif'],
      'visby-500': ['VisbyCF500', 'sans-serif'],
      'visby-600': ['VisbyCF600', 'sans-serif'],
      'visby-700': ['VisbyCF700', 'sans-serif'],
      'visby-800': ['VisbyCF800', 'sans-serif'],
      'zuume-700': ['Zuume700', 'sans-serif'],
    },
    extend: {
      colors: {
        ipxRed: '#F61354',
        ipxBlue: '#3E67FF',
        ipxPink: '#E47298',
      },
    },
  },
  plugins: [],
};
