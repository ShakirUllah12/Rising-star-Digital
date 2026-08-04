/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#241638',
          accent: '#7C5CFC',
          light: '#F5F3FF',
        },
      },
    },
  },
  plugins: [],
}
