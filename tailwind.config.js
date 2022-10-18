/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "brand-yellow": "#FACD66",
        "brand-black": "#1A1E1F",
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif']
      }
    },
  },
  plugins: [],
}
