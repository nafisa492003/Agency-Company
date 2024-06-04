/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth : {
        container :"1440px",
        },
      fontFamily: {
        'dmSans': ['"DM Sans"', "sans-serif"],
      },
      backgroundImage: theme => ({
        'custom-gradient': 'linear-gradient(to right, #FE651B, #FFAA52)',
      }),
    },
  },
  plugins: [],
}

