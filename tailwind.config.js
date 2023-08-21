/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'east-bay': {
          DEFAULT: '#414C79',
          50: '#D9DCEA',
          100: '#CBD0E3',
          200: '#B1B8D5',
          300: '#96A0C7',
          400: '#7C88B9',
          500: '#6170AA',
          600: '#4F5D94',
          700: '#414C79',
          800: '#2D3555',
          900: '#1A1E30',
          950: '#10131E'
        },
          'prueba1': {
            DEFAULT: '#414C65',
            50: '#4F5D94'
        }  
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
