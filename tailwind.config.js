/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotexsk: ['"Text Founder Grotexsk X-cond Sm Semi Bold"','Roboto', 'sans-serif'],
        montreal: ['Neue_Montreal_Regular','Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

