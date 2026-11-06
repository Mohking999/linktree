/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          DEFAULT: '#EFB38F',
          light: '#F7CBB0',
          hover: '#F4C09E',
          dark: '#DB9B73',
          border: '#E2A177',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        arabic: ['"Cairo"', '"Noto Naskh Arabic"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'paper': '0 4px 15px -2px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(239, 179, 143, 0.2)',
        'paper-hover': '0 10px 25px -4px rgba(0, 0, 0, 0.35), 0 4px 10px rgba(239, 179, 143, 0.3)',
      },
    },
  },
  plugins: [],
}
