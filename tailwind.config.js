/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ['Raleway', 'sans-serif'],
      secondary: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'theme-primary': '#000064',
        'theme-secondary': '#00ffff',
        'theme-tertiary': '#197278',
      },
    }
  },
  plugins: [],
}
