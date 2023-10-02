/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'sans': ['Lato', 'sans-serif'],
      },
      colors: {
        verdeClaro: '#8AAA79',
        verdeOscuro: '#657153',
        cafeClaro: '#837569',
        grisFrOscuro:'#B7B6C2',
        grisFrClaro:'#D1D5DE',
      }

    },
  },
  plugins: [
],
}
