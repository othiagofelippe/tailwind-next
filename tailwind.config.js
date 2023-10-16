/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(10rem, 20rem) 1fr',
      },
    },
  },
  plugins: [],
}
