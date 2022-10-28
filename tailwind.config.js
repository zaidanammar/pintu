/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        secondary: '#979797',
        neutral: '#f1f1f1',
        softBlue: '#DBE9FE',
        hardBlue: '#0A50E2',
      },
      fontFamily: {
        heading: ['Neue Haas Grotesk Display Pro', 'sans-serif'],
        text: ['Inter', 'sans-serif'],
      },
      container: {
        screens: {
          lg: '1280px',
        },
      },
    },
  },
  plugins: [],
}
