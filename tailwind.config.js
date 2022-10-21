/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      padding: {
        DEFAULT: '1rem',
        lg: '0px',
      }
    },
    extend: {},
  },
  plugins: [],
}