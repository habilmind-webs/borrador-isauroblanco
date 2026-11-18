/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        marino: { DEFAULT: '#193547', 900: '#10242f', 700: '#24485f' },
        turquesa: { DEFAULT: '#0095a9', oscuro: '#007585', hondo: '#005f6b', claro: '#7fd3df' },
        claro: '#eef6f8',
        ambar: '#ffa503',
      },
      fontFamily: {
        titulo: ['Outfit', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
      maxWidth: { lectura: '70ch' },
      borderRadius: { tarjeta: '14px' },
      boxShadow: { suave: '0 4px 24px -8px rgba(25,53,71,0.18)' },
    },
  },
  plugins: [],
};
