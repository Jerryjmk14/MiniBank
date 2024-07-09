/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-primary": "#01051e",
        "color-secondary-light": "#020736",
        "color-primary-dark": "#010417",
        "color-secondary": "#FF7d3b",
        "color-gray": "#333",
        "color-white": "#fff",
        "color-blure": "#AA27DF",
      }
    },
    
  },
  plugins: [],
}

