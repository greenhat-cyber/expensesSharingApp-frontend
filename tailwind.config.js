/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#6528F7",
        "secondary": "#111",
      },
      fontFamily:{
        primary: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}