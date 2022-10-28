/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
