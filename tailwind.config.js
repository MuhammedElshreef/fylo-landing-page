/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      }
    },
    extend: {
      fontFamily: {
        'Raleway': ['Raleway', "sans-serif"],
        'Open-Sans': ['Open Sans', "sans-serif"]
      }
    },
  },
  plugins: [],
}

