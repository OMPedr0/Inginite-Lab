/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl:24,
      '2xl': 32,
    },

    colors: {
      'black':'#000',
      'white':'#fff',

      'grey-900': '#121214',
      'grey-800': '#202024',
      'grey-400': '#7c7c8A',
      'grey-200': '#C4C4CC',
      'grey-100': '#E1E1E6',

      'cyan-500': '#45C9E5',
      'cyan-800': '#0684CB'
    },

    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif '
      }
    },
  },
  plugins: [],
}
