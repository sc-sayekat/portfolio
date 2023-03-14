/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
        },
      },
      colors: {
        primary: '#F08E80',
      },
      backgroundImage: {
        doodle: "url('/assets/images/background-doodle.png')",
      },
      textColor: {
        primary: '#ffffff',
        secondary: '#94A1B2',
        link: '#D9BBFF',
        accent: '#F08E80',
      },
    },
  },
  plugins: [],
}
